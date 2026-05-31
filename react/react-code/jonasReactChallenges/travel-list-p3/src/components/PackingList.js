import { useState } from "react";
import  Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  else if (sortBy === "description")
    sortedItems = items.toSorted((a, b) =>
      a.description.localeCompare(b.description),
    );
  else if (sortBy === "packed")
    sortedItems = [
      ...items.filter((i) => !i.packed),
      ...items.filter((i) => i.packed),
    ];
  return (
    <div className="list">
      <ul>
        {sortedItems.map((i) => (
          <Item
            key={i.id}
            item={i}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(() => e.target.value)}
        >
          <option value={"input"}>Sort by input order</option>
          <option value={"description"}>Sort by description</option>
          <option value={"packed"}>Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
