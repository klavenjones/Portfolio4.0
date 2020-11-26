import { useState } from 'react'

import Head from 'next/head'
// import { Popup } from 'react-magnific-popup'
import Reveal from 'react-reveal/Reveal'
import classnames from 'classnames'

import ProjectModal from './project-modal'

export default function Thumbnail({ project }) {
  const [show, setshow] = useState(show)

  let thumbnailClass = classnames('col col-m-12 col-t-6 col-d-6 box-item', {
    'f-website': project.category === 'Website',
    'f-mobile': project.category === 'Mobile Application',
    'f-web_app': project.category === 'Web Application',
  })

  const openModal = () => {
    setshow(true)
    console.log(show)
  }

  const closeModal = () => {
    setshow(false)
    console.log(show)
  }

  return (
    <>
      <div className={thumbnailClass}>
        <Reveal effect='fadeIn'>
          <div className='item animated'>
            <div className='desc'>
              <div className='image'>
                <a
                  href={`#${project.slug}`}
                  onClick={openModal}
                  className='has-popup'
                >
                  <img
                    src={`/images/${project.photo}`}
                    width='100%'
                    height='auto'
                    alt=''
                  />
                </a>
              </div>
              <div className='category'>{project.category}</div>
              <div className='name'>
                <a
                  href={`#${project.slug}`}
                  onClick={openModal}
                  className='has-popup'
                >
                  {project.title}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <ProjectModal show={show} project={project} closeModal={closeModal} />
    </>
  )
}
