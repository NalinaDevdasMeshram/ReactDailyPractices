import "./App.css";
import { useState } from "react";
import Interest from "./component/Interest.jsx";
import Profile from "./component/Profile.jsx";
import Setting from "./component/Setting.jsx";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const users = [
    {
      name: "Profile",
      Component: Profile,
    },
    {
      name: "Interest",
      Component: Interest,
    },
    {
      name: "Setting",
      Component: Setting,
    },
  ];

  const ActiveData = users[activeTab].Component;

  return (
    <div>
      {users.map((item, val) => {
        return (
          <div key={val} className="main">
            <p onClick={() => setActiveTab(val)}>{item.name}</p>
          </div>
        );
      })}
      <div className="tabformlayout">
        <ActiveData />
      </div>
    </div>
  );
};

export default App;
