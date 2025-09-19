interface Props {
  sortOrder: "asc" | "desc";
  onChange: (value: "asc" | "desc") => void;
}

const SortSelector: React.FC<Props> = ({ sortOrder, onChange }) => {
  return (
    <div>
      <label>
        Sort by Price:{" "}
        <select
          value={sortOrder}
          onChange={(e) => onChange(e.target.value as "asc" | "desc")}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </label>
    </div>
  );
};

export default SortSelector;
