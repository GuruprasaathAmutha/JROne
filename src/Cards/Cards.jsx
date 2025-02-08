import React from 'react'

const Cards = () => {
    return (

        <>
            <div className='w-full h-auto flex'>
                <div className="w-60 h-auto mx-auto bg-red-500 shadow-lg rounded-xl p-6">
                    <h2 className="text-xl font-semibold">To-Do</h2>
                    <p className="text-gray-600 mt-2">Task one</p>
                </div>
                <div className="w-60 h-auto mx-auto bg-yellow-400 shadow-lg rounded-xl p-6">
                    <h2 className="text-xl font-semibold">On-Going Task</h2>
                    <p className="text-gray-600 mt-2">Task two</p>
                </div>
                <div className="w-60 h-auto mx-auto bg-green-500 shadow-lg rounded-xl p-6">
                    <h2 className="text-xl font-semibold">Completed Task</h2>
                    <p className="text-gray-600 mt-2">Completed Task</p>
                </div>
            </div>
        </>
    )
}

export default Cards