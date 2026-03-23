import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-white/90 text-[12px] md:text-[13px] font-[Montserrat] font-semibold tracking-[0.16em] uppercase transition ${
      isActive ? "text-white" : "hover:text-white/70"
    }`;

  return (
    <div className="fixed  left-[24px] right-[24px] z-50">
      <div
        className="
          h-[56px]
          rounded-2xl
          border border-white/15
          bg-white/[0.06]
          backdrop-blur-xl
          shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_30px_rgba(0,0,0,0.28)]
          relative overflow-hidden
        "
      >
        <div className="absolute top-0 inset-x-0 h-px bg-white/10" />

        <div className="h-full px-8 flex items-center justify-between">
          <Link
            to="/"
            className="text-white font-[Montserrat] font-semibold tracking-[0.18em] text-sm md:text-base uppercase"
          >
            Dee Sceptre
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Our Services
            </NavLink>
            <NavLink to="/works" className={linkClass}>
              Developments
            </NavLink>
            <NavLink to="/blog" className={linkClass}>
              Blog/News
            </NavLink>
          </nav>

          <Link
            to="/contact"
            className="
              h-[34px]
              px-5
              rounded-xl
              border border-white/20
              bg-white/[0.04]
              backdrop-blur-xl
              shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_6px_18px_rgba(0,0,0,0.22)]
              flex items-center justify-center
              text-white text-[12px] font-[Montserrat] font-semibold tracking-[0.16em] uppercase
              hover:bg-white/[0.08] transition
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}