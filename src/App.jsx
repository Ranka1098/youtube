import React from "react";
import Header from "./component/header/Header";
import Categorypills from "./component/categorypills/Categorypills";

const App = () => {
  return (
    <div>
      <Header />
      <div className=" ">
        <div className="">Sidebar</div>
        <div className=""><Categorypills /></div>
      </div>
    </div>
  );
};

export default App;
