import React from "react";
import {
  //  Link,
  Outlet,
} from "react-router-dom";

const Main = () => {
  return (
    <section
    // style={{
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   height: "100vh",
    // }}
    >
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          fontSize: "2rem",
        }}
      >
        <Link to="quize">quize</Link>
        <Link to="hacker">hacker</Link>
        <Link to="pagination">pagination</Link>
        <Link to="cart">cart</Link>
      </div> */}
      <Outlet />
    </section>
  );
};

export default Main;
