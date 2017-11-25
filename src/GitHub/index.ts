import { createElement } from 'react';
import { render } from 'react-dom';
import { RecentRepositories } from './RecentRepositories';

render(createElement(RecentRepositories), document.getElementById('github-recent-repositories'));
