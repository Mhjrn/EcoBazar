import React from "react";
import { LuSettings2 } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";


function Top() {
  return (
    <>
      <div className=" mt-8 ">
        <div className="container grid grid-flow-col mx-auto  px-28">
          {/* filter div */}
          <div>
            <button className="bg-[#00B207] w-[131px] flex items-center h-[45px] justify-center text-white font-semibold text-sm rounded-full gap-3">
              Filter <LuSettings2 className="w-[20px] h-[17px]" />
            </button>
          </div>
          {/* sorts div */}
          <div className="flex gap-2 items-center">
            <div><p>Sort by:</p></div>
            <div className="flex items-center justify-between w-[166px] h-[45px] p-[16px] border-[1px] border-gray-[#E6E6E6]">
              <div><p>Latest</p></div>
              <div className=""><FaAngleDown className=" w-[14px] h-[14px] " /></div>
</div>
          </div>
          {/* total result div */}
          <div>
            <p className=" font-normal text-[16px]">
              <span className="font-semibold">52 </span>Results Found
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;
