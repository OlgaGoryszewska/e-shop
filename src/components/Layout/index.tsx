import { NavLink, Outlet} from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.svg";
import Footer from "../Footer";
import Header from "../Header";



export default function Layout() {
  return (
    <div className="">
      <header>
        <Header children={undefined}/>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}


