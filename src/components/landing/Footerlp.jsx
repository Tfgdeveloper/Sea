import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Popup from "../Popup";

const Footerlp = () => {
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
    <section class="bg-white">
    <img src="images/footer-bg.png" class=""/>
  </section>
    <footer className="w-full  bg-[#051D38] px-4 md:px-8 pb-2">
      <div className="max-w-[1600px] flex flex-col mx-auto">
         <div class="flex flex-col md:flex-row justify-between bg-white p-6 rounded-2xl">
      <div class="w-full md:w-3/4 flex flex-col gap-4 p-6">
          <h2 class="font-heading text-[24px] md:text-[34px] text-[#171D4B]">Voices That Took Flight with Seawings</h2>
          <p class="max-2xl text-black/75 text-[18px]">
             We offer a wide range of services to meet all your author needs, from writing and editing to formatting, book cover design, publishing, marketing, website development, video book trailers, and more.
          </p>
      </div>   
      <div class="w-full md:w-1/4 flex justify-center md:justify-end items-center">
           <button
          onClick={openPopup}
          class="poppins-medium relative overflow-hidden rounded-full 
          border-[2px] border-[#171D4B] px-[25px] py-[10px] text-[18px] 
          transition-all duration-500 ease-in-out group bg-[#171D4B]"
      >
        <span class="absolute inset-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>

        <span class="relative z-10 transition-colors duration-500 text-white group-hover:text-[#171D4B]" >
          Get Started
        </span>
      </button>
      </div>     
        </div>
        <div className="flex flex-col md:flex-row gap-12 mb-4 justify-between pt-[50px]">
          
          {/* Column 1: Branding */}
          <div className="md:w-[30%] flex flex-col gap-6">
            <img src='images/logowhite.png' className='w-[250px]'/>
            <p className="text-white text-[16px] leading-relaxed max-w-sm">
              We support you at every stage of your journey, from the first draft to selling your book. Join us, and let's create your success story together.
            </p>
           
            
          </div>
          <div className='md:w-[60%] flex flex-col md:flex-row gap-4 justify-end'>

          {/* Column 4: Contact Info */}
          <div className='md:w-[50%]'>
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
              <Link to="/terms-and-conditions" className="text-white/80 hover:text-white transition-colors text-[14px]">
                Terms & Conditions 
              </Link>
              <Link to="/privacy-policy" className="text-white/80 hover:text-white transition-colors text-[14px]">
                Privacy Policy
              </Link>
              <Link to="/refund-policy" className="text-white/80 hover:text-white transition-colors text-[14px]">
                Refund Policy
              </Link>
             
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
    {isPopupOpen && (
        <Popup
          isOpen={isPopupOpen}
          closePopup={closePopup}
        />
        )} 
    </>
  );
};

export default Footerlp;