import React, { useState } from "react";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

let initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  const [selectedFriend, setselectedFriend] = useState(null);

  function handelClickToShowAddFriend() {
    setShowAddFriend((isOpen) => {
      return !isOpen;
    });
  }

  function addFriend(friend) {
    setFriends((f) => {
      return [...f, friend];
    });
    setShowAddFriend(false);
  }

  function handelSelection(friend) {
    //setselectedFriend(friend);
    setselectedFriend((cur) => {
      return cur?.id === friend.id ? null : friend;
    });
    setShowAddFriend(false);
  }

  function handelSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) => {
        return friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend;
      })
    );
    setselectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          initialFriends={friends}
          onSelection={handelSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFirend={addFriend} />}
        <Button onClick={handelClickToShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friends"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSpiltBill={handelSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
