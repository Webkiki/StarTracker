import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchStar, setSearchStar] = useState("");

  const handleChange = (event) => {
    setSearchStar(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchStar); // Apeleaza onSearch corect
  };

  return (
    <div className="mb-6 max-w-4xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex items-center space-x-4">
        <input
          type="text"
          value={searchStar}
          onChange={handleChange}
          placeholder="Căutare stele..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button
          type="submit"
          className="py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Căutare
        </button>
      </form>
    </div>
  );
};

export default Search;
