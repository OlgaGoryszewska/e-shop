import react from "react";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="flex flex-col z-0 ">
      <div className="flex flex-row justify-center">
        <img
          className="h-7 max-w-11 flex justify-center"
          src={logo}
          alt="logo"
        />
      </div>
      <p>Mob:</p>
      <p>501 873 470</p>
      <p>Wojska Polskiego 1</p>
      <p>Lokal 4</p>
      <p> 06-400 Ciechanów</p>
      <div className="flex flex-row justify-center">
        <img className="h-6 m-2" src={facebook} alt="fecebook icon"></img>
        <img className="h-6 m-2" src={instagram} alt="instagram icon"></img>
      </div>
      <p className="flex flex-row justify-center">devgoddess.no</p>
    </div>
  );
};

export default Footer; 
