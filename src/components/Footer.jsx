import { useState } from "react";
import { motion } from "framer-motion";
import Popup from './Popup';
import { Link } from "react-router";
import GradientButton from "../UI/GradientButton";
import { SecondaryButton } from "../UI/SecondaryButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };
  return (
    <>
  
    <footer className="w-full  bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] pt-8 pb-2 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-4 justify-between">
          
          {/* Column 1: Branding */}
          <div className="md:w-[30%] flex flex-col gap-6">
            <img src='images/logowhite.png' className='w-[250px]'/>
            <p className="text-white text-[16px] leading-relaxed max-w-sm">
              We support you at every stage of your journey, from the first draft to selling your book. Join us, and let's create your success story together.
            </p>
            <div className="w-fit">
              <button onClick={openPopup}  className="bg-white text-white px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition-all active:scale-95">
               <span className=' gradient-text'>Schedule Consultation</span> 
              </button>
            </div>
            
          </div>
        <div className='md:w-[60%] flex flex-col md:flex-row gap-4 justify-end'>
          {/* Column 2: Quicklinks */}
          <div className='md:w-[16%]'>
            <h3 className="text-xl font-bold text-white mb-6">Quicklinks</h3>
            <ul className="flex flex-col gap-4">
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[16px]">
                Home
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[16px]">
                About
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[16px]">
                Services
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[16px]">
                Portfolio
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[16px]">
                Contact
              </Link>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className='md:w-[30%]'>
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <ul className="flex flex-col gap-4">
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[16px]">
                Publishing & Distribution
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[16px]">
                Editing & Proofreading
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[16px]">
                Cover Design & Illustrations
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[16px]">
                Ghostwriting & Manuscript
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[16px]">
                Marketing & PR Campaigns
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[16px]">
                Audio Book
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[16px]">
                Time Square Event
              </Link>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className='md:w-[35%]'>
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-col">
                <span className="text-white text-sm uppercase tracking-wider">Phone</span>
                <a href="tel:+17372201691" className="text-white/80 font-medium hover:text-white">(737) 220-1691</a>
              </li>
              <li className="flex flex-col">
                <span className="text-white text-sm uppercase tracking-wider">Email</span>
                <a href="mailto:info@seawings.com" className="text-white/80 font-medium hover:text-white">info@seawingspublications.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-white text-sm uppercase tracking-wider">Office</span>
                <p className="text-white/80 font-medium">12828 Willow Centre Dr Houston TX 77066</p>
              </li>
            </ul>
          </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            Copyright © {currentYear} SeaWings.com All Rights Reserved.
          </p>
          <div className="flex gap-6">
             <ul className="flex flex-row gap-4">
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[14px]">
                Terms & Conditions 
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[14px]">
                Privacy Policy
              </Link>
              <Link to="/" className="text-white/80 hover:text-white transition-colors text-[14px]">
                Refund Policy
              </Link>
             
            </ul>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <Popup
          isOpen={isPopupOpen}
          closePopup={closePopup}
        />
        )} 
    </footer>
    </>
  );
};

export default Footer;