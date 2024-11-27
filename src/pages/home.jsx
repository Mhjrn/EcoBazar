import React from 'react'
import PreHeader from '../components/PreHeader'
import LogoHeader from '../components/LogoHeader';
import Navbar from '../components/NavBar';
import PopularCategories from '../components/HomepageC.jsx/PopularCategories'
import FrontBanner from '../components/Banners/FrontBanner';
import Notice from '../components/HomepageC.jsx/Notice';
import PopularProduct from '../components/HomepageC.jsx/PopularProduct';
import SecondBanner from '../components/Banners/SecondBanner';
import HotDeals from '../components/HomepageC.jsx/HotDeals';
import ThirdBanner from '../components/Banners/ThirdBanner';
import FeaturedProduct from '../components/HomepageC.jsx/FeaturedProduct';
import LatestNews from '../components/HomepageC.jsx/LatestNews';
import Client from '../components/HomepageC.jsx/Client';
import CompanyLogo from '../components/HomepageC.jsx/CompanyLogo';
import Instagram from '../components/HomepageC.jsx/Instagram';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
    <div className=' font-Regular '>

      
    <PreHeader/>
    <LogoHeader/>
    <Navbar/>
    <FrontBanner/>
    <Notice/>
    <PopularCategories/>
    <PopularProduct/>
    <SecondBanner />
    <HotDeals />
    <ThirdBanner />
    <FeaturedProduct />
    <LatestNews />
    <Client />
    <CompanyLogo />
    <Instagram />
    <Footer />
    </div>

    </>
  )
}

export default Home;