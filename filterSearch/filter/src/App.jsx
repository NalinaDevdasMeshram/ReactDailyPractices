import React, { useState } from "react";

const App = () => {
  const [searchItem, setSearchItem] = useState("");
  const users = [
    "John",
    "Alice",
    "Bob",
    "Michael",
    "Emma",
    "David",
    "Sophia",
    "James",
    "Olivia",
    "William",
  ];

  // filter the user based on the search item

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchItem.toLowerCase()),
  );
  console.log(filteredUsers);

  return (
    <div>
      <h2>Filter Search</h2>
      <input
        type="text"
        placeholder="Enter item name"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        required
      />
      {filteredUsers.length > 0 ? (
        <ul>
          {filteredUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      ) : (
        <p>No Users Found!!</p>
      )}
    </div>
  );
};

export default App;
