import { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setUserData(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Find the user Data</h2>
      <input type="text" placeholder="Enter user name" />
      {userData.map((val, index) => {
        return (
          <div key={index}>
            <p>{val.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
