import styles from "./SearchBar.module.css";

interface Props {
  keyword: string;
  onSearch: (val: string) => void;
}

const SearchBar: React.FC<Props> = ({ keyword, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search properties..."
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
        className={styles.searchBar}
      />
    </div>
  );
};
export default SearchBar;
