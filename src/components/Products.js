import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <div>
        <input type="search" placeholder="search products" />
      </div>
      <nav>
        <Link to="feature">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Products;
