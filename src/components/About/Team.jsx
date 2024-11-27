import React from "react";
import images from "../image";

function Team() {
  const TeamData = [
    {
      id: 1,
      image: images.Team1,
      name: "Jenny Wilson",
      position: "Ceo & Founder",
    },
    {
      id: 2,
      image: images.Team2,
      name: "Jane Copper",
      position: "Worker",
    },
    {
      id: 3,
      image: images.Team3,
      name: "Cody Fisher",
      position: "Security Guard",
    },
    {
      id: 4,
      image: images.Team4,
      name: "Robert Fox",
      position: "Senior Farmer Manager",
    },
  ];
  return (
    <>
      <div>
        <div className="container mx-auto pt-20 px-28 grid grid-flow-row gap-[50px] bg-gradient-to-b from-gray-200 to-white">
          <div className=" flex flex-col items-center justify-center text-center">
            <h2 className="font-semibold text-[48px] leading-[57.6px]">
              Our Awesome Team
            </h2>
            <p className="w-[640px] ">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.
            </p>
          </div>
          <div className="flex gap-6 ">
            {TeamData.map((elem, index) => (
              <div className=" border-[1px] rounded-md overflow-hidden">
                <div className="">
                  <img
                    className="object-cover object-top  h-[280px] w-[312px]"
                    src={elem.image}
                    alt=""
                  />
                </div>
                <div className=" gap-1 mx-5 my-4 flex-col items-center justify-center">
                  <p className="font-medium text-[18px]">{elem.name}</p>
                  <p className="font-normal text-sm text-gray-500">
                    {elem.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
