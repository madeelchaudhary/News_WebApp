import React from "react";
import news from "./datasource/news";
import Card from "./Card";
import "./App.css";
import Mainhead from "./mainhead";

function App() {
  return (
    <>
      <Mainhead />
      <Card newsData={news} />;
    </>
  );
}

export default App;
