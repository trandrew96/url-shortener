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
      <div className="bg-white">
        <div className="max-w-screen-lg mx-auto">
          <Nav></Nav>
          <Hero></Hero>
        </div>
      </div>

      <div className="bg-blueishgray px-6 md:px-0">
        <div className="max-w-screen-lg mx-auto">
          <Form></Form>
          <AdvancedStatistics></AdvancedStatistics>
        </div>
      </div>

      <BoostYourLinks></BoostYourLinks>
      <Footer></Footer>
    </div>
  );
}
export default App;
