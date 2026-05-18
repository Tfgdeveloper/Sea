import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import GradientButton from "../UI/GradientButton";
import { ChevronRight } from "lucide-react";
import Popup from "./Popup";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    children: [
      { label: "Publishing & Distribution", href: "/services/editing" },
      { label: "Editing & Proofreading", href: "/services/publishing" },
      { label: "Cover Design & Illustrations", href: "/services/distribution" },
      { label: "Ghostwriting & Manuscript", href: "/services/editing" },
      { label: "Marketing & PR Campaigns", href: "/services/publishing" },
      { label: "Audio Book", href: "/services/distribution" },
      { label: "Time Square Event", href: "/services/distribution" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.16, ease: "easeOut" },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
};

const mobileChildVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpenIdx, setMobileDropdownOpenIdx] = useState(null);
  const closeTimer = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleEnter = (i) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(i);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <header className="absolute bg-[transprent] w-full z-20">
      <nav
        
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between h-16 px-4 md:px-8 py-2 mt-3">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            style={{ textDecoration: "none" }}
          >
            <img src="images/logo2.png" className="w-[250px] "/>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item, i) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={handleLeave}
                >
                  <button

                    type="button"
                    className="flex items-center gap-1 text-md font-medium"
                    style={{
                      color: openDropdown === i ? "#13B3D3" : "#171E4B",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <Link to="/services">
                    Services
                    </Link>
                    

                    <svg
                      className="w-3.5 h-3.5 transition-transform"
                      style={{
                        transform:
                          openDropdown === i ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {openDropdown === i && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onMouseEnter={() => clearTimeout(closeTimer.current)}
                        onMouseLeave={handleLeave}
                        style={{
                          position: "absolute",
                          top: "calc(100% + 10px)",
                          left: "-50%",
                          background: "#fff",
                          border: "0.5px solid rgba(0,0,0,0.09)",
                          borderRadius: 14,
                          padding: 6,
                          minWidth: 300,
                          boxShadow: "0 8px 32px rgba(30,50,100,0.10)",
                          zIndex: 200,
                        }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="flex items-center justify-start px-3 py-2 rounded-lg text-md text-[#171E4B] hover:text-[#13B3D3] transition-colors"
                            style={{
                              textDecoration: "none",
                              background: "transparent",
                            }}
                          >
                            <ChevronRight className="w-4 h-4 mr-2"/>
                            <span>{child.label}</span>

                            {/* Chevron */}
                            
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-3 py-2 text-md font-medium text-[#171E4B] hover:text-[#13B3D3] transition-colors"
                  style={{ textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <GradientButton text="Start Project" 
              onClick={openPopup}
              />
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setMobileDropdownOpenIdx(null);
            }}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden px-4 pb-4 bg-white"
            >
              {menuItems.map((item, idx) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      className="w-full flex justify-between py-3 text-md"
                      onClick={() =>
                        setMobileDropdownOpenIdx(
                          mobileDropdownOpenIdx === idx ? null : idx
                        )
                      }
                    >
                      {item.label}
                    </button>

                    <AnimatePresence>
                      {mobileDropdownOpenIdx === idx && (
                        <motion.div variants={mobileChildVariants}>
                          <div className="pl-4 border-l">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="block py-2 text-md text-gray-600 hover:text-[#171E4B]"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block py-3 text-md text-[#171E4B] hover:text-[#13B3D3]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}

              <div className="mt-3">
                <GradientButton text="Start Project" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {isPopupOpen && (
        <Popup
          isOpen={isPopupOpen}
          closePopup={closePopup}
        />
      )}
    </header>
  );
}