import React from 'react'
import { Article, Brand, Cta, Feature, Navbar } from './Components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT } from './Containers'
import './app.css'
const App = () => {
  return (
    <div className='App'>
         <div className="gradient__bg">
           <Navbar />
           <Header />

         </div>
         <Brand />
         <WhatGPT />
         <Features />
         <Possibility />
         <Cta />
         <Blog />
         <Footer />

    </div>
  )
}

export default App
