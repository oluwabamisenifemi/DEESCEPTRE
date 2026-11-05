import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/IMG-20260416-WA0000.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `text-white text-[12px] md:text-[13px] font-[Montserrat] font-semibold tracking-[0.16em] uppercase transition ${
      isActive ? "text-white" : "hover:text-white/80"
    }`;

  return (
    <div className="fixed left-[24px] right-[24px] top-[20px] z-50">
      <div
        className="
          h-[56px]
          rounded-2xl
          border border-white/10
          bg-black/50
          backdrop-blur-xl
          shadow-[0_8px_30px_rgba(0,0,0,0.5)]
          relative overflow-hidden
        "
      >
        {/* subtle top highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-white/10" />

        <div className="h-full px-4 md:px-8 flex items-center justify-between">
          {/* LOGO + TEXT */}
          <Link to="/" className="flex items-center gap-3">
            <span className="text-white font-[Montserrat] font-semibold tracking-[0.18em] text-sm md:text-base uppercase">
              Dee Scepter
            </span>
            <img
              src={logo}
              alt="Dee Scepter logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>
            <NavLink to="/construction-services" className={linkClass}>
              Our Services
            </NavLink>
            <NavLink to="/works" className={linkClass}>
              Developments
            </NavLink>
            <NavLink to="/investors" className={linkClass}>
              Investors
            </NavLink>           
                        <NavLink to="/dseii" className={linkClass}>
              DSEII
            </NavLink>
            <NavLink to="/articles" className={linkClass}>
              Blog/News
            </NavLink>
            
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="
              h-[34px]
              px-5
              rounded-xl
              border border-white/20
              bg-white/10
              backdrop-blur-xl
              hidden md:flex items-center justify-center
              text-white text-[12px] font-[Montserrat] font-semibold tracking-[0.16em] uppercase
              hover:bg-white/20 transition
            "
          >
            Contact Us
          </Link>

          {/* MOBILE MENU BUTTON (phones only) */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU (phones only) */}
      {menuOpen && (
        <nav className="md:hidden mt-2 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-3 flex flex-col">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 rounded-xl text-white text-[13px] font-[Montserrat] font-semibold tracking-[0.16em] uppercase hover:bg-white/10"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 rounded-xl text-white text-[13px] font-[Montserrat] font-semibold tracking-[0.16em] uppercase hover:bg-white/10"
          >
            About Us
          </NavLink>
          <NavLink
            to="/construction-services"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 rounded-xl text-white text-[13px] font-[Montserrat] font-semibold tracking-[0.16em] uppercase hover:bg-white/10"
          >
            Our Services
          </NavLink>
          <NavLink
            to="/works"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 rounded-xl text-white text-[13px] font-[Montserrat] font-semibold tracking-[0.16em] uppercase hover:bg-white/10"
          >
            Developments
          </NavLink>
          <NavLink to="/investors" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-white text-[13px] font-[Montserrat] font-semibold tracking-[0.16em] uppercase hover:bg-white/10">
            Investors
          </NavLink>
                    <NavLink to="/dseii" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-white text-[13px] font-[Montserrat] font-semibold tracking-[0.16em] uppercase hover:bg-white/10">
            DSEII
          </NavLink>
          <NavLink
            to="/articles"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 rounded-xl text-white text-[13px] font-[Montserrat] font-semibold tracking-[0.16em] uppercase hover:bg-white/10"
          >
            Blog/News
          </NavLink>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-3 rounded-xl bg-[#E8BC45] text-black text-center text-[13px] font-[Montserrat] font-semibold tracking-[0.16em] uppercase"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </div>
  );
}
