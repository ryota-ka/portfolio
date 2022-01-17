import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { IndexQuery } from '../../types/graphql-types';

import '../../static/style.css';
import { GitHubRepository, GitHubRepositoryCollection, BlogPost, BlogPostCollection } from '../components';
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
      <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.15.0/css/all.css" />
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
          <dd>Nakagyo, Kyoto, Japan</dd>
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
      <section id="skills">
        <h2>skills</h2>
        <ul>
          <li>Haskell</li>
          <li>TypeScript / JavaScript</li>
          <li>Cycle.js</li>
          <li>Amazon Web Services</li>
          <li>Kubernetes</li>
          <li>Ruby on Rails</li>
          <li>Ruby</li>
        </ul>
      </section>
      <section id="links">
        <h2>links</h2>
        <ul>
          <li>
            <i className="fab fa-fw fa-amazon"></i>
            <a href="http://www.amazon.co.jp/registry/wishlist/NCRDLUWP5AR5" target="_blank" rel="noopener">
              Amazon wishlist
            </a>
          </li>
          <li>
            <i className="fab fa-fw fa-apple"></i>
            <a href="https://itunes.apple.com/profile/ryotakameoka" target="_blank" rel="noopener">
              Apple Music
            </a>
          </li>
          <li>
            <i className="fab fa-fw fa-bitcoin"></i>
            <a href="https://blockchain.info/address/13n9dyoCo8DMhSzqboUjaPfJnu3DHButj5" target="_blank" rel="noopener">
              bitcoin
            </a>
          </li>
          <li>
            <i className="fas fa-fw fa-envelope"></i>
            <a href="mailto:ok@ryota-ka.me" target="_blank" rel="noopener">
              E-mail
            </a>
          </li>
          <li>
            <i className="fab fa-fw fa-facebook"></i>
            <a href="https://www.facebook.com/kameoka.ryota" target="_blank" rel="noopener">
              Facebook
            </a>
          </li>
          <li>
            <i className="fab fa-fw fa-foursquare"></i>
            <a href="https://foursquare.com/user/4420704" target="_blank" rel="noopener">
              Foursquare
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
            <i className="fab fa-fw fa-lastfm"></i>
            <a href="http://www.last.fm/user/ryotakameoka" target="_blank" rel="noopener">
              Last.fm
            </a>
            <div id="lastfm-recent-tracks"></div>
          </li>
          <li>
            <i className="fab fa-fw fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/ryota-ka/" target="_blank" rel="noopener">
              LinkedIn
            </a>
          </li>
          <li>
            <i className="fab fa-fw fa-reddit-alien"></i>
            <a href="https://www.reddit.com/user/ryota-ka" target="_blank" rel="noopener">
              Reddit
            </a>
          </li>
          <li>
            <i className="fas fa-fw fa-music"></i>
            <a href="https://scrapbox.io/ryota-ka-music/" target="_blank" rel="noopener">
              Scrapbox (ryota-ka-music)
            </a>
          </li>
          <li>
            <i className="fab fa-fw fa-snapchat-ghost"></i>
            <a href="https://www.snapchat.com/add/ryota-ka" target="_blank" rel="noopener">
              Snapchat
            </a>
          </li>
          <li>
            <i className="fab fa-fw fa-skype"></i>
            <a href="skype:kameoka.ryota?userinfo" target="_blank" rel="noopener">
              Skype
            </a>
          </li>
          <li>
            <i className="fab fa-fw fa-strava"></i>
            <a href="https://www.strava.com/athletes/ryota-ka" target="_blank" rel="noopener">
              Strava
            </a>
          </li>
          <li>
            <i className="fab fa-fw fa-twitter"></i>
            <a href="https://twitter.com/ryotakameoka" target="_blank" rel="noopener">
              Twitter
            </a>
          </li>
          <li>
            <i className="fas fa-fw fa-globe"></i>
            <a href="https://www.wantedly.com/users/639008" target="_blank" rel="noopener">
              Wantedly
            </a>
          </li>
          <li>
            <i className="fas fa-fw fa-square"></i>
            <a href="https://www.justyo.co/KAMEOKA/" target="_blank" rel="noopener">
              Yo
            </a>
          </li>
          <li>
            <i className="fab fa-fw fa-youtube"></i>
            <a href="https://www.youtube.com/channel/UC7pkiEXXwH1PiR-2xnHNLmQ" target="_blank" rel="noopener">
              YouTube
            </a>
          </li>
        </ul>
      </section>
      <section id="products">
        <h2>products</h2>
        <div className="row">
          <div className="product col-xs-12">
            <h3 className="name">
              <a href="https://github.com/ryota-ka/farbe" target="_blank" rel="noopener">
                farbe
              </a>
              <span className="label gray">2018</span>
              <span className="label gray">Rust</span>
            </h3>
            <div className="description">
              <p>Command-line color preview tool</p>
              <p>コマンドライン上で色のプレビューを行うツールです．</p>
            </div>
          </div>
          <div className="product col-xs-12">
            <h3 className="name">
              <a href="https://hackage.haskell.org/package/duration" target="_blank" rel="noopener">
                duration
              </a>
              <span className="label gray">2018</span>
              <span className="label gray">Haskell</span>
            </h3>
            <div className="description">
              <p>A tiny compile-time time utility library, inspired by zeit/ms.</p>
              <p>zeit/ms にインスパイアされた，準クォートを用いて時間の長さを記述できるライブラリです．</p>
            </div>
          </div>
          <div className="product col-xs-12">
            <h3 className="name">
              <a href="https://github.com/ryota-ka/markov-bot" target="_blank" rel="noopener">
                markov-bot
              </a>
              <span className="label gray">2016</span>
              <span className="label gray">Haskell</span>
              <span className="label gray">
                <i className="fab fa-fw fa-twitter"></i>Twitter
              </span>
            </h3>
            <div className="description">
              <p>
                Generates random sentences from your tweet history using the Markov chain, and post them into Twitter.
              </p>
              <p>マルコフ連鎖を使用して，ツイートの履歴から文章を生成し，Twitter に投稿します．</p>
            </div>
          </div>
          <div className="product col-xs-12">
            <h3 className="name">
              <a href="https://github.com/ryota-ka/yo-slack-adapter" target="_blank" rel="noopener">
                yo-slack-adapter
              </a>
              <span className="label gray">2015</span>
              <span className="label gray">Haskell</span>
              <span className="label gray">Yo</span>
            </h3>
            <div className="description">
              <p>Sends a notification into Slack when you receive a Yo.</p>
              <p>Yo を Slack に通知します．</p>
            </div>
          </div>
          <div className="product col-xs-12">
            <h3 className="name">
              <a href="http://twterm.ryota-ka.me/" target="_blank" rel="noopener">
                twterm
              </a>
              <span className="label gray">2015</span>
              <span className="label gray">Ruby</span>
              <span className="label gray">ncurses</span>
              <span className="label gray">
                <i className="fab fa-fw fa-twitter"></i>Twitter
              </span>
              <span className="label yellow">
                <i className="fas fa-fw fa-star"></i>favorite
              </span>
            </h3>
            <div className="description">
              <p>A full-featured CLI Twitter client</p>
              <p>コマンドラインインターフェース上で動作する多機能 Twitter クライアントです．</p>
            </div>
          </div>
          <div className="product col-xs-12">
            <h3 className="name">
              <a href="http://ipsj.camph.net/" target="_blank" rel="noopener">
                IPSJ77Now⤴︎⤴︎ (nanana-now)
              </a>
              <span className="label gray">2015</span>
              <span className="label gray">Node.js</span>
            </h3>
            <div className="description">
              <p>
                An activity visualization service for{' '}
                <a href="http://www.ipsj.or.jp/event/taikai/77/" target="_blank" rel="noopener">
                  The 77th National Convention of IPSJ
                </a>{' '}
                <a href="http://www.ipsj.or.jp/english/" target="_blank" rel="noopener">
                  (Information Processing Society of Japan)
                </a>
                , which was held at Kyoto University.
                <br />
                Mainly worked on server-side implementation.
              </p>
              <p>
                京都大学で開催された
                <a href="http://www.ipsj.or.jp/" target="_blank" rel="noopener">
                  情報処理学会
                </a>
                <a href="http://www.ipsj.or.jp/event/taikai/77/" target="_blank" rel="noopener">
                  第77回全国大会
                </a>
                の各会場の盛り上がりを可視化するサービスです．
                <br />
                主にサーバーサイドの実装を担当しました．
              </p>
            </div>
          </div>
          <div className="product col-xs-12">
            <h3 className="name">
              <a href="http://blog.camph.net/release/camphor-lgtm/" target="_blank" rel="noopener">
                CAMPHOR- LGTM
              </a>
              <span className="label gray">2014</span>
              <span className="label gray">Ruby on Rails</span>
            </h3>
            <div className="description">
              <p>Hosts LGTM images in CAMPHOR-.</p>
              <p>CAMPHOR- 内の LGTM 画像をホスティングします．</p>
            </div>
          </div>
          <div className="product col-xs-12">
            <h3 className="name">
              <a href="http://matrixvisualizer.ryota-ka.me/" target="_blank" rel="noopener">
                Matrix Visualizer
              </a>
              <span className="label gray">2014</span>
              <span className="label gray">JavaScript</span>
            </h3>
            <div className="description">
              <p>Visualizes linear transformations by 2x2 matrices.</p>
              <p>2x2行列による平面上の線形変換を可視化します．</p>
            </div>
          </div>
          <div className="product col-xs-12">
            <h3 className="name">
              <a href="http://20x20.ryota-ka.me/" target="_blank" rel="noopener">
                20x20
              </a>
              <span className="label gray">2014</span>
              <span className="label gray">CoffeeScript</span>
            </h3>
            <div className="description">
              <p>You can exercise multiplications up to 20x20.</p>
              <p>20x20までの掛け算を練習できます．</p>
            </div>
          </div>
          <div className="product col-xs-12">
            <h3 className="name">
              <a
                href="https://www.rd.iimc.kyoto-u.ac.jp/apps/kyodairaku2/index-ecs.html"
                target="_blank"
                rel="noopener"
              >
                京大ラクラク設定ツール
                <small>/ Kyodai Rakuraku Setting Tool</small>
              </a>
              <span className="label gray">2014</span>
              <span className="label gray">PHP</span>
            </h3>
            <div className="description">
              <p>
                Generates an iOS / Mac OS X configuration profile which configures Wi-Fi (KUINS-Air), VPN (KUINS-IKEv2)
                and mail service for students (KUMOI).
                <br />
                Hosted by{' '}
                <a href="http://www.iimc.kyoto-u.ac.jp/en/" target="_blank" rel="noopener">
                  Institute for Information Management and Communication, Kyoto University (IIMC)
                </a>{' '}
                as a service of{' '}
                <a href="http://www.rd.iimc.kyoto-u.ac.jp/" target="_blank" rel="noopener">
                  Campus ITC Labs
                </a>
                .
                <br />
              </p>
              <p>
                Wi-Fi (KUINS-Air), VPN (KUINS-IKEv2), 学生用メール (KUMOI) の設定を一括で行う iOS / Mac OS X
                構成プロファイルを作成します．
                <br />
                <a href="http://www.rd.iimc.kyoto-u.ac.jp/" target="_blank" rel="noopener">
                  キャンパス ITC ラボ
                </a>
                の一サービスとして，
                <a href="http://www.iimc.kyoto-u.ac.jp/ja/" target="_blank" rel="noopener">
                  京都大学情報環境機構
                </a>
                により提供されています．
              </p>
            </div>
          </div>
        </div>
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
  }
`;
