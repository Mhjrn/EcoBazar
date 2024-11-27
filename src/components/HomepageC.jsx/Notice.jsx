import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaHeadsetSolid } from "react-icons/lia";
import { BsBagCheck } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";

function Notice() {

      const Notices =[{
          id: 1,
          title: 'Free Shipping',
          description:'Free shipping on all your order',
          icon:<LiaShippingFastSolid style={{height: "40px", width: "40px", color: "#00B207"}} />
      },
      {
          id: 2,
          title: 'Customer Support 24/7',
          description:'Instant access to Support',
          icon:<LiaHeadsetSolid className='transform rotate-0' style={{height: "40px", width: "40px", color: "#00B207"}} />
      },
      {
          id: 3,
          title: '100% Secure Payment',
          description:'We ensure your money is save',
          icon:<BsBagCheck style={{height: "40px", width: "40px", color: "#00B207"}}/>

      },
      {
          id: 4,
          title: 'Money-Back Gurantee',
          description:'30 Days Money-Back Guarantee',
          icon:<BsBoxSeam className='transform rotate-90' style={{height: "40px", width: "40px", color: "#00B207"}}/>

      },

  ]

  return (
    <>
      <div className="container mx-auto px-28 h-[128px] grid grid-flow-col justify-evenly items-center bg-[#FFFFFF] shadow-lg rounded-lg;">
      {Notices.map((elem, index) => ( <div className=" grid grid-flow-col gap-4 ">
          <div className="w-[40px] h-[40px]">
            {elem.icon}
          </div>
          <div>
            <div className=" font-semibold text-base leading-[19.2px] text-gray-900">
              {elem.title}
            </div>
            <div className="font-normal text-[14px] leading-[21px] text-gray-400">
              {elem.description}
            </div>
          </div>
        </div>))}
       
      </div>
    </>
  );
}

export default Notice;
