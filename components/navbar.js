import { useEffect, useState } from 'react'
import classnames from 'classnames'
import Link from 'next/link'

const homeMenu = (
  <ul>
    <li>
      <Link href='#about-section'>
        <a>About</a>
      </Link>
    </li>
    <li>
      <Link href='#services-section'>
        <a>What I Do</a>
      </Link>
    </li>
    <li>
      <Link href='#works-section'>
        <a>Works</a>
      </Link>
    </li>
    <li>
      <Link href='#contact-section'>
        <a>Contact</a>
      </Link>
    </li>
  </ul>
)

const projectMenu = (
  <ul>
    <li>
      <Link href='/'>
        <a>Back To Home</a>
      </Link>
    </li>
  </ul>
)

export default function Navbar({ home }) {
  const [scrolling, setScrolling] = useState(false)
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = (e) => {
    let position = Math.floor(window.scrollY)
    if (position > 10) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  return (
    <>
      <header className={classnames('header', { filled: scrolling })}>
        <div className='fw'>
          <div className='logo'>
            <a href='#'>KJ.</a>
          </div>
          <a href='#' onClick={() => setActive(!isActive)} className={classnames('menu-btn', { active: isActive })}>
            <span></span>
          </a>
          <div className={classnames('top-menu', { active: isActive })}>
            {home ? homeMenu : projectMenu}
            <Link href='#'>
              <a className='close'></a>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
