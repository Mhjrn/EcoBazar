import React from "react";
import { NavLink } from "react-router-dom";

function Create() {
  return (
    <>
      <div className=" container flex items-center justify-center my-[80px]">
        <form action="" className=" grid gap-5 px-[24px] pt-6 pb-8 border-[1px] border-[#F2F2F2] shadow-lg">
          <div>
            <h3 className=" font-semiBold text-[32px] leading-[38.4px] text-center text-gray-900">Create Account</h3>
          </div>
          <div className=" w-[472px] grid gap-4">
            <div className="grid gap-3">
              <div className="h-[49px] border-[1px] border-[#E6E6E6] rounded-md flex items-center justify-center">
                <input
                  className="w-[440px] h-[21px] outline-none "
                  type="email"
                  name=""
                  id="Email"
                  placeholder="Email"
                />
              </div>
              <div className="h-[49px] border-[1px] border-[#E6E6E6] rounded-md flex items-center justify-center">
                <input
                 className="w-[440px] h-[21px] outline-none"
                  type="password"
                  name=""
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="h-[49px] border-[1px] border-[#E6E6E6] rounded-md flex  items-center justify-center">
                <input
                 className="w-[440px] h-[21px] outline-none"
                  type="password"
                  name=""
                  id="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className=" flex items-center">
              <label className="flex items-center gap-2" htmlFor="Terms&Condition">
                <input className="h-5 w-5 font-normal text-sm text-gray-600" type="checkbox" name="" id="" /> Accept all terms &
                Conditions
              </label>
            </div>
          </div>
          <div className=""> <button className="w-full h-11 text-white text-center rounded-full bg-[#00B207] text-sm font-semibold" type="submit">Create Account</button></div>
          <div className="text-center"><p className="text-gray-600">Already have account <NavLink className=" font-medium text-sm text-gray-900" to="/login">Login</NavLink></p></div>
        </form>
      </div>
    </>
  );
}

export default Create;
