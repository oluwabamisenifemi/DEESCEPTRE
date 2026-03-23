import { useMemo, useState } from "react";

export default function ImageShowcaseSection() {
  const images = useMemo(
    () => [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  function prevSlide() {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function nextSlide() {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className="h-screen w-full bg-white flex items-center justify-center px-8">
      <div className="relative w-[80%] h-[80%] rounded-[28px] border border-black/10 bg-[#f8f8f8] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        {/* slight inner padding */}
        <div className="absolute inset-[18px] rounded-[22px] overflow-hidden bg-black/5">
          <img
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="h-full w-full object-cover transition duration-500"
          />
        </div>

        {/* left button */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10
                     w-[52px] h-[52px] rounded-full
                     border border-white/20
                     bg-white/[0.08]
                     backdrop-blur-xl
                     shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_rgba(0,0,0,0.18)]
                     flex items-center justify-center
                     text-white text-2xl hover:bg-white/[0.14] transition"
          aria-label="Previous slide"
        >
          ‹
        </button>

        {/* right button */}
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10
                     w-[52px] h-[52px] rounded-full
                     border border-white/20
                     bg-white/[0.08]
                     backdrop-blur-xl
                     shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_rgba(0,0,0,0.18)]
                     flex items-center justify-center
                     text-white text-2xl hover:bg-white/[0.14] transition"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
}