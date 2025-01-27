import React from 'react'
import './Blog.css'
import Article from '../../components/articles/article'
import { blog1, blog2, blog3, blog4, blog5 } from './imports'

const Blog = () => {
  return (
    <div id='blog' className='blog-section'>
      <div className='blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='blog-container'>
        <div className='blog-container-partA'>
          <Article img={blog1} date='Sep 26, 2021' text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>          

        </div>
        <div className='blog-container-partB'>
          <Article img={blog2} date='Sep 26, 2021' text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article img={blog3} date='Sep 26, 2021' text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article img={blog4} date='Sep 26, 2021' text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article img={blog5} date='Sep 26, 2021' text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>

        </div>

      </div>
      
    </div>
  )
}

export default Blog
