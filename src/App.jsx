import React, { useState } from 'react';
import ItemList from './components/ItemList';

const users = [
  { name: "Shimon", age: 45, verified: true },
  { name: "David", age: 20, verified: true },
  { name: "Yisroel", age: 19, verified: false },
  { name: "Chaim", age: 10, verified: false },
];

function App() {
  const [filterVerified, setFilterVerified] = useState(null); // null means no filter, true means show verified only, false means show not verified only

  const handleFilterChange = (filter) => {
    setFilterVerified(filter);
  };

  return (
    <div>
      <h1>User List</h1>
      <button onClick={() => handleFilterChange(true)}>Show Verified Users</button>
      <button onClick={() => handleFilterChange(false)}>Show Not Verified Users</button>
      <button onClick={() => handleFilterChange(null)}>Show All Users</button>
      <ItemList users={users} filterVerified={filterVerified} />
    </div>
  );
}

export default App;
