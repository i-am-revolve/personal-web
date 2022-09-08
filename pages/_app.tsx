import Layout from '@components/layout';
import '@styles/global.scss';

export default function App({Component, pageProps}): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
