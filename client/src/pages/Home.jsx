import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
    const [site, setSite] = useState(null);

    useEffect(() => {
        fetch("/api/site")
            .then((r) => r.json())
            .then((d) => setSite(d.site))
            .catch(() => setSite(null));
    }, []);

    const title = site?.heroTitle || "NEXUS APARTMENTS";
    const image = site?.heroImageUrl;


    return (
        <div className="min-h-screen bg-[#4E4E4E] text-white">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 pt-10 pb-8">
                {<div className="absolute top-28 left-6 md:left-10 z-20">
                    <div className="flex items-end gap-3">
                        <h2 className="text-5xl md:text-6xl font-extrabold font-black font-[Montserrat] tracking-tight text-black">
                            Dee Sceptre
                        </h2>

                        <h2 className="text-sm md:text-base font-extrabold font-[Montserrat] tracking-widest text-black/80 mb-1">
                            LTD
                        </h2>
                    </div>
                </div>}


                <div className="relative min-h-[85vh] overflow-visible">
                    <h1 className="absolute top-48 left-1/2 -translate-x-[20%] z-20 whitespace-nowrap text-5xl font-black font-[Montserrat] tracking-tight text-black">{title}</h1>

                    {image && (
                        <div className="absolute inset-y-0 left-0 w-[85%] z-10 pointer-events-none">
                            <img
                                src={image}
                                alt="Hero project"
                                className="h-full w-full object-contain object-left opacity-95"
                            />
                            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#4E4E4E] to-transparent" />
                        </div>
                    )}
                    <div className="absolute right-28 top-44 w-[260px] h-[260px] bg-white/10 blur-3xl rounded-full" />

                    {/* PILLS SECTION */}
                    <section className="absolute left-0 right-0 bottom-10 z-30 flex justify-center gap-6 px-6">

                        {/* Pill 1 */}
                        <div className="w-[395px] h-[64px] rounded-full bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_6px_18px_rgba(0,0,0,0.25)] px-6 flex flex-col justify-center">
                            <p className="text-sm font-extrabold text-black leading-tight">
                                Proven Track Record
                            </p>
                            <p className="text-[12px] text-black/80 leading-tight">
                                On-time, on-budget delivery with a focus on professionalism.
                            </p>
                        </div>

                        {/* Pill 2 */}
                        <div className="w-[395px] h-[64px] rounded-full bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_6px_18px_rgba(0,0,0,0.25)] px-6 flex flex-col justify-center">
                            <p className="text-sm font-extrabold text-black leading-tight">
                                Investor-Centric Approach
                            </p>
                            <p className="text-[12px] text-black/80 leading-tight">
                                Attracting partnerships through transparent, high-yield opportunities.
                            </p>
                        </div>

                        {/* Pill 3 */}
                        <div className="w-[395px] h-[64px] rounded-full bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_6px_18px_rgba(0,0,0,0.25)] px-6 flex flex-col justify-center">
                            <p className="text-sm font-extrabold text-black leading-tight">
                                Authority in the Space
                            </p>
                            <p className="text-[12px] text-black/80 leading-tight">
                                Bridging gaps with contemporary housing that combines aesthetics, functionality, and resilience.
                            </p>
                        </div>

                    </section>
                </div>

                <div className="h-40" />
            </main>
        </div>
    );
}