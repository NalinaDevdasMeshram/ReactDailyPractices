import React, { useState } from "react";
const formData = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <input
        type="text"
        name="firstName"
        placeholder="Enter FirstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Enter LastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button>Submit</button>
      {submittedData && (
        <div>
          <p>
            <strong>FirstName:</strong>
            {submittedData.firstName}
          </p>
          <p>
            <strong>LastName:</strong>
            {submittedData.lastName}
          </p>
          <p>
            <strong>Email:</strong>
            {submittedData.email}
          </p>
        </div>
      )}
    </form>
  );
};
export default formData;
