import { closestCorners, DndContext } from "@dnd-kit/core";
import { useState } from "react";
import Column from "./CompForDND/Column";
import { arrayMove } from "@dnd-kit/sortable";
import Cards from "./Cards/Cards";
import Navbar from "./Navbar/Navbar";
import Homepage from "./HomePage/Homepage"
import Pomodoro from "./Pomodoro/Pomodoro"


export default function App() {

  const [task, settask] = useState([
    { id: 1, desc: "one" },
    { id: 2, desc: "two" },
    { id: 3, desc: "three" }
  ]);


  const taskposition = id => task.findIndex(t => t.id === id);

  const onDragEnd = event => {
    const { active, over } = event


    if (active.id === over.id) return;


    settask(task => {
      const original = taskposition(active.id);
      const newpos = taskposition(over.id);
      return arrayMove(task, original, newpos);
    })
  }


  return (
    <>
      <div>

        <Homepage></Homepage>
        <Navbar></Navbar>
        <DndContext>
          <Cards />
        </DndContext>
        <Pomodoro></Pomodoro>

      </div>


    </>
  );


}
