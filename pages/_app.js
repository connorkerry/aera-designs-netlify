import GlobalStyles from '@styles/GlobalStyles';
import { ThemeProvider } from '@components/ThemeContext';
import Head from 'next/head';
import Layout from '@components/Layout';

function Application({ Component, pageProps }) {

  return (
    <ThemeProvider>
      <Head>
        <link rel="icon" href="/logo.png" />

        <meta charSet="UTF-8" />
        <meta name="keywords" content="title, meta, nextjs" />
        <meta name="author" content="Connor Kerry" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyles />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default Application
