import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="px-3 max-w-2xl mx-auto">
      <h1 className="text-3xl text-center my-4 font-bold">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="border rounded-lg p-3"
          placeholder="username"
          id="username"
        ></input>
        <input
          type="email"
          className="border rounded-lg p-3"
          placeholder="email"
          id="email"
        ></input>
        <input
          type="password"
          className="border rounded-lg p-3"
          placeholder="password"
          id="password"
        ></input>
        <button className="bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Already have an account?</p>
        <Link to="/signin">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
