import React from "react";
import Button from "./Button";

function Friend(props) {
  const isSelected = props.selectedFriend?.id === props.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      {props.balance < 0 && (
        <p className="red">
          You owe {props.name} {Math.abs(props.balance)}$
        </p>
      )}
      {props.balance > 0 && (
        <p className="green">
          {props.name} owes you {props.balance}$
        </p>
      )}
      {props.balance === 0 && <p>you and {props.name} are even</p>}

      <Button
        onClick={() => {
          props.onSelection(props.friend);
        }}
      >
        {isSelected ? "Colse" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
