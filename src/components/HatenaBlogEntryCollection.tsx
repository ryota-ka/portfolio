import * as React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export function HatenaBlogEntryCollection({ children }: Props): React.ReactElement {
  return <ul>{children}</ul>;
}
