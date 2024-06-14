export default function Item({ item, deleteItem, onPacked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.checked}
        onChange={() => onPacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
