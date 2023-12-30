import { useState } from "react";
import Cards from "./components/Cards";
import FormSplitBill from "./components/FormSplitBill";

const friends = [
  {
    id: 1,
    name: "Sofia",
    heOwesYou: false,
    youOweHim: false,
    text: `You and Sofia are even.`,
    photo: "https://i.pinimg.com/564x/a1/01/7d/a1017da97b51b5190b674ca23dbed210.jpg",
  },
];

function App() {
  const [users, setUsers] = useState(friends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleFriendOnSplitBill(v) {
    const updatedUsers = users.map((user) => (user.id === v.id ? v : user));
    setUsers(updatedUsers);
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <Cards
        users={users}
        selectedFriend={selectedFriend}
        updateUsers={(v) => setUsers(v)}
        onSelectedFriend={(v) => setSelectedFriend(v)}
      />
      {selectedFriend && (
        <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleFriendOnSplitBill} />
      )}
    </div>
  );
}

export default App;
