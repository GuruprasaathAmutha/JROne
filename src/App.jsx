import React from "react";
import Navbar from "./Navbar/Navbar";
import Homepage from "./HomePage/Homepage";
import Cards from "./Cards/Cards";


export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-4 p-4">

        <Navbar></Navbar>
        <Cards></Cards>
        <Homepage></Homepage>


      </div>


    </>
  );
}
