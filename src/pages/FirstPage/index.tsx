import React from 'react';
import useSWR from 'swr';
import { atom, useAtom } from 'jotai';

import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import { globalAtom } from '@/store/global';

import styles from './index.less';

const FirstPage = () => {
  const [globalInfo] = useAtom(globalAtom);
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/todos/1');

  if (isLoading) return 'Loading...';

  return (
    <div className={styles.helloPageWrapper}>
      <Header />
      <div>{data?.title}</div>
      <div>{globalInfo?.name}</div>
      <div>{globalInfo?.text}</div>
      <Footer />
    </div>
  );
};
export default React.memo(FirstPage);
