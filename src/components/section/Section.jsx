import React from 'react'
import Card from '../card/Card'
import './Section.css'
function Section() {
  return (
    <div className='section_container'>
        <div>
            <span></span> <span>No Priority</span> <span>2</span>
        </div>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Section