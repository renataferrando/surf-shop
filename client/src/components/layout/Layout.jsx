import React from "react";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />

      {children}
    </div>
  );
};

export default Layout;
