import React from "react";
import { LuSearch } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import image from "../components/image.js";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const LogoHeader = () => {
  return (
    <>
      <div className="logoHeader container mx-auto px-28 h-[93px] py-[12px] flex justify-between items-center">
            {/* logo headers start */}
        <div className=" ">
          <img className="w-[183px] h-[38px]" src={image.logo} alt="logo" />
        </div>
        {/* search div starts */}
        <div className="flex w-[498px] h-[45px] border-[1px] border-gray-100 rounded-md">
          <div className=" w-[400px] grid grid-flow-col px-[16px] py-[12px] gap-[8px] self-center		">
            <LuSearch className="h-5 w-5 " />
            <input
              className=" w-64 self-center pl-2 	"
              type="text"
              name="search"
              placeholder="Search"
            />
          </div>
          <div className="rounded-r-md w-[98px] self-center overflow-hidden	">
            <button className="text-white	 w-[98px]  h-[45px] bg-[#00B207] ">Search</button>
          </div>
          <div></div>
        </div>
        {/* icons div */}
        <div className="flex h-[34px] w-[191px] gap-[16px]">
          <div className=" ">
            <GoHeart className="w-[32px] h-[32px]" />
          </div>
          <div>
          <div className="w-[0] h-[25px] border-[1px] content-center "></div>
          </div> 
          <div className="grid grid-flow-col a">
          <HiOutlineShoppingBag className="w-[34px] h-[34px] font-SemiBold " />
            <div>
            <div className="text-[11px] font-normal text-gray-700">Shopping cart:</div>
            <div className="font-medium text-[14px]">$57.00</div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default LogoHeader;
