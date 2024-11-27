import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import Star from '../Star'

function RatingRanges() {
    const RatingData = [
        {
            id: 1,
            title: "5.0",
            stars: "5",

        },
        {
            id: 2,
            title: "4.0 & up",
            stars: "4",
        },
        {
            id: 3,
            title: "3.0 & up",
            stars: "3",
        },
        {
            id: 4,
            title: "2.0 & up",
            stars: "2",
        },
        { 
            id: 5,
            title: "1.0 & up",
            stars: "1",
        }

    ]
  return (
    <>
     <div className=" mt-6 border-b-2 border-gray-200 ">
        <div>
          <fieldset>
            <legend className=" font-medium text-xl flex gap-20 pb-5">
              Rating
              <button>
                <FaAngleDown className=" w-[16px] h-[16px] rotate-180 " />
              </button>
            </legend>
            {RatingData.map((elem, index) => (
              <label className="flex gap-2 pb-[0.625rem]">
                <input type="checkbox" className=' accent-green-600 w-5 h-5'  name="categories" id="Fresh Fruit" />
                <span><Star stars={elem.stars} /></span>
                {elem.title}
                <br />
              </label>
            ))}
          </fieldset>
        </div>
      </div>
    </>
  )
}

export default RatingRanges