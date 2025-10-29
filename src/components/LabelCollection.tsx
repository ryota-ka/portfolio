import React from 'react';

const styles = require('./LabelCollection.module.css');

type Props = {
  className?: string | undefined;
  children: React.ReactNode | readonly React.ReactNode[];
};

export const LabelCollection: React.FC<Props> = ({ className = '', children }: Props) => {
  return (
    <div className={`${styles.className} ${className}`}>
      {[children]
        .flat()
        .filter(Boolean)
        .map(child => (
          <span className={styles.label}>{child}</span>
        ))}
    </div>
  );
};
