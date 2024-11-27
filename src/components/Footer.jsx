import React from "react";
import image from "../components/image";

function Footer() {

 const LinkData = [
    {
      id: 1,
      title:'My Account',
      l1:'My Account',
      l2:'Account History',
      l3:'Shopping Cart',
      l4:'Wishlist',
    },
    {
      id: 2,
      title:'Helps',
      l1:'Contact',
      l2:'Faqs',
      l3:'Terms and Conditions',
      l4:'Privacy Policy',
    },
    {
      id: 3,
      title:'Proxy',
      l1:'About',
      l2:'Shop',
      l3:'Product',
      l4:'Track Order',
    },
    {
      id: 4,
      title:'Categrories',
      l1:'Fruits & Vegetab',
      l2:'Meat & Fish',
      l3:'Bread & Bakery',
      l4:'Beauty & Health',
    },
  ]

  return (
    <>
      <div className="mt-[60px]">
        {/* white div footer */}
        <div className="white bg-[#F7F7F7] h-40 px-28 ">
          <div className="container h-40 mx-auto flex items-center justify-between">
            {/* suscribe div */}
            <div className="w-[448px]">
              <p className="font-semibold text-2xl">Subcribe our Newsletter</p>
              <p className=" font-normal text-sm text-gray-400">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna.
              </p>
            </div>
            {/* email address div */}
            <div className="grid grid-flow-col justify-between gap-10">
              <div className="flex w-[536px] h-[52px] border-[1px] border-gray-100 rounded-3xl">
                <div className="w-[490px]  grid grid-flow-col	">
                  <input
                    className=" outline-none w-[350px] pl-6 rounded-l-full"
                    type="text"
                    name="search"
                    placeholder="Your email address"
                  />
                </div>
                <div className="flex justify-center content-center  ">
                  <button className=" w-40 h-[52px]  bg-[#00B207] rounded-full overflow-hidden text-white text-[16px] font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className=" grid grid-flow-col h-10 w-[184px] items-center justify-between">
                <div className="">
                  <img className=" " src={image.SocialMedia} alt="" />
                </div>
                <div className="">
                  <img className="" src={image.SocialMedia1} alt="" />
                </div>
                <div className="">
                  <img className=" " src={image.SocialMedia2} alt="" />
                </div>
                <div className="">
                  <img className="" src={image.SocialMedia3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* black div footer */}
        <div className="Black">
          <div className="bg-gray-900 px-28 text-gray-500">
            <div className="container mx-autogrid items-center">
              <div className="top grid grid-flow-col  py-[60px] ">
                <div className="details w-[336px] grid justify-between">
                  <div>
                    <img
                      className=" w-[183px] h-[38px] "
                      src={image.WhiteLogo}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className=" text-sm font-normal text-gray-500">
                      Morbi cursus porttitor enim lobortis molestie. Duis
                      gravida turpis dui, eget bibendum magna congue nec.
                    </p>
                  </div>
                  <div className="grid grid-flow-col justify-between items-center">
                    <div>
                      <button className="text-white">(219) 555-0114</button>
                    </div>
                    <div>
                      <p className="text-gray-500">or</p>
                    </div>
                    <div>
                      <button className="text-white ">Proxy@gmail.com</button>
                    </div>
                  </div>
                </div>
                <div className="links grid grid-flow-col">
                {LinkData.map((elem,index) =>( <div className=" grid  gap-5">
                    <div className="h-[24px]">
                      <p className="text-white text-[16px] font-medium leading-[24px]">
                        {elem.title}
                      </p>
                    </div>
                    <div className="  grid h-[120px] ">
                      <ul className="grid justify-between text-sm font-normal">
                        <li>
                          <a className=" hover:text-white" href="">
                            {elem.l1}
                          </a>
                        </li>
                        <li>
                          <a className=" hover:text-white" href="">
                            {elem.l2}
                          </a>
                        </li>
                        <li>
                          <a className=" hover:text-white" href="">
                            {elem.l3}
                          </a>
                        </li>
                        <li>
                          <a className=" hover:text-white" href="">
                            {elem.l4}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>))}

                </div>
              </div>
              <div className="bottom h-20 grid grid-flow-col justify-between ">
                <div><p>Ecobazar eCommerce © 2021. All Rights Reserved</p></div>
                <div className="grid grid-flow-col">
                  <img src={image.PayApplet} alt="" />
                  <img src={image.PayVisa} alt="" />
                  <img src={image.PayDiscover} alt="" />
                  <img src={image.PayMastercard} alt="" />
                  <img src={image.PayCart} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
