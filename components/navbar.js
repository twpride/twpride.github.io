
import { useEffect, useState } from 'react'
export default function Navbar() {

  const [scroll, setScroll] = useState(null);



  useEffect(() => {

    const handleScroll = (e) => {
      setScroll(state => (
      {
        navHide: window.pageYOffset - state.prevScroll > 0,
        prevScroll: window.pageYOffset
      }
    ))}


    setScroll(
      {
        navHide: false,
        prevScroll: window.pageYOffset
      }
    )
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return <nav className={`nav${scroll && scroll.navHide ? ' nav-hide' : ''}`}>
    <div>
      <a href="/">
        <div id="home-link">
          {/* <img src="/apple-touch-icon.png"> */}
          {/* </img> */}
          howard hwang
        </div>
      </a>
      <div><a href="/about">about</a></div>
    </div>
  </nav>
}
