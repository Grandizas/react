import { useState } from "react";

export default function AddFriend({ createUser }) {
  const [friendName, setFriendName] = useState("");
  const [friendPhoto, setFriendPhoto] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!friendName || !friendPhoto) return;

    createUser({
      id: new Date(),
      heOwesYou: false,
      youOweHim: false,
      name: friendName,
      photo: friendPhoto,
      text: `You and ${friendName} are even.`,
    });
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friendName">👫 Friend name</label>
      <input id="friendName" type="text" onInput={(e) => setFriendName(e.target.value)} />

      <label htmlFor="friendPhoto">⛵ Friend URL</label>
      <input id="friendPhoto" type="text" onInput={(e) => setFriendPhoto(e.target.value)} />

      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
}
