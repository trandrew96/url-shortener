import logo from "./img/logo-white.svg";
import facebookLogo from "./img/icon-facebook.svg";
import twitterLogo from "./img/icon-twitter.svg";
import pinterestLogo from "./img/icon-pinterest.svg";
import instagramLogo from "./img/icon-instagram.svg";

export default function Footer() {
  return (
    <div className="bg-verydarkblue text-white py-10">
      <div className="max-w-screen-lg flex mx-auto">
        <div>
          <a href="#">
            <img src={logo} />
          </a>
        </div>
        <div className="ml-auto mr-20">
          <h4 className="mb-4">Features</h4>
          <a href="#" className="text-gray hover:text-cyan">
            Link Shortening
          </a>
          <br />
          <a href="#" className="text-gray hover:text-cyan">
            Branded Links
          </a>
          <br />
          <a href="#" className="text-gray hover:text-cyan">
            Analytics
          </a>
          <br />
        </div>
        <div className="mr-20">
          <h4 className="mb-4">Resources</h4>
          <a href="#" className="text-gray hover:text-cyan">
            Blog
          </a>
          <br />
          <a href="#" className="text-gray hover:text-cyan">
            Developers
          </a>
          <br />
          <a href="#" className="text-gray hover:text-cyan">
            Support
          </a>
          <br />
        </div>
        <div className="mr-20">
          <h4 className="mb-4">Company</h4>
          <a href="#" className="text-gray hover:text-cyan">
            About
          </a>
          <br />
          <a href="#" className="text-gray hover:text-cyan">
            Our Team
          </a>
          <br />
          <a href="#" className="text-gray hover:text-cyan">
            Careers
          </a>
          <br />
          <a href="#" className="text-gray hover:text-cyan">
            Contact
          </a>
        </div>
        <div className="flex">
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
