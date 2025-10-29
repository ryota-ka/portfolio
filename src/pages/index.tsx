import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { IndexQuery } from '../../types/graphql-types';

import '../../static/style.css';
import {
  GitHubRepository,
  GitHubRepositoryCollection,
  BlogPost,
  BlogPostCollection,
  StravaActivity,
  StravaActivityCollection,
} from '../components';
import { differenceInYears, fromUnixTime } from 'date-fns/esm';

type Props = {
  data: IndexQuery;
};

const birthday = fromUnixTime(739378800); // 1993-06-07T00:00:00+0900
const now = new Date();
const age = differenceInYears(now, birthday);

export default ({ data }: Props) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#222222" />
      <link rel="stylesheet" href="//use.fontawesome.com/releases/v6.7.2/css/all.css" />
      <link rel="stylesheet" href="./style.css" />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Lato:300" />
      <title>Ryota Kameoka</title>
    </Helmet>
    <div id="photo">
      <div id="overlay"></div>
    </div>
    <h1>Ryota Kameoka</h1>
    <main>
      <section id="profile">
        <h2>profile</h2>
        <dl>
          <dt>
            <i className="fas fa-fw fa-birthday-cake"></i> born on
          </dt>
          <dd>Jun 7, 1993 (age {age})</dd>
          <dt>
            <i className="fas fa-fw fa-map-pin"></i> lives in
          </dt>
          <dd>Shinagawa, Tokyo, Japan</dd>
          <dt>
            <i className="fas fa-fw fa-building"></i> works for
          </dt>
          <dd>
            <a href="https://herp.co.jp/" target="_blank" rel="noopener">
              HERP, Inc.
            </a>{' '}
            (Lead engineer)
          </dd>
          <dt>
            <i className="fas fa-fw fa-graduation-cap"></i> educated at
          </dt>
          <dd>
            <a href="http://www.kyoto-u.ac.jp/" target="_blank" rel="noopener">
              Kyoto University
            </a>{' '}
            (Bachelor of Economics)
          </dd>
        </dl>
      </section>
      <section id="links">
        <h2>links</h2>
        <ul>
          <li>
            <i className="fab fa-fw fa-apple"></i>
            <a href="https://itunes.apple.com/profile/ryotakameoka" target="_blank" rel="noopener">
              Apple Music
            </a>
          </li>
          <li>
            <i className="fas fa-fw fa-envelope"></i>
            <a href="mailto:ok@ryota-ka.me" target="_blank" rel="noopener">
              E-mail
            </a>
          </li>
          <li>
            <i className="fab fa-fw fa-github"></i>
            <a href="https://github.com/ryota-ka" target="_blank" rel="noopener">
              GitHub
            </a>
            <GitHubRepositoryCollection>
              {data.github.viewer.pinnedItems.nodes.map(repo => (
                <GitHubRepository
                  name={repo.nameWithOwner}
                  url={repo.url}
                  description={repo.description}
                  primaryLanguage={repo.primaryLanguage?.name}
                  stars={repo.stargazerCount}
                  key={repo.id}
                />
              ))}
            </GitHubRepositoryCollection>
          </li>
          <li>
            <i className="fas fa-fw fa-rss"></i>
            <a href="https://blog.ryota-ka.me/" target="_blank" rel="noopener">
              Blog
            </a>
            <BlogPostCollection>
              {data.allFeedBlog.edges.map(({ node: post }) => (
                <BlogPost key={post.id} url={post.link} title={post.title} publishedAt={post.pubDate} />
              ))}
            </BlogPostCollection>
          </li>
          <li>
            <i className="fab fa-fw fa-instagram"></i>
            <a href="https://www.instagram.com/ryotakameoka/" target="_blank" rel="noopener">
              Instagram
            </a>
          </li>
          <li>
            <i className="fab fa-fw fa-keybase"></i>
            <a href="https://keybase.io/ryotakameoka" target="_blank" rel="noopener">
              Keybase
            </a>
          </li>
          <li>
            <i className="fab fa-fw fa-strava"></i>
            <a href="https://www.strava.com/athletes/ryota-ka" target="_blank" rel="noopener">
              Strava
            </a>
            <StravaActivityCollection>
              {data.strava.nodes
                .filter(activity => {
                  switch (activity.type) {
                    case 'Ride':
                    case 'VirtualRide':
                      return (activity.distance ?? 0) >= 20_000 || (activity.elevation ?? 0) >= 200;
                    case 'Walk':
                      return (activity.distance ?? 0) >= 10_000;
                    default:
                      return true;
                  }
                })
                .slice(0, 5)
                .map(activity => (
                  <StravaActivity
                    distance={activity.distance ?? null}
                    elevation={activity.elevation ?? null}
                    id={activity.id}
                    key={activity.id}
                    kudos={activity.kudos ?? 0}
                    name={activity.name ?? ''}
                    time={activity.time ?? 0}
                    type={activity.type ?? 'Workout'}
                  />
                ))}
            </StravaActivityCollection>
          </li>
          <li>
            <i className="fab fa-fw fa-x-twitter"></i>
            <a href="https://x.com/ryotakameoka" target="_blank" rel="noopener">
              X
            </a>
          </li>
        </ul>
      </section>
    </main>
  </>
);

export const query = graphql`
  query Index {
    allFeedBlog(limit: 5) {
      edges {
        node {
          id
          title
          link
          pubDate
        }
      }
    }

    github {
      viewer {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          nodes {
            ... on GitHub_Repository {
              id
              nameWithOwner
              stargazerCount
              description
              forkCount
              primaryLanguage {
                name
              }
              url
            }
          }
        }
      }
    }

    strava: allStravaActivity(sort: { start_date: DESC }, limit: 20) {
      nodes {
        elevation: total_elevation_gain
        distance
        id
        kudos: kudos_count
        name
        time: moving_time
        type: sport_type
      }
    }
  }
`;
