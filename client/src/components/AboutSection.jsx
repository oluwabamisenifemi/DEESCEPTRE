import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import buildingImage from "../assets/about-building.jpeg";

// ─────────────────────────────────────────────────────────────
// ABOUT US CONTENT — edit the text here. Each item is one tab
// in the left-hand list.
// ─────────────────────────────────────────────────────────────
const TABS = [
  {
    label: "Company Overview",
    eyebrow: "Company Overview",
    title: "Who We Are",
    body: "Dee Scepter Limited is a forward-thinking real estate development and construction company committed to delivering exceptional spaces, enriching communities, and creating long-term value.",
    link: { text: "Our services", to: "/construction-services" },
  },
  {
    label: "Vision & Mission",
    eyebrow: "Vision & Mission",
    title: "Where We're Going",
    body: "Our vision is to be Nigeria's most trusted name in engineering-led real estate development. Our mission is to deliver well-built, well-planned properties that create lasting value for residents, investors, and communities.",
  },
  {
    label: "Core Values",
    eyebrow: "Core Values",
    title: "What Guides Us",
    body: "Every project we take on is shaped by a clear set of principles.",
    points: [
      "Integrity",
      "Engineering excellence",
      "Transparency",
      "Accountability",
      "Long-term thinking",
    ],
  },
  {
    label: "Leadership",
    eyebrow: "Leadership",
    title: "Led by Experience",
    body: "Our leadership brings together engineering, construction, and real estate expertise, with technical oversight embedded at executive level on every project.",
    anchor: { text: "Meet our leadership", href: "#leadership" },
  },
  {
    label: "Registration & Credentials",
    eyebrow: "Registration & Credentials",
    title: "Registered & Credible",
    body: "Dee Scepter Limited is a duly registered company in Nigeria, operating with the required corporate documentation and compliance standards.",
    anchor: { text: "View credentials", href: "#credentials" },
  },
];

const COMPANY_RC_NUMBER = "RC 0000000"; // ← replace with the real RC number
const LEADER_PHOTO = null; // ← replace with an imported photo when available

export default function AboutSection() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="about" className="w-full scroll-mt-24 bg-black px-4 py-16 sm:px-6 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#F5F3EE] text-[#151515]">
        {/* ── TABS + CONTENT ── */}
        <div className="grid gap-10 px-6 py-12 md:grid-cols-[0.9fr_1.1fr] md:gap-0 md:px-12 md:py-16">
          {/* LEFT: numbered list */}
          <ul className="space-y-1 md:border-r md:border-black/10 md:pr-10">
            {TABS.map((item, i) => {
              const isActive = i === active;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left transition ${
                      isActive ? "bg-black/[0.04]" : "hover:bg-black/[0.03]"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                        isActive ? "bg-[#E8BC45]/20 text-[#9A7414]" : "text-black/35"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-sm md:text-base ${isActive ? "font-semibold text-black" : "text-black/55"}`}>
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* RIGHT: active tab content */}
          <div key={active} className="md:pl-12">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
              <span className="text-[#C9A133]">{String(active + 1).padStart(2, "0")}</span>
              {tab.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{tab.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/60">{tab.body}</p>

            {tab.points && (
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {tab.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-black/75">
                    <CheckCircle2 size={18} className="text-[#C9A133]" />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {tab.link && (
              <Link to={tab.link.to} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#9A7414]">
                {tab.link.text} <ArrowRight size={16} className="text-[#C9A133]" />
              </Link>
            )}
            {tab.anchor && (
              <a href={tab.anchor.href} onClick={(e) => scrollTo(e, tab.anchor.href)} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#9A7414]">
                {tab.anchor.text} <ArrowRight size={16} className="text-[#C9A133]" />
              </a>
            )}
          </div>
        </div>

        {/* ── OUR LEADERSHIP ── */}
        <div id="leadership" className="grid scroll-mt-28 items-center gap-10 px-6 pb-14 md:grid-cols-2 md:px-12 md:pb-20">
          {LEADER_PHOTO ? (
            <img src={LEADER_PHOTO} alt="Dee Scepter leadership" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
          ) : (
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#2a2a2a] to-[#111] text-sm uppercase tracking-[0.2em] text-white/40 shadow-lg">
              Leadership photo
            </div>
          )}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Our Leadership</h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-black/60">
              Led by a team of experienced professionals with deep industry knowledge and a shared commitment to excellence.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#9A7414]">
              Work with us <ArrowRight size={16} className="text-[#C9A133]" />
            </Link>
          </div>
        </div>

        {/* ── REGISTERED & CREDIBLE ── */}
        <div id="credentials" className="relative scroll-mt-28 overflow-hidden bg-[#0d1117] text-white">
          <img src={buildingImage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover md:left-1/3 md:w-2/3" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/90 to-[#0d1117]/20" />
          <div className="relative max-w-lg px-6 py-16 md:px-12 md:py-24">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Registered &amp; Credible</h3>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Dee Scepter Limited is a duly registered company in Nigeria with all required corporate documentation and compliance standards.
            </p>
            <p className="mt-6 text-sm text-white/80">
              Company Registration No: <span className="font-semibold text-white">{COMPANY_RC_NUMBER}</span>
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#E8BC45]">
              Request documents <ArrowRight size={16} className="text-[#E8BC45]" />
            </Link>
          </div>
        </div>

        {/* ── CLOSING LINE ── */}
        <div className="px-6 py-14 text-center md:py-20">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">We build beyond structures.</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-black/55 md:text-base">
            We build communities, create opportunities, and invest in lasting legacies.
          </p>
          <div className="mx-auto mt-6 h-[2px] w-12 bg-[#E8BC45]" />
        </div>
      </div>
    </section>
  );
}