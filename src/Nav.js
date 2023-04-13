import { useState } from "react";
import logo from "./img/logo.svg";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center py-6 md:py-10 relative">
        <a href="#">
          <img src={logo} />
        </a>
        <a
          href="#"
          className="font-semibold text-gray hover:text-black mx-8 hidden md:flex"
        >
          Features
        </a>
        <a
          href="#"
          className="font-semibold text-gray hover:text-black mx-8 hidden md:flex"
        >
          Pricing
        </a>
        <a
          href="#"
          className="font-semibold text-gray hover:text-black mx-8 hidden md:flex"
        >
          Resources
        </a>
        <a
          href="#"
          className="font-semibold text-gray hover:text-black mx-8 ml-auto hidden md:flex"
        >
          Login
        </a>
        <a
          href="#"
          className="rounded-full bg-cyan text-white w-36 py-3 text-center btn-get-started hidden md:inline-block"
        >
          Sign Up
        </a>

        {/* Hamburger Menu */}
        <button
          className="ml-auto mr-4 md:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg viewBox="0 0 100 80" width="40" height="40" fill="gray">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="relative md:hidden">
        <div
          className={
            "bg-darkviolet absolute left-0 right-0 text-white text-center rounded-lg text-xl font-bold p-10 " +
            (navOpen ? "" : "hidden")
          }
        >
          <a href="#" className="mb-10">
            Features
          </a>

          <br className="my-5" />
          <a href="#" className="">
            Pricing
          </a>
          <br className="my-5" />
          <a href="#" className="">
            Resources
          </a>
          <br className="my-5" />
          <hr className="border-gray my-2" />
          <a href="#" className="">
            Login
          </a>
          <br className="my-5" />
          <a
            href="#"
            className="rounded-full bg-cyan text-white w-full py-3 inline-block text-center btn-get-started"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
