import { useEffect, useState } from "react"
import UnitTask from "./UnitTask";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { use } from "react";
import { closestCorners, DndContext } from "@dnd-kit/core";


const Cards = () => {

    const [pending, setPtasks] = useState([]);
    const [OnProgress, setOPtasks] = useState([]);
    const [completed, setCtasks] = useState([]);
    const [newTask, setnewTask] = useState(false);
    const [change, setChange] = useState(false);
    const [allIds, setAllIds] = useState([]);


    const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    // Find which column the active and over items are in
    const columns = {
      pending,
      OnProgress,
      completed,
    };

    let fromList, toList, fromSetter, toSetter;
    for (const [key, list] of Object.entries(columns)) {
      if (list.find((t) => t.taskid === active.id)) {
        fromList = list;
        fromSetter = {
          pending: setPtasks,
          OnProgress: setOPtasks,
          completed: setCtasks,
        }[key];
      }
      if (list.find((t) => t.taskid === over.id)) {
        toList = list;
        toSetter = {
          pending: setPtasks,
          OnProgress: setOPtasks,
          completed: setCtasks,
        }[key];
      }
    }

    if (!fromList || !toList) return;

    // Remove from old list
    const fromIndex = fromList.findIndex((t) => t.taskid === active.id);
    const [moved] = fromList.splice(fromIndex, 1);

    // Insert into new list
    const toIndex = toList.findIndex((t) => t.taskid === over.id);
    toList.splice(toIndex, 0, moved);

    fromSetter([...fromList]);
    toSetter([...toList]);
  };




    useEffect(() => {
        fetch("http://localhost:9092/allIds").then((Response) => Response.json()).
            then((data) => {
                setAllIds(data);
            }).
            catch((error) => console.log(error))
    }, []);


    useEffect(
        () => {
            fetch("http://localhost:9092/Pending").then((Response) => Response.json()).
                then((data) => {
                    setPtasks(data);
                }).
                catch((error) => console.log(error))
        }, [change]);


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
        if (e.key === 'Enter') {
            setnewTask(false);
            addnewTask(e.target.value);
        }

    }

    const addnewTask = (e) => {
        fetch(`http://localhost:9092/newTask?task=${e}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        }).then((Response) => {
            if (Response.ok) {
                setChange(!change);
            } else {
                console.error("Failed to add new task");
            }
        }).catch((error) => console.error("Error:", error));
    }


    return (
        <DndContext onDragEnd={handleDragEnd} >
            <div className='flex-wrap md:flex-row w-full min-h-screen '>
                <div className="flex content-center">

                    <div className="w-60 border-2 border-red-600 h-fit  mx-auto  hover:bg-red-600 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6">
                        <SortableContext items={pending.map(task => task.taskid)} strategy={verticalListSortingStrategy}>
                            <div className="flex mb-8">
                                <h2 className="text-xl text-white font-extrabold">TO-DO</h2>
                                <input type="button" value="+" className="ml-auto font-extrabold text-white hover:cursor-pointer" onClick={() => {
                                    setnewTask(true);
                                }} />
                            </div>
                            <ol >
                                {newTask && (
                                    <li className=""><input
                                        name=""
                                        id="newTask"
                                        type="text"
                                        onKeyDown={newTaskadd}
                                        className=" w-48 border-l-4 border-b-2 p-2 mb-4 rounded-md transform transition duration-300  hover:scale-105  text-white mt-2"
                                    />
                                    </li>
                                )}

                                {pending.map(task => (
                                    <UnitTask id={task.taskid} taskstyle={" border-l-4 border-b-2 p-2 mb-4 rounded-md transform transition duration-300  hover:scale-105 hover:bg-red-500 text-white mt-2"} task={task.task} key={task.taskid} />
                                ))}



                            </ol>

                        </SortableContext>
                    </div>


                    <div className="w-60 h-fit  border-2 border-yellow-500 mx-auto  hover:bg-yellow-500 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6 ">
                        <SortableContext items={OnProgress.map(task => task.taskid)} strategy={verticalListSortingStrategy}>
                            <div className="flex mb-8">
                                <h2 className="text-xl text-white font-extrabold">ON PROGRESS</h2>
                            </div>
                            <ol>
                                {OnProgress.map((task) => {
                                    return <UnitTask id={task.taskid} task={task.task} taskstyle={"border-l-4 border-b-2 p-2 mb-4 rounded-md transform transition duration-300 hover:bg-yellow-400 hover:scale-105 text-white mt-2"} key={task.taskid} />
                                })}
                            </ol>
                        </SortableContext>
                    </div>

                    <div className="w-60 h-fit border-2 border-green-600 hover:bg-lime-600 mx-auto  duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6 ">
                        <SortableContext items={completed.map(task => task.taskid)} strategy={verticalListSortingStrategy}>
                            <div className="flex mb-8">
                                <h2 className="text-xl text-white font-extrabold">NAILED IT !!</h2>
                            </div>
                            <ol>
                                {completed.map((task) => {
                                    return <UnitTask id={task.taskid} task={task.task} taskstyle={"border-l-4 border-b-2 p-2 mb-4 rounded-md transform transition duration-300 hover:bg-lime-500 hover:scale-105 text-white mt-2"} key={task.taskid} />
                                })}
                            </ol>

                        </SortableContext>
                    </div>

                </div>
            </div >
        </DndContext>
    )



}




export default Cards