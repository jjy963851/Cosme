import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';


export default function SearchBar({ onClose }) {
  const [searchText, setSearchText] = useState('');

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    // implement your search logic here
    // ...
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
      <form onSubmit={handleSearchSubmit} className="bg-white p-4 rounded-lg">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
          className="border border-gray-300 px-2 py-1 rounded-lg"
        />
        <button type="submit" className="bg-gray-900 text-white px-4 py-1 rounded-lg ml-2">
          Search
        </button>
        <button onClick={onClose} className="text-gray-600 ml-2">
          Close
        </button>
      </form>
    </div>
  );
}
