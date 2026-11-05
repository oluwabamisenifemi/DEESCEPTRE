import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import EnquiryForm from "../components/EnquiryForm";

import ScrollWheelSection from "../components/ScrollWheelSection";
import Navbar from "../components/Navbar";
import FeaturedWorksSection from "../components/FeaturedWorksSection";
import AboutSection from "../components/AboutSection";


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
  const image = site?.heroImageUrl || null;

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
            <div
              className="absolute bottom-0 left-0 right-0 h-6
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
                Premium real estate development and construction solutions in
                Nigeria.
              </p>

              {/* CTA */}

              <div className="relative z-10 mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                {/* PRIMARY BUTTON: GET STARTED */}
                <a
                  href="/contact"
                  className="
      group inline-flex min-h-[50px] w-full
      items-center justify-center gap-3
      rounded-full bg-[#E8BC45]
      px-7 py-3.5
      text-sm font-semibold tracking-wide text-black
      shadow-[0_8px_24px_rgba(0,0,0,0.2)]
      transition-all duration-300
      hover:-translate-y-1 hover:bg-[#F5D06B]
      hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]
      sm:w-auto
    "
                >
                  Get Started
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                {/* SECONDARY BUTTON: EXPLORE PROJECTS */}
                <a
                  href="#featured-works"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("featured-works")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="
      group inline-flex min-h-[50px] w-full
      items-center justify-center gap-3
      rounded-full border border-white/40
      bg-black/30 px-7 py-3.5
      text-sm font-semibold tracking-wide text-white
      backdrop-blur-md
      transition-all duration-300
      hover:-translate-y-1 hover:border-white
      hover:bg-white/15
      sm:w-auto
    "
                >
                  Explore Projects
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
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
      <AboutSection />
      <ScrollWheelSection />

      <FeaturedWorksSection />
      <EnquiryForm />

      <Footer />
    </div>
  );
}
