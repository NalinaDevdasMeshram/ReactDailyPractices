import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [fullName, setFullName] = useState("");

  const handleSubmitBtn = () => {
    setFullName(`${name.firstName} ${name.lastName}`);
  };

  console.log((e) => ({ ...name, firstName: e.target.value }));
  return (
    <div>
      <h2>Display Full Name</h2>
      FirstName:{" "}
      <input
        type="text"
        placeholder="Enter First Name"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        required
      />
      LastName:{" "}
      <input
        type="text"
        placeholder="Enter Last Name"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        required
      />
      <div>{fullName && <span>{fullName}</span>}</div>
      <button onClick={handleSubmitBtn}>Submit</button>
    </div>
  );
}

export default App;
