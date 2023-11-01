import React from "react";
//import { Link } from "react-router-dom";

const Header = () => {

return (
<div className="flex justify-between px-10 py-5 border-b border-gray-200">
    <h2 className="text-3xl font-bold">Kal</h2>

    <nav className="flex">
        <a href="/" className="px-4 text-blue-500 hover:text-blue-700">
            Home
        </a>
        <a href="/projects" className="px-4 text-blue-500 hover:text-blue-700">
            Projects 
        </a> 
        <a href="/about" className="px-4 text-blue-500 hover:text-blue-700">
            About
        </a>
  </nav>
</div>
)
}

export default Header;