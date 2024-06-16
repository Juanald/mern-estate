import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

export default function Header() {
  const { currentUser } = useAppSelector((state) => state.user);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Gavin</span>
            <span className="text-slate-700">Estates</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4 justify-center items-center">
          <Link
            to="/"
            className="hidden sm:inline text-slate-700 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hidden sm:inline text-slate-700 hover:underline"
          >
            About
          </Link>
          {/* We do it this way because if we are not signed in, we will always be directed to a login page */}
          <Link to="/profile" className="text-slate-700 hover:underline">
            {currentUser ? (
              <img
                className="rounded-full w-10 h-10"
                src={currentUser.photoAvatar}
                alt="profile"
              />
            ) : (
              <span>Sign in</span>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
