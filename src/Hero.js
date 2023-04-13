export default function Hero() {
  return (
    <div className="bg-[url('/src/img/illustration-working.svg')] bg-no-repeat bg-[right] bg-contain my-24">
      <div className="">
        <h1 className="text-6xl font-bold lg:w-1/2">
          More than just shorter links
        </h1>
        <p className="text-gray mb-8 lg:w-2/5">
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
