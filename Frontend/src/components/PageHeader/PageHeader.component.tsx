import React from 'react'
import './PageHeader.scss'
import logo from './../../assets/images/logo.svg'

const PageHeader: React.FC = () => {
  return (
    <div className='Feeds__PageHeader'>
      <p className='Feeds__Logo'><img alt='' src={logo} /></p>
    </div>
  )
}

export default PageHeader
