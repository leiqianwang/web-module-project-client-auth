import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function AddFriends() {
  const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then(res => {
        // Handle success
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="add-friend-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={newFriend.name} onChange={handleChange} />
        <input type="number" name="age" value={newFriend.age} onChange={handleChange} />
        <input type="email" name="email" value={newFriend.email} onChange={handleChange} />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}

export default AddFriends;
