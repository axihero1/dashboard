import React from 'react'
import "./body.css"
import "./body.scss"
import Top from "./Top Section/Top"
import Listing from './Listing Section/Listing';
import Activite from './Activite Section/Activite';
function Body() {
  return (
    <div className='mainContent'>
      <Top/>
      <div className="bottom flex">
        <Listing/>
        <Activite/>
      </div>
    </div>
  )
}

export default Body