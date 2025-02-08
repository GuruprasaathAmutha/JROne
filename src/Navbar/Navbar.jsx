import React from 'react'

const Navbar = () => {
    return (

        <nav class="fixed w-full bg-teal-300 hover:bg-blue-600 shadow-md duration-300 ease-in-out top-0 left-0 z-50">
            <div className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16'>
                <ul className='hidden md:flex space-x-6'>
                    <li onClick={() => {
                        alert("Redirecting to home page!")
                    }} className='text-gray-800 hover:text-gray-500 transition duration-300'>Home</li>
                    <li onClick={() => {
                        alert("Redirecting to  page!")
                    }} className='text-gray-800 hover:text-gray-500 transition duration-300'>Contact</li>
                    <li onClick={() => {
                        alert("Redirecting to home page!")
                    }} className='text-gray-800 hover:text-gray-500 transition duration-300'>About</li>
                    <li onClick={() => {
                        alert("Redirecting to home page!")
                    }} className='text-gray-800 hover:text-gray-500 transition duration-300'>License</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar