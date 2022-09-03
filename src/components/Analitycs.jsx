import React from "react";
import Laptop from "../assets/laptop.png";

const Analitycs = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-atuo my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            data analitycs dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {" "}
            Manage data analitycs Central
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam, consequatur. Commodi laudantium ab pariatur sequi,
            sapiente explicabo obcaecati provident quaerat error, quod sint.
            Cumque iusto debitis ea incidunt numquam molestiae?
          </p>
          <button className="text-black bg-[#00df9a] hover:bg-[#0f9b65] ease-in-out duration-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analitycs;
/*#0f9b65*/
