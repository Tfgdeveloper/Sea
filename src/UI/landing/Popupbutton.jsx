import { useState } from "react";
import Popup from "../../components/Popup";
export default function Popupbutton({
  text = "Get Started",
  className = "",
  padding = "px-[30px] py-[10px]",
  onClick,
}) {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (

    <button
      onClick={onClick}
      className={`
        button-font group relative overflow-hidden rounded-full border border-[2px] border-[#171D4B]
        ${padding}
        font-semibold text-white
        transition-all duration-300
        text-white
        bg-transparent
        
        
        hover:text-[#171D4B]

        ${className}
      `}
    >
      {/* Soft Top Highlight */}

      {/* Shine Animation */}
      <div
        className="
          absolute top-0 -right-0 h-30 w-[300px]
          bg-[#171D4B]
          transition-all duration-700
          group-hover:right-[120%]
        "
      />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-3">
        {text}

     
      </span>
      
    </button>
    
    
  );
}