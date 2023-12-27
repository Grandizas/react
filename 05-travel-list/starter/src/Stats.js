function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start Adding items to get started! 🚀</em>
      </footer>
    );
  }

  const total = items.filter((i) => i.packed).length;
  const percent = Math.floor((total / items.length) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${items.length} items on your list, and you already packed ${total} (
        ${percent || 0}%)`}
      </em>
    </footer>
  );
}

export default Stats;
