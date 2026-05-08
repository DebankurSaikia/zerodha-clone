import React, { useState } from "react";

import axios from "axios";

const SignupForm = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/signup",

        {
          name,
          email,
          password,
        },
      );

      const redirectURL = `http://localhost:5174?token=${response.data.token}&name=${response.data.name}`;

      window.location.href = redirectURL;
    } catch (error) {
      alert(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );
    }
  };

  return (
    <form onSubmit={handleSignup} className="auth-form">
      <input
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <button type="submit">Create account</button>
    </form>
  );
};

export default SignupForm;
