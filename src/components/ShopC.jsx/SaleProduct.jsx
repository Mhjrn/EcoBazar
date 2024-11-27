import React from 'react'
import image from '../image'
import Star from '../Star';


function SaleProduct() {

    const SaleData = [        {
        id: 1,
        image: image.RedCapsicum,
        name: "Red Capsicum",
        price: "$20.99",
        AP:"$32.00",
        stars: "4",
      },
      {
        id: 2,
        image: image.Mango,
        name: "Fresh Mango",
        price: "$20.99",
        AP:"$24.00",
        stars: "4.5",
      },
      {
        id: 3,
        image: image.PPCapsicum,
        name: "Green Capsicum",
        price: "$20.99",
        AP:"$32.00",
        stars: "4",
      },
    ]
  return (
    <>
    <div className=' gap-3 pt-5'>
        <div>
            <p className=' font-medium text-xl leading-[30px]'>Sale Product</p>
        </div>
        <div className='grid gap-4'>
            {SaleData.map((elem,index) => (
            <div className='flex rounded-md border-[#E6E6E6] border-[1px]'>
             <div><img className=' w-28' src={elem.image} alt="" /></div>
            <div className="gap-[6px]  place-content-center p-[12px]">
              <div className="grid grid-flow-col justify-between">
                <div>
                  <p className=" text-gray-700 text-[14px] font-medium leading-[21px]">
                    {elem.name}
                  </p>
                  <div className='flex'> <p className="text-gray-900 text-[16px] leading-[24px] font-medium">
                    {elem.price} <span className='text-gray-400 line-through' >{elem.AP}</span>
                  </p></div>
                 
                </div>
              </div>
              <div><Star stars={elem.stars} /></div>
            </div></div>))}


        </div>
    </div>
    </>
    )
}

export default SaleProduct