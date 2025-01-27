import React from 'react'
import './Brand.css'
import {google, slack, alt, dropbox, shopify} from './imports'

const brand = () => {
  return (
    <div className='gpt3-brand-section'>
      <div>
        <img src={google} alt='google'/>
      </div>

      <div>
        <img src={slack} alt='slack'/>
      </div>

      <div>
        <img src={alt} alt='altassian'/>
      </div>

      <div>
        <img src={dropbox} alt='dropbox'/>
      </div>

      <div>
        <img src={shopify} alt='shopify'/>
      </div>

      
     
    </div>
     
  )
}

export default brand
