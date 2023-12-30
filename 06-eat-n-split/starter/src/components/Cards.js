import Card from "./Card";
import AddFriend from "./AddFriend";
import { useState } from "react";

export default function Cards({ onSelectedFriend, selectedFriend, users, updateUsers }) {
  const [show, setShow] = useState(false);

  function addFriend(v) {
    setShow(false);
    updateUsers([...users, v]);
  }

  return (
    <div className="sidebar">
      <ul className="cards">
        {users.map((user) => (
          <Card
            key={user.id}
            friend={user}
            selectedFriend={selectedFriend}
            handleSelect={(v) => onSelectedFriend(v)}
          />
        ))}
      </ul>

      {/* Add friend button */}
      {!show && (
        <button className="button" onClick={() => setShow(true)}>
          Add friend
        </button>
      )}

      {/* Add friend form */}
      {show && <AddFriend createUser={addFriend} />}

      {/* Close form */}
      {show && (
        <button className="button" onClick={() => setShow(false)}>
          Close
        </button>
      )}
    </div>
  );
}
