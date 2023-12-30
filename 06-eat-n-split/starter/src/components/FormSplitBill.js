import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  let friendExpense = billValue ? billValue - yourExpense : "";
  const [whoIsPaying, setWhoIsPaying] = useState("You");

  function handleSplitBill(e) {
    e.preventDefault();

    if (!billValue && !yourExpense && !friendExpense) return;

    onSplitBill({
      id: selectedFriend.id,
      heOwesYou: whoIsPaying === "You",
      youOweHim: whoIsPaying !== "You",
      name: selectedFriend.name,
      photo: selectedFriend.photo,
      text:
        whoIsPaying === "You"
          ? `${selectedFriend.name} owes you ${friendExpense}€`
          : `You owe ${selectedFriend.name} ${yourExpense}€`,
    });
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBill}>
      <h2>Split bill with {selectedFriend.name}</h2>

      {/* Bill value */}
      <label htmlFor="billField">💰 Bill value</label>
      <input
        id="billField"
        type="number"
        value={billValue}
        onInput={(e) => setBillValue(+e.target.value)}
      />

      {/* Your expense */}
      <label htmlFor="yourExpense">🙍 Your expense</label>
      <input
        id="yourExpense"
        value={yourExpense}
        type="number"
        onInput={(e) => setYourExpense(+e.target.value)}
      />

      {/* Friend expense */}
      <label htmlFor="friendField">👫 {selectedFriend.name}s expense</label>
      <input disabled value={friendExpense} id="friendField" type="number" />

      {/* Who is paying ? */}
      <label htmlFor="whoIsPaying">🤑 Who is paying the bill</label>
      <select id="whoIsPaying" onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="You">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>

      <button className="button" type="submit">
        Split bill
      </button>
    </form>
  );
}
