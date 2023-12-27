import Item from "./Item";
import { useState } from "react";

function PackingList({ items, remove, check, clearList, sortBy }) {
  const [sortAs, setSortAs] = useState("date");

  function updateSort(e) {
    setSortAs(e.target.value);
    sortBy(returnSortedArray(e.target.value));
  }

  function returnSortedArray(value) {
    // Sort by date
    if (value === "date") {
      return items.sort((a, b) => a.id - b.id);
    }

    // Sort by quantity
    if (value === "quantity") {
      return items.sort((a, b) => a.quantity - b.quantity);
    }

    // Sort by description
    if (value === "description") {
      return items.sort((a, b) => a.description.localeCompare(b.description));
    }
  }

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} remove={remove} check={check} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortAs} onChange={updateSort}>
          <option value="date">Date</option>
          <option value="quantity">Quantity</option>
          <option value="description">Description</option>
        </select>
        <button onClick={() => clearList([])}>Clear</button>
      </div>
    </div>
  );
}

export default PackingList;
