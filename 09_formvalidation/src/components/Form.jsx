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
      <form></form>
    </div>
  );
};

export default Form;
