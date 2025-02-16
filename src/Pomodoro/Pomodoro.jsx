
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Pomodoro = () => {
    return (
        // <div className='relative flex w-auto h-auto p-72'> <h1 className='text-white font-bold'>Pomodoro</h1></div>

        <footer className=' relative bottom-0 w-full border-2 p-2 border-black rounded-2xl shadow-2xs bg-amber-50'>
            <div className="space-x-4 mt-4 md:mt-0 ">
                <a href="#" className="hover:text-gray-400"><FaFacebook size={20} /></a>
                <a href="#" className="hover:text-gray-400"><FaTwitter size={20} /></a>
                <a href="#" className="hover:text-gray-400"><FaInstagram size={20} /></a>
            </div>
        </footer>
    )
}

export default Pomodoro