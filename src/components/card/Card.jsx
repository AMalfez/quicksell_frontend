import React from 'react'
import './Card.css'
import { LuCircle } from "react-icons/lu";
import { MdCircle } from "react-icons/md";

function Card() {
  return (
    <div className='card_container'>
        <div className='card_cam'>
            <span>CAM-2</span> <div className='card_user_icon'><div className='status_icon'></div></div>
        </div>
        <div className='card_info'>
            <LuCircle className='card_email_icon' /> <span>Impliment email notification system</span>
        </div>
        <div className='tag'>
            <MdCircle style={{marginRight:"5px"}} /> Feature Request
        </div>
    </div>
  )
}

export default Card