import React from "react";
import Header from "./component/header/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./component/body/Body";
import WatchPage from "./component/watchpage/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/watch/:id",
    element: <WatchPage />,
  },
]);

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header  />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
};

export default App;
