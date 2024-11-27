import React from "react";
import { PiMapPinLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const PreHeader = () => {
  return (
    <>
      <div
        className=" container mx-auto h-[42x] px-28 py-[12px] flex justify-between text-[#666666] text-[12px] leading-[15.6px] shadow-md"
      >
        <div className="left flex items-center gap-[8px]">
          <PiMapPinLight className="w-[15px] h-[18px] border-gray-600" />
          <p className="w-[292px] h-[16px]">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>

        <div className=" w-[232px] h-[16px] flex justify-between items-center ">
          <div className=" w-[35px] h-[16px] flex gap-[6px]">
            <p className="text-center">Eng</p>
            <IoIosArrowDown className=" border-[#666666] w-[7x] h-[3.5]" />
          </div>
          <div className=" w-[37px] h-[16px] flex gap-[6px]">
            <p className=" W-[24px] text-center">USD</p>
            <IoIosArrowDown className=" border-[#666666] w-[7x] h-[3.5]" />
          </div>
          <div className="w-[0] h-[15px] border-[1px] "></div>
          <div className=" w-[110px] h-[16px] grid grid-flow-col	">
           <NavLink to="/login">Sign In </NavLink>
           /
            <NavLink to="/createAccount">Sign Up</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreHeader;
