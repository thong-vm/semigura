import React from 'react'
import './PageHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa-tv } from '@fortawesome/free-regular-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'

const PageHeader = ({heading}) => {
  return (
    <div className='d-sm-flex align-items-center justify-content-between mb-4 home_header'>
      <h1 className='h3 mb-0'>
        <FontAwesomeIcon className='me-2' icon={faTv} />
        {heading}
      </h1>
    </div>
  )
}

export default PageHeader
