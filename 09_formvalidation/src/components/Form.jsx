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

  const red = "red";
  const green = "green";

  const handleValidate = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      errorSetUsername("");
      setUsernameColor(green);
    } else {
      errorSetUsername("UserName must be 8 letters long.");
      setUsernameColor(red);
    }

    if (email.includes("@gmail")) {
      errorSetEmail("");
      setEmailColor(green);
    } else {
      errorSetEmail("Email should be Gmail.com");
      setEmailColor(red);
    }

    if (password.length > 8) {
      errorSetPassword("");
      setPasswordColor(green);
    } else {
      errorSetPassword("Password must be atleast 8 letters");
      setPasswordColor(red);
    }

    if (password != "" && password == confirmPassword) {
      errorSetConfirmPassword("");
      setConfirmPasswordColor(green);
    } else {
      errorSetConfirmPassword("Confirm password doesn't match with password");
      setConfirmPasswordColor(red);
    }
  };

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
        <p className="error">{errorUsername}</p>
        <input
          type="text"
          style={{ borderColor: emailColor }}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{errorEmail}</p>
        <input
          type="password"
          style={{ borderColor: passwordColor }}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{errorPassword}</p>
        <input
          type="password"
          style={{ borderColor: confirmPasswordColor }}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className="error">{errorConfirmPassword}</p>
        <button className="submit-btn" onClick={handleValidate}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
