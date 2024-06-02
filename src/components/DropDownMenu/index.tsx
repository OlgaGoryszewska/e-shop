import { useState } from "react";
import hamburger from "../../assets/hamburger.svg";

function DropDownMenu() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div className="">
      <button onClick={handleClick}>
        <img className=" w-11 mt-2" src={hamburger} alt="menu" />
      </button>
      {menu && (
        <div className="flex flex-col">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
