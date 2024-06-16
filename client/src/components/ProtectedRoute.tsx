import React from "react";
import { useAppSelector } from "../redux/hooks";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { currentUser } = useAppSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
}
