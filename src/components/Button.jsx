import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Button = () => {
  return (
    <>
            <div className=" grid grid-flow-col justify-center items-center gap-2 w-[191px] h-[51px] bg-white rounded-[53px]">
              <button className=" text-[#00B207] text-xl font-semibold">
                Shop now
              </button>
              <FaArrowRight className=" text-[#00B207] w-[15px] h-[12.05px] " />
            </div>
    </>
  )
}

export default Button