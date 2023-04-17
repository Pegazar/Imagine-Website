import React from 'react'
import Features from '../components/Features/Features'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import Feedback from '../components/Feedback/Feedback'
import About from '../components/About/About'
import Team from '../components/Team/Team'
import Testimonials from '../components/Testimonials/Testimonials'
import Blog from '../components/Blog/Blog'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Pages = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Features />
        <Feedback />
        <About />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
    </div>
  )
}

export default Pages