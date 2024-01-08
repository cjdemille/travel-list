export function Stats({ items }) {
    if (!items.length) return <p className="stats">Start adding items to your list 🚀 </p>;
    const packed = items.filter((item) => item.packed);

    return (
        <footer className="stats">
            <em>{items.length === packed.length && items.length > 0 ?
                'You got everuthing! Ready to go ✈️' :
                `🧳 You have ${items.length} items on your list, and you already packed ${packed.length} (${packed.length > 0 ? Math.round((packed.length / items.length) * 100) : 0}%)`}</em>
        </footer>
    );
}
