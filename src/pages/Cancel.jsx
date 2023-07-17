import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Cancel() {
  const navigate = useNavigate();

  const localStorageTier = localStorage.getItem("tier");
  if (localStorageTier) {
    navigate("/");
  }

  return (
    <div className="flex items-center justify-center flex-col h-screen space-y-4">
      <h4 className="text-3xl font-bold">
        Oops! Your payment has been cancelled.
      </h4>
      <Link to="/" className="text-blue-500">
        Retry
      </Link>
    </div>
  );
}

export default Cancel;
