import * as React from 'react';

import { Label } from './Label';

const styles = require('./GitHubRepository.module.css');

type Props = Readonly<{
  name: string;
  description: string;
  url: string;
  primaryLanguage: string;
  stars: number;
  key: string;
}>;

export function GitHubRepository({ name, url, stars, primaryLanguage, description, key }: Props): React.ReactElement {
  return (
    <li key={key}>
      <a href={url}>{name}</a>
      <Label icon="terminal" color="gray">
        {primaryLanguage}
      </Label>
      <Label icon="star" color="yellow">
        {stars}
      </Label>
      <div className={styles.description}>{description}</div>
    </li>
  );
}
