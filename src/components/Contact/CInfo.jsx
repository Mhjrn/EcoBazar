import React from "react";
import { PiMapPinLineLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCall } from "react-icons/pi";

function CInfo() {
  return (
    <>
      <div className="container mx-auto px-28 my-20 flex gap-6">
        {/* info div */}
        <div className=" px-5 w-[312px] shadow-lg">
          <div className="flex flex-col justify-center items-center gap-4 py-6 ">
            <PiMapPinLineLight className=" w-[51px] h-[51px] text-[#2C742F]" />
            <p className=" font-normal text-base leading-[27.2px] text-center">
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-6 ">
            <TfiEmail className=" w-[51px] h-[51px] text-[#2C742F]" />
            <p className=" font-normal text-base leading-[27.2px] text-center">
              Proxy@gmail.com Help.proxy@gmail.com
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-6 ">
            <PiPhoneCall className=" w-[51px] h-[51px] text-[#2C742F]" />
            <p className=" font-normal text-base leading-[27.2px] text-center">
              (219) 555-0114 <br />
              (164) 333-0487
            </p>
          </div>
        </div>
        {/* form div */}
        <div className="shadow-lg py-12 px-[50px]">
          <div className=" w-[486px] flex flex-col gap-2 ">
            <p className="text-2xl leading-9 font-semibold text-gray-900">
              Just Say Hello!
            </p>
            <p className=" text-gray-500 text-sm font-normal">
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </p>
          </div>
          <div>
            <form className="grid grid-flow-row py-6 gap-4" action="">
              <div className="grid grid-flow-col gap-4">
                <div className="border-gray-100 border-[1px] rounded ">
                  <input
                    className=" mx-4 my-[14px] outline-none"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Template Cookie"
                  />
                </div>
                <div className="border-gray-100 border-[1px] rounded ">
                  <input
                    className=" mx-4 my-[14px] outline-none"
                    type="email"
                    placeholder="zakirsoft@gmail.com"
                  />
                </div>
              </div>
              <div className="border-gray-100 border-[1px] rounded ">
                <input
                  className="w-[884px] mx-4 my-[14px] outline-none"
                  type="text"
                  name="subject"
                  id=""
                  placeholder="Messages"
                />
              </div>
              <div className="h-[98px] border-gray-100 border-[1px] rounded ">
                <input
                  className=" w-[884px] mx-4 my-[14px] outline-none text-start"
                  type="text"
                  name="subject"
                  id=""
                  placeholder="Subject"
                />
              </div>
              <div>
                <button className=" w-[199px] h-[51px] rounded-full bg-[#00B207] text-white" type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CInfo;
