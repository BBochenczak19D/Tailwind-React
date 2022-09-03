import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          gorwing with analitycs
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl md: py-4 font-bold px-2"
            strings={["BTB", "BTC", "SaaS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl sm:text-xl text-gray-400 font-bold">
          Monitor your data analitycs to incerace revenue for BTB, BTC - SaaS
          platforms
        </p>
        <button className="text-black bg-[#00df9a] hover:bg-[#0f9b65] ease-in-out duration-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
