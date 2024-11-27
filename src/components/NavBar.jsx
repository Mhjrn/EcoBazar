import React from "react";
import { PiPhoneCall } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className=" bg-gray-800 text-white  py-[12px] px-28">
        <div className="container mx-auto grid grid-flow-col justify-between text-[14px] font-medium leading-[21px]">
          {/* NavLink starts */}
          <div className="w-[535px] h-[21px] gap-[32px]">
            <ul className=" grid grid-flow-col  text-gray-300 ">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Shop" className="hover:text-white">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="" className="hover:text-white">
                  Page
                </NavLink>
              </li>
              <li>
                <NavLink to="" className="hover:text-white">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutUs" className="hover:text-white">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-white">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          {/* contact div starts */}
          <div className="grid grid-flow-col w-[139px] h-[28px] gap-[8px]">
            <PiPhoneCall className="w-[20.09px] h-[20.9px]" />
            <p>(219) 555-0114</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
