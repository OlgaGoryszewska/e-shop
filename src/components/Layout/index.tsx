import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
