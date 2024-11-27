import React from 'react'
import images from './image'

function Breadcrumbs() {
  return (
    <>
    <div style={{
            backgroundImage: `url(${images.ShopBanner1})`,
            backgroundSize: "cover",
            borderRadius: "10px",
            backgroundPosition: " center",
          }}
          className=' h-[120px] rotate-180'
          >

    </div>
    </>
  )
}

export default Breadcrumbs