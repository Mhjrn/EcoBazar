import React from 'react'
import images from '../image'

function AboutUs1() {
  return (
    <>
    <div>
        <div className='container mx-auto h-[492px] px-28 grid grid-cols-2 py-[80px] gap-10'>
            <div>
                <h1 className=' font-semibold text-[60px] leading-[67.2px'>100% Trusted Organic Food Store</h1>
                <p className='text-gray-600 text-[18px] leading-[27px] font-normal'>Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.</p>
            </div>
            <div><img src={images.OldMan1} alt="" /></div>
        </div>
    </div>
    </>
  )
}

export default AboutUs1