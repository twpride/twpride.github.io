
import '../style.scss'
import { useEffect } from 'react'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js"));
  }, [])
  return <Component {...pageProps} />
}

