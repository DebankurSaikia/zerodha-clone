import React, { useState } from "react";

import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:3000/login",

        {
          email,
          password,
        },
      );

      const redirectURL = `http://localhost:5174?token=${response.data.token}&name=${response.data.name}`;

      console.log("Redirect URL:", redirectURL);

      window.location.href = redirectURL;
    } catch (error) {
      
      setErrorMessage(
        error.response?.data?.message || "Invalid email or password",
      );
    }
  };

  return (
    <form onSubmit={handleLogin} className="auth-form">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      
      {errorMessage && <p className="auth-error">{errorMessage}</p>}

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
