
import Head from 'next/head'
import Navbar from './navbar'
export default function Layout({ children }) {
  return <>
    <Head>
      <meta name="theme-color" content="#90cdf4" />
      <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
    <Navbar/>
    {children}
  </>
}
