import React, { useState } from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import "./Signup.css";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="auth-container">
      {/* left section */}
      <div className="auth-left">
        <img
          src="/media/images/signup.png"
          alt="illustration"
          className="auth-illustration"
        />

        <h1>Invest in everything</h1>

        <p>
          Online platform to invest in stocks, derivatives, mutual funds and
          more.
        </p>
      </div>

      {/* right section */}
      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-tabs">
            <button
              className={!isLogin ? "active-tab" : ""}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>

            <button
              className={isLogin ? "active-tab" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </div>

          {isLogin ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
};

export default Signup;
