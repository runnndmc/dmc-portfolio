import React from "react";

import Header from "./Header";
import Nav from "./Nav";

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
