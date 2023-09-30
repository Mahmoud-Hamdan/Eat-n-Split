import React, { useState } from "react";
import Button from "./Button";

function FormAddFriend(props) {
  const [myFriend, setMyFriend] = useState({
    image: "https://i.pravatar.cc/48",
  });

  function handelChange(event) {
    const { value, name } = event.target;
    setMyFriend((friend) => {
      return {
        ...friend,
        id: crypto.randomUUID(),
        [name]: value,
        balance: 0,
      };
    });
  }

  return (
    <form
      className="form-add-friend"
      onSubmit={(e) => {
        e.preventDefault();
        if (!myFriend.name) return;
        props.onAddFirend(myFriend);
        setMyFriend({
          name: "",
          image: "https://i.pravatar.cc/48",
        });
      }}
    >
      <label>🧍Friend name </label>
      <input
        type="text"
        placeholder="The name ..."
        name="name"
        value={myFriend.name}
        onChange={handelChange}
      />

      <label>🌄 Image URL</label>
      <input
        type="text"
        placeholder="Image URL ..."
        name="image"
        value={myFriend.image}
        onChange={handelChange}
      />

      <Button> Add </Button>
    </form>
  );
}

export default FormAddFriend;
