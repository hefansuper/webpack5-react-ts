import React, { StrictMode } from 'react';
import { SWRConfig } from 'swr';
import { RouterProvider } from 'react-router-dom';
import axios from 'axios';

import router from './routers';

import './app.css';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const App = () => {
  return (
    <StrictMode>
      <SWRConfig
        value={{
          fetcher: fetcher,
        }}
      >
        <RouterProvider router={router} />
      </SWRConfig>
    </StrictMode>
  );
};
export default App;
