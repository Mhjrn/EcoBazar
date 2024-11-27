import React from 'react'
import PreHeader from '../components/PreHeader'
import LogoHeader from '../components/LogoHeader';
import Navbar from '../components/NavBar';
import Breadcrumbs from '../components/Breadcrumbs';
import LoginC from '../components/LoginC';
import Footer from '../components/Footer';

function Login() {
  return (
    <>
    <div  className=' font-Regular '>
      <PreHeader/>
      <LogoHeader/>
      <Navbar/>
      <Breadcrumbs/>
      <LoginC/>
      <Footer/>
    </div>
    </>  )
}

export default Login