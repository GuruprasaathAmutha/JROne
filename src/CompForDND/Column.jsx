import React from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Task from './Task'
const Column = ({ task }) => {
  return <div>
      <SortableContext items={task} strategy={verticalListSortingStrategy}>
        {task.map(one => (
          <Task id={one.id} taskdesc={one.desc} key={one.id}></Task>
        ))}
      </SortableContext>
  
  </div>
}

export default Column