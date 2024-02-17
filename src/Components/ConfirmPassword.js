import React, { useState } from "react";

const ConfirmPassword = ({ password, onInputChange }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [valid, setValid] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    setConfirmPassword(value);
    setValid(value === password);
    onInputChange(value, value === password);
  }

  return (
    <div className="form-group">
      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleChange}
        style={{ border: valid ? "2px solid green" : "2px solid red" }}
        required
      />
      {!valid && <p style={{ color: "red" }}>Password do not match</p>}
    </div>
  );
};

export default ConfirmPassword;