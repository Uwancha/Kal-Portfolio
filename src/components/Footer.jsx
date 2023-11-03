import React from "react";

import linkedIcon from "../assets/linkedin_145807.png";
import instagramIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter_3670151.png";


const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-200 py-10 mt-5">
        <div className="max-w-screen-md mx-auto flex flex-col items-center">
  
          <div className="flex mb-10">
            <a href="#" className="hover:opacity-75">
              <img 
                src={instagramIcon} 
                alt="Link to Github"
                className="w-8 mr-4 rounded-full transition duration-150 ease-in-out"
              />
            </a>
  
            <a href="#" className="hover:opacity-75">
              <img
                src={linkedIcon}
                alt="Link to LinkedIn"
                className="w-8 mr-4 transition duration-150 ease-in-out" 
              />
            </a>
  
            <a href="#" className="hover:opacity-75">
              <img
                src={twitterIcon}
                alt="Link to Twitter"
                className="w-8 transition duration-150 ease-in-out"
              />
            </a>
          </div>
  
          <p className="text-sm">
            &copy; 2023 designed and coded by Sitota Alemu
          </p>
  
        </div>
      </footer>
    )
}


export default Footer;