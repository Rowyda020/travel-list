export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>You need to start packing⚠️</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go🎉"
          : `You have ${numItems} items in your list and you already packed 
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
