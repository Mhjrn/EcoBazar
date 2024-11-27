import React from 'react'
import AllCategories from './AllCategories'
import ProductList from './ProductList'
import PriceRange from './PriceRange'
import RatingRanges from './RatingRanges'
import PopularTag from './PopularTag'
import ShopBanner from './ShopBanner'
import SaleProduct from './SaleProduct'

function MainDiv() {
  return (
    <>
    {/* whole main page */}
    <div className='container flex  mx-auto px-28 gap-6'>
        {/* side bar div */}
        <div className=' w-1/5'>
             <AllCategories/>
             <PriceRange/>
             <RatingRanges/>
             <PopularTag/>
             <ShopBanner/>
             <SaleProduct/>
             
        </div>
        {/* product div */}
        <div className=' w-4/5'>
          <ProductList/>
         
        </div>
    </div>
    </>
  )
}

export default MainDiv