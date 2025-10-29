import * as React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export function StravaActivityCollection({ children }: Props): React.ReactElement {
  return <ul>{children}</ul>;
}
