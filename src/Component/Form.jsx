import { useState } from "react";

export function Form({ onSetAllItems }) {
  const [des, setDes] = useState("");
  const [quantity, setQuantity] = useState(1);

  function submitHandler(e) {
    e.preventDefault();
    if (!des) {
      return;
    }
    const newItem = { id: Date.now(), des, quantity, packed: false };
    onSetAllItems(newItem);
    setDes("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={des}
        onChange={(e) => {
          setDes(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
