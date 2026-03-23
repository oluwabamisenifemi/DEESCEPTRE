import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:5001";

export default function WorksPage() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch("/api/works")
      .then((r) => r.json())
      .then((d) => {
        setWorks(Array.isArray(d?.works) ? d.works : []);
      })
      .catch(() => {
        setWorks([]);
      });
  }, []);

  return (
    <section className="min-h-screen w-full bg-white">
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-16">
        {/* top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-2 flex items-center gap-3 text-sm text-black/70">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="font-[Montserrat]">All work</span>
          </div>

          <div className="md:col-span-6">
            <h1 className="font-[Montserrat] font-semibold tracking-tight leading-[0.9] text-[64px] md:text-[88px] text-black">
              Featured
              <br />
              Works
            </h1>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <div className="max-w-sm">
              <p className="font-[Montserrat] text-sm md:text-base text-black/70 leading-relaxed">
                Explore the full collection of our featured architectural works.
              </p>

              <Link
                to="/#featured-works"
                className="mt-5 inline-flex items-center gap-3 rounded-xl bg-black/5 hover:bg-black/10 transition px-4 py-3"
              >
                <span className="grid place-items-center h-10 w-10 rounded-lg bg-red-500 text-white">
                  ←
                </span>
                <span className="font-[Montserrat] font-medium text-black">
                  Back Home
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* works grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {works.map((w) => {
            const img = w.coverImageUrl ? `${API_BASE}${w.coverImageUrl}` : "";

            return (
              <Link key={w.id} to={`/work/${w.id}`} className="group block">
                <div className="overflow-hidden rounded-2xl bg-black/5">
                  {img ? (
                    <img
                      src={img}
                      alt={w.title}
                      className="h-[340px] md:h-[420px] w-full object-cover transform transition duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="h-[340px] md:h-[420px] w-full grid place-items-center text-black/50">
                      No image
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <h2 className="font-[Montserrat] text-[34px] md:text-[40px] font-semibold tracking-tight text-black">
                    {w.title}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-3">
                    {w.category ? (
                      <span className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/70">
                        {w.category}
                      </span>
                    ) : null}

                    {w.location ? (
                      <span className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/70">
                        {w.location}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden md:block w-px bg-black/5" />
      </div>
    </section>
  );
}
