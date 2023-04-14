import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav.js";
import Hero from "./Hero.js";
import Form from "./Form.js";
import AdvancedStatistics from "./AdvancedStatistics.js";
import BoostYourLinks from "./BoostYourLinks";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App ">
      <div className="bg-white px-6">
        <div className="max-w-screen-lg mx-auto">
          <Nav></Nav>
          <Hero></Hero>
        </div>
      </div>

      <div className="relative px-6 lg:px-0 h-full">
        <div className="max-w-screen-lg mx-auto">
          <Form></Form>
          <AdvancedStatistics></AdvancedStatistics>
        </div>
        <div className="bg-blueishgray absolute h-full w-full top-14 -z-10"></div>
      </div>

      <BoostYourLinks></BoostYourLinks>
      <Footer></Footer>
    </div>
  );
}
export default App;
