import { FaXTwitter, FaDiscord, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0c0c0c] text-white overflow-hidden">

      {/* Background grain / subtle gradient */}
      <div className="absolute inset-0 opacity-[0.25] bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_40%)]" />

      <div className="relative max-w-[1200px] mx-auto px-[60px] py-[90px] flex justify-between">

        {/* LEFT SIDE */}
        <div className="max-w-[420px]">

          <div className="flex items-center gap-2 text-[22px] font-semibold">
            ✦ <span>Message</span>
          </div>

          <p className="mt-4 text-white/60 leading-relaxed">
            Track every move, analyze your performance, and get real-time coaching.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-6 text-[20px] text-white/80">
            <FaXTwitter className="cursor-pointer hover:text-white transition" />
            <FaDiscord className="cursor-pointer hover:text-white transition" />
            <FaLinkedin className="cursor-pointer hover:text-white transition" />
          </div>

          {/* CREDIT */}
          <div className="mt-12 text-white/50 text-sm flex items-center gap-2">
            <span>Created by</span>
            <span className="text-white">Arthur</span>
            <span>in</span>
            <span className="text-white">Framer</span>
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div>

          <h4 className="text-white/70 mb-6">Navigation</h4>

          <ul className="space-y-3 text-white/60">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>

        </div>

      </div>

    </footer>
  );
}