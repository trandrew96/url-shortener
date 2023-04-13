import Illustration from "./img/illustration-working.svg";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row text-center md:text-left md:my-24 mb-12">
      {/* Text Section */}
      <div className="mt-10 md:flex-1 md:pr-4">
        <h1 className="text-6xl font-bold  mb-3">
          More than just shorter links
        </h1>
        <p className="text-gray mb-8">
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

      {/* img div */}
      <div className="md:flex-1 bg-working h-48 md:h-96 bg-no-repeat bg-contain md:bg-cover bg-center md:bg-left"></div>
    </div>
  );
}
