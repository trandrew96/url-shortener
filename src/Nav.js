import logo from "./img/logo.svg";

export default function Nav() {
  return (
    <div className="flex items-center py-10">
      <a href="#">
        <img src={logo} />
      </a>
      <a href="#" className="font-semibold text-gray hover:text-black mx-8">
        Features
      </a>
      <a href="#" className="font-semibold text-gray hover:text-black mx-8">
        Pricing
      </a>
      <a href="#" className="font-semibold text-gray hover:text-black mx-8">
        Resources
      </a>
      <a
        href="#"
        className="font-semibold text-gray hover:text-black mx-8 ml-auto"
      >
        Login
      </a>
      <a
        href="#"
        className="rounded-full bg-cyan text-white w-36 py-3 inline-block text-center btn-get-started"
      >
        Sign Up
      </a>
    </div>
  );
}
