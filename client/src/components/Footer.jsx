import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

// ─────────────────────────────────────────────────────────────
// FOOTER SETTINGS — fill these in when the client sends them.
// Leave LINKEDIN_URL as "" to hide the LinkedIn icon.
// ─────────────────────────────────────────────────────────────
const LINKEDIN_URL = "";
const WHATSAPP_NUMBER = "2348033302881";
const WHATSAPP_DISPLAY = "+234 803 330 2881";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/construction-services" },
  { label: "Developments", to: "/works" },
  { label: "Investors", to: "/investors" },
  { label: "Blog/News", to: "/articles" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });

    try {
      const res = await axios.post("/api/subscribers", { email, source: "footer" });
      setStatus({ type: "success", message: res.data.message });
      setEmail("");
    } catch (err) {
      setStatus({
        type: "error",
        message: err.response?.data?.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#0c0c0c] text-white">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-[0.25] bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* BRAND + EMAIL CAPTURE */}
          <div className="max-w-md">
            <p className="text-xl font-semibold uppercase tracking-[0.18em]">Dee Scepter</p>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Engineering-led real estate development and construction across Nigeria.
            </p>

            <h4 className="mt-10 text-sm font-semibold text-white">Get project updates</h4>
            <p className="mt-2 text-sm text-white/50">
              New developments, off-plan launches and investment opportunities, straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="mt-5 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="min-h-[48px] w-full rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#E8BC45]/60"
              />
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="min-h-[48px] shrink-0 rounded-full bg-[#E8BC45] px-6 text-sm font-semibold text-black transition hover:bg-[#F5D06B] disabled:opacity-60"
              >
                {status.type === "loading" ? "Sending..." : "Subscribe"}
              </button>
            </form>

            {status.message && (
              <p className={`mt-3 text-sm ${status.type === "error" ? "text-red-400" : "text-emerald-400"}`}>
                {status.message}
              </p>
            )}
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-white/70">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/55">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-white/70">Contact</h4>
            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
                  <FaWhatsapp /> {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Office address &amp; map →
                </Link>
                              <li>
                <a href="mailto:aladejo@deescepterltd.com" className="transition hover:text-white">
                  aladejo@deescepterltd.com
                </a>
              </li>
              </li>
            </ul>

            {LINKEDIN_URL && (
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Dee Scepter on LinkedIn" className="mt-6 inline-block text-[22px] text-white/70 transition hover:text-white">
                <FaLinkedin />
              </a>
            )}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Dee Scepter Limited. All rights reserved.</p>
          <p>
            Created by <span className="text-white/80">Oluwabamise Oluwanifemi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}