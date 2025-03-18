
import { useState } from "react"
import bgImageone from "../assets/20844835_6248145.svg"

const Homepage = () => {

    const [bgarr, setbgarr] = useState([]);


    return (
        <>
            <div className='fixed inset-0 brightness-50 bg-cover bg-center' style={{ backgroundImage: `url(${bgImageone})` }}>
            </div>
        </>

    )
}

export default Homepage