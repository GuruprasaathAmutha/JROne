import dayjs from 'dayjs';


console.log(dayjs().format('YYYY-MM-DD HH:mm:ss')); // 2025-02-08 14:30:15

const Navbar = () => {
    return (

        <div className=' w-full flex justify-between top-2.5 left-2.5 z-50 p-4'>
            <div className='w-7 h-16'>  <img src="src/assets/settings.svg" alt="" />
            </div>
            <div className='Quote font-extrabold text-3xl  text-white font-serif drop-shadow-[2px_2px_0_black]'>  <p >Preserverance Triumphs </p></div>
            <div className='Quote w-32'>  <p className='text-white justify-center font-extrabold '> {dayjs().format('YYYY-MM-DD HH:mm:ss')}</p> </div>
        </div>
    )
}

export default Navbar