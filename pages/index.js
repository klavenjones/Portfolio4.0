import useSWR from 'swr'
import { useState } from 'react'

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Header from '../components/header'
import About from '../components/about'
import Skills from '../components/skills'
import Works from '../components/works'
import Contact from '../components/contact'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR('/api/projects', fetcher)
  



  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <About />
        <Skills />
        <Works projects={data} />
        <Contact />
      </>
    </Layout>
  )
}
