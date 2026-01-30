
import gsap from 'gsap';
import './App.css';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import { useGSAP } from '@gsap/react';
// import Progress from './component/Progress';
import About from './component/About';
import Progress from './component/Progress';
import Project from './component/Project';
import ExperienceSection from './component/ExperienceSection';
import ContactSection from './component/ContactSection';
import Footer from './component/Footer';
// import JarvisUI from './component/JarvisUI';
// import Experience from './component/Experience';

gsap.registerPlugin(useGSAP); 

function App() {
  
// let X = 0;
// let Y = 0;

useGSAP(() => {
  window.addEventListener("mousemove", (e) => {
    let X = e.x;
    let  Y = e.y;

    gsap.to(".cursor", {
      x: X,
      y: Y,
      ease: "circ.out"

    })
  });
});


  return (
   <>
  <div className='relative '>
     <div className='w-5 h-5 bg-[#021b29] left-0 top-0  pointer-events-none rounded-4xl cursor fixed z-30'></div>
  </div>
  <div className='absoulte '></div>
   <div className='w-full overflow-x-hidden'>
    <Header/>
   <HeroSection/>
   <About/>
   <Progress/>
    <Project/>
    <ExperienceSection/>
    <ContactSection/>
    <Footer/>
    {/* <JarvisUI/> */}
   </div>
 
  
   </>
  );
}

export default App;
