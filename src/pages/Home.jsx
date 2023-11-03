import React from "react";

import image from "../assets/kal.png";

const Home = () => {

    
    return (
        <div className="w-full max-w-screen-md mx-auto flex flex-col items-center py-20">
            
            <img 
                src={image} 
                alt="kal's Icon"
                className="w-40 rounded-full h-40 shadow-xl md:w-30 md:h-30 mb-10"
            />

            <div className="flex flex-col text-center">

                <h4 className="text-green-626 font-bold mb-2">Hi there! I'm </h4>
    
                <h3 className="text-7xl text-slate-700 font-bold mb-7">Kalkidan Birhanu</h3>

                <h3 className="text-slate-700 text-lg mb-10">
                    I'm a Video Editor.  
                    I create video content for brands, podcasts and influencers
                </h3>
                <a
                    href="/about"
                    className="mx-auto px-12 py-3 text-white 
                    text-xl bg-green-626 border border-green-626 rounded-full shadow-md 
                    hover:bg-transparent hover:text-green-626 
                    hover:border hover:border-green-626
                    transition duration-500 ease-in-out"
                >
                    Learn More
                </a>

            </div>

        </div>
    )
}

export default Home;