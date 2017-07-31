import * as Koa from 'koa';
import * as serve from 'koa-static';
import fetch from 'node-fetch';
import { DOMParser } from 'xmldom';
import { Repository } from '../GitHub/Repository';
import { Track } from '../Lastfm/Track';
import { BlogEntry } from '../HatenaBlog/BlogEntry';

const app = new Koa();

app.use(serve('public'));

app.use(async ctx => {
    switch (ctx.request.url) {
        case '/api/github/recent_repositories': {
            ctx.body = await fetchRecentRepositoriesFromGitHub(process.env.GITHUB_API_TOKEN || '');
            break;
        }
        case '/api/lastfm/recent_tracks': {
            ctx.body = await fetchRecentTracksFromLastfm(process.env.LASTFM_API_KEY || '');
            break;
        }
        case '/api/hatenablog/latest_entries': {
            ctx.body = await fetchLatestEntriesFromHatenablog();
            break;
        }
    }
}).listen(Number.parseInt(process.env.PORT || '') || 3000);

async function fetchRecentRepositoriesFromGitHub(apiToken: string): Promise<Repository[]> {
    const res = await fetch('https://api.github.com/users/ryota-ka/repos?sort=pushed', {
        headers: {
            Authorization: `token ${apiToken}`
        }
    });
    const json = await res.json();
    const repositories = json
        .filter((r: any) => !r.fork)
        .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5)
        .map((r: any) => ({
            name: r.full_name,
            url: r.html_url,
            stars: r.stargazers_count,
            forks: r.forks
        }));

    return repositories;
}

async function fetchRecentTracksFromLastfm(apiKey: string): Promise<Track[]> {
    const url = `http://ws.audioscrobbler.com/2.0?method=user.getrecenttracks&user=ryotakameoka&api_key=${apiKey}&format=json&limit=5&extended=1`;
    const res = await fetch(url);
    const json = await res.json() as any;

    const tracks = json.recenttracks.track
        .map((t: any) => ({
            name: t.name,
            artist: {
                name: t.artist.name,
                url: t.artist.url,
            },
            url: t.url,
            image: t.image[0]['#text'],
            loved: t.loved !== '0',
            timestamp: t.date ? Number(t.date.uts) : null,
        }));

    return tracks;
}

async function fetchLatestEntriesFromHatenablog(): Promise<BlogEntry[]> {
    const res = await fetch('http://ryota-ka.hatenablog.com/feed');
    const body = await res.text();
    const parser = new DOMParser();
    const dom = parser.parseFromString(body, 'text/xml');

    return Array.from(dom.getElementsByTagName('entry')).slice(0, 5).map(entry => ({
        title: entry.getElementsByTagName('title')[0].textContent || '',
        url: entry.getElementsByTagName('link')[0].attributes.getNamedItem('href').nodeValue || '',
        publishedAt: new Date(entry.getElementsByTagName('published')[0].textContent || ''),
    }));
}
