import { createElement } from 'react';
import { render } from 'react-dom';
import { RecentTracks } from './RecentTracks';

render(createElement(RecentTracks), document.getElementById('lastfm-recent-tracks'));
