export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }
  const numItem = items.length;
  const packedItem = items.reduce((acc, i) => (i.packed ? acc + 1 : acc), 0);
  const percentage = Math.round((packedItem / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! ready to go 🛫"
          : `You have ${numItem} item on your list,and you already packed ${packedItem}
        (${percentage}%)`}
      </em>
    </footer>
  );
}
