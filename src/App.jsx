import React from "react";
import Header from "./component/header/Header";
import Categorypills from "./component/categorypills/Categorypills";
import SideBar from "./component/Sidebar/SideBar";
import { Provider } from "react-redux";
import store from "./store/store";
import VideoContainer from "./component/videoContainer/VideoContainer";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <div className=" flex gap-1 overflow-hidden ">
          <div>
            <SideBar />
          </div>
          {/* -------------------- */}
          <div className="overflow-x-scroll ml-2 mr-3">
            <div>
              <Categorypills />
            </div>
            <div>
              <VideoContainer />
            </div>
          </div>
        </div>
      </Provider>
    </div>
  );
};

export default App;
