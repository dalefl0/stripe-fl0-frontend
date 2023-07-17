import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { tiers } from "../assets/data";
import Heading from "../components/Heading";
import PricingPlans from "../components/PricingPlans";

export default function PricingPage({ email, tier, setTier, password }) {
  const navigate = useNavigate();

  const localStorageEmail = localStorage.getItem("email");

  useEffect(() => {
    if (localStorageEmail) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <Heading />
        <PricingPlans
          tiers={tiers}
          setTier={setTier}
          email={email}
          tier={tier}
        />
      </div>
    </div>
  );
}
