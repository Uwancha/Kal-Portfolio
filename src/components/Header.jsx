import React from "react";
//import { Link } from "react-router-dom";

const Header = () => {

return (
<div className="header py-6">
    <nav className="ml-auto pr-20 flex items-center">
        <a href="/" className="pr-5 text-slate-500 font-bold hover:text-green-626">
            Home
        </a>
        <a href="/projects" className="pr-5 text-slate-500 font-bold hover:text-green-626">
            Works 
        </a> 
        <a href="/about" className="text-slate-500 font-bold hover:text-green-626">
            About
        </a>
  </nav>
</div>
)
}

export default Header;