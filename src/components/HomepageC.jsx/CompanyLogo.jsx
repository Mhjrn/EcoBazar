import React from "react";
import image from "../image";

function CompanyLogo() {
  const CLData = [
    {
      id: 1,
      image: image.CLSteps,
    },
    {
      id: 2,
      image: image.CLMango,
    },
    {
      id: 3,
      image: image.CLFood,
    },
    {
      id: 4,
      image: image.CLFood2,
    },
    {
      id: 5,
      image: image.CLBookoff,
    },
    {
      id: 6,
      image: image.CLGseries,
    },
  ];

  return (
    <>
      <div className="h-[152px] px-28">
        <div className="container grid grid-flow-col  mx-auto py-[60px]">
            {CLData.map((elem, index) =>(<div className="items-center grid grid-flow-col" key={elem.id}> 
            <div className="">
              <img className="hover:filter none" src={elem.image} alt="" />
            </div>
            <div className=" h-8 w-0 border-[1px] border-[#E6E6E6]"></div>
          </div>))}
          
        </div>
      </div>
    </>
  );
}

export default CompanyLogo;
