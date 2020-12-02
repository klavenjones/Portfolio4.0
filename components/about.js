import { useEffect } from 'react'
import Link from 'next/link'
import Reveal from 'react-reveal/Reveal'

export default function About() {
  useEffect(() => {}, [])

  return (
    <div className='section about align-left' id='about-section'>
      <div className='fw'>
        <div className='text-box'>
          <Reveal effect='fadeInUpSmall' cascade>
            <h1>
              I'm Klaven Jones, <br /> a full-stack web developer
              <br /> based in Brooklyn, NY.
            </h1>
            <p>
              My expertise is designing and developing full-stack web and mobile
              applications that are flexible useful and meaningful. I typically
              work with technologies like HTML & CSS, JavaScript, React, and
              Node.js. But I am open to working with any tech stack
            </p>
          </Reveal>
        </div>
        <div className='bts'>
          <Reveal effect='fadeInUpSmall'>
            <Link href='/images/resume2020.pdf'>
              <a className='btn extra'>Download Resume</a>
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
