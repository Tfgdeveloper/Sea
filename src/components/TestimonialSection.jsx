import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import SplitText from "../UI/SplitText";

// Mock data - can be 10 or 1000 items
const allTestimonials = [
  { id: 1, name: "Cassie Wright", role: "Author", quote: "Publishing my book became simple and organized. The whole process felt smooth and stress-free with proper guidance.", image: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 2, name: "Riley Lazard", role: "Freelancer", quote: "I wasn't sure how my story would translate visually, but the illustration service really brought it to life in a way I didn't expect. The artwork felt thoughtful and true to the tone of my book.", image: "https://randomuser.me/api/portraits/men/20.jpg" },
  { id: 3, name: "Edina Kiss", role: "Writer", quote: "The editing and proofreading service improved my manuscript flow while keeping my original voice intact.", image: "https://randomuser.me/api/portraits/women/70.jpg" },
  { id: 4, name: "Jeffrey Carswell", role: "Editor", quote: "Publishing my book became simple and organized. The whole process felt smooth and stress-free with proper guidance.", image: "https://randomuser.me/api/portraits/men/23.jpg" },
  { id: 5, name: "Penn Wryder", role: "Poet", quote: "I wasn't sure how my story would translate visually, but the illustration service really brought it to life in a way I didn't expect. The artwork felt thoughtful and true to the tone of my book.", image: "https://randomuser.me/api/portraits/women/50.jpg" },
];

const TestimonialSection = () => {
  // We keep the entire list in state to reorder it
  const [items, setItems] = useState(allTestimonials);

  // The center item is ALWAYS the one at index 1
  const activeItem = items[1];

  const rotateQueue = (direction) => {
    const newItems = [...items];
    if (direction === "next") {
      // Move first item to the end
      const first = newItems.shift();
      newItems.push(first);
    } else {
      // Move last item to the front
      const last = newItems.pop();
      newItems.unshift(last);
    }
    setItems(newItems);
  };

  const handleImageClick = (index) => {
    if (index === 0) rotateQueue("prev");
    if (index === 2) rotateQueue("next");
  };

  return (
    <section className="w-full flex justify-center bg-white overflow-hidden " >
      <div className="max-w-5xl w-full px-4 relative">
        
        {/* Main Blue Card */}
        <div className="relative  bg-[#171E4B] rounded-[2.5rem] p-10 md:p-20 shadow-2xl text-center min-h-[400px] flex flex-col justify-center items-center ">
          
          {/* Background Watermark */}
          <div className="absolute inset-0 -bottom-90 flex items-center justify-center opacity-10 pointer-events-none select-none">
            <h3 className="text-[5rem] md:text-[13rem] font-bold text-white uppercase tracking-tighter">
                SEAWINGS
            </h3>
          </div>

          {/* Animated Text Content */}
          <div className="relative z-10 max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <SplitText
                    tag="p" 
                    delay={20}
                     animationDelay={0} 
                    text={`“${activeItem.quote}”`}
                    className="text-2xl md:text-4xl font-semibold text-white leading-tight mb-8 drop-shadow-md"
                    textAlign="center"
                    />
                
                <div className="text-white drop-shadow-md">
                    <SplitText
                    tag="span" 
                    delay={20}
                    animationDelay={2} 
                    
                    text={`“${activeItem.name}”`}
                    className="font-bold text-lg"
                    textAlign="center"
                    />
                    <SplitText
                    tag="span" 
                    animationDelay={2}
                    
                    
                    text={`“${activeItem.role}”`}
                    className="text-blue-100 text-md"
                    textAlign="center"
                    />
                  
                  
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* The 3-Item Queue Navigation */}
          <div className="absolute -bottom-10 left-0 right-0 flex justify-center items-end gap-3 md:gap-3 pointer-events-auto">
            <LayoutGroup>
              {/* Only slice the first 3 items to show */}
              {items.slice(0, 3).map((item, index) => {
                const isCenter = index === 1;
                return (
                  <motion.div
                    key={item.id} // Important for Framer Motion to track identity
                    layout
                    onClick={() => handleImageClick(index)}
                    className={`relative cursor-pointer rounded-2xl overflow-hidden border-4 transition-all duration-500
                      ${isCenter 
                        ? "w-18 h-18 md:w-18 md:h-18 border-[#2563EB] z-30 mb-2 scale-100 shadow-blue-900/50" 
                        : "w-16 h-16 md:w-16 md:h-16 border-white/80 z-10 hover:opacity-100"
                      }
                    `}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <motion.img
                      layout="position"
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover select-none"
                    />
                  </motion.div>
                );
              })}
            </LayoutGroup>
          </div>
        </div>
        
        {/* Spacer */}
        <div className="h-16"></div>
      </div>
    </section>
  );
};

export default TestimonialSection;