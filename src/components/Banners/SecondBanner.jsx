import React from "react";
import images from "../image";
import Button from "../Button";

function SecondBanner() {

    const SBanner =[{
        image: images.SBanner1,
        topic:"BEST DEALS",
        title: "Sale of the Month",
        offers: "Timer",
    },
    {
        image: images.SBanner2,
        topic:"85% FAT FREE",
        title: "Low-Fat Meat",
        offers: "Started at $79.99",
    },
    {
        image: images.SBanner3,
        topic:"SUMMER SALE",
        title: "100% Fresh Fruit",
        offers: "Up to 64% Off",
    }
]



  return (
    <>
      <div className="container mx-auto grid grid-cols-3 justify-center items-center text-white px-28">
        {SBanner.map((elem,item) => (<div
          className="w-[424px] h-[536px]"
          style={{
            backgroundImage: `url(${elem.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
          <div className="mt-[35px]">
            <p className=" font-medium text-[14px] leading-[14px] text-center ">
              {elem.topic}
            </p>
          </div>
          <div className="mt-[16px]">
            <h3 className=" font-semibold text-[40px] leading-[48px] text-center">
              {elem.title}
            </h3>
          </div>
          <div className="gap-8px flex justify-center items-center ">
            <p className=" font-medium text-[18px] leading-[27px] text-center ">{elem.offers} </p>
          </div>
          <div className="mt-[24px] flex justify-center items-center ">
            <Button />
          </div>
        </div>))}
        
      </div>
    </>
  );
}

export default SecondBanner;
