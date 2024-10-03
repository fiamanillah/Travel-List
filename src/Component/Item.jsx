export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => {
          onToggleItem(item.id);
        }}
      />
      {item.quantity}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.des}
      </span>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        {" "}
        ❌{" "}
      </button>
    </li>
  );
}
