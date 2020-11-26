import React, { useState } from 'react'
import classnames from 'classnames'

export default function Filter({ handleQuery }) {
  const [selected, setSelected] = useState('All')

  const handleChange = (e) => {
    setSelected(e.target.value)
    handleQuery(e.target.value)
  }

  return (
    <>
      <div className='filters animated'>
        <div className={classnames('f_btn', { active: selected === 'All' })}>
          <label>
            <input
              type='radio'
              name='fl_radio'
              value='All'
              onChange={handleChange}
              checked={selected === 'all'}
            />
            All
          </label>
        </div>
        <div
          className={classnames('f_btn', { active: selected === 'Website' })}
        >
          <label>
            <input
              type='radio'
              name='fl_radio'
              value='Website'
              onChange={handleChange}
              checked={selected === 'Website'}
            />
            Website
          </label>
        </div>
        <div
          className={classnames('f_btn', {
            active: selected === 'Web Application',
          })}
        >
          <label>
            <input
              type='radio'
              name='fl_radio'
              value='Web Application'
              onChange={handleChange}
              checked={selected === 'Web Application'}
            />
            Web Application
          </label>
        </div>
        <div
          className={classnames('f_btn', {
            active: selected === 'Mobile Application',
          })}
        >
          <label>
            <input
              type='radio'
              name='fl_radio'
              value='Mobile Application'
              onChange={handleChange}
              checked={selected === 'Mobile Application'}
            />
            Mobile Application
          </label>
        </div>
      </div>
    </>
  )
}
