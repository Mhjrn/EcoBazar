import React from 'react'
import PreHeader from '../components/PreHeader'
import LogoHeader from '../components/LogoHeader';
import Navbar from '../components/NavBar';
import Breadcrumbs from '../components/Breadcrumbs';
import CInfo from '../components/Contact/CInfo';
import Footer from '../components/Footer';


function Contact() {
  return (
    <>
    <div  className=' font-Regular'>
        <PreHeader/>
        <LogoHeader/>
        <Navbar/>
        <Breadcrumbs/>
        <CInfo/>
        <Footer/>
    </div>
    </>
  )
}

export default Contact