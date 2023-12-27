import { useState } from "react";
function Form({ onsubmit }) {
  let count = 1;
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function onSubmit(e) {
    if (!description) return;

    e.preventDefault();

    const newItem = {
      quantity,
      description,
      packed: false,
      id: Date.now(),
    };

    onsubmit((items) => [...items, newItem]);

    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="add-form" value={quantity} onSubmit={onSubmit}>
      {/* -------------- [ Description ] -------------- */}
      <h3>What do you need for your trip?</h3>
      {/* -------------- [ Select ] -------------- */}
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i}>{count + i}</option>
        ))}
      </select>
      {/* -------------- [ Input field ] -------------- */}
      <input
        type="text"
        value={description}
        placeholder="Item..."
        onInput={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
