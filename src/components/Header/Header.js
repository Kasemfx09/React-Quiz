import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="p-1 bg-gray-700 text-gray-100 mx-auto">
      <div className=" header flex flex-row justify-between h-16 px-6 ">
        <Link className="flex items-center p-2">
          <h1 className="text-rose-700 font-bold text-2xl">quickQuiz</h1>
        </Link>
        <ul className="flex flex-row gap-2">
          <li className="flex">
            <Link className="flex items-center px-4 -mb-1" to="/home">
              Home
            </Link>
          </li>
          <li className="flex">
            <Link className="flex items-center px-4 -mb-1" to="/statistics">
              Statistics
            </Link>
          </li>
          <li className="flex">
            <Link className="flex items-center px-4 -mb-1" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
