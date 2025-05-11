import React from "react";
import Hero from "./Hero";
// import { useTheme } from "../components/ThemeContext ";
import Service from "../components/Service";
import OurServices from "../components/OurServices";

import ScrollButtons from "./ScrollButtons ";

function Home() {
  
  return (
    <div className="bg-gradient-to-br from-white via-pink-100 to-pink-300"
    
    >
     <Hero/>
     
     <OurServices/>
     <Service/>
     
     <ScrollButtons/>
    </div>
  );
}

export default Home;