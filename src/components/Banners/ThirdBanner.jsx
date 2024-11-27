import React from "react";
import images from "../image";
import { FaArrowRight } from "react-icons/fa6";

function ThirdBanner() {
  return (
    <>
      <div className=" container mx-auto px-28">
        <div
          className=" h-[358px] flex justify-end items-center"
          style={{
            backgroundImage: `url(${images.TBanner})`,
            backgroundSize: "cover",
            borderRadius: "10px",
            backgroundPosition: " bottom",
          }}>
            <div className="">          {/* texts starts */}
          <div className="justify-center items-center ">
            <div className=" gap-3 text-white ">
              <p className="">SUMMER SALE</p>
              <h1 className="text-[56px] leading-[67.2px] font-normal flex">
                <span className=" text-[#FF8A00] font-semibold">37%</span>OFF
              </h1>
            </div>
            <div className="w-[441px] h-[48px]">
              <p className="text-white opacity-70">
                Free on all your order, Free Shipping and 30 days money-back
                guarantee
              </p>
            </div>
          </div>
          {/* button starts */}
          <div className=" grid grid-flow-col justify-center items-center gap-2 w-[191px] h-[51px] bg-[#00B207] mt-[28px] rounded-[53px]">
            <button className=" text-white text-xl font-semibold">
              Shop now
            </button>
            <FaArrowRight className=" text-white w-[15px] h-[12.05px] " />
          </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ThirdBanner;
