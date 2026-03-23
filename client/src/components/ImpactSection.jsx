import { useState, useEffect, useMemo, useRef } from "react";

export default function ImpactSection() {
  const slides = useMemo(
    () => [
      { image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop" },
      { image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop" },
      { image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1600&auto=format&fit=crop" },
      { image: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1600&auto=format&fit=crop" }
    ],
    []
  );

  const [index, setIndex] = useState(0);

  // Slideshow Logic: Cycle every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full bg-[#f6f6f6] py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        
        {/* TOP ROW: Text and Stats */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-24">
          <div className="md:col-span-6 lg:col-span-7">
            <p className="text-[#333] text-[18px] md:text-[21px] leading-[1.6] font-[Montserrat] max-w-[500px]">
              Delivering Real Estate opportunities and Possibilities to our
              stakeholders driven by integrity and innovation.
            </p>
          </div>

          {/* Stat 1 */}
          <div className="md:col-span-3 lg:col-span-2">
            <Counter target={10} />
            <p className="text-[#666] text-[13px] md:text-[14px] uppercase tracking-wide font-[Montserrat] leading-snug mt-2">
              Years of professional experience
            </p>
          </div>

          {/* Stat 2 */}
          <div className="md:col-span-3 lg:col-span-3">
            <Counter target={150} suffix="+" />
            <p className="text-[#666] text-[13px] md:text-[14px] uppercase tracking-wide font-[Montserrat] leading-snug mt-2">
              Units being completed
            </p>
          </div>
        </div>

        {/* BOTTOM ROW: Slideshow and Long Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Fading Slideshow Container */}
          <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl bg-white">
            {slides.map((slide, i) => (
              <img
                key={i}
                src={slide.image}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
                  index === i ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>

          <div className="max-w-[550px]">
            <p className="text-[#444] text-[18px] md:text-[22px] leading-[1.8] font-[Montserrat] font-light">
              We are an indigenous real estate development company optimizing
              stakeholder investment by delivering upper mid-market residential
              apartments in strategic locations within the Lagos metropolis and
              beyond.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

/**
 * Animated Counter Component
 * Triggers when scrolled into view and runs for 2 seconds.
 */
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Detect when the component enters the screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000; // 2 Seconds duration
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic formula for smoother finish
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target]);

  return (
    <div ref={containerRef} className="flex items-baseline">
      <span className="font-serif text-[60px] md:text-[80px] leading-none text-[#C8242F]">
        {count}
      </span>
      {suffix && (
        <span className="font-serif text-[40px] md:text-[50px] leading-none text-[#C8242F] ml-1">
          {suffix}
        </span>
      )}
    </div>
  );
}