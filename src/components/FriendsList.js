import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth"; // Make sure this is defined

function FriendsList() {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        setFriendsList(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
     <h3>FRIENDS LIST</h3>
      {friendsList.length > 0 ? (
        <ul>
          {friendsList.map(friend => (
            <li key={friend.id}>
                <h4>`${friend.name} - {friend.email}`</h4>

            </li>
          ))}

        </ul>
      ) : (
        <p>No friends to display!</p>

      )}
    </div>
  );
}

export default FriendsList;