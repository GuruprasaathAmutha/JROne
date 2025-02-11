import React from 'react'
import bgImage from "../assets/beautiful-shot-large-gray-moon-evening-sky-thick-green-forest.jpg"
import bgImageone from "../assets/Velura-Modern-Steel-Blue-Soft-Curvy-Waves-Wallpaper-Mural-710x383.jpg"
import bgImagetwo from "../assets/Desktop-Aesthetic-Wallpaper-Anime-Girl.jpg"

const Homepage = () => {
    return (
        <>
            <div className='absolute inset-0 h-screen bg-cover bg-center' style={{ backgroundImage: `url(${bgImageone})` }}>
            </div>
        </>

    )
}

export default Homepage