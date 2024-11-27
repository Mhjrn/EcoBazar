import React, { useState } from 'react'
import products from '../ProductList';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import Star from '../Star';

function ProductList() {
  const [show,setShow] = useState(null);

  return (
    <>
         <div className="grid grid-cols-3 items-center my-[30px]">
          {products.map((elem, index) => (
          <div className="border-[1px] border-gray-100 hover:border-[#2C742F]">
            <div className='relative'>
            {(show === index) &&
                <>
                <div className='absolute top-4 right-4 flex flex-col gap-[6px]'>
                  <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#00B207] hover:text-white"><IoEyeOutline className='w-5 h-5' /></button>
                  <button className="bg-white w-10 h-10 rounded-full  flex items-center justify-center hover:bg-[#00B207] hover:text-white"><GoHeart className='w-5 h-5'/></button>
                </div>
                </>
                }
              <img
                className="object-cover h-[312px]"
                onClick={() => setShow(index)}
                src={elem.image}
                alt=""
              />
            </div>
            <div className="gap-[6px]  place-content-center p-[12px]">
              <div className="grid grid-flow-col justify-between">
                <div>
                  <p className=" text-gray-700 text-[14px] font-medium leading-[21px]">
                    {elem.name}
                  </p>
                  <div> <p className="text-gray-900 text-[16px] leading-[24px] font-medium">
                    {elem.price} <span className='text-gray-400 line-through' >{elem.AP}</span>
                  </p></div>
                 
                </div>
                <div className=" w-[40px] h-[40px] flex justify-center items-center bg-gray-50 rounded-full">
                  <HiOutlineShoppingBag className="w-[20px] h-[20px]" />
                </div>
              </div>
              <div><Star stars={elem.stars} /></div>
            </div>
          </div>
        ))}</div>
    </>
  )
}

export default ProductList