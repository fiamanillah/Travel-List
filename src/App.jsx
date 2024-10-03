import { useState } from "react";
import "./App.css";
import { Logo } from "./Component/Logo";
import { Form } from "./Component/Form";
import { PackingList } from "./Component/PackingList";
import { Stats } from "./Component/Stats";

// const InitialItems = [
//   { id: 1, des: "Passport", quantity: 2, packed: false },
//   { id: 2, des: "Bag", quantity: 12, packed: false },
//   { id: 3, des: "Charger", quantity: 7, packed: true },
// ];

function App() {
  const [allItems, setAllItems] = useState([]);
  function handleAddItem(i) {
    setAllItems((allItem) => [...allItem, i]);
  }

  function handleDeleteItem(id) {
    setAllItems(allItems.filter((i) => i.id != id));
  }

  function handleToggleItem(id) {
    setAllItems((allItems) =>
      allItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearAll() {
    const confirm = window.confirm("Are you sure you want to delete?");

    if (confirm) {
      setAllItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onSetAllItems={handleAddItem} />
      <PackingList
        allItem={allItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClear={clearAll}
      />
      <Stats items={allItems} />
    </div>
  );
}

export default App;
