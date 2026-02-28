import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const linkClass = ({ isActive }) =>
        `text-sm tracking-wide ${"hover:text-white/50"
        }`;

    return (
        <div className="sticky top-0 z-50 backdrop-blur-md bg-[#4E4E4E]/70 border-b border-white/20 shadow-[0_1px_10px_rgba(0,0,0,0.15)] relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-white/30" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-white/10 to-transparent" />
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="font-semibold text-black">
                    DeeSceptre
                </Link>

                <nav className="flex items-center gap-6">
                    <NavLink to="/" className={linkClass}>
                        Home
                    </NavLink>
                    <NavLink to="/projects" className={linkClass}>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className={linkClass}>
                        Contact
                    </NavLink>
                </nav>
                

            </div>
        </div>
    );
}