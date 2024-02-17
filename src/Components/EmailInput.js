import React, { useState } from "react";

const EmailInput = ({ onInputChange }) => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  //   console.log(email,valid)

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setEmail(value);
    setValid(validateEmail(value));
    onInputChange(value, validateEmail(value));
  };

  return (
    <div className="form-group">
      <label>Email:</label>
      <input
        type="email"
        onChange={handleChange}
        value={email}
        style={{ border: valid ? "2px solid green" : "2px solid red" }}
        required
      />
      {!valid && <p style={{ color: "red" }}>Invalid Email Format</p>}
    </div>
  );
};

export default EmailInput;