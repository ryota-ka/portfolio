import * as React from 'react';

type Props = {
  className?: string | undefined;
  icon: string;
};

export const FontAwesome: React.FC<Props> = ({ className, icon }) => {
  return <i className={`fa fa-${icon} ${className}`} />;
};
