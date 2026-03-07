import { useEffect, useMemo, useRef, useState } from "react";

const API_BASE = "http://localhost:5000";


export default function ScrollWheelSection() {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 → 1
  const [sectionImage, setSectionImage] = useState("");

  // 4 distinct steps (content changes each segment)
  const steps = useMemo(
    () => [
      { num: "001", title: "Survey", desc: "We gather info and assess the site to define direction." },
      { num: "002", title: "Design", desc: "We craft concepts, drawings, and realistic visualisations." },
      { num: "003", title: "Build", desc: "We execute with quality control and clear timelines." },
      { num: "004", title: "Deliver", desc: "Final handover with polishing, checks, and support." },
    ],
    []
  );


  useEffect(() => {
  fetch("/api/site")
    .then((r) => r.json())
    .then((d) => {
      const section = d?.site?.sectionImageUrl || "";
      if (section) setSectionImage(`${API_BASE}${section}`);
    })
    .catch(() => {});
}, []);

  useEffect(() => {
    const el = wrapperRef.current;
    

    

    if (!el) return;

    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // wrapper is tall (e.g. 500vh). We pin inside for 1 viewport.
      const totalScrollable = rect.height - viewportH;

      // how far into the wrapper (0..1)
      const scrolledInto = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const p = totalScrollable > 0 ? scrolledInto / totalScrollable : 0;

      setProgress(p);
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);


      
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  // 4 segments across progress 0..1
  const seg = Math.min(3, Math.floor(progress * 4));
  const segP = (progress - seg / 4) * 4; // 0..1 within segment
  const step = steps[seg];

  // Arc geometry in SVG coordinates (matches 420x300 dome)
  const W = 420;
  const H = 300;
  const cx = 210;     // center x
  const cy = 240;     // arc baseline y
  const r = 180;      // radius

  // Dot moves along semi-circle: theta 0 (right) → pi (left)
  const theta = segP * Math.PI;
  const dotX = cx + r * Math.cos(theta);
  const dotY = cy - r * Math.sin(theta);

  // Fade OUT near left end, fade IN near right start (reversible)
  const fadeIn = Math.min(1, segP / 0.08);
  const fadeOut = Math.min(1, Math.max(0, (1 - segP) / 0.08));
  const dotOpacity = Math.min(fadeIn, fadeOut);
  // Slide-over panel progress near the end of the scrollwheel section
const slideStart = 0.82; // when the slide begins
const slideEnd = 0.98;   // when it finishes
const slideP = Math.min(1, Math.max(0, (progress - slideStart) / (slideEnd - slideStart))); // 0..1
const slideY = (1 - slideP) * 100; // 100% (hidden below) -> 0% (fully covering)

  // Wheel rotation (gives “spinning” feel). One full spin across the whole pinned scroll.
  

  return (
    // Make wrapper taller than 1 screen so scrolling “drives” animation
    <section ref={wrapperRef} className="relative h-[500vh] w-full bg-[#0e0e0e]">
      {/* Sticky pinned viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden text-white">
        {/* Divider lines (your earlier ones) */}
        <div className="absolute left-[28%] top-0 bottom-[1.5cm] w-px bg-white/10" />
        <div className="absolute left-0 right-0 bottom-[1.5cm] h-px bg-white/10" />

       {/* LEFT MENU (dynamic highlight based on seg) */}
<div className="absolute left-16 top-1/2 -translate-y-1/2 flex flex-col gap-10">
  {["Define", "Outsource", "Jigsaw", "Upgrade"].map((label, i) => (
    <span
      key={label}
      className={
        i === seg
          ? "text-4xl font-semibold text-white font-[Montserrat]"
          : "text-4xl font-light text-white/30 font-[Montserrat]"
      }
    >
      {label}
    </span>
  ))}
</div>

        {/* CENTER CONTENT (changes with segment) */}
        <div className="absolute left-[32%] top-1/2 -translate-y-1/2 max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm">
              {step.title[0]}
            </div>
            <h2 className="text-xl font-semibold font-[Montserrat]">{step.title}</h2>
          </div>
          <p className="text-white/60 leading-relaxed text-base font-[Montserrat]">{step.desc}</p>
        </div>

        {/* RIGHT WHEEL (small + off right) */}
        <div className="absolute right-[38px] top-1/2 -translate-y-1/2 w-[420px] h-[300px] pointer-events-none">
          {/* Spin wrapper */}
         
            <svg className="absolute inset-0" viewBox={`0 0 ${W} ${H}`} fill="none">
              {/* Dome fill */}
             {/* Dome fill (orange base, stops at arc) */}
<path
  d="M 20 240 A 180 180 0 0 1 400 240 A 180 180 0 0 0 20 240 Z"
  fill="url(#domeFill)"
/>
            {/* Shading (depth, stops at arc) */}
<path
  d="M 20 240 A 180 180 0 0 1 400 240 A 180 180 0 0 0 20 240 Z"
  fill="url(#domeShade)"
  opacity="1"
/>  
              {/* Arc edge */}
              <path
                d="M 20 240 A 180 180 0 0 1 400 240"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="2"
                strokeLinecap="round"
              />

<defs>
  {/* Orange fading fill */}
  <radialGradient
    id="domeFill"
    cx="0"
    cy="0"
    r="1"
    gradientUnits="userSpaceOnUse"
    gradientTransform="translate(210 240) rotate(-90) scale(220 280)"
  >
    <stop offset="0" stopColor="rgba(255, 177, 110, 0.28)" />
    <stop offset="0.55" stopColor="rgba(170, 105, 60, 0.20)" />
    <stop offset="1" stopColor="rgba(0, 0, 0, 0)" />
  </radialGradient>

  {/* Dark shading to add depth (still inside arc only) */}
  <radialGradient
    id="domeShade"
    cx="0"
    cy="0"
    r="1"
    gradientUnits="userSpaceOnUse"
    gradientTransform="translate(210 255) rotate(-90) scale(210 300)"
  >
    <stop offset="0" stopColor="rgba(0,0,0,0.00)" />
    <stop offset="0.55" stopColor="rgba(0,0,0,0.30)" />
    <stop offset="1" stopColor="rgba(0,0,0,0.70)" />
  </radialGradient>
</defs>x1

              {/* Moving dot along arc (content changes per segment) */}
              <g opacity={dotOpacity}>

                

                
                <circle cx={dotX} cy={dotY} r="34" fill="rgba(244,242,237,1)" />
                <text
                  x={dotX}
                  y={dotY - 6}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#b45309"
                  style={{ letterSpacing: "2px", fontWeight: 700 }}
                >
                  {step.num}
                </text>
                <text
                  x={dotX}
                  y={dotY + 14}
                  textAnchor="middle"
                  fontSize="16"
                  fill="#111"
                  style={{ fontWeight: 700 }}
                >
                  {step.title}
                </text>
              </g>

              
            </svg>
          </div>
       

        {/* Optional tiny progress debug (remove later) */}
        {/* <div className="absolute bottom-6 left-6 text-xs text-white/40">{(progress*100).toFixed(0)}%</div> */}

        {/* SLIDE-OVER PANEL (slides UP over the scrollwheel) */}





<div
  className="absolute inset-0 z-[999] overflow-hidden"
  style={{ transform: `translateY(${slideY}%)`, willChange: "transform" }}
>
  {/* local styles for the gold “texture” */}
  <style>{`
    .goldTexture {
      color: transparent;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      background-image:
        radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35) 0 18%, rgba(255,255,255,0) 19% 100%),
        radial-gradient(circle at 70% 60%, rgba(0,0,0,0.10) 0 22%, rgba(0,0,0,0) 23% 100%),
        repeating-linear-gradient(115deg, rgba(255,255,255,0.16) 0 2px, rgba(0,0,0,0.10) 2px 4px),
        linear-gradient(to bottom, #E7C792 0%, #C79B5A 45%, #8B612D 100%);
      background-size: 140px 140px, 180px 180px, 8px 8px, 100% 100%;
      background-position: 0 0, 40px 20px, 0 0, 0 0;
    }
  `}</style>

  <div className="absolute inset-0 bg-[#F6EEDD] overflow-hidden">
    {/* CONTENT COLUMN */}
    <div className="mx-auto flex w-full  px-10 text-center">
      <div className=" mt-[20px] w-[800px] mr-[50px] overflow-hidden">
  {sectionImage && (
    <img
      src={sectionImage}
      alt="Section"
      className="w-full h-full object-cover"
    />
  )}
</div>

      <div className=" mr-0  mt-[20px]  ">
      {/* HEADLINE (matches screenshot) */}
      <h2 className="mt-[60px] font-[Montserrat] font-medium tracking-[-0.02em] leading-[1.15] text-[40px] text-black">
        DeeScepterLimited: Where Structural
        <br />
        Integrity Meets Urban Innovation.
      </h2>

      {/* PARAGRAPH (narrow block) */}
      <p className="mt-[46px] mx-auto max-w-[660px] font-[Montserrat] text-[16px] leading-[1.9] text-[#7C7C7C]">
        DeeScepterLimited: Where Structural Integrity Meets Urban Innovation.DeeScepterLimited: Where Structural Integrity Meets Urban Innovation.DeeScepterLimited: Where Structural Integrity Meets Urban Innovation.DeeScepterLimited: Where Structural Integrity Meets Urban
      </p>

      {/* STATS */}
      <div className="mt-[56px] flex justify-center gap-[92px]">
        <div className="text-center">
          <div className="goldTexture font-[Montserrat] font-extrabold leading-none text-[84px]">8K+</div>
          <div className="mt-[10px] font-[Montserrat] font-semibold text-[18px] text-[#7C7C7C]">Houses Sold</div>
        </div>

        <div className="text-center">
          <div className="goldTexture font-[Montserrat] font-extrabold leading-none text-[84px]">6K+</div>
          <div className="mt-[10px] font-[Montserrat] font-semibold text-[18px] text-[#7C7C7C]">Houses Sold</div>
        </div>

        <div className="text-center">
          <div className="goldTexture font-[Montserrat] font-extrabold leading-none text-[84px]">2K+</div>
          <div className="mt-[10px] font-[Montserrat] font-semibold text-[18px] text-[#7C7C7C]">Houses Sold</div>
        </div>
      </div>
    </div>
    </div>

    {/* DIVIDER LINE */}
    <div className="absolute left-0 right-0 bottom-[168px] h-px bg-black/10" />

    {/* WATERMARK (huge, italic, clipped) */}
    <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none select-none">
      <span className="font-[Montserrat] italic font-semibold text-[150px] mt-0 leading-none text-black/15">
        Dee Sceptre
      </span>
    </div>
  </div>



</div>
      </div>
    </section>
  );
}