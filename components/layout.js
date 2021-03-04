
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {

  return <>
    <Head>
      <meta property="og:title" content="Portfolio" />
      <meta property="og:description" content="Howard Hwang" />
      <meta property="og:url" content="https://twpride.github.io" />
      <meta property="og:image" content="/media/portfolio_thumb.png" />

      <meta name="theme-color" content="#90cdf4" />
      <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lora&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />

    </Head>
    <Navbar />
    <div id="main">
      {children}
    </div>
    <Footer />
  </>
}
