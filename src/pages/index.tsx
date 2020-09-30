import React from 'react';
import Helmet from 'react-helmet';

import '../../static/style.css';

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#222222" />
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
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
          <dt>birthday</dt>
          <dd>Jun 7, 1993 (age 27)</dd>
          <dt>location</dt>
          <dd>
            Nakagyo, Kyoto, Japan
            <span className="label green">
              <i className="fa fa-fw fa-calendar"></i>Nov 2019 - present
            </span>
          </dd>
          <dd>
            Meguro, Tokyo, Japan
            <span className="label gray">
              <i className="fa fa-fw fa-calendar"></i>Sep 2015 - Oct 2019
            </span>
          </dd>
          <dd>
            Sakyo, Kyoto, Japan
            <span className="label gray">
              <i className="fa fa-fw fa-calendar"></i>Apr 2012 - Aug 2015
            </span>
          </dd>
          <dd>
            Kishiwada, Osaka, Japan
            <span className="label gray">
              <i className="fa fa-fw fa-calendar"></i>- Mar 2012
            </span>
          </dd>
        </dl>
      </section>
      <section id="affiliation">
        <h2>affiliation</h2>
        <dl>
          <dt>
            <i className="fa fa-fw fa-graduation-cap"></i> university
          </dt>
          <dd>
            <a href="http://www.econ.kyoto-u.ac.jp/">
              <span className="nowrap">Faculty of Economics,</span> <span className="nowrap">Kyoto University</span>
            </a>
            <span className="label green">
              <i className="fa fa-fw fa-calendar"></i>Apr 2012 - present
            </span>
            <span className="label yellow">Absent since Oct 2015</span>
          </dd>
          <dt>
            <i className="fa fa-fw fa-building-o"></i> company
          </dt>
          <dd>
            <a href="https://herp.co.jp/">HERP, Inc.</a>
            <span className="label green">
              <i className="fa fa-fw fa-calendar"></i>May 2017 - present
            </span>
          </dd>
          <dt>
            <i className="fa fa-fw fa-users"></i> community
          </dt>
          <dd>
            <a href="https://camph.net">CAMPHOR-</a>
            <span className="label green">
              <i className="fa fa-fw fa-calendar"></i>May 2014 - present
            </span>
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
            <i className="fa fa-fw fa-amazon"></i>
            <a href="http://www.amazon.co.jp/registry/wishlist/NCRDLUWP5AR5">Amazon wishlist</a>
          </li>
          <li>
            <i className="fa fa-fw fa-apple"></i>
            <a href="https://itunes.apple.com/profile/ryotakameoka">Apple Music</a>
          </li>
          <li>
            <i className="fa fa-fw fa-bitcoin"></i>
            <a href="https://blockchain.info/address/13n9dyoCo8DMhSzqboUjaPfJnu3DHButj5">bitcoin</a>
          </li>
          <li>
            <i className="fa fa-fw fa-envelope"></i>
            <a href="mailto:kameoka.ryota@gmail.com">E-mail</a>
          </li>
          <li>
            <i className="fa fa-fw fa-facebook"></i>
            <a href="https://www.facebook.com/kameoka.ryota">Facebook</a>
          </li>
          <li>
            <i className="fa fa-fw fa-foursquare"></i>
            <a href="https://foursquare.com/user/4420704">Foursquare</a>
          </li>
          <li>
            <i className="fa fa-fw fa-github"></i>
            <a href="https://github.com/ryota-ka">GitHub</a>
            <div id="github-recent-repositories"></div>
          </li>
          <li>
            <i className="fa fa-fw fa-rss"></i>
            <a href="http://ryota-ka.hatenablog.com/">Hatena blog</a>
            <div id="hatena-blog-latest-entries"></div>
          </li>
          <li>
            <i className="fa fa-fw fa-instagram"></i>
            <a href="https://www.instagram.com/ryotakameoka/">Instagram</a>
          </li>
          <li>
            <i className="fa fa-fw fa-key"></i>
            <a href="https://keybase.io/ryotakameoka">Keybase</a>
          </li>
          <li>
            <i className="fa fa-fw fa-lastfm"></i>
            <a href="http://www.last.fm/user/ryotakameoka">Last.fm</a>
            <div id="lastfm-recent-tracks"></div>
          </li>
          <li>
            <i className="fa fa-fw fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/ryota-ka/">LinkedIn</a>
          </li>
          <li>
            <i className="fa fa-fw fa-reddit-alien"></i>
            <a href="https://www.reddit.com/user/ryota-ka">Reddit</a>
          </li>
          <li>
            <i className="fa fa-fw fa-music"></i>
            <a href="https://scrapbox.io/ryota-ka-music/">Scrapbox (ryota-ka-music)</a>
          </li>
          <li>
            <i className="fa fa-fw fa-snapchat-ghost"></i>
            <a href="https://www.snapchat.com/add/ryota-ka">Snapchat</a>
          </li>
          <li>
            <i className="fa fa-fw fa-skype"></i>
            <a href="skype:kameoka.ryota?userinfo">Skype</a>
          </li>
          <li>
            <i className="fa fa-fw fa-twitter"></i>
            <a href="https://twitter.com/ryotakameoka">Twitter</a>
          </li>
          <li>
            <i className="fa fa-fw fa-globe"></i>
            <a href="https://www.wantedly.com/users/639008">Wantedly</a>
          </li>
          <li>
            <i className="fa fa-fw fa-square"></i>
            <a href="https://www.justyo.co/KAMEOKA/">Yo</a>
          </li>
          <li>
            <i className="fa fa-fw fa-youtube"></i>
            <a href="https://www.youtube.com/channel/UC7pkiEXXwH1PiR-2xnHNLmQ">YouTube</a>
          </li>
        </ul>
      </section>
      <section id="products">
        <h2>products</h2>
        <div className="row">
          <div className="product col-xs-12">
            <h3 className="name">
              <a href="https://github.com/ryota-ka/farbe">farbe</a>
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
              <a href="https://hackage.haskell.org/package/duration">duration</a>
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
              <a href="https://github.com/ryota-ka/markov-bot">markov-bot</a>
              <span className="label gray">2016</span>
              <span className="label gray">Haskell</span>
              <span className="label gray">
                <i className="fa fa-fw fa-twitter"></i>Twitter
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
              <a href="https://github.com/ryota-ka/yo-slack-adapter">yo-slack-adapter</a>
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
              <a href="http://twterm.ryota-ka.me/">twterm</a>
              <span className="label gray">2015</span>
              <span className="label gray">Ruby</span>
              <span className="label gray">ncurses</span>
              <span className="label gray">
                <i className="fa fa-fw fa-twitter"></i>Twitter
              </span>
              <span className="label yellow">
                <i className="fa fa-fw fa-star"></i>favorite
              </span>
            </h3>
            <div className="description">
              <p>A full-featured CLI Twitter client</p>
              <p>コマンドラインインターフェース上で動作する多機能 Twitter クライアントです．</p>
            </div>
          </div>
          <div className="product col-xs-12">
            <h3 className="name">
              <a href="http://ipsj.camph.net/">IPSJ77Now⤴︎⤴︎ (nanana-now)</a>
              <span className="label gray">2015</span>
              <span className="label gray">Node.js</span>
            </h3>
            <div className="description">
              <p>
                An activity visualization service for{' '}
                <a href="http://www.ipsj.or.jp/event/taikai/77/">The 77th National Convention of IPSJ</a>{' '}
                <a href="http://www.ipsj.or.jp/english/">(Information Processing Society of Japan)</a>
                , which was held at Kyoto University.
                <br />
                Mainly worked on server-side implementation.
              </p>
              <p>
                京都大学で開催された
                <a href="http://www.ipsj.or.jp/">情報処理学会</a>
                <a href="http://www.ipsj.or.jp/event/taikai/77/">第77回全国大会</a>
                の各会場の盛り上がりを可視化するサービスです．
                <br />
                主にサーバーサイドの実装を担当しました．
              </p>
            </div>
          </div>
          <div className="product col-xs-12">
            <h3 className="name">
              <a href="http://blog.camph.net/release/camphor-lgtm/">CAMPHOR- LGTM</a>
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
              <a href="http://matrixvisualizer.ryota-ka.me/">Matrix Visualizer</a>
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
              <a href="http://20x20.ryota-ka.me/">20x20</a>
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
              <a href="https://www.rd.iimc.kyoto-u.ac.jp/apps/kyodairaku2/index-ecs.html">
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
                <a href="http://www.iimc.kyoto-u.ac.jp/en/" target="_blank">
                  Institute for Information Management and Communication, Kyoto University (IIMC)
                </a>{' '}
                as a service of <a href="http://www.rd.iimc.kyoto-u.ac.jp/">Campus ITC Labs</a>.
                <br />
              </p>
              <p>
                Wi-Fi (KUINS-Air), VPN (KUINS-IKEv2), 学生用メール (KUMOI) の設定を一括で行う iOS / Mac OS X
                構成プロファイルを作成します．
                <br />
                <a href="http://www.rd.iimc.kyoto-u.ac.jp/">キャンパス ITC ラボ</a>
                の一サービスとして，
                <a href="http://www.iimc.kyoto-u.ac.jp/ja/" target="_blank">
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
