import React from 'react'
import './Gpt.css'
import Feature from '../../components/feature/Feature'
const Gpt = () => {
  return (
    <div id='gpt3' className='gpt3-section'>
      <div className="gpt3-section-inner">
        <div className="gpt3-feature">
          <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>

        </div>
        <div className="gpt3-heading">
          <h1>The possibilities are beyond your imagination</h1>
          <p>Explore the library</p>
        </div>
        <div className="gpt3-containers">
          <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
          <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
          <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
        </div>

      </div>
      

      
    </div>
  )
}

export default Gpt
