import React, { useState, useEffect } from 'react'
import ProjectModal from './project-modal'
import Reveal from 'react-reveal/Reveal'
import Filter from './filter'
import Thumbnail from './thumbnail'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Works() {
  const { data, error } = useSWR('/api/projects', fetcher)
  const [query, setQuery] = useState('')
  const [filtered, setFilter] = useState(data)

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((json) => setFilter(json))
  }, [])

  useEffect(() => {
    setFilter(filter(data))
  }, [query])

  const handleQuery = (value) => {
    setQuery(value)
  }

  const filter = (rows) => {
    if (query === 'All') {
      return data
    }
    if (rows) {
      return rows.filter((row) => row.category === query)
    }
    return data
  }

  return (
    <>
      <div className='section works align-left' id='works-section'>
        <div className='fw'>
          <Reveal effect='fadeInRightSmall'>
            <div className='titles'>
              <div className='title'>Recent Works</div>
            </div>
            {/* <Filter handleQuery={handleQuery} /> */}
            {/* <div className='filters animated'>
              <div className='f_btn active'>
                <label>
                  <input type='radio' name='fl_radio' value='box-item' />
                  All
                </label>
              </div>
              <div className='f_btn'>
                <label>
                  <input type='radio' name='fl_radio' value='f-website' />
                  Website
                </label>
              </div>
              <div className='f_btn'>
                <label>
                  <input type='radio' name='fl_radio' value='f-web_app' />
                  Web Application
                </label>
              </div>
              <div className='f_btn'>
                <label>
                  <input type='radio' name='fl_radio' value='f-mobile' />
                  Mobile Application
                </label>
              </div>
            </div> */}
          </Reveal>
          <div className='row box-items'>
            {filtered &&
              filtered.map((p) => <Thumbnail key={p.slug} project={p} />)}
            {/* <div className='col col-m-12 col-t-6 col-d-6 box-item f-website'>
              <Reveal effect='fadeIn'>
                <div className='item animated'>
                  <div className='desc'>
                    <div className='image'>
                      <a href='#cirius' className='has-popup'>
                        <img
                          src='/images/Cirius.jpg'
                          width='100%'
                          height='auto'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='category'>Website</div>
                    <div className='name'>
                      <a href='#cirius' className='has-popup'>
                        Cirius Engineering Website
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className='col col-m-12 col-t-6 col-d-6 box-item f-website'>
              <Reveal effect='fadeIn'>
                <div className='item animated'>
                  <div className='desc'>
                    <div className='image'>
                      <a href='#clemo' className='has-popup'>
                        <img src='/images/Clemo.jpg' alt='' />
                      </a>
                    </div>
                    <div className='category'>Website</div>
                    <div className='name'>
                      <a href='#clemo' className='has-popup'>
                        Clemo Agency Concept Website
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className='col col-m-12 col-t-6 col-d-6 box-item f-mobile'>
              <Reveal effect='fadeIn'>
                <div className='item animated'>
                  <div className='desc'>
                    <div className='image'>
                      <a href='#cems' className='has-popup'>
                        <img src='images/CEMS.jpg' alt='' />
                      </a>
                    </div>
                    <div className='category'>Mobile Application</div>
                    <div className='name'>
                      <a href='#cems' className='has-popup'>
                        CEMS Invoicing Mobile App
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className='col col-m-12 col-t-6 col-d-6 box-item f-web_app'>
              <Reveal effect='fadeIn'>
                <div className='item animated'>
                  <div className='desc'>
                    <div className='image'>
                      <a href='#seekr' className='has-popup'>
                        <img src='images/Seekr.jpg' alt='' />
                      </a>
                    </div>
                    <div className='category'>Web Application</div>
                    <div className='name'>
                      <a href='#seekr' className='has-popup'>
                        Seekr: A Job Application Manager
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div> */}
          </div>
          {/* {projects &&
            projects.map((p) => <ProjectModal key={p.slug} project={p} />)} */}
          <div className='clear'></div>
        </div>
      </div>
    </>
  )
}
