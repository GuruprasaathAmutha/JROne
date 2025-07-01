
import { useSortable } from '@dnd-kit/sortable';
import React from 'react'
import { CSS } from '@dnd-kit/utilities'





const UnitTask = ({ id, task, taskstyle }) => {

   const { attributes, setNodeRef, transition, transform, listeners } = useSortable({ id });
   const style = {
      transition,
      transform: CSS.Transform.toString(transform),
   };

   return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
         <li className={taskstyle} >{task}</li>
      </div>
   )
}

export default UnitTask