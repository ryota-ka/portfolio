import * as React from 'react';
import { FontAwesome } from './FontAwesome';

const styles = require('./Label.module.css');

type Props = Readonly<{
  color: 'gray' | 'green' | 'red' | 'yellow';
  children: React.ReactNode;
  icon?: string;
}>;

export function Label({ color, children, icon }: Props): React.ReactElement {
  return (
    <span className={styles[color]}>
      {icon && <FontAwesome className={styles.icon} icon={icon} />}
      {children}
    </span>
  );
}
