import { useEffect, useState } from "react"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

import { Pending } from "./Pending";

const Cards = ({ myMap }) => {

    const [pending, setPtasks] = useState([]);
    const [OnProgress, setOPtasks] = useState([]);
    const [completed, setCtasks] = useState([]);
    const [newTask, setnewTask] = useState(false);
    const dummy = ["apple", "dog", "cat"];



    useEffect(
        () => {
            fetch("http://localhost:9092/Pending").then((Response) => Response.json()).
                then((data) => {
                    setPtasks(data);
                }).
                catch((error) => console.log(error))
        }, []
    );

    useEffect(
        () => {
            fetch("http://localhost:9092/onProgress").then((Response) => Response.json()).
                then((cdata) => {
                    setOPtasks(cdata);
                }).
                catch((error) => console.log(error))

        }, []
    );

    useEffect(
        () => {
            fetch("http://localhost:9092/Completed").then((Response) => Response.json()).
                then((cdata) => {
                    setCtasks(cdata);
                }).
                catch((error) => console.log(error))

        }, []
    );

    const newTaskadd = (e) => {
        setnewTask(false);
        addnewTask(e.target.value);
    }

    const addnewTask = (e) => {
        fetch(`http://localhost:9092/newTask?task=${e}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        })
    }


    return (


        <div className="bg-amber-200 w-min flex-wrap h-fit">
            <SortableContext items={myMap} strategy={verticalListSortingStrategy}>

                {myMap.map((task) => (
                    <Pending id={task.taskid} key={task.taskid} arg={task.task} />
                ))}
            </SortableContext>
        </div>



        // {/* <div className='flex-wrap md:flex-row w-full min-h-screen '>
        //     <div className="flex content-center">

        //         <div className="w-60 border-2 border-red-600 h-fit  mx-auto  hover:bg-red-600 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6">
        //             <div className="flex mb-8">
        //                 <h2 className="text-xl text-white font-extrabold">To-Do</h2>
        //                 <input type="button" value="+" className="ml-auto font-extrabold text-white hover:cursor-pointer" onClick={() => {
        //                     setnewTask(true);
        //                 }} />
        //             </div>



        //             <ol >
        //                 {newTask && (
        //                     <li className=""><input
        //                         name=""
        //                         id="newTask"
        //                         type="text"
        //                         onDoubleClick={newTaskadd}
        //                         className=" w-48 border-l-4 border-b-2 p-2 mb-4 rounded-md transform transition duration-300  hover:scale-105 text-white mt-2"
        //                     />
        //                     </li>
        //                 )}
        //             </ol>
        //         </div>


        //         <div className="w-60 h-fit  border-2 border-yellow-500 mx-auto  hover:bg-yellow-500 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6 ">

        //             <div className="flex mb-8">
        //                 <h2 className="text-xl text-white font-extrabold">On-Going Task</h2>
        //             </div>
        //             <ol>
        //                 {OnProgress.map((task) => {
        //                     return <li className=" border-l-4 border-b-2 p-2 mb-4 rounded-md transform transition duration-300  hover:scale-105 text-white mt-2" key={task.taskid}>{task.task}</li>;
        //                 })}
        //             </ol>
        //         </div>

        //         <div className="w-60 h-fit border-2 border-green-600 hover:bg-lime-600 mx-auto  duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6 ">
        //             <div className="flex mb-8">
        //                 <h2 className="text-xl text-white font-extrabold">Completed Task</h2>
        //             </div>

        //             {completed.map((task) => {
        //                 return <p className="border-l-4 border-b-2 p-2 mb-4 rounded-md transform transition duration-300  hover:scale-105 text-white mt-2" key={task.taskid}>{task.task}</p>;
        //             })}
        //         </div>
        //     </div>
        // </div > */}

    )
}




export default Cards