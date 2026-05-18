import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import ContactForm from './ContactForm';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: "100vh" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    opacity: 0,
    y: "100vh",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const Popup = ({ isOpen, closePopup }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="w-full fixed inset-0 flex justify-center items-end md:items-center z-[9999] bg-black"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.25)", // light transparent overlay
            backdropFilter: "blur(5px)",                 // blur the background behind
            WebkitBackdropFilter: "blur(50px)",           // Safari support
          }}
        >
          <motion.div
            className="rounded-2xl shadow-lg w-full md:w-[35%] relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-4xl text-black transition z-20"
              aria-label="Close popup"
            >
              &times;
            </button>
            <motion.div 
            
            className='w-full bg-white backdrop-blur-md border border-white/50 rounded-2xl py-4 shadow-2xl'
          >
            <h2 className="gradient-text text-[18px] font-semibold text-center text-white drop-shadow-sm">
              Sign Up And Get
            </h2>
            <h2 className="gradient-text text-[34px] md:text-[34px] font-bold text-center text-white drop-shadow-sm mb-4">
              50% Discount
            </h2>
            
            <motion.div 
              
              className='bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] w-full py-2 mb-4 origin-left'
            >
              <div className='flex flex-row items-center justify-center mt-0'>
                <div className='w-10 h-[1px] bg-[#FFC83D] mr-2'/>
                <Star fill="currentColor" className='text-[#FFC83D] w-5 h-5 mr-2'/>
                <h2 className="discount-text text-[18px] font-bold text-[#FFC83D] text-center">
                Memorial Day Special
                </h2>
                <Star fill="currentColor" className='text-[#FFC83D] w-5 h-5 ml-2'/>
                <div className='w-10 h-[1px] bg-[#FFC83D] ml-2'/>
                </div>
                <h2 className="text-[16px] font-bold text-white text-center">
                Limited Time Only
                </h2>
            </motion.div>

            <div className='px-8'>
              <ContactForm />
            </div>
          </motion.div>
            {/* Header */}
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
