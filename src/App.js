import React from 'react'
import "./App.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HeroSection from './component/Hero'
import VisitUs from './pages/VisitUs'
import Facilities from './pages/Facilities'
import AllFacilities from './pages/AllFacilities'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import SplashScreen from './component/SplashScreen'
import ContactUs from './pages/ContactUs'
import AppointmentForm from './component/AappointmentForm'


const router = createBrowserRouter ([
  {path:"/", element:<SplashScreen/> },
  {path:"/home", element:<HeroSection/> },
  {path:"/visitus", element:<VisitUs/> },
  {path:"/Facilities", element:<Facilities/> },
  {path:"/AllFacilities", element:<AllFacilities/> },
  {path:"/services", element:<Services /> },
  {path:"/aboutus", element:<AboutUs /> },
  {path:"/contactus", element:<ContactUs /> },
  {path:"/appointment-form", element:<AppointmentForm /> }
 

])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App