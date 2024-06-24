import React from 'react';
import Item from './Item';

function ItemList({ users, filterVerified }) {
  const filteredUsers = filterVerified === null
    ? users
    : users.filter(user => user.verified === filterVerified);

  if (filteredUsers.length === 0) {
    return <p>No users match the filter criteria.</p>;
  }

  return (
    <div>
      {filteredUsers.map((user, index) => (
        <Item key={index} user={user} />
      ))}
    </div>
  );
}

export default ItemList;
