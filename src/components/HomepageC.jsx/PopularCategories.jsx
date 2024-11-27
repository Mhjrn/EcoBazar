import React,{useState} from "react";

import image from "../image.js";
import { FaArrowRight } from "react-icons/fa6";

function PopularCategories() {
  const Categories = [
    {
      id: 1,
      name: "Fruits",
      image: image.fruit,
    },
    {
      id: 2,
      name: "Vegetables",
      image: image.vegetables,
    },
    {
      id: 3,
      name: "Meat",
      image: image.meats,
    },
    {
      id: 4,
      name: "Snacks",
      image: image.snack,
    },
    {
      id: 5,
      name: " Beverages",
      image: image.beverage,
    },
    {
      id: 6,
      name: "Beauty & Health",
      image: image.beauty,
    },
    {
      id: 7,
      name: "Bread and Bakery",
      image: image.bb,
    },
    {
      id: 8,
      name: "Vegetables",
      image: image.vegetables,
    },
    {
      id: 9,
      name: "Meat",
      image: image.meats,
    },
    {
      id: 10,
      name: "Snacks",
      image: image.snack,
    },
    {
      id: 11,
      name: " Beverages",
      image: image.beverage,
    },
    {
      id: 12,
      name: "Beauty & Health",
      image: image.beauty,
    },
  ];
  
  return (
    <>
      <div className="container mx-auto px-28 mt-14">
        <div className="grid grid-flow-col  justify-between ">
          <h2 className=" font-semibold text-[32px] leading-[38.4px]">
            Popular Categories
          </h2>
          <button className="grid grid-flow-col w-[90px] h-[24px] gap-3 items-center">
            View All{" "}
            <FaArrowRight className=" text-[#00B207] w-[15px] h-[12.05px] " />
          </button>
        </div>
        <div className=" grid grid-cols-6 items-center gap-6 pt-[32px] bg-white ">
          {Categories.map((elem, index) => (
            <div className=" pt-[16px] border-[1px] border-[#E6E6E6] rounded-md overflow-hidden content-center hover:border-[#2C742F] hover:shadow-lg" >
              <div className="px-[5px] py-[16px]  ">
                <img className=" w-[190px] h-[130px]  object-contain " src={elem.image} alt={elem.name} />
              </div>
              <div className="text-[18px] font-medium text-center">
                <h6>{elem.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularCategories;
