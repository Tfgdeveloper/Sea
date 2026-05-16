export function SecondaryButton({
  text = "Learn More",
  className = "",
  padding = "px-[25px] py-[15px]",
}) {
  return (
    <button
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
        {text}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="
            h-5 w-5
            transition-transform duration-300
            group-hover:translate-x-1
          "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
    </button>
  );
}