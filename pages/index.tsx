import Head from 'next/head';
import React from 'react';

import App from '../src/components/App';

export default function Home() {
  return (
    <>
      <Head>
        <title>Runway Frontend Exercise</title>
        <link
          rel="icon"
          href="https://static.wikia.nocookie.net/logopedia/images/4/49/Excel_5.0.png/revision/latest?cb=20201209214655"
        />
      </Head>
      <App />
    </>
  );
}
