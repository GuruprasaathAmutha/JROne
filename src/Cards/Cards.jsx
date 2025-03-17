import { useEffect, useState } from "react"


const Cards = () => {

    const [pending, setPtasks] = useState([]);
    const [OnProgress, setOPtasks] = useState([]);
    const [completed, setCtasks] = useState([]);
    const [newTask, setnewTask] = useState(false);
    const [inputadd, setinputadd] = useState('');

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
        setinputadd(e.target.value);
        setnewTask(false);
    }


    return (

        <>
            <div className=' relative w-full flex-1'>
                <div className="flex content-center">
                    <div className="w-60 border-2 border-red-600 h-auto  mx-auto  hover:bg-red-400 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6">
                        <div className="flex mb-8">
                            <h2 className="text-xl text-white font-extrabold">To-Do</h2>
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
                                    onDoubleClick={newTaskadd}
                                    className=" w-48 border-l-4 border-b-2 p-2 mb-4 rounded-md transform transition duration-300  hover:scale-105 text-white mt-2"
                                />
                                </li>
                            )}
                            {inputadd.length != 0 && < li className=" border-l-4 border-b-2 p-2 mb-4  rounded-md transform transition duration-300  hover:scale-105 text-white mt-2"> {inputadd}</li>}
                            {pending.map((task) => {
                                return <li className=" border-l-4 border-b-2 p-2 mb-4  rounded-md transform transition duration-300  hover:scale-105 text-white mt-2" key={task.taskid}> {task.task}</li>;
                            })}
                        </ol>
                    </div>
                    <div className="w-60 h-auto  border-2 border-yellow-600 mx-auto  hover:bg-yellow-400 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6 ">

                        <div className="flex mb-8">
                            <h2 className="text-xl text-white font-extrabold">On-Going Task</h2>
                        </div>
                        <ol>
                            {OnProgress.map((task) => {
                                return <li className=" border-l-4 border-b-2 p-2 mb-4 rounded-md transform transition duration-300  hover:scale-105 text-white mt-2" key={task.taskid}>{task.task}</li>;
                            })}
                        </ol>
                    </div>
                    <div className="w-60 h-auto border-2 border-green-600 mx-auto  hover:bg-lime-200 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6 ">
                        <h2 className="text-xl text-white font-extrabold">Completed Task</h2>
                        {completed.map((task) => {
                            return <p className="border-l-4 border-b-2 p-2 mb-4 rounded-md transform transition duration-300  hover:scale-105 text-white mt-2" key={task.taskid}>{task.task}</p>;
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}




export default Cards