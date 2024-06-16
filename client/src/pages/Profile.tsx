import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useState } from "react";

export default function Profile() {
  const { currentUser, loading, errors } = useAppSelector(
    (state) => state.user
  );
  const [formData, setFormData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleProfileUpdate = async () => {};
  const handleProfilePictureUpdate = async () => {};

  return (
    <div className="px-3 max-w-2xl mx-auto">
      <h1 className="text-3xl text-center my-4 font-bold">Profile</h1>
      <img
        className="rounded-full my-4 mx-auto"
        src={currentUser.photoAvatar}
        alt="avatar"
      />
      <form className="flex flex-col gap-4">
        <input
          className="border rounded-lg p-3"
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        ></input>
        <input
          className="border rounded-lg p-3"
          type="email"
          id="email"
          placeholder="email"
          onChange={handleChange}
        ></input>
        <input
          className="border rounded-lg p-3"
          id="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        ></input>
      </form>
      <div className="flex flex-col gap-4 my-4">
        <button
          className="bg-slate-700 rounded-lg p-3 uppercase text-white hover:opacity-95"
          onClick={handleProfileUpdate}
        >
          {loading ? "Loading..." : "Update profile"}
        </button>
        <button
          className="bg-slate-700 rounded-lg p-3 uppercase text-white hover:opacity-95"
          onClick={handleProfilePictureUpdate}
        >
          {loading ? "Loading..." : "Update profile picture"}
        </button>
        {errors ? <p className="text-red-700">{errors}</p> : <></>}
      </div>
    </div>
  );
}
