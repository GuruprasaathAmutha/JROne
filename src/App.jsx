import Navbar from "./Navbar/Navbar";
import Homepage from "./HomePage/Homepage";
import Cards from "./Cards/Cards";
import Pomodoro from "./Pomodoro/Pomodoro";
import { DndContext, closestCorners } from "@dnd-kit/core";


export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-4 p-4">
        <Homepage>
        </Homepage>
        <Navbar></Navbar>
        <DndContext collisionDetection={closestCorners}>
          <Cards></Cards>
        </DndContext>

        <Pomodoro></Pomodoro>


      </div>

    </>
  );
}
