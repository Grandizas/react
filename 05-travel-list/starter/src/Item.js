function Item({ item, remove, check }) {
  function onCheck(item) {
    check((items) => items.map((i) => (i.id === item.id ? { ...i, packed: !i.packed } : i)));
  }

  function onRemove(item) {
    remove((items) => items.filter((i) => i.id !== item.id));
  }

  return (
    <li>
      <input type="checkbox" onChange={() => onCheck(item)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="red" onClick={() => onRemove(item)}>
        ❌
      </button>
    </li>
  );
}

export default Item;
