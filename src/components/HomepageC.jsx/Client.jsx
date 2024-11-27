import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { ImQuotesRight } from "react-icons/im";
import image from "../image";

function Client() {


    const CData =[{
        id: 1,
        image: image.CImage1,
        name: "Robert Fox",
        comment: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        Rating: "5",
    },
    {
        id: 2,
        image: image.CImage2,
        name: "Dianne Russell",
        comment: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        Rating: "5",
    },
    {
        id: 3,
        image: image.CImage3,
        name: "<Eleanor Pena>",
        comment: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        Rating: "5",
    }
]
  return (
    <>
      <div className="h-[451px] bg-[#F2F2F2] py-[60px] px-28 ">
        <div className="container mx-auto flex-row">
          {/* heading */}
          <div className="grid grid-flow-col pb-8 justify-between">
            <div className=" w-[313px] h-[38px] align-middle">
              <h5 className="font-semibold text-[32px] leading-[38.4px]">
                Client Testimonials
              </h5>
            </div>
            <div className="h-[45px] flex gap-3">
              <div className="w-11 h-11 border-2 border-gray-100 rounded-full bg-white flex justify-center items-center">
                <HiOutlineArrowLeft className="w-[16px] h-[12.5]" />
              </div>
              <div className=" w-11 h-11 border-2 border-gray-100 rounded-full bg-white flex justify-center items-center">
                <HiOutlineArrowRight className="w-[16px] h-[12.5]" />
              </div>
            </div>
          </div>
          {/* comment div */}
          <div className="  h-[254px] gap-6 grid grid-flow-col justify-between">

          {CData.map((elem,index)=>(
                <div className="p-6 border-[1px] rounded-lg bg-white">
            <div>
              <ImQuotesRight className=" h-6 fill-[#00B207] opacity-30" />
            </div>
            <div>
              <p className=" font-Regular text-sm leading-[21px] text-[#4D4D4D]">
               {elem.comment}
              </p>
            </div>
            <div className="pt-[8px] flex justify-between">
              <div className="flex gap-3">
                <div className="">
                  <img src={elem.image} alt="" />
                </div>
                <div className="">
                  <p className=" font-medium text-[16px] ">{elem.name}</p>
                  <p className="text-[14px] font-normal text-gray-400">
                    Customer
                  </p>
                </div>
              </div>
              <div className="">{elem.Rating}</div>
            </div>
          </div>
             
          ))}
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Client;
