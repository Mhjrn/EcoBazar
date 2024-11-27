import React from "react";
import images from "../image";
import { FaArrowRight } from "react-icons/fa6";



function ShopBanner() {
  return <>
  <div className=" h-[295px] rounded-md flex justify-center " style={{backgroundImage : `url(${images.ShopBan})`,backgroundSize: "", backgroundPosition:"top",  }}>
  <div className="">
            <div className=" pt-5">
                <h5 className=" font-semibold text-[32px] leading-[38.4px]">
                <span className=" text-[#FF8A00]"> 79% </span> Discount
                </h5>
              <div className=" text-center text-gray-600 font-normal text-[14px] leading-[21px]">
                <p>on your first order</p>
              </div>
            </div>
            <div className=" grid grid-flow-col justify-center items-center gap-3 ">
              <button className=" text-[#00B207] text-[16px] leading-[19.2px] font-semibold">
                Shop now
              </button>
              <FaArrowRight className=" text-[#00B207] w-[15px] h-[12.05px] " />
            </div>
          </div>
  </div>
  </>;
}

export default ShopBanner;
