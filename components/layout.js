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
        {/* <script src='/js/jquery.min.js'></script> */}
        {/*  <script src='/js/jquery.validate.js'></script>
        <script src='/js/masonry.pkgd.js'></script>
        <script src='/js/imagesloaded.pkgd.js'></script>
        <script src='/js/masonry-filter.js'></script>
        <script src='/js/magnific-popup.js'></script>
        <script src='/js/scrollreveal.js'></script>
        <script src='/js/typed.js'></script> 
      */}
        {/* <script src='/js/main.js'></script> */}
        <script src='https://unpkg.com/ionicons@5.2.3/dist/ionicons.js'></script>
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
