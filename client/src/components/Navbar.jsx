import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
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

        <div className="h-full px-8 flex items-center justify-between">

          {/* LOGO + TEXT */}
          <Link to="/" className="flex items-center gap-3">
        
            <span className="text-white font-[Montserrat] font-semibold tracking-[0.18em] text-sm md:text-base uppercase">
              Dee Scepter
            </span>
                <img
              src="src/assets/IMG-20260416-WA0000.jpg"
              alt="logo"
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
            <NavLink to="/dee-scepter" className={linkClass}>
              Our Services
            </NavLink>
            <NavLink to="/works" className={linkClass}>
              Developments
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
              flex items-center justify-center
              text-white text-[12px] font-[Montserrat] font-semibold tracking-[0.16em] uppercase
              hover:bg-white/20 transition
            "
          >
            Contact Us
          </Link>

        </div>
      </div>
    </div>
  );
}