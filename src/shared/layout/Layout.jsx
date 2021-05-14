import React from "react";

import Header from "../header/Header";
import Nav from "../nav/Nav";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-children">{props.children}</div>
      <Nav />
    </div>
  );
};

export default Layout;
