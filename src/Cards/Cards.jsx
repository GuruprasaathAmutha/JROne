

const Cards = () => {




    return (

        <>
            <div className=' relative w-full flex-1'>
                <div className="flex">
                    <div className="w-60 border-2 border-red-600 h-auto  mx-auto  hover:bg-red-400 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6">
                        <h2 className="text-xl text-white font-extrabold">To-Do</h2>
                        <p className=" text-white mt-2">dsfa</p>
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