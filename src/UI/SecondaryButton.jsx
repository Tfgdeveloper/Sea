import { Phone, PhoneCall } from "lucide-react";

export function SecondaryButton({
  text = "(855) 553-3713",
  className = "",
  padding = "px-[25px] py-[15px]",
}) {
  return (
    <a
    href="tel:+18555533713"
      className={`
        group relative overflow-hidden rounded-full
        ${padding}
        font-semibold

        text-[#171E4B]

        border border-[#13B3D3]/25
        bg-white/80
        backdrop-blur-xl

        transition-all duration-300

        hover:bg-[#13B3D3]/5
        hover:border-[#13B3D3]/40
        hover:shadow-[0_10px_30px_rgba(19,179,211,0.12)]

        active:scale-[0.98]

        ${className}
      `}
    >
      
      <span className="flex items-center justify-center gap-3">
        <Phone className="w-5 h-5"/>
        {text}

        
      </span>
    </a>
  );
}