export default function Filters({ search, setSearch }) {
  return (
    <div className="filters">
      <input
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
