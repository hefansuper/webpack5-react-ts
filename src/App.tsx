import React, { StrictMode } from 'react';
import { SWRConfig } from 'swr';
import { RouterProvider } from 'react-router-dom';
import axios from 'axios';
import { useSetAtom, atom } from 'jotai';

import router from './routers';
import { globalAtom } from './store/global';

import './app.css';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const App = () => {
  const setGlobalAtom = useSetAtom(globalAtom);

  setTimeout(() => {
    setGlobalAtom({
      name: 'stephen',
      text: 'desc desc',
    });
  }, 200);

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
