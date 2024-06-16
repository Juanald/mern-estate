import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks.js";
import { signInSuccess } from "../redux/user/userslice.js";

export default function OAuth() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const credentials = await signInWithPopup(auth, provider);
      // Make a fetch request to a /api/auth/google endpoint to log the user in
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: credentials.user.displayName,
          email: credentials.user.email,
          photo: credentials.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };
  return (
    <button
      type="button"
      className="bg-red-700 rounded-lg p-3 uppercase text-white"
      onClick={handleGoogleAuth}
    >
      Continue with google
    </button>
  );
}
