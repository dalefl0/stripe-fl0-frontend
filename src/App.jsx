import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cancel from "./pages/Cancel";
import SignIn from "./pages/Login";
import PricingPage from "./pages/PricingPage";
import Signup from "./pages/Signup";
import Success from "./pages/Success";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tier, setTier] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PricingPage
                email={email}
                tier={tier}
                setTier={setTier}
                password={password}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                tier={tier}
                setTier={setTier}
              />
            }
          />
          <Route
            path="/login"
            element={
              <SignIn
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                tier={tier}
                setTier={setTier}
              />
            }
          />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
