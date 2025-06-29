import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React from 'react'

const Task = ({id,taskdesc}) => {

const{attributes,setNodeRef,transition,transform,listeners}=  useSortable({id});
const style={
    transition,
    transform: CSS.Transform.toString(transform),
};

  return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='border-8 bg-gray-400'>

            {taskdesc}

        </div>
  )
}

export default Task