import React, { useEffect } from "react";
import styled from "styled-components";
import Contact from "../components/Contact";

import GutIntro from "../components/GutIntro";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Myservice from "../components/Myservice";
import Testimonial from "../components/Testimonial";

function Home(props) {
  return (
    <div>


      <Hero />

      <Intro />
      <GutIntro />
      <Myservice />
      <Contact />
      <Testimonial />
   
    </div>
  );
}

export default Home;
