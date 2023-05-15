import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiUrl, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${geoApiUrl}?minPopulation=100000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.json();
      return console.log(result);
    } catch (err) {
      return console.log(err);
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="container mx-auto">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};
export default Search;
