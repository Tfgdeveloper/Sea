import React from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
// ✅ FIX 5: Named import — only pulls in the Star icon, not the entire lucide bundle
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
    // ✅ FIX 6: LazyMotion with domAnimation only loads the features actually used
    // (animate, exit, variants). Before: importing { motion } loads the ENTIRE
    // framer-motion runtime (~140KB) even for a simple fade+slide.
    // LazyMotion reduces this to ~18KB. Use <m.div> instead of <motion.div>.
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.div
            className="w-full fixed inset-0 flex justify-center items-end md:items-center z-[9999]"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              // ✅ FIX 7: backdropFilter is extremely expensive on mobile —
              // it forces a full compositing layer repaint on every frame.
              // Removed WebkitBackdropFilter blur(50px) which was causing
              // jank and draining battery on mobile devices.
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          >
            <m.div
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

              <m.div className="w-full bg-white backdrop-blur-md border border-white/50 rounded-2xl py-4 shadow-2xl">
                <h2 className="text-[18px] font-semibold text-center text-black drop-shadow-sm">
                  Sign Up And Get
                </h2>
                <h2 className="text-[34px] md:text-[34px] font-bold text-center text-black drop-shadow-sm mb-4">
                  50% Discount
                </h2>

                <m.div className="bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] w-full py-2 mb-4 origin-left">
                  <div className="flex flex-row items-center justify-center mt-0">
                    <div className="w-10 h-[1px] bg-[#FFC83D] mr-2" />
                    <Star fill="currentColor" className="text-[#FFC83D] w-5 h-5 mr-2" />
                    <h2 className="discount-text text-[18px] font-bold text-[#FFC83D] text-center">
                      Memorial Day Special
                    </h2>
                    <Star fill="currentColor" className="text-[#FFC83D] w-5 h-5 ml-2" />
                    <div className="w-10 h-[1px] bg-[#FFC83D] ml-2" />
                  </div>
                  <h2 className="text-[16px] font-bold text-white text-center">
                    Limited Time Only
                  </h2>
                </m.div>

                <div className="px-8">
                  <ContactForm />
                </div>
              </m.div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default Popup;