import React from "react";
import Search from "./components/search/search";

const App = () => {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div>
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
};

export default App;
