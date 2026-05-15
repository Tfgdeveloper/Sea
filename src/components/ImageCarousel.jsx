import { useEffect, useRef } from "react";

const COVERS = [
  { src: "/covers/book1.jpg", bg: "#1a3a5c" },
  { src: "/covers/book2.jpg", bg: "#4a1942" },
  { src: "/covers/book3.jpg", bg: "#1a4a2e" },
  // add more...
];

const CARD_W = 160, GAP = 24, STEP = CARD_W + GAP, SPEED = 0.8;

export default function ImageCarousel() {
  const trackRef = useRef(null);
  const offsetRef = useRef(COVERS.length * STEP);
  const paused = useRef(false);
  const tripled = [...COVERS, ...COVERS, ...COVERS];
  const totalW = COVERS.length * STEP;

  useEffect(() => {
    let raf;
    const loop = () => {
      if (!paused.current) {
        offsetRef.current += SPEED;
        if (offsetRef.current >= totalW * 2) offsetRef.current -= totalW;
      }
      if (trackRef.current)
        trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      style={{ overflow: "hidden", padding: "2.5rem 0" }}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div ref={trackRef} style={{ display: "flex", gap: GAP, willChange: "transform" }}>
        {tripled.map((c, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0, width: CARD_W, height: 240,
              borderRadius: "3px 12px 12px 3px",
              background: c.bg, overflow: "hidden", position: "relative",
              border: "0.5px solid rgba(0,0,0,0.1)",
              transition: "transform 0.4s cubic-bezier(.34,1.56,.64,1)",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-18px) scale(1.06)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "none")}
          >
            <img src={c.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 13, background: "rgba(0,0,0,0.28)", borderRadius: "3px 0 0 3px" }} />
            <div style={{ position: "absolute", left: 13, top: 0, width: 28, height: "100%", background: "linear-gradient(90deg,rgba(255,255,255,0.18),transparent)", pointerEvents: "none" }} />
          </div>
        ))}
      </div>
    </div>
  );
}