import hamburger from "../../assets/hamburger.svg";
import basket from "../../assets/basket.svg";
import Basket from "../Basket";
import logo from "../../assets/logo.png";
import { useState } from "react";
import DropDownMenu from "../DropDownMenu";
import React, { ReactNode } from "react";
import OpenCard from "../Basket";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="flex flex-row justify-between max-h-12 mb-10 ">
      <img className="mt-2 h-9 " src={logo} alt="logo" />
      <div className="flex flex-row">
        <Basket />

        <DropDownMenu />
      </div>
    </div>
  );
};

export default Header;
