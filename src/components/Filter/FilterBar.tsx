interface Props {
  minBedrooms: number;
  onChange: (value: number) => void;
}

const FilterBar: React.FC<Props> = ({ minBedrooms, onChange }) => {
  return (
    <div>
      <label>
        Min Bedrooms:{" "}
        <input
          type="number"
          value={minBedrooms}
          min={0}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default FilterBar;
