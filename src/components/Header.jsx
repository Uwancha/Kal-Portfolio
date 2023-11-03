import React from "react";
//import { Link } from "react-router-dom";

const Header = () => {

return (
<div className="flex justify-between px-40 py-5 border-b border-gray-200">
    <h2 className="text-3xl text-green-626 font-bold">Kal</h2>

    <nav className="flex">
        <a href="/" className="px-4 text-slate-500 font-bold hover:text-green-626">
            Home
        </a>
        <a href="/projects" className="px-4 text-slate-500 font-bold hover:text-green-626">
            Projects 
        </a> 
        <a href="/about" className="px-4 text-slate-500 font-bold hover:text-green-626">
            About
        </a>
  </nav>
</div>
)
}

export default Header;