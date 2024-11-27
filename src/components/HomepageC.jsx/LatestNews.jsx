import React from "react";
import image from "../image.js";
import { FiTag } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

function LatestNews() {
  const data = [
    {
      id: 1,
      image: image.LNImage1,
      month: "FEB",
      date: "18",
      description:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
      id: 2,
      image: image.LNImage2,
      month: "JAN",
      date: "29",
      description: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    },
    {
      id: 3,
      image: image.LNImage3,
      month: "JAN",
      date: "29",
      description: "Maecenas blandit risus elementum mauris malesuada.",
    },
  ];

  return (
    <>
      <div className="px-28 h-[564px] my-[60px] ">
        <div className="container mx-auto justify-between items-center    ">
          {/* heading  */}
          <div className="flex  w-[1320px]  justify-center items-center">
            <h5 className="h-[38px] w-[194px] font-semibold text-[32px] text-center">
              Latest News
            </h5>
          </div>
          {/* image div */}
          <div className="w-[1320px] h-[494px] grid grid-flow-col">
            {" "}
            {data.map((elem, index) => (
              <div className=" h-[494px] mt-[32px]  border-[2px] border-gray-100">
                <div
                  className="h-[324px] flex items-end  "
                  style={{
                    backgroundImage: `url(${elem.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                >
                  <div className="w-[58px] h-[58px] bg-white text-center m-[24px] ">
                    <p className=" text-[20px] font-medium">{elem.date}</p>
                    <p className="text-[12px] font-medium">{elem.month}</p>
                  </div>
                </div>
                {/* text div box */}
                <div className=" flex-row p-[24px] border-[1px] border-gray-100">
                  {/* description section */}
                  <div className="h-[83px] flex-row gap-2">
                    <div className="h-[21px] grid grid-flow-col justify-between font-Regular text-[14px] leading-[21px]">
                      <div className="flex justify-center items-center  gap-1">
                        <FiTag className="text-gray-300" />
                        <p>Food</p>
                      </div>
                      <div className="flex justify-center items-center gap-1">
                        <FaRegUser className="text-gray-300" />
                        <p>By Admin</p>
                      </div>
                      <div className="flex justify-center items-center gap-1">
                        <FaRegCommentAlt className="text-gray-300" />
                        <p>65 Comments</p>
                      </div>
                    </div>
                    <div className="w-[376px]h-[54px]">
                      <p className="text-gray-900 font-medium text-[18px] leading-[27px]">
                        {elem.description}
                      </p>
                    </div>
                  </div>
                  {/* button section */}
                  <div className=" grid grid-flow-col justify-center items-center gap-3 w-[114px] h-[19px]">
                    <button className=" text-[#00B207] text-[16px] leading-[19.2px] font-semibold">
                      Read More
                    </button>
                    <FaArrowRight className=" text-[#00B207] w-[15px] h-[12.05px] " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestNews;
