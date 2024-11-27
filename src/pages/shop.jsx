import React from 'react'
import PreHeader from '../components/PreHeader'
import LogoHeader from '../components/LogoHeader';
import Navbar from '../components/NavBar';
import Breadcrumbs from '../components/Breadcrumbs';
import Top from '../components/ShopC.jsx/Top';
import MainDiv from '../components/ShopC.jsx/MainDiv';
import Footer from '../components/Footer';

const shop = () => {
  return (
    <>
    <div className=' font-Regular'>
        
    <PreHeader/>
    <LogoHeader/>
    <Navbar/>
    <Breadcrumbs/>
    <Top/>
    <MainDiv/>
    <Footer/>


    </div>
    </>
  )
}

export default shop