
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {

  const [TTvis, setTTvis] = useState(false)

  useEffect(() => {

    function copyTextToClipboard(text) {
      var textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      // textArea.focus();
      textArea.select();
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
      } catch (err) {
        console.log('Oops, unable to copy');
      }
      document.body.removeChild(textArea);
      setTTvis(false)
    }

    document.getElementById("email").addEventListener("click", () => copyTextToClipboard('twpride@gmail44.com'));
  }, [])





  return <>
    <Head>
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
