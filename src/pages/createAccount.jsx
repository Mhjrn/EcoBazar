import React from 'react'
import PreHeader from '../components/PreHeader'
import LogoHeader from '../components/LogoHeader';
import Navbar from '../components/NavBar';
import Breadcrumbs from '../components/Breadcrumbs';
import Create from '../components/Create';
import Footer from '../components/Footer';


const CreateAccount = () => {
  return (
    <>
    <div className=' font-Regular '>
      <PreHeader/>
      <LogoHeader/>
      <Navbar/>
      <Breadcrumbs/>
      <Create/>
      <Footer/>
    </div>
    </>
  )
}

export default CreateAccount