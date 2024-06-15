import React from "react";
import SmallSideBar from "./SmallSideBar";
import LargeSideBar from "./LargeSideBar";
import { useSelector } from "react-redux";

const SideBar = () => {
  const toggleSidebar = useSelector((store) => store.menu.toggleMenu);
  return <div>{toggleSidebar ? <SmallSideBar /> : <LargeSideBar />}</div>;
};

export default SideBar;
