import { useEffect } from 'react'
import Head from 'next/head'
import classnames from 'classnames'

export default function ProjectModal({ project, closeModal, show }) {
  let modalClass = classnames({
    'modal mfp-close-btn-in fadeIn': show,
    'modal mfp-close-btn-in mfp-hide': !show,
  })

  let modalRef = null

  const handleClose = (e) => {
    if (modalRef && !modalRef.contains(e.target)) {
      closeModal()
    }
  }



  return (
    <>
      <div className={modalClass} onClick={handleClose}>
        <div
          id={project.slug}
          className='popup-box mfp-fade'
          ref={(node) => (modalRef = node)}
        >
          <button
            title='Close (Esc)'
            type='button'
            className='mfp-close'
            onClick={closeModal}
          >
            ×
          </button>
          <div className='content'>
            <div className='image'>
              <img src={`/images/${project.photo}`} alt='' />
            </div>
            <div className='desc'>
              <div className='category'>{project.category}</div>
              <h4>{project.title}</h4>
              <p>{project.shortDescription}</p>

              <a href={`/project/${project.slug}`} className='btn'>
                Project Detail
              </a>
              <a href={project.url} target='blank' className='btn'>
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
