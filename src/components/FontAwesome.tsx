import * as React from 'react';

export function FontAwesome({ icon }): React.ReactElement {
  return <i className={`fa fa-fw fa-${icon}`} />;
}
