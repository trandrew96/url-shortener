import Illustration from "./img/illustration-working.svg";

export default function Hero() {
  return (
    <div className="text-center md:text-left md:bg-[url('/src/img/illustration-working.svg')] bg-no-repeat bg-[right] bg-contain my-24">
      <div className="px-6 md:hidden bg-[url('/src/img/illustration-working.svg')] bg-origin-content h-96 bg-no-repeat bg-cover">
        {/* <img src={Illustration} className="" /> */}
      </div>
      <div className="px-6 md:px-0 mt-10 md:mt-0">
        <h1 className="text-6xl font-bold md:w-2/3 lg:w-1/2 mb-3">
          More than just shorter links
        </h1>
        <p className="text-gray mb-8 md:w-2/3 lg:w-2/5">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a
          href="#"
          className="rounded-full bg-cyan text-white w-36 py-3 inline-block text-center btn-get-started"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
