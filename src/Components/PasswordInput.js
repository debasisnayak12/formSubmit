import React, { useState } from "react";

const PasswordInput = ({ onInputChange }) => {
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  const validatePass = (value) => {
    return value.length >= 8;
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setPassword(value);
    setValid(validatePass(value));
    onInputChange(value,validatePass(value));
  };

  return (
    <div className="form-group">
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        style={{ border: valid ? "2px solid green" : "2px solid red" }}
        required
      />
      {!valid && (
        <p style={{ color: "red" }}>Password must be at least 8 Characters</p>
      )}
    </div>
  );
};

export default PasswordInput;