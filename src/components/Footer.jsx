import React from "react";

//Icons
import fbIcon from "../assets/facebook_4494475.png";
import linkedIcon from "../assets/linkedin_145807.png";
import instagramIcon from "../assets/instagram.svg";
import telgramIcon from "../assets/telegram.png";


const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-200 py-10 mt-5 relative">
        <div className="max-w-screen-md mx-auto flex flex-col items-center">
  
          <div className="flex mb-10">
          <a href="https://www.facebook.com/kalkidanbirhanu982" className="hover:opacity-75">
              <img 
                src={fbIcon} 
                alt="Link to fb"
                className="w-8 mr-4 rounded-full transition duration-150 ease-in-out"
              />
            </a>

            <a href="https://www.instagram.com/_kal982/" className="hover:opacity-75">
              <img 
                src={instagramIcon} 
                alt="Link to IG"
                className="w-8 mr-4 rounded-full transition duration-150 ease-in-out"
              />
            </a>
  
            <a href="https://www.linkedin.com/in/kalkidan-birhanu" className="hover:opacity-75">
              <img
                src={linkedIcon}
                alt="Link to LinkedIn"
                className="w-8 mr-4 transition duration-150 ease-in-out" 
              />
            </a>
  
            <a href="https://t.me/kal982" className="hover:opacity-75">
              <img
                src={telgramIcon}
                alt="Link to telegram"
                className="w-8 transition duration-150 ease-in-out"
              />
            </a>
          </div>
  
          <p className="text-sm">
            &copy; 2023 designed and coded by <a href="https://www.linkedin.com/in/sitota" style={{color:'GrayText'}}>Sitota Alemu</a>
          </p>
  
        </div>
      </footer>
    )
}


export default Footer;