import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Doctors from "./Doctors/Doctors";
function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Doctors />
    </div>
  );
}

export default Home;
