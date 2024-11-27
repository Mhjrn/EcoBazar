import React from 'react'
import PreHeader from '../components/PreHeader'
import LogoHeader from '../components/LogoHeader';
import Navbar from '../components/NavBar';
import Breadcrumbs from '../components/Breadcrumbs';
import Client from '../components/HomepageC.jsx/Client';
import CompanyLogo from '../components/HomepageC.jsx/CompanyLogo';
import AboutUs1 from '../components/About/AboutUs1';
import AboutMe from '../components/About/AboutMe';
import Footer from '../components/Footer';
import Deliver from '../components/About/Deliver';
import Team from '../components/About/Team';


function About() {
  return (
    <>
    <div  className=' font-Regular'>
      <PreHeader/>
      <LogoHeader/>
      <Navbar/>
      <Breadcrumbs/>
      <AboutUs1/>
      <AboutMe/>
      <Deliver/>
      <Team/>
      <Client/>
      <CompanyLogo/>
      <Footer/>
    </div>
    </>
  )
}

export default About