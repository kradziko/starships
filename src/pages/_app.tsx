import React from 'react';
import axios from 'axios';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

axios.defaults.baseURL = 'https://swapi.dev/api/';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
