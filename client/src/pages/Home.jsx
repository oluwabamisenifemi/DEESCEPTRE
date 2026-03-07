import { useEffect, useState } from "react";

import ScrollWheelSection from "../components/ScrollWheelSection";
import Navbar from "../components/Navbar";
import FeaturedWorksSection from "../components/FeaturedWorksSection";


const API_BASE = "http://localhost:5000";

export default function Home() {
  const [site, setSite] = useState(null);
const navPill =
  "w-[80px] h-[25px] rounded-md bg-white/10 backdrop-blur-2xl" +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_rgba(0,0,0,0.22)] " +
  "text-black/80 text-xs font-extrabold font-[Montserrat] tracking-wide " +
  "flex items-center justify-center text-center " +
  "hover:bg-white/5 hover:border-white/15 transition";

  useEffect(() => {
    fetch("/api/site")
      .then((r) => r.json())
      .then((d) => setSite(d.site))
      .catch(() => setSite(null));
  }, []);

  const title = site?.heroTitle || "NEXUS APARTMENTS";
  const image = site?.heroImageUrl ? `${API_BASE}${site.heroImageUrl}` : null;

  return (
    <div className="min-h-screen bg-[#4E4E4E] text-white">
   

      {/* HERO: exactly one screen */}
      <section className="relative h-screen w-full overflow-hidden bg-[#4E4E4E]">
        {/* Background image ONLY inside hero */}
{image && (
  <div className="absolute inset-0 z-10 pointer-events-none">
    <img
      src={image}
      alt="Hero background"
      className="w-full h-full object-cover object-right"
    />

    {/* BOTTOM BLUR */}
    <div className="absolute bottom-0 left-0 right-0 h-5
      bg-gradient-to-t from-[#4E4E4E]/80 via-[#4E4E4E]/40 to-transparent
      backdrop-blur-xl" />
  </div>
)}

        {/* Content on top of image */}
        <div className="relative z-30 mx-auto w-full max-w-[1440px] h-full">
          {/* BRAND */}
    <div className="absolute top-3 left-10 right-10 z-40 flex items-center justify-between">
  
  {/* LOGO */}
  <div className="flex items-end gap-3">
    <h2 className="text-6xl font-extrabold font-[Montserrat] tracking-tight text-black">
      Dee Sceptre
    </h2>
    <span className="text-sm font-extrabold font-[Montserrat] tracking-widest text-black/80 mb-1">
      LTD
    </span>
  </div>

  {/* RIGHT-SIDE NAV BUTTONS */}
  <div className="flex items-center gap-3">
    <a href="#home" className={navPill}>HOME</a>
    <a href="#projects" className={navPill}>PROJECTS</a>
    <a href="#services" className={navPill}>SERVICES</a>
    <a href="#reviews" className={navPill}>REVIEWS</a>

  </div>

</div>

          {/* TITLE */}
          <h1 className="absolute top-32 left-1/2 -translate-x-[30] text-5xl font-black font-[Montserrat] tracking-tight  text-black whitespace-nowrap">
            {title}
          </h1>

          {/* PILLS */}
          <section className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6">
            <div className="w-[395px] h-[64px] rounded-full bg-white/3 backdrop-blur-lg border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.35)] px-6 flex flex-col justify-center">
              <p className="text-sm font-extrabold text-black leading-tight">
                Proven Track Record
              </p>
              <p className="text-[12px] text-black/60 leading-tight">
                On-time, on-budget delivery with a focus on professionalism.
              </p>
            </div>

            <div className="w-[395px] h-[64px] rounded-full bg-white/3 backdrop-blur-lg border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.35)] px-6 flex flex-col justify-center">
              <p className="text-sm font-extrabold text-black leading-tight">
                Investor-Centric Approach
              </p>
              <p className="text-[12px] text-black/60 leading-tight">
                Attracting partnerships through transparent, high-yield opportunities.
              </p>
            </div>

            <div className="w-[395px] h-[64px] rounded-full bg-white/3 backdrop-blur-lg border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.35)] px-6 flex flex-col justify-center">
              <p className="text-sm font-extrabold text-black leading-tight">
                Authority in the Space
              </p>
              <p className="text-[12px] text-black/60 leading-tight">
                Bridging gaps with contemporary housing that combines aesthetics,
                functionality, and resilience.
              </p>
            </div>
          </section>
        </div>
      </section>

     
<ScrollWheelSection />



<FeaturedWorksSection />


    </div>
  );
}