import React from "react";
import Product from "./Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
        className="home__image"
      />

      <Product
        id={12312}
        title="GSM Fitness Hex Dumbbell, 7.5 kgs, Pack of 2, Rubber Coatedo"
        price={4051.0}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/417wp10uSeL.jpg"
      />
    </div>
  );
};

export default Home;
