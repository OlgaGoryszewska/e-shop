import { useState } from "react";
import hamburger from "../../assets/hamburger.svg";
import { Link } from "react-router-dom";

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
          <Link to="/HomePage">Home</Link>
          <Link to="/CardPage">Card</Link>
          <Link to="/ContactPage">Contact</Link>
          <Link to="/CheckOutSuccessPage">Checkout</Link>
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
