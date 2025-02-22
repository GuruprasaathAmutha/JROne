import { useEffect, useState } from "react"


const Cards = () => {

    const [pending, setPtasks] = useState([]);
    const [OnProgress, setOPtasks] = useState([]);
    const [completed, setCtasks] = useState([]);

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




    return (

        <>
            <div className=' relative w-full flex-1'>
                <div className="flex content-center">
                    <div className="w-60 border-2 border-red-600 h-auto  mx-auto  hover:bg-red-400 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6">
                        <h2 className="text-xl text-white font-extrabold">To-Do</h2>
                        {pending.map((task) => {
                            return <p className=" text-white mt-2" key={task.taskid}>{task.task}</p>;
                        })}
                    </div>
                    <div className="w-60 h-auto  border-2 border-yellow-600 mx-auto hover:bg-yellow-400 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6">
                        <h2 className="text-xl text-white font-extrabold">On-Going Task</h2>
                        {OnProgress.map((task) => {
                            return <p className=" text-white mt-2" key={task.taskid}>{task.task}</p>;
                        })}
                    </div>
                    <div className="w-60 h-auto border-2 border-green-600 mx-auto  hover:bg-green-500 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6">
                        <h2 className="text-xl text-white font-extrabold">Completed Task</h2>
                        {completed.map((task) => {
                            return <p className=" text-white mt-2" key={task.taskid}>{task.task}</p>;
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards