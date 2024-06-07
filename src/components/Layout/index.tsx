import { NavLink, Outlet} from "react-router-dom";
import React from "react";




export default function Layout() {
  return (
    <div className="">
      <header>
        <nav>
          <h1>My Website</h1>
          <NavLink to="/">HomePage</NavLink>
          <NavLink to="/ContactPage">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}


