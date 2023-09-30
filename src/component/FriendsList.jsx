import React from "react";
import Friend from "./Friend";

function FriendsList(props) {
  return (
    <ul>
      {props.initialFriends.map((friend, index) => {
        return (
          <Friend
            friend={friend}
            name={friend.name}
            key={index}
            id={friend.id}
            img={friend.image}
            balance={friend.balance}
            onSelection={props.onSelection}
            selectedFriend={props.selectedFriend}
          />
        );
      })}
    </ul>
  );
}

export default FriendsList;
