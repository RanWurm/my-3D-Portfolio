import React from "react";
import { styles } from "../styles";


const HeySection = () => {
  
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
      </section>
    );
}

export default HeySection;
