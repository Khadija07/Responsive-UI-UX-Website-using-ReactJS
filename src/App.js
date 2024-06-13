import React from "react"

import { article, Brand, CTA, Navbar } from "./components"
import { Blog, Feature, Gpt, Footer, Header, Possibility } from "./containers"
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>

      </div>

      <CTA />
      <Blog/>
      <Footer/>

      <Brand/>
      <Gpt/>
      <Feature/>
      <Possibility/>

    </div>
  )
}

export default App