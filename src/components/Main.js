import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="mt-24">
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Main;
