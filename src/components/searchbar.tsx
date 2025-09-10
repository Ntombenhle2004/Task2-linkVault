
import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
  return (
    <div className="SearchBar">
      <FaSearch className="search-icon" size={16} />
      <input type="text" id="search" placeholder="Search" />
    </div>
  );
}
