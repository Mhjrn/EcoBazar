import React,{useState} from "react";
import products from "../ProductList.js";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import Star from '../Star.jsx';

function PopularProduct() {

  const [show,setShow]= useState(null);

  const popularProducts = products.filter(
    (product) =>
      product.subcategory && product.subcategory.includes("popular products")
  );

  return (
    <>
      <div className=" container mx-auto py-[60px] px-28">
        <div className="grid grid-flow-col justify-between">
          <h2 className=" font-semibold text-[32px] leading-[38.4px]">
            Popular Products
          </h2>
          <button className="grid grid-flow-col w-[90px] h-[24px] gap-3 items-center">
            View All
            <FaArrowRight className=" text-[#00B207] w-[15px] h-[12.05px] " />
          </button>
        </div>
        {/* product list start */}

        <div className="grid grid-cols-5 items-center my-[30px]">
          {popularProducts.map((elem, index) => (
          <div className="border-[1px] border-gray-100 hover:border-[#2C742F] hover:shadow-lg">
            <div  className="relative">
              {(show === index) &&
                <>
                <div className='absolute top-4 right-4 flex flex-col gap-[6px]'>
                  <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#00B207] hover:text-white"><IoEyeOutline className='w-5 h-5' /></button>
                  <button className="bg-white w-10 h-10 rounded-full  flex items-center justify-center hover:bg-[#00B207] hover:text-white"><GoHeart className='w-5 h-5'/></button>
                </div>
                </>
                }
              <img
                className="object-cover h-[264px]"
                onClick={() =>setShow(index)}
                src={elem.image}
                alt="" 
              />
            </div>
            <div className="gap-[6px]  place-content-center p-3">
              <div className="grid grid-flow-col justify-between">
                <div>
                  <p className=" text-gray-700 text-[14px] font-medium leading-[21px]">
                    {elem.name}
                  </p>
                  <p className="text-gray-900 text-[16px] leading-[24px] font-medium">
                    {elem.price}
                  </p>
                </div>
                <button className=" w-[40px] h-[40px] flex justify-center items-center bg-gray-50 rounded-full hover:bg-[#00B207] hover:text-white">
                  <HiOutlineShoppingBag className="w-[20px] h-[20px]" />
                </button>
              </div>
              <div><Star stars={elem.stars} /></div>
            </div>
          </div>
        ))}</div>
      </div>
    </>
  );
}

export default PopularProduct;
