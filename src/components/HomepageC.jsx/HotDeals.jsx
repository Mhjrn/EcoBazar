import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import products from "../ProductList";
import { FaArrowRight } from "react-icons/fa6";
import Star from "../Star";

function HotDeals() {
  const [show, setShow] = useState(null);

  const hotproducts = products.filter(
    (products) =>
      products.subcategory && products.subcategory.includes("Hot Deals")
  );

  return (
    <>
      <div className=" h-[1171px] bg-[#F7F7F7] px-28 pt-[60px] mt-[60px]">
        <div className="container mx-auto">
          <div className="grid grid-flow-col  justify-between ">
            <h2 className=" font-semibold text-[32px] leading-[38.4px]">
              Hot Deals
            </h2>
            <button className="grid grid-flow-col w-[90px] h-[24px] gap-3 items-center">
              View All{" "}
              <FaArrowRight className=" text-[#00B207] w-[15px] h-[12.05px] " />
            </button>
          </div>
          {/* product list start */}
          <div className="grid grid-cols-5 items-center my-[30px] bg-white gap-0">
            {hotproducts.map((elem, index) => (
              <div className=" h-[327px] border-[1px] border-gray-100  hover:border-[#2C742F] hover:shadow-lg">
                <div className="relative">
                  {show === index && (
                    <>
                      <div className="absolute top-4 right-4 flex flex-col gap-[6px]">
                        <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#00B207] hover:text-white">
                          <IoEyeOutline className="w-5 h-5" />
                        </button>
                        <button className="bg-white w-10 h-10 rounded-full  flex items-center justify-center hover:bg-[#00B207] hover:text-white">
                          <GoHeart className="w-5 h-5" />
                        </button>
                      </div>
                    </>
                  )}
                  <img
                    className="w-[264px] h-[240px] object-cover"
                    onClick={() => setShow(index)}
                    src={elem.image}
                    alt=""
                  />
                </div>
                <div className="h-[87px] gap-[6px]  place-content-center p-[12px]">
                  <div className="grid grid-flow-col justify-between">
                    <div>
                      <p className=" text-gray-700 text-[14px] font-medium leading-[21px]">
                        {elem.name}
                      </p>
                      <p className="text-gray-900 text-[16px] leading-[24px] font-medium">
                        {elem.price}
                      </p>
                    </div>
                    <div className=" w-[40px] h-[40px] flex justify-center items-center bg-gray-50 rounded-full">
                      <HiOutlineShoppingBag className="w-[20px] h-[20px]" />
                    </div>
                  </div>
                  <div>
                    <Star stars={elem.stars} />
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

export default HotDeals;
