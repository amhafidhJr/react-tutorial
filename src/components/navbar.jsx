import React, { Component } from "react";

const NavBar = ({ totalCounters}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-md">
        <a class="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill bg-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
