import React from "react";

import image from "../assets/kal.png";

const Home = () => {

    
    return (
        <div className="w-full max-w-screen-md mx-auto flex flex-col items-center py-20">
            
            <img 
                src={image} 
                alt="kal's Icon"
                className="w-40 rounded-full h-40 shadow-xl md:w-60 md:h-60 mb-20"
            />

            <div className="flex flex-col text-left">

                <h4 className="text-xl font-bold mb-2">Hi there!</h4>
    
                <h3 className="text-gray-600 font-bold mb-2">I'm Kalkidan</h3>

                <h3 className="text-gray-600 font-bold ">
                    I'm a Video Editor.  
                </h3>

                <h3 className="w-30 text-gray-600 font-bold mb-5" >
                    I create video content for brands, podcasts and influencers
                </h3>
                <a
                    href="/about"
                    className="mr-auto px-6 py-2 text-white bg-blue-600 rounded shadow-md hover:bg-blue-700"
                >
                    Learn More
                </a>

            </div>

        </div>
    )
}

export default Home;