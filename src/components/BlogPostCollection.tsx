import * as React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export function BlogPostCollection({ children }: Props): React.ReactElement {
  return <ul>{children}</ul>;
}
