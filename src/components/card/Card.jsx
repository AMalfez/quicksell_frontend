import React from 'react'
import './Card.css'
import { MdCircle } from "react-icons/md";
import { SectionTypes } from '../../utils/StatusType';
import {TrimContent} from '../../utils/Content'

function Card({showUser, type}) {
  const icon = SectionTypes[type].title_icon;
  const text = "Impliment email notification system ";
  return (
    <div className='card_container'>
        <div className='card_cam'>
            <span>CAM-2</span> {!showUser && (<div className='user_icon'><div className='user_status_icon'></div></div>)}
        </div>
        <div className='card_info'>
          {showUser && (<span className='icon'><img src={icon} alt='icon' /></span>)}  <span className='description'>{TrimContent(text,50)}</span>
        </div>
        <div className='tag'>
            <MdCircle style={{marginRight:"5px"}} /> Feature Request
        </div>
    </div>
  )
}

export default Card