"use client"
import SEO from "@/components/seo";
import Footer from "../footer/footer";
import HeaderThree from "../header/headerThree";
import Bandarea from "./band-area";
import Banner from "./banner";
import Bookingarea from "./booking-area";

import Deluxe from "./deluxe";
import Placearea from "./place-area";
import Roomarea from "./room-area";
import Services from "./services";
import Teamarea from "./team-area";
import Contact from "./contactpopulate";
const Home3 = () => {
  return (
    <>
      <SEO pageTitle='Home Three' />
        <HeaderThree />
        <Banner /> 
        <Deluxe /> 
       
        <Placearea /> 
        
        <Roomarea />
        <Teamarea />
       
        <Bookingarea />
        
        <Bandarea />
        <Footer />
        <Contact />
    </>
  );
};

export default Home3;
