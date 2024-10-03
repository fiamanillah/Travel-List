import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ allItem, onDeleteItem, onToggleItem, onClear }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = allItem;
  }
  if (sortBy === "alphabetic") {
    sortedItems = allItem.slice().sort((a, b) => a.des.localeCompare(b.des));
  }
  if (sortBy === "packed") {
    sortedItems = allItem.sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="alphabetic">Sort by Alphabeticaly</option>
          <option value="packed">Sort by Packed status</option>
        </select>
        <button onClick={() => onClear()}>Creal List</button>
      </div>
    </div>
  );
}
