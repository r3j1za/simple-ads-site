
import type { AppProps } from 'next/app';
import Head from 'next/head';
import './index.scss';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9014144589905779"
          crossOrigin="anonymous"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
