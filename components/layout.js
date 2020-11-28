import { useEffect } from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export const siteTitle = `Klaven Jones | Software Engineer`

export default function Layout({ children, home }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon'></link>
      </Head>

      <div className='page'>
        <Navbar home={home} />
        <main className='container'>
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}
