import react from "react";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Header children={undefined} />
      <Body />
      <Footer />
    </div>
  );
};

export default Layout;
