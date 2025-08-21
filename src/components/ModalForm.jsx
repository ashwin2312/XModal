import React, { useState } from "react";
import "./ModalForm.css";

export default function ModalForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const today = new Date().toISOString().split("T")[0];

  console.log("phonelength::", phone.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length < 10) {
      alert("Invalid phone number. Please enter 10-digit phone number.");
      return;
    } 
    if (dob == today || dob > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    } 
    if (name === "" || email === "") {
      alert("Please fill in all fields.");
      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setDob("");
  };

  return (
    <div className="modal-form">
      <h2>Fill Details</h2>
      <form action="" onSubmit={handleSubmit}>
        <h3>Username:</h3>
        <input
          type="text"
          id="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <h3>Email Address:</h3>
        <input
          type="email"
          name=""
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <h3>Phone Number:</h3>
        <input
          type="number"
          minLength={10}
          maxLength={10}
          name=""
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <h3>Date of Birth:</h3>
        <input
          type="date"
          name=""
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
          max={today} // Prevent future dates
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
