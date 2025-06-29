import { closestCorners, DndContext } from "@dnd-kit/core";
import { useState } from "react";
import Column from "./CompForDND/Column";
import { arrayMove } from "@dnd-kit/sortable";



export default function App() {

  const[task,settask]=useState([
    {id:1,desc:"one"},
    {id:2,desc:"two"},
    {id:3,desc:"three"}
  ]);


  const taskposition = id => task.findIndex(t => t.id ===id);

  const onDragEnd = event =>{
    const{active,over} =event


    if(active.id===over.id) return;


    settask(task =>{
      const original = taskposition(active.id);
      const newpos = taskposition(over.id);
       return arrayMove(task,original,newpos);
    })
  }


  return (
    <>
     <div className="w-1/2 m-3.5. border-4 mx-auto bg-blue-200">
                        TASKS TO DO 

     <div className="border-4" >
          <DndContext onDragEnd={onDragEnd} collisionDetection={closestCorners}>

                   <Column task={task}></Column>
          </DndContext>

     </div>
  
         
    </div>


    </>
  );


}
