import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
// Compontents
import Friend from "./Friend";
import FriendForm from "./FriendForm";

function FriendsList() {
  useEffect(() => {
    axiosWithAuth()
      .get("api/friends")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((error) => {
        console.error("Server Error", error);
      });
  }, []);

  const [friends, setFriends] = useState([
    {
      id: "",
      name: "",
      age: "",
      email: "",
    },
  ]);

  console.log(friends);

  const addNewFriend = (friend) => {
    const newFriend = {
      id: Date.now(),
      name: friend.name,
      age: friend.age,
      email: friend.email,
    };
    setFriends([...friends, newFriend]);
  };

  return (
    <div className="App">
      <div className="ui four column centered grid">
        <div className="column">
          <FriendForm addNewFriend={addNewFriend} />
        </div>
        <div className="column">
          <Friend friends={friends} />
        </div>
      </div>
    </div>
  );
}

export default FriendsList;
