import React from "react";
import Search from "./components/search/search";
import Layout from "./components/layout";

const App = () => {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="w-full bg-blue-300 py-4">
      <Search onSearchChange={handleOnSearchChange} />
      <Layout />
    </div>
  );
};

export default App;
