import React, { useState } from "react";
import "./App.css";
import PersonalDetails from "./PersonalDetails.jsx";
import Card from "./Card.jsx";

const App = () => {
  const [page, setPage] = useState(0);
  const [cardData, setCardData] = useState({
    name: "nalina",
    number: "20456789",
    email: "nalio@gkal.com",
  });

  const handlepreviousbtn = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handlenextbtn = () => {
    setPage(page + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  return (
    <div className="container">
      {page === 0 && <PersonalDetails page={page} />}
      {page === 1 && <Card cardData={cardData} handleChange={handleChange} />}
      <div className="btn-group">
        <button onClick={handlepreviousbtn}>previous</button>
        <button onClick={handlenextbtn}>Next</button>
      </div>
    </div>
  );
};

export default App;
