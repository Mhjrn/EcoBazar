import React from "react";
import images from "../image";
import { BiLeaf } from "react-icons/bi";
import { RiStarLine } from "react-icons/ri";

import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaHeadsetSolid } from "react-icons/lia";
import { BsBagCheck } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";

function AboutMe() {
    const Notices =[{
        id: 1,
        title: 'Free Shipping',
        description:'Free shipping on all your order',
        icon: <BiLeaf style={{height: "40px", width: "40px", color: "#00B207"}}  />

    },
    {
        id: 2,
        title: 'Customer Support 24/7',
        description:'Instant access to Support',
        icon: <RiStarLine style={{height: "40px", width: "40px", color: "#00B207"}}  />
    }
    ,{
        id: 3,
        title: 'Free Shipping',
        description:'Free shipping on all your order',
        icon:<LiaShippingFastSolid style={{height: "40px", width: "40px", color: "#00B207"}} />
    },
    {
        id: 4,
        title: 'Customer Support 24/7',
        description:'Instant access to Support',
        icon:<LiaHeadsetSolid className='transform rotate-0' style={{height: "40px", width: "40px", color: "#00B207"}} />
    },
    {
        id: 5,
        title: '100% Secure Payment',
        description:'We ensure your money is save',
        icon:<BsBagCheck style={{height: "40px", width: "40px", color: "#00B207"}}/>

    },
    {
        id: 6,
        title: 'Money-Back Gurantee',
        description:'30 Days Money-Back Guarantee',
        icon:<BsBoxSeam className='transform rotate-90' style={{height: "40px", width: "40px", color: "#00B207"}}/>

    },

]
  return (
    <>
      <div className="mt-[80px] flex h-[685px]">
        <div
          // style={{
          //   backgroundImage: `url(${images.OldMan2})`,
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          // }}
          // className=""
        >
          <img className="" src={images.OldMan2} alt="" />
          
        </div>
        <div>
          <div className="w-[570px] ">
            <h1 className=" font-semibold text-[56px] leading-[67.2 px]">
              100% Trusted Organic Food Store
            </h1>
            <p className="font-normal text-[16px] text-gray-500">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>
          </div>
          <div className=" grid grid-rows-3 grid-cols-2 justify-evenly items-center gap-3 mt-6">
      {Notices.map((elem, index) => ( <div className="flex gap-4 ">
          <div className=" bg-[#E6F8E7]  w-[4.5rem] h-[4.5rem] flex justify-center items-center rounded-full">
            {elem.icon}
          </div>
          <div>
            <div className=" font-semibold text-[18px] leading-[19.2px] text-gray-900">
              {elem.title}
            </div>
            <div className="font-normal text-[14px] leading-[21px] text-gray-400">
              {elem.description}
            </div>
          </div>
        </div>))}
       
      </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
