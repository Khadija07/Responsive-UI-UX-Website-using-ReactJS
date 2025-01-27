import React from 'react'
import './article.css'

const article = ({img, date, text}) => {
  return (
    <div className='gpt3-blog-article-section'>
      <div className='gpt3-blog-article-images'>
        <img src={img} alt='image'/>
      </div>
      <div className='gp3-blog-container'>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <div>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  )
}

export default article
