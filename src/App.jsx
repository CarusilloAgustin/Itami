import React from 'react';
import { useState } from 'react';
import homeImg from './assets/home.png';
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Hero from './Components/Hero/Hero.jsx'

function App() {

    return(
      <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Footer></Footer>
      </>
    );
}

export default App
