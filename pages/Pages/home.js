import React from 'react'
import Banner from '../Components/Banner/Banner'
import AboutUs from '../Components/About/AboutUs'
import Skills from '../Components/Skills/Skills'
import Services from '../Components/Sevices/Services'
import MyWork from '../Components/MyWork/MyWork'
import Events from '../Components/Events/Events'
import Membership from '../Components/Membership/Membership'
import Award from '../Components/Award/Award'
import Bootcamp from '../Components/Bootcamp/Bootcamp'
import OurStory from '../Components/OurStory/OurStory'
import Subscribe from '../Components/Subscribe/Subscribe'

const MainHome = () => {
  return (
    <>
        <Banner />  
        <MyWork  />
        <OurStory />
        <AboutUs />  
        {/* <Skills title='My Expertice Technologies' /> */}
        {/* <Services title="Services" /> */}
        <Bootcamp />
        <Award />
        <Membership />
        <Events />
        <Subscribe />
    </>   
  )
}

export default MainHome