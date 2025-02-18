import { BrowserRouter } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { About, Contact, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,MySummary,HeySection } from "./components";
import useIsMobile from "./hooks/useIsMobile";
const App = () => {
  const isMobile = useIsMobile();
  if (isMobile){
    return (
      <BrowserRouter>
      <Analytics />
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <HeySection/>
          </div>
          <MySummary />
          <About />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    );
  }
  
  
  
  return (
    <BrowserRouter>
    <Analytics />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {!isMobile && <Hero />}
        </div>
        <About />
        <MySummary />
        {!isMobile && <Tech />} {/* Render Tech only if not on mobile */}
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
