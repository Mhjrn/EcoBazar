import React from 'react'

function PopularTag() {
  
  const PTag = ['Healthy', 'Low fat','Vegetarian', 'Kid foods','Vitamins', 'Bread','Meat','Snacks','Tiffin','Launch','Dinner', 'Breakfast','Fruit']
  
  

  return (
    <>
    <div className=' pb-[26px]'>
        <div className=' font-medium text-xl py-5'><p>Popular Tag</p></div>
        <div className=' flex flex-wrap gap-[10px]'>
          {PTag.map((elem,index) => (
            <button key={index} className='py-1 px-4 font-normal text-sm  bg-gray-200 rounded-full'>{elem}</button>
          ))}
          
        </div>
    </div>
    </>
  )
}

export default PopularTag