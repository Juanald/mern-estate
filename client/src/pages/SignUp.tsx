import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      setErrors(data.message);
      console.log(errors);
      setLoading(false);
      return;
    }
    setLoading(false);
    setErrors(null);
    navigate("/");
  };

  return (
    <div className="px-3 max-w-2xl mx-auto">
      <h1 className="text-3xl text-center my-4 font-bold">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          className="border rounded-lg p-3"
          placeholder="username"
          id="username"
          onChange={handleChange}
        ></input>
        <input
          type="email"
          className="border rounded-lg p-3"
          placeholder="email"
          id="email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          className="border rounded-lg p-3"
          placeholder="password"
          id="password"
          onChange={handleChange}
        ></input>
        <button className="bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? "Loading..." : "Sign up"}
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Already have an account?</p>
        <Link to="/signin">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {errors && <p className="text-red-700">{errors}</p>}
    </div>
  );
}
