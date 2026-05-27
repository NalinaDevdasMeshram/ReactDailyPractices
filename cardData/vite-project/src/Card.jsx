import React from "react";
import "./App.css";
const Card = ({ cardData, handleChange }) => {
  return (
    <div className="card">
      <h3>Form</h3>
      <strong>FullName:</strong>
      <input
        type="text"
        placeholder="Enter the name"
        value={cardData.name}
        onChange={handleChange}
        required
      />
      <strong>Mobile Number:</strong>
      <input
        type="number"
        placeholder="Enter the Mobile number"
        value={cardData.number}
        onChange={handleChange}
        required
      />
      <strong>Email:</strong>
      <input
        type="email"
        placeholder="Enter the email address"
        value={cardData.email}
        onChange={handleChange}
        required
      />
      <strong>Male</strong>
      <input type="radio" id="male" name="theme" />
      <strong>Female</strong>
      <input type="radio" id="female" name="theme" />
      <button>Submit</button>
    </div>
  );
};

export default Card;
