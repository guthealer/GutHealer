import React from 'react'
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Blogs from './pages/Blogs';



const App = () => {


 
  return (
    <div className='app'>
       
     <Navigation/>

    
     <main>
      
   
     
     <Routes
     >
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="ContactUs" element={<ContactUs />}></Route>
        <Route path="Services" element={<Services/>}></Route>
          <Route path="Blogs" element={<Blogs/>}></Route>
        {/* <Route path="NavigateTo" element={<NavigateTo />}></Route> */}
{/* 
        <Route path="Nested" element={<Nested />}>
          <Route index element={<NestedLink1 />}></Route>
          <Route path="NestedLink1" element={<NestedLink1 />}></Route>
          <Route path="NestedLink2" element={<NestedLink2 />}></Route>
        </Route>  */}

          <Route path="*" element={<Home />}></Route> 
      </Routes>

      </main>   

     <Footer/>
      
    </div>
  )
}

export default App
