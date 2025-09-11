
// import { FaSearch } from "react-icons/fa";

// export default function Searchbar() {
//   return (
//     <div className="SearchBar">
//       <FaSearch id="search-icon" size={16} />
//       <input type="text" id="search" placeholder="Search" />
//     </div>
//   );
// }


import { FaSearch } from "react-icons/fa";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Searchbar({ value, onChange }: Props) {
  return (
    <div className="SearchBar">
      <FaSearch id="search-icon" size={16} />
      <input
        type="text"
        id="search"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
