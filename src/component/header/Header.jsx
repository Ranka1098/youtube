import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { logo } from "../../assets";
import { BiLeftArrowAlt } from "react-icons/bi";
import "./Header.css";
import { useDispatch } from "react-redux";
import { isMenuToggle } from "../../store/menuSlice";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(isMenuToggle());
  };
  return (
    <div className="">
      <div className="flex gap-10 lg:gap-10 justify-between my-2 mx-2">
        {/* left */}
        <div
          className={`flex gap-4 flex-shrink-0 items-center ${
            showSearch ? "hidden" : "flex"
          }`}
        >
          <button
            onClick={handleToggle}
            className="w-10 h-10 flex items-center justify-center rounded-full  hover:bg-gray-200 transition ease-out duration-200"
          >
            <LuMenu size={30} />
          </button>
          <a href="/">
            <img src={logo} alt="logo" className="h-5" />
          </a>
        </div>
        {/* ---------------------------------------------------------------------------------------- */}

        {/* center */}
        <form
          className={`flex  gap-4 flex-grow justify-center ${
            showSearch ? "md:flex" : "hidden md:flex "
          }`}
        >
          {showSearch && (
            <button
              onClick={() => setShowSearch(true)}
              className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 hover:bg-gray-200 transition ease-out duration-200"
            >
              <BiLeftArrowAlt size={22} />
            </button>
          )}

          <div className={`flex flex-grow max-w-[600px] `}>
            <input
              type="search"
              placeholder="Search..."
              className="w-full px-4 py-1  rounded-l-full border border-gray-400 focus:outline-none"
            />
            <button className="lg:w-20 w-10 h-10 flex items-center justify-center rounded-r-full flex-shrink-0 border border-gray-400 bg-gray-200 transition ease-out duration-200">
              <IoIosSearch size={22} />
            </button>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full  hover:bg-gray-200 transition ease-out duration-200">
            <FaMicrophone size={22} />
          </button>
        </form>
        {/* ---------------------------------------------------------------------------------------- */}

        {/* right */}
        <div
          className={` lg:gap-5 flex-shrink-0 ${
            showSearch ? "hidden" : "flex"
          }`}
        >
          <button
            onClick={() => setShowSearch(true)}
            className=" md:hidden w-10 h-10 flex items-center justify-center rounded-full  hover:bg-gray-200 transition ease-out duration-200"
          >
            <IoIosSearch size={22} />
          </button>
          <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-full  hover:bg-gray-200 transition ease-out duration-200">
            <FaMicrophone size={22} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 hover:bg-gray-200 transition ease-out duration-200">
            <RiVideoAddLine size={25} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 hover:bg-gray-200 transition ease-out duration-200">
            <FaRegBell size={25} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 hover:bg-gray-200 transition ease-out duration-200">
            <FaRegCircleUser size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
