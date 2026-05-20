import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

import { ChevronRight } from "lucide-react";

import GradientButton from "../../UI/GradientButton";
import Popup from "../Popup";
import Popupbutton from "../../UI/landing/Popupbutton";
import { CallButton } from "../../UI/landing/CallButton";



export default function Headerlp() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);


  return (
    <header className="bg-white w-full z-20">
      <nav
        
      >
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-2 items-center justify-between px-4 md:px-8 py-3">

          {/* Logo */}
          <Link
            
            className="flex items-center"
            style={{ textDecoration: "none" }}
          >
            <img src="images/logoblue.webp" className="w-[250px] "/>
          </Link>


          {/* CTA */}
          <div className="flex gap-2">
            <button
            onClick={openPopup}
            class="hidden md:inline-flex relative overflow-hidden rounded-full 
            border-[2px] border-[#171D4B] px-[25px] py-[10px] text-[18px] 
            text-[#171D4B] transition-all duration-500 ease-in-out group"
          >
            <span class="absolute inset-0 w-0 bg-[#171D4B] transition-all duration-500 ease-in-out group-hover:w-full"></span>

            <span class="relative z-10 transition-colors duration-500 group-hover:text-white">
              Get Started
            </span>
          </button>
            
            <a href="tel:+17372201691" 
            class="hidden md:inline-flex poppins-medium relative overflow-hidden rounded-full 
            border-[2px] border-[#171D4B] px-[25px] py-[10px] text-[18px] 
            transition-all duration-500 ease-in-out group bg-[#171D4B]"
          >
          <span class="absolute inset-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>

            <span class="relative z-10 transition-colors duration-500 text-white group-hover:text-[#171D4B]  ">
            (737) 220-1691
            </span>
          </a>
          </div>


          
        </div> 
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