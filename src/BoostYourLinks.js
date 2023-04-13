const btnPrimary =
  "rounded-full bg-cyan text-white w-36 py-3 inline-block text-center hover:shadow-inner btn-primary";

export default function BoostYourLinks() {
  return (
    <div className="bg-darkviolet bg-boost-mobile md:bg-boost-desktop py-12 flex items-center bg-no-repeat bg-cover">
      <div className="mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-10">
          Boost your links today
        </h1>
        <a href="#" className={btnPrimary}>
          Get Started
        </a>
      </div>
    </div>
  );
}
