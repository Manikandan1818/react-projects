import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, errorSetUsername] = useState("");
  const [errorEmail, errorSetEmail] = useState("");
  const [errorPassword, errorSetPassword] = useState("");
  const [errorConfirmPassword, errorSetConfirmPassword] = useState("");

  const [usernameColor, setUsernameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  return (
    <div className="card">
      <div className="card-image"></div>
      <form>
        <input
          type="text"
          style={{ borderColor: usernameColor }}
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          style={{ borderColor: emailColor }}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          style={{ borderColor: passwordColor }}
          placeholder="NamPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          style={{ borderColor: confirmPasswordColor }}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
