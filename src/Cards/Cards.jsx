const Cards = () => {


    // const fetchdata = async () => {
    //     try {
    //         const resp = await fetch("http://localhost:8080/path");
    //         console.log(resp);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => )

    return (

        <>
            <div className=' relative w-full flex-1'>
                <div className="flex">
                    <div className="w-60 border-2 border-black h-auto  mx-auto bg-red-400 hover:bg-red-600 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6">
                        <h2 className="text-xl font-semibold">To-Do</h2>
                        <p className="text-gray-600 mt-2">dsfa</p>
                    </div>
                    <div className="w-60 h-auto  border-2 border-black mx-auto bg-yellow-200 hover:bg-yellow-400 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6">
                        <h2 className="text-xl font-semibold">On-Going Task</h2>
                        <p className="text-gray-600 mt-2">Task two</p>
                    </div>
                    <div className="w-60 h-auto border-2 border-black mx-auto bg-green-200 hover:bg-green-500 duration-300 hover: transition-all drop-shadow-2xl rounded-3xl p-6">
                        <h2 className="text-xl font-semibold">Completed Task</h2>
                        <p className="text-gray-600 mt-2">Completed Task</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards