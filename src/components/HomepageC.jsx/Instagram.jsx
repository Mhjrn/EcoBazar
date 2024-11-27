import React from "react";
import image from "../image";

function Instagram() {
  const InstaData = [{
    id: 1,
    image: image.InstagramP1,
  }, {
    id: 2,
    image: image.InstagramP2,
  }, {
    id: 3,
    image: image.InstagramP3,
  }, {
    id: 4,
    image: image.InstagramP4,
  }, {
    id: 5,
    image: image.InstagramP5,
  }, {
    id: 6,
    image: image.InstagramP6,
  },]


  return (
    <>
      <div className="px-28 h-[270px] ">
        <div className="container mx-auto flex-col ">
          <div className=" text-center ">
            <h5 className=" font-semibold text-[32px]">
              Follow us on Instagram
            </h5>
          </div>
          <div className=" grid grid-flow-col pt-8">
            {InstaData.map((elem,index) =>(<div>
              <img src={elem.image} alt="" />
            </div>))}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Instagram;
