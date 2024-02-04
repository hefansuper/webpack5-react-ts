import React from 'react';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';

import styles from "./index.less";

const HelloPage = () => {
  return <div className={styles.helloPageWrapper}>
    <Header />
    <div>HelloPage</div>
    <Footer />
  </div>;
}
export default React.memo(HelloPage);