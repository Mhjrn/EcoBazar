import React from "react";
import { FaAngleDown } from "react-icons/fa6";

function AllCategories() {
  const LabelData = [
    {
      id: 1,
      name: "Fruits (25)",
      number: "134",
    },
    {
      id: 2,
      name: "Vegetables",
      number: "150",
    },
    {
      id: 3,
      name: "Cooking",
      number: "54",
    },
    {
      id: 4,
      name: "Snacks",
      number: "47",
    },
    {
      id: 5,
      name: "Beverages",
      number: "43",
    },
    {
      id: 6,
      name: "Beauty & Health",
      number: "38",
    },
    {
      id: 7,
      name: "Bread and Bakery",
      number: "15",
    },
  ];
  return (
    <>
      <div className=" mt-6 border-b-2 border-gray-200 ">
        <div>
          <fieldset>
            <legend className=" font-medium text-xl flex gap-20 pb-5">
              All Categories{" "}
              <button>
                <FaAngleDown className=" w-[16px] h-[16px] rotate-180 " />
              </button>
            </legend>
            {LabelData.map((elem, index) => (
              <label className="flex gap-2 pb-[0.625rem]">
                <input type="radio" name="categories" id="Fresh Fruit" />
                {elem.name} <span className="text-gray-500">{elem.number}</span>{" "}
                <br />
              </label>
            ))}
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default AllCategories;
