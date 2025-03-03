import React from "react"

import { Brand, CTA, Navbar } from "./components"
import Gpt from "./containers/gpt/Gpt"
import { Blog, Feature, Footer, Header, Possibility } from "./containers"
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>

      </div>
      <Brand/>
      <Gpt/>
      <Feature/>
      <Possibility/>

      <CTA />
      <Blog/>
      <Footer/>

      
      
      
      

    </div>
  )
}

export default App