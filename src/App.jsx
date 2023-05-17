import React from "react";
import Search from "./components/Search";
import Layout from "./components/layout";
import CurrentWeather from "./components/CurrentWeather";

const App = () => {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="w-full bg-blue-300 py-4">
      <div className="container mx-auto">
        <Search onSearchChange={handleOnSearchChange} />
        <CurrentWeather />
        <Layout />
      </div>
    </div>
  );
};

export default App;
