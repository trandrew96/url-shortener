import logo from "./img/logo-white.svg";
import facebookLogo from "./img/icon-facebook.svg";
import twitterLogo from "./img/icon-twitter.svg";
import pinterestLogo from "./img/icon-pinterest.svg";
import instagramLogo from "./img/icon-instagram.svg";

export default function Footer() {
  return (
    <div className="bg-verydarkblue text-white py-10">
      <div className="max-w-screen-lg flex md:flex-row flex-col text-center md:text-left mx-auto">
        <div>
          <a href="#" className="mx-auto inline-block mb-10 md:mx-4">
            <img src={logo} />
          </a>
        </div>

        {/* Features */}
        <div className="md:ml-auto mb-14 flex flex-col md:mr-16 gap-4 w-fit mx-auto">
          <h4 className="mb-4">Features</h4>
          <a href="#" className="text-gray hover:text-cyan">
            Link Shortening
          </a>
          <a href="#" className="text-gray hover:text-cyan">
            Branded Links
          </a>
          <a href="#" className="text-gray hover:text-cyan">
            Analytics
          </a>
        </div>

        {/* Resources */}
        <div className="mb-14 flex flex-col md:mr-16 gap-4 w-fit mx-auto md:ml-0">
          <h4>Resources</h4>
          <a href="#" className="text-gray hover:text-cyan">
            Blog
          </a>
          <a href="#" className="text-gray hover:text-cyan">
            Developers
          </a>
          <a href="#" className="text-gray hover:text-cyan">
            Support
          </a>
        </div>

        {/* Company */}
        <div className="mb-14 flex flex-col md:mr-16 gap-4 w-fit mx-auto md:ml-0">
          <h4>Company</h4>
          <a href="#" className="text-gray hover:text-cyan">
            About
          </a>
          <a href="#" className="text-gray hover:text-cyan">
            Our Team
          </a>
          <a href="#" className="text-gray hover:text-cyan">
            Careers
          </a>
          <a href="#" className="text-gray hover:text-cyan">
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex md:mr-4 md:ml-0 mx-auto w-fit">
          <a href="#" className="mr-3">
            <img src={facebookLogo} />
          </a>
          <a href="#" className="mr-3">
            <img src={twitterLogo} />
          </a>
          <a href="#" className="mr-3">
            <img src={pinterestLogo} />
          </a>
          <a href="#">
            <img src={instagramLogo} />
          </a>
        </div>
      </div>
    </div>
  );
}
