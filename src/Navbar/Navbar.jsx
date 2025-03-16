import { useEffect } from 'react';
import { useState } from 'react';

const Navbar = () => {

    const [time, setTime] = useState(new Date());

    const [settings, setsettings] = useState(true);

    // const [isOpen, setIsOpen] = useState(false);


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

            <div className='w-7 h-16'>  <img onMouseEnter={() => {
                setsettings(false);
                settingsModal();
            }} onMouseLeave={() => setsettings(true)} src={`${settings ? "src/assets/settings.svg" : "src/assets/settings_normal.svg"} `} alt="An svg settings icon" />
            </div>
            <div className='titlefont Quote text-3xl  text-white drop-shadow-[2px_2px_0_black]'>  <p style={{ fontFamily: 'Montserrat' }}> ZEN POMO </p></div>
            <div className='Quote w-32'>  <p className='text-white justify-center font-extrabold '>{time.toLocaleDateString()} {time.toLocaleTimeString()}</p> </div>
        </div>
    )
}
const settingsModal = () => {
    <div className='bg-violet-400  w-3.5 h-3.5'>
        <ul>
            <li>Change background pic</li>
        </ul>
    </div>
}

export default Navbar