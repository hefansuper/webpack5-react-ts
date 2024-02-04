import React from 'react';

import styles from './index.less';

const Header = () => {
  return <div className={styles.headerWrapper}>
    <div>Header.....</div>
  </div>;
}
export default React.memo(Header);