export function Stats({ items }) {
  const numOfItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPacked / numOfItems) * 100);

  return (
    <footer className="stats">
      {percentage == 100 ? (
        <em>You are fully packed for the travel</em>
      ) : (
        <em>
          You have {numOfItems} items on your list, and you already packed{" "}
          {numOfPacked} ({percentage ? percentage : 0}%){" "}
        </em>
      )}
    </footer>
  );
}
