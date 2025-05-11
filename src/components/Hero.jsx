import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import useIsMobile from "../hooks/useIsMobile";

const Hero = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      // The section is now relative so that we can absolutely position the toggle button
      <section className="relative w-full bg-primary">
        {/* Text Content remains at the top */}
        <div className="pt-[120px] max-w-7xl mx-auto px-4">
          <div className="flex flex-row items-start gap-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 h-40 violet-gradient" />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Ran</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Im a Software Engineer at Red Hat,  
                <br className="sm:block hidden" />
                I develop full stack mobile apps,
                <br className="sm:block hidden" />
                web applications, AI models,
                <br className="sm:block hidden" />
                and low level programs
              </p>
            </div>
          </div>
        </div>

        {/* Computer Canvas Container */}
        <div className="mt-[-150px] w-full" style={{ height: "500px" }}>
          <ComputersCanvas forceLarge />
        </div>

        {/* Toggle Button Positioned Above the Computer Canvas */}
        <div className="absolute top-[600px] left-0 w-full flex justify-center items-center z-10">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    );
  } else {
    return (
      <section className="relative w-full h-screen mx-auto bg-primary">
        {/* Desktop Layout remains unchanged */}
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Ran</span>
            </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Im a Software Engineer at Red Hat,  
                <br className="sm:block hidden" />
                I develop full stack mobile apps,
                <br className="sm:block hidden" />
                web applications, AI models,
                <br className="sm:block hidden" />
                and low level programs
              </p>
          </div>
        </div>

        {/* 3D Computer as a background element */}
        <div className="absolute inset-0 top-[60px] sm:top-[120px]">
          <ComputersCanvas />
        </div>

        {/* Scroll / Toggle Button */}
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    );
  }
};

export default Hero;
