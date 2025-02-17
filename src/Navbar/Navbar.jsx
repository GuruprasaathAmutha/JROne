import { useEffect } from 'react';
import { useState } from 'react';

const Navbar = () => {

    const [time, setTime] = useState(new Date());


    useEffect(

        () => {
            setInterval(() => {
                setTime(new Date())
            }, 1000)
        },
        []


    )


    return (

        <div className=' w-full flex justify-between top-2.5 left-2.5 z-50 p-4'>
            <div className='w-7 h-16'>  <img src="src/assets/settings.svg" alt="" />
            </div>
            <div className='Quote font-extrabold text-3xl  text-white font-serif r drop-shadow-[2px_2px_0_black]'>  <p> "JUST DO IT !!" </p></div>
            <div className='Quote w-32'>  <p className='text-white justify-center font-extrabold '> {time.toUTCString()}</p> </div>
        </div>
    )
}

export default Navbar