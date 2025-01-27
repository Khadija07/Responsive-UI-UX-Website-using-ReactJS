import React from 'react'
import './Feature.css'

const Feature = ({title, text}) => {
  return (
    <div className='gpt3-features-container'>
      <div className='gpt3-features-title'>
        <h1>{title}</h1>
      </div>
      <div className='gpt3-features-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
