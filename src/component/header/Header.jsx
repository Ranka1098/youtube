import React, { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { logo } from "../../assets";
import { BiLeftArrowAlt } from "react-icons/bi";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { isMenuToggle } from "../../store/menuSlice";
import { youtube_Search_Api } from "../../utils/Apidata";
import { cacheResults } from "../../store/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // show search state used for responsiveness
  const [showSearch, setShowSearch] = useState(false);
  // store api suggestion result
  const [suggestion, setSuggestion] = useState([]);

  const dispatch = useDispatch();
  const searchcache = useSelector((store) => store.search);
  const handleToggle = () => {
    dispatch(isMenuToggle());
  };

  const videoSuggestion = async () => {
    const resp = await fetch(youtube_Search_Api + searchQuery);
    const result = await resp.json();
    setSuggestion(result[1]);
    // update in my cache
    dispatch(cacheResults({ [searchQuery]: result[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchcache[searchQuery]) {
        setSuggestion(searchcache[searchQuery]);
      } else {
        {
          videoSuggestion();
        }
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <div className="   top-0 left-0 z-10 bg-white mt-2 ">
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
            <img src={logo} alt="logo" className="h-5 cursor-pointer" />
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

          <div className={`flex flex-grow max-w-[600px] relative`}>
            {searchQuery ? (
              <div className="w-[530px] absolute top-11 px-2 bg-white py-3 rounded-md border">
                <ul>
                  {suggestion.map((s) => (
                    <li className="px-4">{s} </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
