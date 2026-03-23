import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 1500, suffix = "", prefix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;

        const startTime = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const current = Math.floor(progress * end);
          setValue(current);

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setValue(end);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

export default function StatsShowcaseSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-14">
        {/* top content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* left text */}
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-3 gap-[2px]">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className="h-[4px] w-[4px] bg-[#0D73C9]" />
                ))}
              </div>

              <h2 className="font-serif text-[42px] md:text-[48px] text-[#2f3338]">
                ULESH
              </h2>
            </div>

            <p className="mt-8 font-serif uppercase tracking-wide text-[28px] md:text-[34px] leading-[1.45] text-[#3c4045]">
              Our AAA rated mixed development is on the way!
            </p>

            <p className="mt-10 max-w-[620px] text-[#3f4348] text-[20px] md:text-[22px] leading-[1.8] font-[Montserrat]">
              With each design, each concept and building, we tell a story.
              Albeit a new home, an apartment building, or a unique office
              space, we tell a story about the client, and more essentially,
              the community vibe.
            </p>

            <Link
              to="/works"
              className="mt-12 inline-flex h-[58px] min-w-[178px] items-center justify-center bg-[#0D73C9] px-8 text-white font-[Montserrat] text-[15px] font-semibold tracking-[0.22em] uppercase hover:bg-[#0a66b4] transition"
            >
              Explore
            </Link>
          </div>

          {/* right image */}
          <div className="relative mx-auto w-full max-w-[720px]">
            <div className="absolute right-[-18px] top-[-18px] h-full w-full bg-[#0D73C9]" />
            <div className="relative bg-white p-0">
              <img
                src="http://localhost:5001/uploads/1772441120142-8bca5cdb7a361.jpg"
                alt="Project showcase"
                className="block h-[420px] md:h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </div>


<div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
  <div className="group">
    <div className="transition-transform duration-300 group-hover:-translate-y-2">
      
      <div className="h-[90px] flex items-end">
        <div className="font-serif text-[56px] md:text-[66px] leading-none text-[#2f3338]">
          <CountUp end={12675} duration={1500} />
          <span className="text-[34px] md:text-[40px] align-top">M²</span>
        </div>
      </div>

      <p className="mt-5 text-[#3f4348] text-[18px] md:text-[20px] leading-[1.7] font-[Montserrat]">
        Lettable office space
         (7 floors) filler filler filler
      </p>
    </div>

    <div className="mt-8 h-[10px] w-full bg-[#ececec] overflow-hidden">
      <div className="h-full w-0 bg-[#0D73C9] transition-all duration-500 group-hover:w-full" />
    </div>
  </div>




  <div className="group">
    <div className="transition-transform duration-300 group-hover:-translate-y-2">

      <div className="h-[90px] flex items-end">
        <div className="font-serif text-[56px] md:text-[66px] leading-none text-[#2f3338]">
          <CountUp end={3605} duration={1500} />
          <span className="text-[34px] md:text-[40px] align-top">M²</span>
        </div>
      </div>

      <p className="mt-5 text-[#3f4348] text-[18px] md:text-[20px] leading-[1.7] font-[Montserrat]">
        Gross area of 3 palatial split level penthouses
      </p>
    </div>

    <div className="mt-8 h-[10px] w-full bg-[#ececec] overflow-hidden">
      <div className="h-full w-0 bg-[#0D73C9] transition-all duration-500 group-hover:w-full" />
    </div>
  </div>



  <div className="group">
    <div className="transition-transform duration-300 group-hover:-translate-y-2">

      <div className="h-[90px] flex items-end">
        <div className="font-serif text-[56px] md:text-[66px] leading-none text-[#2f3338]">
          <CountUp end={350} duration={1500} />
        </div>
      </div>

      <p className="mt-5 text-[#3f4348] text-[18px] md:text-[20px] leading-[1.7] font-[Montserrat]">
        Total parking spaces (6 levels) with drivers lounges
      </p>
    </div>

    <div className="mt-8 h-[10px] w-full bg-[#ececec] overflow-hidden">
      <div className="h-full w-0 bg-[#0D73C9] transition-all duration-500 group-hover:w-full" />
    </div>
  </div>
</div>



      </div>
    </section>
  );
}