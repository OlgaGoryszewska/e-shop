import { NavLink, Outlet} from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.svg";


export default function Layout() {
  return (
    <div className="">
      <header>
        <nav>
          <img className="mt-2 w-9 " src={logo} alt="logo" />
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


