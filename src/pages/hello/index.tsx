import React from 'react';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';

import "./index.less";

const HelloPage = () => {
  return <div className="helloPageWrapper">
    <Header />
    <div>HelloPage</div>
    <Footer />
  </div>;
}
export default React.memo(HelloPage);