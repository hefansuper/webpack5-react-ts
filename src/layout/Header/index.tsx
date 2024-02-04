import React from 'react';
import { a } from './config';

import styles from './index.less';

const Header = () => {
  const AA = a("1", 2);

  return <div className={styles.headerWrapper}>
    <div>Header.....</div>
    <div>{AA}</div>
  </div>;
}
export default React.memo(Header);