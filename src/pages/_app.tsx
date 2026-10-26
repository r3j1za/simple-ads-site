
import type { AppProps } from 'next/app';
import Script from 'next/script';
import './index.scss';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <Script
        id="google-adsense"
        strategy="afterInteractive"
        async
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
      />
    </>
  );
}
