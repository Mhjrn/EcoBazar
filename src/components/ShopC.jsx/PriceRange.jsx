import React from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function PriceRange() {
  return (
    <>
    <div>
        <h3>Price</h3>
        {/* <input type="range" min={0} max={100} className="range range-primary" /> */}
        <Slider  />
        <p className=' font-normal'>Price:
            <span className=' font-medium text-sm'>50 - 1500</span>
        </p>
    </div>
    </>
  )
}

export default PriceRange