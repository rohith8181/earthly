import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import About from './components/About';
import Hero2 from './components/Hero2';

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
      <Hero2/>
      <Hero />
      <About />
    </div>
  );
};

export default App;
