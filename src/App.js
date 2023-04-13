import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav.js";
import Hero from "./Hero.js";
import Form from "./Form.js";
import Footer from "./Footer.js";

import BrandRecognition from "./img/icon-brand-recognition.svg";
import DetailedRecords from "./img/icon-detailed-records.svg";
import FullyCustomizable from "./img/icon-fully-customizable.svg";

function App() {
  return (
    <div className="App ">
      <div className="bg-white">
        <div className="max-w-screen-lg mx-auto">
          <Nav></Nav>
          <Hero></Hero>
        </div>
      </div>

      <div className="bg-blueishgray">
        <div className="max-w-screen-lg mx-auto">
          <Form></Form>

          {/* Advanced Statistics Section */}
          <div className="text-center mt-24 mb-12">
            <h2 className="text-4xl font-bold mb-4">Advanced Statistics</h2>
            <p className="text-gray lg:w-1/2 mx-auto">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>

          {/* Card Section */}
          <div className="relative">
            <div className="grid lg:grid-cols-3 gap-4 py-20 z-20 relative">
              {/* Brand Recognition Card */}
              <div className="px-6 pb-6 bg-white relative rounded-lg h-fit">
                <div className="bg-darkviolet w-fit rounded-full p-4 absolute -top-8">
                  <img src={BrandRecognition} />
                </div>
                <h3 className="text-2xl font-bold mb-2 mt-14">
                  Brand Recognition
                </h3>
                <p className="text-gray">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>

              {/* Detailed Records Card */}
              <div className="px-6 pb-6 bg-white relative rounded-lg h-fit mt-12">
                <div className="bg-darkviolet w-fit rounded-full p-4 absolute -top-8">
                  <img src={DetailedRecords} />
                </div>
                <h3 className="text-2xl font-bold mb-2 mt-14">
                  Detailed Records
                </h3>
                <p className="text-gray">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>

              {/* Fully Customizable Card */}
              <div className="px-6 pb-6 bg-white relative rounded-lg h-fit mt-24">
                <div className="bg-darkviolet w-fit rounded-full p-4 absolute -top-8">
                  <img src={FullyCustomizable} />
                </div>
                <h3 className="text-2xl font-bold mb-2 mt-14">
                  Fully Customizable
                </h3>
                <p className="text-gray">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
            <hr className="bg-cyan h-3 border-none absolute w-full top-1/2 z-10 " />
          </div>
        </div>
      </div>

      {/* Boost your links today section */}
      <div className="bg-darkviolet bg-[url('/src/img/bg-boost-desktop.svg')] text-center lg:py-12 flex items-center">
        <div className="mx-auto">
          <h1 className="text-4xl font-bold text-white mb-10">
            Boost your links today
          </h1>
          <a
            href="#"
            className="rounded-full bg-cyan text-white w-36 py-3 inline-block text-center btn-get-started"
          >
            Get Started
          </a>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
export default App;
