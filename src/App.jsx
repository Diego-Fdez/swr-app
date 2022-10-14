import { Suspense } from 'react';
import './App.css';
import Skeleton from '@mui/material/Skeleton';
import Characters from './Characters';
import { SWRConfig } from 'swr';

function localStorageProvider() {
  //when initializing, we restore the data from 'localStorage' into a map
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'));

  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('app-cache', appCache);
  });

  return map;
}

function App() {
  return (
    <SWRConfig value={{ provider: localStorageProvider, suspense: true }}>
      <Suspense
        fallback={
          <>
            <Skeleton variant='text' />
            <Skeleton variant='circular' width={40} height={40} />
            <Skeleton variant='rectangular' width={210} height={118} />
          </>
        }
      >
        <Characters />
      </Suspense>
    </SWRConfig>
  );
}

export default App;
