import React from 'react'
import './Section.css'
import ToDoSection from './ToDoSection';
import UserSection from './UserSections'
import PrioritySection from './PrioritySection'
function SectionMain({group,order}) {
    if(group==='status'){
        return (
            <div className='sections'>
                <ToDoSection type={"todo"} title_count={2} />
                <ToDoSection type={"done"} title_count={3} />
                <ToDoSection type={"backlog"} title_count={3} />
                <ToDoSection type={"progress"} title_count={2} />
                <ToDoSection type={"cancel"} title_count={0} />
            </div>
          )
    } else if(group === 'user'){
        return (
            <div className='sections'>
                <UserSection title_count={2} />
                <UserSection title_count={3} />
                <UserSection title_count={3} />
                <UserSection title_count={2} />
                <UserSection title_count={0} />
            </div>
          )
    }
  return (
    <div className='sections'>
        <PrioritySection type={"no"} title_count={2} />
        <PrioritySection type={"urgent"} title_count={2} />
        <PrioritySection type={"high"} title_count={3} />
        <PrioritySection type={"medium"} title_count={3} />
        <PrioritySection type={"low"} title_count={2} />
    </div>
  )
}

export default SectionMain