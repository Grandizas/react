import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Form from "./Form";
import React, { useState } from "react";
import { initialItems } from "./App";

export function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="app">
      <Logo />
      <Form onsubmit={(v) => setItems(v)} />
      <PackingList
        items={items}
        check={(v) => setItems(v)}
        sortBy={(v) => setItems(v)}
        remove={(v) => setItems(v)}
        clearList={(v) => setItems(v)}
      />
      <Stats items={items} />
    </div>
  );
}
