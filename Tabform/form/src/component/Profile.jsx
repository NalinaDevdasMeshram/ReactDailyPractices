import React, { useState } from "react";

const Profile = () => {
  const [form, setForm] = useState({
    name: "nalina",
    age: "25",
    email: "nalinameshrma85@gmail.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleprevious = () => {};
  const handlenext = () => {};

  return (
    <div>
      <h2>Profile</h2>
      <strong>Name:</strong>
      <input
        type="text"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <strong>Age:</strong>
      <input
        type="Age"
        placeholder="Enter age"
        value={form.age}
        onChange={handleChange}
        required
      />
      <strong>Email:</strong>
      <input
        type="email"
        placeholder="Enter mail"
        value={form.email}
        onChange={handleChange}
        required
      />
      <button onClick={handleprevious}>previous</button>
      <button onClick={handlenext}>next</button>
    </div>
  );
};

export default Profile;
