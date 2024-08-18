import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="mt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
