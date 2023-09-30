import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSpiltBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoISPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  function handelSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSpiltBill(whoISPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handelSubmit}>
      <h2> split a bill with {selectedFriend.name} </h2>

      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍 your expenses</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label> 🧑‍🤝‍🧑{selectedFriend.name} expenses</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill ?</label>
      <select
        value={whoISPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user"> you </option>
        <option value="friend"> {selectedFriend.name} </option>
      </select>

      <Button> Spilt Bill </Button>
    </form>
  );
}

export default FormSplitBill;
