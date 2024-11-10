import { FaLocationDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex p-4">
      {/* left info */}
      <div className="flex flex-col gap-10">
        <h1 className="text-white font-semibold text-6xl ">
          Discover Most Suitable Property
        </h1>
        <div className="flex flex-col gap-2 text-white-78">
          <p>Find a variety of properties that suit you very easilty</p>
          <p>Forget all difficulties in finding a residence for you</p>
        </div>
        <div className="flex items-center bg-white rounded-md px-2 py-3">
          <FaLocationDot />

          <input type="text" className="outline-none border-none" />
          <button className="rounded-md bg-blue-gradient text-sm text-white font-medium py-2 px-6 border-none outline-none transition-all duration-300 ease-in hover:scale-110">
            Search
          </button>
        </div>
        {/* counter */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center flex-col gap-2">
            <p className="text-white text-4xl">
              9,000 <span className="text-custom-orange">+</span>
            </p>
            <p className="text-white-78">Premium Product</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-2">
            <p className="text-white text-4xl">
              2,000 <span className="text-custom-orange">+</span>
            </p>
            <p className="text-white-78">Happy Customer</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-2">
            <p className="text-white text-4xl">
              28 <span className="text-custom-orange">+</span>
            </p>
            <p className="text-white-78">Awards Winning</p>
          </div>
        </div>
      </div>
      {/* right img */}
      <div className="text-white">img</div>
    </div>
  );
};

export default Hero;
