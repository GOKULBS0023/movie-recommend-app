import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import MainWrapper from "../../../MainWrapper/MainWrapper";
import Footer from "../../../Shared/Footer/Footer";

const Favorites = () => {
  return (
    <React.Fragment>
      <Navbar page="favorites" />
      <MainWrapper></MainWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Favorites;
