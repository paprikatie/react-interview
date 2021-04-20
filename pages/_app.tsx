import { AppProps } from 'next/app';
import React from 'react';
import '../styles.scss';

function RunwayApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default RunwayApp;
