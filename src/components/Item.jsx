import React from 'react';
import './Item.css';

function Item({ user }) {
  return (
    <div className="item">
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Status: {user.verified ? 'Verified' : 'Not Verified'}</p>
    </div>
  );
}

export default Item;
