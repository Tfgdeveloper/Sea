import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabsData = [
  {
    id: 1,
    label: "Biography",
    images: [
      "images/books/15.png",
      "images/books/16.png",
      "images/books/23.png",
      "images/books/44.png",
      "images/books/25.png",
      "images/books/34.png",
    ],
  },
  {
    id: 2,
    label: "Fiction",
    images: [
      "images/books/28.png",
      "images/books/35.png",
      "images/books/20.png",
      "images/books/32.png",
      "images/books/36.png",
      "images/books/52.png",
    ],
  },
  {
    id: 3,
    label: "Horror",
    images: [
      "images/books/29.png",
      "images/books/30.png",
      "images/books/40.png",
      "images/books/45.png",
      "images/books/47.png",
      "images/books/10.png",
    ],
  },
  {
    id: 4,
    label: "Mystery",
    images: [
      "images/books/19.png",
      "images/books/8.png",
      "images/books/26.png",
      "images/books/27.png",
      "images/books/2.png",
      "images/books/24.png",
    ],
  },
  {
    id: 5,
    label: "Non Fiction",
    images: [
      "images/books/54.png",
      "images/books/48.png",
      "images/books/56.png",
      "images/books/38.png",
      "images/books/49.png",
      "images/books/55.png",
    ],
  },
  {
    id: 6,
    label: "Children",
    images: [
      "images/books/3.png",
      "images/books/9.png",
      "images/books/22.png",
      "images/books/13.png",
      "images/books/5.png",
      "images/books/58.png",
    ],
  },
  {
    id: 7,
    label: "Biblical",
    images: [
      "images/books/1.png",
      "images/books/4.png",
      "images/books/7.png",
      "images/books/11.png",
      "images/books/14.png",
      "images/books/18.png",
    ],
  },
  {
    id: 8,
    label: "Self Help",
    images: [
      "images/books/17.png",
      "images/books/33.png",
      "images/books/43.png",
      "images/books/50.png",
      "images/books/21.png",
      "images/books/6.png",
    ],
  },
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const scrollRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const activeBtn = scrollRef.current?.querySelector(`[data-id="${tabId}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div className="w-full mx-auto p-4">
      {/* Tabs Header */}
      <div className="max-w-5xl mx-auto p-[2px] bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] rounded-full mb-12">
        <div
          ref={scrollRef}
          className="
            flex gap-2 rounded-full bg-white p-[4px]
            overflow-x-auto md:overflow-visible
            md:flex-wrap md:justify-center
            [scroll-snap-type:x_mandatory] md:[scroll-snap-type:none]
            [-webkit-overflow-scrolling:touch]
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          "
        >
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              data-id={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`
                whitespace-nowrap flex-shrink-0
                px-[20px] py-[10px] rounded-full
                transition-all duration-300 text-[18px]
                [scroll-snap-align:center] md:[scroll-snap-align:none]
                ${
                  activeTab === tab.id
                    ? "bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] text-white"
                    : "bg-transparent text-black"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-6 rounded-xl bg-white overflow-hidden">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {tabsData
            .find((t) => t.id === activeTab)
            ?.images.map((img, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <img
                  src={img}
                  alt={`tab-img-${index}`}
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TabsSection;