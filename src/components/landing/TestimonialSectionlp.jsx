import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: Use icons for better UI

const TESTIMONIALS = [
  {
    id: 1,
    name: "Penn Wryder",
    quote: "I wasn't sure how my story would translate visually, but the illustration service really brought it to life in a way I didn't expect. The artwork felt thoughtful and true to the tone of my book.",
    image: "images/Penn-Wryder.png",
    book: "images/books/47.png", // Placeholder for demo
  },
  {
    id: 2,
    name: "Jeffrey Carswell",
    quote: "Publishing my book became simple and organized. The whole process felt smooth and stress-free with proper guidance.",
    image: "images/Jeffrey.png",
    book: "images/books/60.png",
  },
  {
    id: 3,
    name: "Edina Kiss",
    quote: "The editing and proofreading service improved my manuscript flow while keeping my original voice intact.",
    image: "images/Edina.png",
    book: "images/books/55.png",
  },
  {
    id: 4,
    name: "Riley Lazard",
    quote: "I wasn't sure how my story would translate visually, but the illustration service really brought it to life in a way I didn't expect. The artwork felt thoughtful and true to the tone of my book.",
    image: "images/Riley.png",
    book: "images/books/35.png", // Placeholder for demo
  },
  {
    id: 5,
    name: "Cassie Wright",
    quote: "Publishing my book became simple and organized. The whole process felt smooth and stress-free with proper guidance.",
    image: "images/Cassie.png",
    book: "images/books/39.png",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const TestimonialSectionlp = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback((newDirection) => {
    setPage(([prevPage]) => {
      let nextIndex = prevPage + newDirection;
      if (nextIndex < 0) nextIndex = TESTIMONIALS.length - 1;
      if (nextIndex >= TESTIMONIALS.length) nextIndex = 0;
      return [nextIndex, newDirection];
    });
  }, []);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const activeItem = TESTIMONIALS[page];

  return (
    <section className="w-full ">
      <div className="w-full mx-auto ">
        <div className="relative min-h-[500px] lg:min-h-[450px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="w-full gap-8 flex flex-col md:flex-row gap-6 p-6"
            >
              {/* Image Side */}
              <div className="md:w-1/3 w-full flex justify-center items-center order-2 lg:order-1">
                <div className="relative group">
                  
                  <img
                    src={activeItem.book}
                    alt={`${activeItem.name}'s book`}
                    className="relative w-auto h-[70%] rounded-lg shadow-2xl object-cover"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-2/3 w-full flex flex-col items-center justify-center text-center order-1 lg:order-2">
                <img
                  src={activeItem.image}
                  alt={activeItem.name}
                  className="mb-6 w-24 h-24 rounded-full object-cover"
                />
                <h3 className="text-[38px] font-bold text-white">
                  {activeItem.name}
                </h3>
                <div className="mb-6 text-yellow-400 text-xl tracking-widest" aria-label="5 star rating">
                  ★★★★★
                </div>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed italic">
                  "{activeItem.quote}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-12 flex flex-col items-center gap-6">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <NavButton onClick={() => paginate(-1)} label="Previous">
              <ChevronLeft size={24} />
            </NavButton>
            
            {/* Dots Indicator */}
            <div className="flex gap-2 mx-4">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage([idx, idx > page ? 1 : -1])}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    idx === page ? "w-8 bg-white" : "w-2 bg-white/30"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <NavButton onClick={() => paginate(1)} label="Next">
              <ChevronRight size={24} />
            </NavButton>
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted Sub-component for buttons to keep code clean
const NavButton = ({ onClick, children, label }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="
      flex h-12 w-12 items-center justify-center 
      rounded-full border border-white/50 text-white 
      transition-all duration-200 
      hover:bg-white hover:text-[#171D5A] hover:border-white
      active:scale-95
    "
  >
    {children}
  </button>
);

export default TestimonialSectionlp;