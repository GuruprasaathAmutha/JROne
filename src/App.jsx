import Navbar from "./Navbar/Navbar";
import Homepage from "./HomePage/Homepage";
import Cards from "./Cards/Cards";
import Pomodoro from "./Pomodoro/Pomodoro";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { useState } from "react";
import Column from "./CompForDND/Column";



export default function App() {

  const[task,settask]=useState([
    {id:1,desc:"one"},
    {id:2,desc:"two"},
    {id:3,desc:"three"}
  ]);

  return (
    <>
     <div className="w-1/2 m-3.5. border-4 mx-auto bg-blue-200">
                        TASKS TO DO 

     <div className="border-4" >
          <DndContext collisionDetection={closestCorners}>
                   <Column task={task}></Column>
          </DndContext>

     </div>
  
         
    </div>


    </>
  );


}
