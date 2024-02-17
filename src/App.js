import React, { useState } from "react";
import EmailInput from "./Components/EmailInput";
import PasswordInput from "./Components/PasswordInput";
import ConfirmPassword from "./Components/ConfirmPassword";
import SubmitButton from "./Components/SubmitButton";
import "./style.css";

function App() {
    const [email,setEmail] = useState('');
    const [emailValid,setEmailValid] = useState(false);
    const [password,setPassword] = useState('');
    const [passwordValid,setPasswordValid] = useState(false);
    const [confirmPassword,setConfirmPassword] = useState('');
    const [confirmPasswordValid,setConfirmPasswordValid] = useState(false);

    
    const handleEmailChange = (value,valid) => {
      setEmail(value);
      setEmailValid(valid)
    }
    const handlePasswordChange = (value, valid) => {
      setPassword(value);
      setPasswordValid(valid);
    };
    const handleConfirmPass = (value, valid) => {
      setConfirmPassword(value);
      setConfirmPasswordValid(valid);
    };

    const handleSubmit = (e) => {
       e.preventDefault();
     if(emailValid && passwordValid && confirmPasswordValid) {
      alert('Form Submited Successfully!');
      setEmail("");
      setEmailValid(false);
      setPassword("");
      setPasswordValid(false);
      setConfirmPassword("");
      setConfirmPasswordValid(false);
     }else{
      alert("Please fill correct detail to all the Field!");
     }

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <EmailInput onInputChange={handleEmailChange}/>
        <PasswordInput onInputChange={handlePasswordChange}/>
        <ConfirmPassword password={password} onInputChange={handleConfirmPass}/>
        <SubmitButton/>
      </form>
    </div>
  );
}

export default App;
