import React from 'react';
import useSWR from 'swr';

import Footer from '@/layout/Footer';
import Header from '@/layout/Header';

import styles from './index.less';

const FirstPage = () => {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/todos/1');

  if (isLoading) return 'Loading...';

  return (
    <div className={styles.helloPageWrapper}>
      <Header />
      <div>{data?.title}</div>
      <Footer />
    </div>
  );
};
export default React.memo(FirstPage);