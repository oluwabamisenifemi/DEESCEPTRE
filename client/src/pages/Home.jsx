import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import EnquiryForm from "../components/EnquiryForm";

import ScrollWheelSection from "../components/ScrollWheelSection";
import Navbar from "../components/Navbar";
import ImageShowcaseSection from "../components/ImageShowcaseSection";
import FeaturedWorksSection from "../components/FeaturedWorksSection";
import StatsShowcaseSection from "../components/StatsShowcaseSection";
import AmenitiesSection from "../components/AmenitiesSection";
import ImpactSection from '../components/ImpactSection';


const API_BASE = "http://localhost:5001";

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

  {/* BACKGROUND IMAGE */}
  {image && (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <img
        src={image}
        alt="Hero background"
        className="w-full h-full object-cover object-center"
      />

      {/* LEFT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* BOTTOM BLUR */}
      <div className="absolute bottom-0 left-0 right-0 h-6
        bg-gradient-to-t from-[#4E4E4E]/80 via-[#4E4E4E]/40 to-transparent
        backdrop-blur-xl"
      />
    </div>
  )}

  {/* CONTENT */}
  <div className="relative z-30 mx-auto w-full max-w-[1440px] h-full px-10">

    <Navbar />

    <div className="flex h-full items-center">

      {/* LEFT CONTENT */}
      <div className="max-w-xl">

        <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
          Building Value.
          <br />
          Creating Legacy.
        </h1>

        {/* 🔥 MOVED NEXUS HERE */}
        <h2 className="mt-4 text-2xl italic font-light text-white/60 tracking-wide">
          {title}
        </h2>

        <p className="mt-6 text-lg text-white/70">
          Premium real estate development and construction solutions in Nigeria.
        </p>

        {/* CTA */}
        <div className="mt-8 flex items-center gap-6">

          <a
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
          >
            Get Started →
          </a>

          <a
            href="/projects"
            className="flex items-center gap-2 text-white text-sm font-medium hover:underline"
          >
            Explore Projects →
          </a>

        </div>
      </div>

    </div>

    {/* PILLS */}
    <section className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6">

      <div className="w-[320px] h-[70px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-6 flex flex-col justify-center shadow-lg">
        <p className="text-sm font-semibold text-white">
          Proven Track Record
        </p>
        <p className="text-xs text-white/70">
          On-time, on-budget delivery with professionalism.
        </p>
      </div>

      <div className="w-[320px] h-[70px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-6 flex flex-col justify-center shadow-lg">
        <p className="text-sm font-semibold text-white">
          Investor-Centric Approach
        </p>
        <p className="text-xs text-white/70">
          Transparent, high-yield opportunities.
        </p>
      </div>

      <div className="w-[320px] h-[70px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-6 flex flex-col justify-center shadow-lg">
        <p className="text-sm font-semibold text-white">
          Authority in the Space
        </p>
        <p className="text-xs text-white/70">
          Modern housing with performance and resilience.
        </p>
      </div>

    </section>

  </div>
</section>
      <StatsShowcaseSection />

  <ImageShowcaseSection /> 
  <AmenitiesSection />   
  <ImpactSection /> 
<ScrollWheelSection />



<FeaturedWorksSection />
<EnquiryForm />

<Footer />


    </div>
  );
}