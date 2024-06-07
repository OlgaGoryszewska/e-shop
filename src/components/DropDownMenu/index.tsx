/*import { useState } from "react";
import hamburger from "../../assets/hamburger.svg";
import { Link, NavLink } from "react-router-dom";

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
        <div className="flex flex-col text-lg relative i-50 ">
          <NavLink to="/HomePage">Home</NavLink>
          <Link to="/ContactPage">Contact</Link>
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;  */
