import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  const localStorageTier = localStorage.getItem("tier");

  if (!localStorageTier) {
    navigate("/");
  }

  return (
    <div className="flex items-center justify-center flex-col h-screen space-y-4">
      <h2 className="text-3xl font-bold">Thanks for your order!</h2>
      <h4>Your payment is successful.</h4>
      <div>Your plan is {localStorageTier}</div>
      <Link to="/" className="text-blue-500">
        Update Plan
      </Link>
      <div></div>
    </div>
  );
}

export default Success;
