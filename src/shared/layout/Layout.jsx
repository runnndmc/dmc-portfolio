import React from "react";

import Header from "../header/Header";
import Nav from "../nav/Nav";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <Nav />
      <div className="layout-children">{props.children}</div>
    </div>
  );
};

export default Layout;
