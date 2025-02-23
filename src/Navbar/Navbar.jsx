import { useEffect } from 'react';
import { useState } from 'react';

const Navbar = () => {

    const [time, setTime] = useState(new Date());

    const [settings, setsettings] = useState(false);


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

            <div className='w-7 h-16'>  <img onMouseEnter={() => setsettings(false)} onMouseLeave={() => setsettings(true)} src={`   ${settings ? "src/assets/settings.svg" : "src/assets/settings_normal.svg"} `} alt="An svg settings icon" />
            </div>
            <div className='Quote font-extrabold text-3xl  text-white font-serif r drop-shadow-[2px_2px_0_black]'>  <p> "JUST DO IT !!" </p></div>
            <div className='Quote w-32'>  <p className='text-white justify-center font-extrabold '> {time.toUTCString()}</p> </div>
        </div>
    )
}

export default Navbar