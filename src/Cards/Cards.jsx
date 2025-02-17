import { useEffect, useState } from "react"


const Cards = () => {

    const [data, setData] = useState([]);

    useEffect(
        () => {
            fetch("http://localhost:9092/path").then((Response) => Response.json()).
                then((data) => { setData(data) }).
                catch((error) => console.log(error))
        }, []
    );




    return (

        <>
            <div className=' relative w-full flex-1'>
                <div className="flex content-center">
                    <div className="w-60 border-2 border-red-600 h-auto  mx-auto  hover:bg-red-400 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6">
                        <h2 className="text-xl text-white font-extrabold">To-Do</h2>

                        {/* {data.forEach((msg) => {
                            <p className=" text-white mt-2">{JSON.stringify(msg.message)}</p>
                        })} */}


                        <p className=" text-white mt-2">{JSON.stringify(data.message)}</p>

                    </div>
                    <div className="w-60 h-auto  border-2 border-yellow-600 mx-auto hover:bg-yellow-400 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6">
                        <h2 className="text-xl text-white font-extrabold">On-Going Task</h2>
                        <p className=" text-white mt-2">Task two</p>
                    </div>
                    <div className="w-60 h-auto border-2 border-green-600 mx-auto  hover:bg-green-500 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6">
                        <h2 className="text-xl text-white font-extrabold">Completed Task</h2>
                        <p className=" text-white mt-2">Completed Task</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards