import react from "react";
import Nav from "../Nav";
import Body from "../Body";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Nav />
      <Body />
      <Footer />
    </div>
  );
};

export default Layout;
