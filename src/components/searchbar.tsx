
import searchB from "../assets/images/36032015-e52b-4f6f-a8e2-b011b990df20.jfif";

export default function Searchbar() {
  return (
    <div>
      <div className="SearchBar">
        <img src={searchB} alt="Search Bar" id="searchB"></img>
        <input type="text" id="search" placeholder="search"></input>
      </div>
    </div>
  );
}
