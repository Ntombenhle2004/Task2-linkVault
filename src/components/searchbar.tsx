import { FaSearch } from "react-icons/fa";


export default function Searchbar() {
  return (
    <div>
      <div className="SearchBar">

        <button  id="icon"><FaSearch className="social-icon instagram" style={{color:'black'}}/></button>
        <input type="text" id="search" placeholder="search"/>
        </div>

    </div>

  );
}
