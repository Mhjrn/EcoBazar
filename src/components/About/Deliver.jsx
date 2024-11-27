import React from "react";
import images from "../image";
import { FaArrowRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";


function Deliver() {
    const DeliverData =[{
        id: 1,
        p:"Sed in metus pellentesque."
    },
    {
        id: 2,
        p:"Fusce et ex commodo, aliquam nulla efficitur, tempus lorem."
    },
    {
        id: 3,
        p:"Maecenas ut nunc fringilla erat varius."
    },
]
  return (
    <>
      <div className="">
        <div className="container mx-auto px-28 grid grid-cols-2">
          <div className="w-[552px] flex-row justify-between items-center">
            <h2 className="font-semibold text-[48px] leading-[57.6px]">
              We Delivered, You Enjoy Your Order.
            </h2>
            <p className=" mt-6">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>
            <div className="mt-5 grid gap-4">
            {DeliverData.map((elem,index) =>( <div className="gap-3 flex">
                    <div className="bg-[#E6F8E7] w-5 h-5 rounded-full flex items-center justify-center"><FaCheck className="w-[12.5px] h-[12.5px] text-[#2C742F]" /></div>
                    <p className="font-normal text-sm text-gray-600">{elem.p}</p>
                </div>))}
            </div>
            <div className=" grid grid-flow-col justify-center items-center gap-2 w-[191px] h-[51px] bg-[#00B207] mt-[28px] rounded-[53px]">
              <button className=" text-white text-xl font-semibold">
                Shop now
              </button>
              <FaArrowRight className=" text-white w-[15px] h-[12.05px] " />
            </div>
          </div>
          <div className="">
            <img className="object-contain" src={images.YoungMan} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Deliver;
