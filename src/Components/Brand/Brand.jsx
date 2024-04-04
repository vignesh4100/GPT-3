import React from 'react'
import './brand.css'
import { slack, atlassian, shopify, dropbox, google } from './imports.js'
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
        <div>
           <img src={google} alt="Google" />
        </div>

        <div>
           <img src={slack} alt="slack" />
        </div>

        <div>
           <img src={atlassian} alt="atlassian" />
        </div>

        <div>
           <img src={shopify} alt="shopify" />
        </div>

        <div>
           <img src={dropbox} alt="dropbox" />
        </div>
    </div>
  )
}

export default Brand
