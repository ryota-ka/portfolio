import * as React from 'react';
import { render } from 'react-dom';
import { LatestEntries } from './LatestEntries';

render(React.createElement(LatestEntries), document.getElementById('hatena-blog-latest-entries'));
