import { useEffect } from "react";

export default function SlideOverController() {
  useEffect(() => {
    const onScroll = () => {
      const panel = document.querySelector(".slide-panel");
      const wrapper = document.querySelector("#slide-over");
      if (!panel || !wrapper) return;

      const vh = window.innerHeight;
      const rect = wrapper.getBoundingClientRect();

      // How far we can scroll while this section is pinned
      const total = rect.height - vh;

      // How far we've scrolled into this section (0..total)
      const scrolled = Math.min(Math.max(-rect.top, 0), total);

      // Progress 0..1
      const p = total > 0 ? scrolled / total : 0;

     const y = (1 - Math.pow(p, 0.85)) * 100;
panel.style.transform = `translateY(${y}%)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}