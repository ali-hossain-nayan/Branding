import amazon from '../assets/amazon.png';
import flipkart from '../assets/flipkart.png';
import branding from '../assets/brandingPic.jpg';
import branding2 from '../assets/branding2.webp';

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-12 lg:py-24 gap-12 lg:gap-20 mt-12 bg-white text-gray-900 max-w-screen-xl mx-auto">
      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left space-y-6 px-2">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight">
          Redefine <br className="hidden sm:block" /> Your Style
        </h1>
        <p className="text-base sm:text-lg lg:text-xl max-w-md mx-auto lg:mx-0 text-gray-600">
          Experience the ultimate in comfort and luxury. Designed with
          precision, crafted for those who demand only the best.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
          <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
            Shop Now
          </button>
          <button className="border cursor-pointer border-gray-400 hover:bg-gray-100 text-gray-800 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Store Logos */}
        <div className="pt-8">
          <p className="text-sm sm:text-base text-gray-500">Also Available On</p>
          <div className="flex justify-center lg:justify-start gap-6 mt-3">
            <img src={flipkart} alt="Flipkart" className="h-6 sm:h-8 cursor-pointer object-contain" />
            <img src={amazon} alt="Amazon" className="h-6 sm:h-8 cursor-pointer object-contain" />
          </div>
        </div>
      </div>

      {/* Right Images */}
      <div className="flex-1 flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-lg lg:max-w-2xl">
        <img
          src={branding}
          alt="Product Visual"
          className="w-full sm:w-1/2 rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-500"
        />
        <img
          src={branding2}
          alt="Product Visual"
          className="w-full sm:w-1/2 rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default HeroSection;
