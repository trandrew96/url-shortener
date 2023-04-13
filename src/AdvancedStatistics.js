import BrandRecognition from "./img/icon-brand-recognition.svg";
import DetailedRecords from "./img/icon-detailed-records.svg";
import FullyCustomizable from "./img/icon-fully-customizable.svg";

export default function AdvancedStatistics() {
  return (
    <div>
      <div className="text-center mt-24 mb-12">
        <h2 className="text-4xl font-bold mb-4">Advanced Statistics</h2>
        <p className="text-gray lg:w-1/2 mx-auto">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="relative text-center lg:text-left">
        <div className="grid lg:grid-cols-3 gap-4 py-20 z-20 relative">
          {/* Brand Recognition Card */}
          <div className="px-6 pb-6 bg-white relative rounded-lg h-fit z-20">
            <div className="bg-darkviolet w-fit rounded-full p-4 -mt-8 mx-auto lg:mx-0">
              <img src={BrandRecognition} />
            </div>
            <h3 className="text-2xl font-bold mb-2 mt-6">Brand Recognition</h3>
            <p className="text-gray">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          {/* Detailed Records Card */}
          <div className="px-6 pb-6 bg-white relative rounded-lg h-fit z-20 mt-12">
            <div className="bg-darkviolet w-fit rounded-full p-4 -mt-8 mx-auto lg:mx-0">
              <img src={DetailedRecords} />
            </div>
            <h3 className="text-2xl font-bold mb-2 mt-6">Detailed Records</h3>
            <p className="text-gray">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          {/* Fully Customizable Card */}
          <div className="px-6 pb-6 bg-white relative rounded-lg h-fit mt-12 z-20 md:mt-24">
            <div className="bg-darkviolet w-fit rounded-full p-4 -mt-8 mx-auto lg:mx-0">
              <img src={FullyCustomizable} />
            </div>
            <h3 className="text-2xl font-bold mb-2 mt-6">Fully Customizable</h3>
            <p className="text-gray">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>

          {/* Vertical Cyan Bg */}
          <div className="absolute top-20 h-2/3 w-full z-10 md:hidden vertical-bg"></div>
        </div>

        <hr className="bg-cyan h-3 border-none absolute w-full top-1/2 z-10 " />
        {/* <div className="border-l-8 border-cyan h-2/3 absolute left-1/2 top-12 md:hidden"></div> */}
      </div>
    </div>
  );
}
