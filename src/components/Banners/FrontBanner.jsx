import React from "react";
import images from "../image";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";

function FrontBanner() {
  return (
    <>
      <div className="container mx-auto h-[600px] grid grid-cols-3 grid-rows-2 gap-[24px] py-4 my-6 px-28 ">
        {/* front banner 1st one */}
        <div
          style={{
            backgroundImage: `linear-gradient(98.82deg, rgba(0, 0, 0, 0.6) 10.4%, rgba(0, 0, 0, 0) 59.43%), url(${images.FBanner1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="grid-item pt-[115px] item1 col-start-1 col-end-3 row-start-1 row-end-3 rounded-md ">
          <div className=" grid gap-4 items-center pl-[60px] ">
            <div className="text-white font-semibold text-5xl  h-[116px] ">
              <h3>
                Fresh & Healthy <br /> Organic Food
              </h3>
            </div>

            <div className="grid justify-center pl-3 w-[231px] h-[67px] border-l-2 border-[#00B207] ">
              <div className="flex w-[217px] h-[38px] gap-2">
                <div className="text-xl ">
                  <p>Sale up to</p>
                </div>
                <div className=" bg-[#FF8A00] w-[108px] h-[38px] rounded grid justify-center items-center">
                  <p className="text-xl font-semibold text-ceter text-white leading-5">
                    30% OFF
                  </p>
                </div>
              </div>
              <div className="text-[#FFFFFF] opacity-80 text-sm h-[21px]  grid justify-end items-end">
                <p className="">Free shipping on all your order.</p>
              </div>
            </div>

            <div className=" grid grid-flow-col justify-center items-center gap-2 w-[191px] h-[51px] bg-white rounded-[53px]">
              <button className=" text-[#00B207] text-xl font-semibold">
                Shop now
              </button>
              <FaArrowRight className=" text-[#00B207] w-[15px] h-[12.05px] " />
            </div>
          </div>
        </div>
        {/* front banner 2st one */}
        <div
          className="grid item2 rounded-md "
          style={{ backgroundImage: `url(${images.FBanner3})`,
          backgroundSize: "cover", }}
        >
          <div className=" pl-[32px]">
            <div className=" h-[93px]">
              <div className=" h-[60px] ">
                <p className="font-medium text-[14px]">
                  SUMMER SALE
                </p>
                <h5 className=" font-semibold text-[32px] leading-[38.4px]">
                  75% OFF
                </h5>
              </div>
              <div className=" text-gray-600 font-normal text-[14px] leading-[21px]">
                <p>Only Fruit & Vegetable</p>
              </div>
            </div>
            <div className=" grid grid-flow-col justify-center items-center gap-3 w-[108px] h-[19px]">
              <button className=" text-[#00B207] text-[16px] leading-[19.2px] font-semibold">
                Shop now
              </button>
              <FaArrowRight className=" text-[#00B207] w-[15px] h-[12.05px] " />
            </div>
          </div>
        </div>
        {/* front banner 3rd one */}
        <div
          className="item3 grid rounded-md place-items-center "
          style={{ backgroundImage: `url(${images.FBanner2})`,
          backgroundSize: "cover", }}
        >
          <div className=" grid place-items-center gap-8 text-white">
            <div className=" grid place-items-center gap-3">
              <p className=" font-medium text-[14px] leading-[14px] text-center">
                Best Deal
              </p>
              <h5 className=" font-semibold text-[32px] leading-[38.4pxpx] text-center">
                Special Products <br /> Deal of the Month
              </h5>
            </div>
            <div className=" grid grid-flow-col justify-center items-center gap-3 h-[19px]">
              <button className=" text-[#00B207] text-[16px] leading-[19.2px] font-semibold">
                Shop now
              </button>
              <FaArrowRight className=" text-[#00B207] w-[15px] h-[12.05px] " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontBanner;
