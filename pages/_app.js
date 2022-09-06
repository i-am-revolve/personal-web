import React from 'react';

import Layout from '../components/layout';
import '../styles/global.scss';

/**
 * The default app component.
 * This ensures the layout is used everywhere on the app
 *
 * @return {JSX.Element}
 */
export default function App({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
