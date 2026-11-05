import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* HEADER */}
        <section className="mx-auto max-w-7xl px-6 pt-36 md:px-10 md:pt-44">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
            About Us
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Building Value. Creating Legacy.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            Dee Scepter Limited is an engineering-led real estate development
            and construction company delivering quality, sustainable projects
            across Nigeria.
          </p>
        </section>

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}