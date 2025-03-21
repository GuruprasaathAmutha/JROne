import Navbar from "./Navbar/Navbar";
import Homepage from "./HomePage/Homepage";
import Cards from "./Cards/Cards";
import Pomodoro from "./Pomodoro/Pomodoro";
import { DndContext, closestCorners } from "@dnd-kit/core";


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
  return (
    <>
      <div className="min-h-screen flex flex-col gap-4 p-4">
        {/* <Homepage>
        </Homepage> */}
        {/* <Navbar></Navbar> */}
        <DndContext collisionDetection={closestCorners}>
          <Cards myMap={b} ></Cards>
        </DndContext>
        {/* 
        <Pomodoro></Pomodoro> */}


      </div>

    </>
  );
}
