import { Phone, PhoneCall } from "lucide-react";

export function CallButton({
  text = "(737) 220-1691",
  className = "",
  padding = "px-[30px] py-[10px]",
}) {
  return (
    <a
      href="tel:+17372201691"
      className="relative overflow-hidden rounded-full bg-[#171D4B] px-[25px] py-[10px] text-[18px] text-center transition-all duration-500 ease-in-out group border-[2px] border-[#171D4B]"
    >
      <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>
      <span className="font-semibold relative z-10 transition-colors duration-500 text-white group-hover:text-[#171D4B]">
       
        {text}

        
      </span>
    </a>
  );
}