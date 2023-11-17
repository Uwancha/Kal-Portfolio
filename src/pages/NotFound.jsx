import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h2>Ooooopps...</h2>
      <p>page not found </p>
      <Link to="/">Back to Home page</Link>
    </div>
  );
}

export default NotFound;