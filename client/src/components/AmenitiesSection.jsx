import { useMemo, useState, useEffect } from "react";

export default function AmenitiesSection() {
  const slides = useMemo(
    () => [
      {
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
        title: "RELAXATION CENTER",
        text: "Sleek and sophisticated, MISA offers qualities always coveted, but rarely obtained.",
      },
      {
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
        title: "SKY LOUNGE",
        text: "An elevated retreat designed for quiet reflection, social connection, and premium comfort.",
      },
      {
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
        title: "BUSINESS SUITE",
        text: "Purpose-built workspaces that support focus, collaboration, and executive convenience.",
      },
      {
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop",
        title: "FITNESS AREA",
        text: "Modern wellness spaces tailored for movement, recovery, and everyday performance.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [index, isPaused]); // Re-run when index changes or pause state changes

  return (
    <section className="w-full bg-[#f3f3f3] py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          
          {/* LEFT SIDE: SLIDESHOW */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Image Box */}
            <div className="relative w-full h-[460px] md:h-[560px] overflow-hidden shadow-2xl">
              {slides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.image}
                  alt={slide.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === i ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}
            </div>

            {/* Combined Bottom Bar (Side-by-Side) */}
            <div className="absolute bottom-0 left-0 right-0 flex translate-y-1/2 z-20 h-[100px] md:h-[130px] shadow-lg">
              
              {/* Blue Controls */}
              <div className="flex w-[130px] md:w-[170px] bg-[#0D73C9] text-white">
                <button
                  onClick={prevSlide}
                  className="flex-1 text-2xl hover:bg-[#0a66b4] transition border-r border-white/10"
                >
                  ‹
                </button>
                <div className="flex-[1.5] flex items-center justify-center font-mono text-sm md:text-base">
                  {index + 1}/{slides.length}
                </div>
                <button
                  onClick={nextSlide}
                  className="flex-1 text-2xl hover:bg-[#0a66b4] transition border-l border-white/10"
                >
                  ›
                </button>
              </div>

              {/* Grey Info Box */}
              <div className="flex-1 bg-[#4a4f55] text-white px-6 md:px-10 flex flex-col justify-center">
                <h3 className="font-serif text-sm md:text-[18px] tracking-widest uppercase mb-1">
                  {slides[index].title}
                </h3>
                <p className="text-white/75 text-xs md:text-[13px] leading-relaxed font-[Montserrat] line-clamp-2 italic">
                  {slides[index].text}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <div className="max-w-[620px] pt-12 lg:pt-0">
            <div className="flex items-center gap-5 mb-8">
              <div className="grid grid-cols-3 gap-[3px]">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 bg-[#0D73C9]" />
                ))}
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#34383d] tracking-tight uppercase leading-tight">
                Building <br className="hidden md:block"/> Amenities
              </h2>
            </div>

            <p className="text-[#3f4348] text-[18px] leading-relaxed font-[Montserrat] mb-12">
              From the vibrant ground level terraces, private gardens, balconies
              and lush rooftop work spaces, Ulesh offers an array of amenities ...
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <AmenityColumn items={["Business Services", "Courtesy Newspaper", "Fitness Facility", "Meeting & Event"]} />
              <AmenityColumn items={["Swimming Pool", "Restaurant", "Communal Areas", "Spa Facility"]} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function AmenityColumn({ items }) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-4 group cursor-pointer">
          <div className="h-8 w-8 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#0D73C9] text-xl group-hover:bg-[#0D73C9] group-hover:text-white transition-all">
            ›
          </div>
          <span className="font-[Montserrat] text-[#3b3f44] text-base">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}