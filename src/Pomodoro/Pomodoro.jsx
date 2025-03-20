
import { FaInstagram } from "react-icons/fa";
import { FaMeta, FaX } from "react-icons/fa6";
const Pomodoro = () => {
    return (
        < footer className=' relative flex bottom-0 w-auto border-1 p-2 border-white  rounded-2xl shadow-2xs ' >
            <div className="space-x-4 mt-4 md:mt-0 ">
                <a href="https://en.wikipedia.org/wiki/Facebook" className="text-white hover:text-blue-800 hover:brightness-200"><FaMeta size={20} /></a>
                <a href="https://en.wikipedia.org/wiki/Twitter" className="text-white hover:text-gray-700 hover:brightness-200"><FaX size={20} /></a>
                <a href="https://en.wikipedia.org/wiki/Instagram" className="text-white hover:text-pink-700"><FaInstagram size={20} /></a>
            </div>
            <div className="space-x-4 mt-4 md:mt-0 ">

            </div>
        </footer >

    )
}

export default Pomodoro