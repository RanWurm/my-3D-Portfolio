import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const MySummary = () => {
  return (
    <div className="mt-12 relative">
      <motion.div
        variants={fadeIn("", "spring", 0.5, 0.75)}
        className="bg-black-100 p-8 rounded-[20px] relative"
      >
        {/* Mobile-first layout with flex */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Content Section */}
          <div className="flex-1">
            <motion.div variants={textVariant()}>
              <p className={`${styles.sectionSubText}`}>Personal Summary</p>
              <h2 className={`${styles.sectionHeadText} text-[#00cea8]`}>About Me.</h2>
            </motion.div>

            <div className="mt-6">
              <motion.div
                variants={fadeIn("", "spring", 0.5, 0.75)}
                className="bg-black-200 p-8 rounded-3xl"
              >
                <p className="text-white tracking-wider text-[18px]">
                  I'm a passionate software developer with expertise in 
                  full-stack mobile apps, web applications, and AI models.
                  
                  <span className="block mt-4">
                    With experience in Python, C, JavaScript, TypeScript, 
                    React, Node.js mongoDB and more..
                  </span>
                  
                  <span className="block mt-4">
                    I'm able to build scalable and efficient solutions and 
                    I'm very comfortable with low-level programming as well.
                  </span>
                </p>

                <div className="mt-7 flex items-center gap-1">
                  <div className="flex-1 flex flex-col">
                    <p className="text-white font-medium text-[16px]">
                      <span className="blue-text-gradient">@</span>Car RentRan Wurmbrand
                    </p>
                    <p className="mt-1 text-secondary text-[12px]">
                      SoftWare Engineer
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Image Section - Repositioned for better responsiveness */}
          <div className="w-48 h-48 lg:w-56 lg:h-56 mx-auto lg:mx-0">
            <div className="w-full h-full rounded-full overflow-hidden bg-black-200 border-2 border-[#00cea8]">
              <img 
                src="../../public/profile.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(MySummary, "MySummary");