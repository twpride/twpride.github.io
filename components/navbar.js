
import { useEffect, useState } from 'react'
export default function Navbar() {

  const [scroll, setScroll] = useState(null);



  useEffect(() => {

    const handleScroll = () => setScroll(state => (
      {
        navHide: window.pageYOffset - state.prevScroll > 0,
        prevScroll: window.pageYOffset
      }
    ))


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
    <div><a href="#">Home</a></div>
    <div><a href="#">About</a></div>
    <div><a href="#">Hom</a></div>
  </nav>
}
