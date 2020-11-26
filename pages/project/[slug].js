import { useRouter } from 'next/router'
import useSWR from 'swr'

import Layout from '../../components/layout'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }

  return data
}

export default function Project() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.slug && `/api/projects/${query.slug}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <div className='section started-blog'>
        <div className='centrize full-width'>
          <div className='vertical-center'>
            <div className='st-title align-center'>{data.title}</div>
          </div>
        </div>
      </div>
      <div className='section blog-single align-left' id='blog-section'>
        <div className='fw'>
          <div className='row'>
            <div className='col col-m-12 col-t-12 col-d-12'>
              <div className='post-box'>
                <h1>{data.headline}</h1>
                <div className='blog-detail'>{data.completion}</div>

                <div className='blog-image'>
                  <img src={`/images/${data.photo}`} alt='Cirius Logo' />
                </div>

                <div className='blog-content'>
                  <p>{data.fullDescription}</p>

                  <div className='work-details'>
                    <div className='col col-m-12 col-t-6 col-d-6 work-detail'>
                      <div>
                        <h3>Position</h3>
                        <p>{data.position}</p>
                      </div>
                      <div>
                        <h3>Work</h3>
                        <p>{data.work}</p>
                      </div>
                    </div>
                    <div className='col col-m-12 col-t-6 col-d-6 work-detail'>
                      <div>
                        <h3>Company</h3>
                        <p>{data.company}</p>
                      </div>
                      <div>
                        <h3>WWW</h3>
                        <a
                          href={`${data.url}`}
                          className='btn extra animated'
                        >
                          {data.www}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className='post-lightbox row'>
                    <a
                      href='images/works/work1.jpg'
                      className='col col-m-12 col-t-4 col-d-4 lightbox-image'
                    >
                      <img src='images/works/work1.jpg' alt='' />
                    </a>
                    <a
                      href='images/works/work2.jpg'
                      className='col col-m-12 col-t-4 col-d-4 lightbox-image'
                    >
                      <img src='images/works/work2.jpg' alt='' />
                    </a>
                    <a
                      href='images/works/work3.jpg'
                      className='col col-m-12 col-t-4 col-d-4 lightbox-image'
                    >
                      <img src='images/works/work3.jpg' alt='' />
                    </a>
                  </div>
                </div>

                <div className='row'>
                  <div className='col col-m-12 col-t-12 col-d-12'>
                    <h3 className='sub-title'>Get in Touch</h3>

                    <h2>
                      I'm currently accepting freelance <br />
                      and full-time opportunities.
                    </h2>
                    <p>
                      If you are a business seeking an app and/or website, or an
                      employer looking to hire. Feel free to connect with me.
                    </p>
                    <div className='bts'>
                      <a href='#' className='btn extra animated'>
                        Email
                      </a>
                      <a
                        href='https://twitter.com/KlavenJ'
                        className='btn extra animated'
                      >
                        Twitter
                      </a>
                      <a
                        href='https://www.linkedin.com/in/klaven-jones'
                        className='btn extra animated'
                      >
                        Linkedin
                      </a>
                      <a
                        href='https://github.com/klavenjones'
                        className='btn extra animated'
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
