import React, { useEffect } from "react";
import "./banner/Banner.css";
import Banner from "./banner/Banner";
import Why_choose from "./why-choose/Why_choose";
import Made_for from "./made-for/Made_for";
import Downlaod_app from "./download-app/Downlaod_app";
import Counter from "./counter/Counter";
import Who_we_are from "./who-we-are/Who_we_are";
import Get_started from "./get-started/Get_started";
import Services from "./services/Services";
import Features from "./features/Features";
import Rides_trust from "./rides/Rides_trust";
import Faq from "./faq/Faq";
import Get_the_app from "./get-the-app/Get_the_app";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <Why_choose />
      <Made_for />
      <Counter />
      <Who_we_are />
      <Get_started />
      <Services />
      <Features />
      <Downlaod_app />
      <Rides_trust />
      <Faq />
      <Get_the_app />
    </>
  );
}

export default Home;
