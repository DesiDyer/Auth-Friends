import React from "react";

const Friend = (props) => {
  return (
    <div className="note-list">
      <h1>Friends</h1>
      {props.friends.map((friends) => (
        <div className="ui cards" key={friends.id}>
          <div className="card">
            <div className="content">
              <div className="header">
                {" "}
                <p>{friends.name}</p>
              </div>
              <div className="description">
                <p>Age: {friends.age}</p>
                <p>Email: {friends.email}</p>
              </div>
            </div>
            <div className="ui bottom attached button">
              <i class="delete icon"></i>
              Delete Friend
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friend;
