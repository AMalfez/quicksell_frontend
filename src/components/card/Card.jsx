import React from 'react'
import './Card.css'
import { MdCircle } from "react-icons/md";
import { SectionTypes } from '../../utils/StatusType';
import {TrimContent} from '../../utils/Content'
import urgent from '../../icons_FEtask/SVG - Urgent Priority grey.svg'
import { PriorityMap, PriorityTypes } from '../../utils/PriorityTypes';

function Card({showUser, type, showIcon, showPriority, data}) {
  const icon = SectionTypes[type].title_icon;
  const text = "Impliment email notification system ";
  return (
    <div className='card_container'>
        <div className='card_cam'>
            <span>{data.id}</span> {!showUser && (<div className='user_icon'><div className='user_status_icon' style={{backgroundColor:data.available ? "lightgreen":"lightgrey"}}></div></div>)}
        </div>
        <div className='card_info'>
          {showIcon && (<span className='icon'><img src={icon} alt='icon' /></span>)}  <span className='description'>{TrimContent(data.title,50)}</span>
        </div>
        <div className='tag_container'>
          {showPriority && (<div className='tag'>
            {PriorityMap[data.priority] === "urgent" ? (<img src={urgent} alt='urgent' />):(<img src={PriorityTypes[PriorityMap[data.priority]].icon} alt='urgent' />)}
          </div>)}
          {data.tag.map(t=>(<div className='tag'>
              <MdCircle style={{marginRight:"5px"}} /> {t}
          </div>))}
        </div>
    </div>
  )
}

export default Card