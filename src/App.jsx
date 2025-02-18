import { BrowserRouter } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { About, Contact, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,MySummary } from "./components";
import useIsMobile from "./hooks/useIsMobile";
const App = () => {
  const isMobile = useIsMobile();
  return (
    <BrowserRouter>
    <Analytics />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
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
