import react from "react";
import sublogo_lotos from "../../assets/sublogo_lotos.svg";
import hamburger from "../../assets/hamburger.svg";
import basket from "../../assets/basket.svg";
import logo_znak_wodny from "../../assets/logo_znak_wodny.png";
import { useState } from "react";
import DropDownMenu from "../DropDownMenu";

const Header = () => {
  return (
    <div className="flex flex-row justify-between max-h-12  ">
      <img className="mt-2 " src={logo_znak_wodny} alt="logo" />
      <div className="flex flex-row">
        <img className="mr-2" src={basket} alt="basket" />
        <div>
          <DropDownMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
