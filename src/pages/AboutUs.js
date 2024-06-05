import React from 'react'
import Doctors from '../component/Doctors'
import NavBar from '../component/Navbar'
import Footer from '../component/Footer'
import WorkProcess from '../component/WorkProcess'
import AboutSection from '../component/AboutSection'

const AboutUs = () => {
  return (
  <>
  <NavBar />
  <AboutSection />
  <WorkProcess />
  <Doctors />
  <Footer />
  </>
  )
}

export default AboutUs