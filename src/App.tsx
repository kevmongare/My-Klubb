import { Routes, Route, Link } from 'react-router-dom';
// import { useState } from 'react'
import './App.css'
import Logo from "./assets/Mk.png"
import About from "./assets/Aboutus.png"

// import DP from './assets/Kev__1_-removebg-preview.png'
// import MyKlub from "./assets/My Klub.png"

import Login from './login';


function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />

    </Routes>
    <section  className='position-top sticky px-25 text-gray-800 postition-0 w-full shadow-sm left-0 top-0 mx-auto justify-between flex items-center bg-white/80 py-0'>
      <h1 className='flex items-center text-2xl font-extrabold text-orange-600'><img src={Logo} alt="" className='h-20' />My Klub</h1>
    
        <ul className='flex items-center'>
          <a href="" className='mr-5 text-1xl hover:text-orange-600 text-gray-800'> Home </a>
          <a href="#About-t" className='mr-5 text-1xl hover:text-orange-600 text-gray-700'> About</a>
          <a href="" className='mr-5 text-1xl hover:text-orange-600 text-gray-700'>Projects</a>
          <a href="#contact" className='mr-5 text-1xl hover:text-orange-600 text-gray-700'>Contact</a>
        
      
      <div>
        <a href="" className="inline-block rounded-full bg- bg-blue-950 border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primary-800 mr-2 hover:bg-orange-500">Register</a>
        
          <Link to="/login" className=" text-gray-900 ring-1 ring-orange-500 py-2 px-4 text-sm font-medium rounded-full hover:bg-orange-500 hover:ring-0 hover:text-white" target='blank'>Log in <span aria-hidden="true">&rarr;</span></Link>
        
      </div>
      </ul>
      </section>
    <div className='justify-between grid md:flex pt-15 pb-5 h-3/4 max-w-7xl mx-auto items-center'>
     
      <div className='pl-8'>
              <h1 className='text-gray-800 text-7xl font-semibold tracking-tight text-balance '>POST  <br /> <span className='text-orange-600 font-stretch-130%'>PROJECTS</span><br /> GET HIRED!</h1>
              <p className='text-gray-600 text-left text-2xl pt-10 w-3/4 grid'>Showcase your work and connect with companies seeking talent. 
              <button className='w-fit  bg-orange-500 hover:bg-orange-600 text-white text-2xl px-3 py-2 rounded-lg  mt-15 cursor-pointer'>Check Talent <span aria-hidden="true">&rarr;</span></button> 
              </p>
              
            {/* <div className=" mt-3 bg-orange-100 rounded-lg  p-2 grid grid-col-span-1 md:grid-cols-2 items-center gap-4"><div className="order-2 text-center text-base leading-[19px] font-medium text-orange-900 md:text-start md:order-1">We have made it simpler. You can now access Boma Yangu using your eCitizen account</div><div className="order-1 flex-shrink-0 md:order-2 md:ml-auto">
              </div></div> */}
            </div>
           
              
                <img src={About} alt="" className='  h-100 rounded-lg shadow-lg index-30'/>
  

              
            </div>
            

    <section id='About-t' className="bg-white  shadow-blue-200 shadow-lg hover:shadow-2xl text-gray-900 py-10 w-7xl mx-auto rounded-sm">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h1 className="text-5xl font-bold mb-4 text-orange-500">About Us</h1>
      <hr />

      <div className='text-center'>
        <p className="text-1xl max-w-6xl mx-auto text-gray-600 pt-3 text-center rounded-lg">
         My Klub is a system to help me and my friends showcase our work and connect with companies seeking talent
         </p>
         <section className=' '>
              <div className="max-w-7xl mx-auto columns-2 md:columns-4 gap-8 text-center p-8 bg-gradient-to-b from-transparent to-white rounded-lg mt-10">
            <div className=''>
                <h1 className="text-blue-900 font-bold text-4xl">5000+</h1>
                <p className="text-gray-500 text-xs">People served</p>
            </div>
             <div >
                <h1 className="text-blue-900 font-bold text-4xl">99%</h1>
                <p className="text-gray-500">Success Rate</p>
            </div>
            <div>
                <h1 className="text-blue-900 font-bold text-4xl">150+</h1>
                <p className="text-gray-500">Events hosted</p>
            </div>
            <div>
                <h1 className="text-blue-900 font-bold text-4xl">5</h1>
                <p className="text-gray-500">Branches within the country</p>
            </div>
            </div>
            </section>
      </div>
    </div>
</section>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 pb-5 bg-white rounded-sm p-10 mt-5 shadow-xl" id='contact'>
    
  
            <div className="flex-1 p-8 ">
            <div className="text-center">
            <div className="text-5xl font-extrabold text-orange-500 tracking-tight text-center pb-5">
                My<span className="text-blue-950">Klub</span>
                </div>
                <h1 className="text-4xl font-extrabold text-orange-500 pt-5 border-t">Join Our Newsletter</h1>
                <p className="mt-2 text-gray-600">Get the latest updates and offers straight to your inbox.</p>
            </div>
            <form id="newsletter-form" className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                <div className="mb-4">
                    <label  className="sr-only">Full Name</label>
                    <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400
                            focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    />
                </div>
                <div>
                    <label  className="sr-only">Email address</label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400
                            focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    />
                </div>
                </div>
                <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium
                        rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-orange-500 transition"
                >
                    Subscribe
                </button>
                </div>
            </form>
            <div id="successMessage" className="hidden text-center text-green-600 mt-4">
                Thank you for subscribing!
            </div>
            </div>

            <section id="contact" className="flex-1 rounded-xl p-8  bg-blue-950 hover:shadow-xl">
            <h2 className="text-2xl font-bold text-center text-white mb-6">Get in Touch</h2>
            <div className="space-y-4 ">
                <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 9V7a5 5 0 00-10 0v2M5 9h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9z" />
                </svg>
                <p className="text-white">
                    123 Event Avenue<br />
                    Nairobi, Kenya
                </p>
                </div>
                <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 12h2a2 2 0 012 2v6a2 2 0 01-2 2h-2M8 12H6a2 2 0 00-2 2v6a2 2 0 002 2h2m8-14V6a4 4 0 00-8 0v2h8z" />
                </svg>
                <a href="mailto:info@jurnevents.com" className="text-orange-500 hover:underline">info@jurnevents.com</a>
                </div>
                <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5h2l3.6 7.59a1 1 0 00.9.41h7.02a1 1 0 00.92-.61l3.38-7.09M16 21a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <a href="tel:+254712345678" className="text-orange-500 hover:underline">+254 712 345 678</a>
                </div>
            </div>
            <div className="mt-6">
            <iframe className = "w-150 h=150 shadow-2xl rounded-2xl referrerpolicy="
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9221470790144!2d36.94046947487992!3d-1.3974949985893008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d0078fdcce7%3A0xdde3324ee69cae62!2sMlolongo%20gossip!5e1!3m2!1sen!2ske!4v1747402783315!5m2!1sen!2ske">
            
            </iframe>

            </div>
            </section>
        </div>

              
             <footer className="bg-gray-800 text-white text-center py-6">
            <p>&copy; 2025 My Klub. All rights reserved.</p>
             </footer>
   
    
  
    </>
  )
}

export default App
