export default function Card({ friend, handleSelect, selectedFriend }) {
  const isSelected = selectedFriend && selectedFriend.id === friend.id;

  return (
    <li className="card">
      <img src={friend.photo} alt="Friend profile" />
      <div>
        <h3>{friend.name}</h3>
        <p className={`${friend.youOweHim && "red"} ${friend.heOwesYou && "green"}`}>
          {friend.text}
        </p>
      </div>
      <button className="button" onClick={() => handleSelect(isSelected ? null : friend)}>
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}
