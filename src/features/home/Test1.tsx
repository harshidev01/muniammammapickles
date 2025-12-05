import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroBanner: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-[#7a0d0d] text-white py-20 overflow-hidden w-full px-[10vw]">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 w-full ">
        {/* Text Column */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="text-xl lg:text-5xl font-extrabold leading-tight mb-4">
            The Foodie Have Excellent <br />
            Of <span className="text-orange-400">Quality Burgers!</span>
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto lg:mx-0 mb-8">
            The restaurants in Hangzhou also catered to many northern Chinese
            who had fled south from Kaifeng during the Jurchen invasion of the
            1120s, while it is also known that many restaurants were run by
            families.
          </p>
          <Button
            onClick={() => {
              navigate("/collection");
            }}
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-6 px-10 rounded-none "
          >
            Order Now
          </Button>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          {/* Discount Badge */}
          <div className="absolute left-[12vw] transform -translate-x-1/2 -translate-y-1/2 bg-white text-center p-4 rounded-full shadow-md z-10">
            <p className="text-sm font-semibold text-gray-600">Get Up To</p>
            <p className="text-2xl font-bold text-orange-500">50%</p>
            <p className="text-sm text-red-600 font-semibold">Off Now</p>
          </div>

          {/* Pickle Image */}
          <img
            src="/final.png" // Make sure to place the uploaded pickle image here
            alt="Pickle Jar"
            className="w-[350px] lg:w-[450px] object-contain z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
