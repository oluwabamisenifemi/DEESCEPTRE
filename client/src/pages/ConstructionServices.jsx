import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer";
export default function ConstructionServices() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const services = [
    {
      title: "Quality Evaluation",
      image: "https://images.unsplash.com/photo-1581090700227-1e8c1c6b8f5d",
      desc: "Regular inspections ensure top-tier workmanship. We verify that every stage meets structural and safety standards."
    },
    {
      title: "Project Management & Consulting",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      desc: "Full coordination from planning to completion ensuring timelines, costs, and execution stay aligned."
    },
    {
      title: "Damage & Repairability",
      image: "https://images.unsplash.com/photo-1581091215367-59ab6b43f4be",
      desc: "We assess structural issues and recommend the most efficient repair strategies."
    },
    {
      title: "Cost Estimation",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      desc: "Accurate cost projections that help you plan and execute with confidence."
    }
  ];

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      text: "Dee Scepter delivered our project with exceptional precision and discipline. The engineering oversight was unmatched.",
      name: "Private Investor"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      text: "From feasibility to completion, everything was structured, transparent and professionally executed.",
      name: "Property Developer"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      text: "Their ability to manage cost and maintain quality sets them apart in the market.",
      name: "Landowner"
    }
  ];

  return (
    <main className="bg-black text-white">

      {/* ================= SECTION 1 ================= */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">

          <div className="grid gap-8 md:grid-cols-2 items-end">
            <h2 className="text-4xl font-semibold leading-tight">
              Services for every stage of your build.
            </h2>

            <p className="text-white/60">
              From planning to completion, we handle every detail of your project.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl bg-[#111] p-5 border border-white/10 hover:bg-[#161616] transition"
              >
                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>

                <div className="mt-4 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <p className="mt-4 text-sm text-white/60 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}

          </div>

          <div className="mt-12 flex justify-center">
            <button className="rounded-full bg-orange-500 px-10 py-4 text-sm font-semibold text-black hover:opacity-90">
              GET A QUOTE
            </button>
          </div>

        </div>
      </section>


      {/* ================= SECTION 2 ================= */}
      <section ref={ref} className="py-32 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-2 gap-10">

          <motion.div
            style={{ x: leftX }}
            className="rounded-2xl bg-[#111] border border-white/10 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Engineering Precision</h3>
              <p className="mt-3 text-sm text-white/60">
                Every structure is guided by detailed engineering systems ensuring long-term performance and safety.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ x: rightX }}
            className="rounded-2xl bg-[#111] border border-white/10 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e8c1c6b8f5d"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Construction Excellence</h3>
              <p className="mt-3 text-sm text-white/60">
                We maintain strict control over execution, materials and delivery timelines to ensure predictable outcomes.
              </p>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ================= SECTION 3 ================= */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="text-3xl font-semibold">
            What our clients say
          </h2>

          <div className="mt-12 space-y-6">

            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 rounded-xl bg-[#111] border border-white/10 p-6 items-center hover:bg-[#161616] transition"
              >
                <img
                  src={t.image}
                  className="h-20 w-20 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {t.text}
                  </p>

                  <p className="mt-3 text-sm font-semibold text-white">
                    {t.name}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>
      <Footer />

    </main>
  );
}