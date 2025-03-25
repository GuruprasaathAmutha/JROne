import Navbar from "./Navbar/Navbar";
import Homepage from "./HomePage/Homepage";
import Cards from "./Cards/Cards";
import Pomodoro from "./Pomodoro/Pomodoro";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { Pending } from "./Cards/Pending";
import { useState } from "react";


export default function App() {
  const b = [{
    "taskid": 15,
    "task": "Scaling completed!!",
    "status": "pending"
  },
  {
    "taskid": 14,
    "task": "Not Bad Man!!",
    "status": "pending"
  },]
  const [parent, setparent] = useState(null);
  return (
    <>
      <div className="min-h-screen flex flex-col gap-4 p-4">
        {/* <Homepage>
        </Homepage> */}
        {/* <Navbar></Navbar> */}
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          {/* <Cards myMap={b} ></Cards> */}
          <Pending id="1" arg="guru"></Pending>
        </DndContext>
        {/* 
        <Pomodoro></Pomodoro> */}


      </div >

    </>
  );

  function handleDragEnd({ over }) {
    setparent(over ? over.id : null);
  }

}
