export default function GradientButton({
  text = "Get Started",
  className = "",
}) {
  return (
    <button
      className={`
        button-font group relative overflow-hidden rounded-full 
        px-[25px] py-[15px]
        font-semibold text-white
        transition-all duration-300

        bg-[linear-gradient(135deg,#13B3D3_0%,#2563EB_45%,#171E4B_100%)]

        shadow-[0_10px_25px_rgba(19,179,211,0.22)]
        hover:shadow-[0_15px_35px_rgba(19,179,211,0.32)]

        hover:-translate-y-0.5
        active:scale-[0.98]

        ${className}
      `}
    >
      {/* Soft Top Highlight */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.28),transparent_45%)]
          opacity-80
        "
      />

      {/* Shine Animation */}
      <div
        className="
          absolute top-0 -left-24 h-full w-20
          rotate-12
          bg-white/30 blur-xl
          transition-all duration-700
          group-hover:left-[120%]
        "
      />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-3">
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