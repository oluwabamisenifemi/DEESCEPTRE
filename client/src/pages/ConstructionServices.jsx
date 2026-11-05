import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    title: "Quality Evaluation",
    number: "01",
    image: "https://images.unsplash.com/photo-1581090700227-1e8c1c6b8f5d",
    desc: "Regular inspections ensure top-tier workmanship. We verify that every stage meets structural and safety standards.",
  },
  {
    title: "Project Management & Consulting",
    number: "02",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    desc: "Full coordination from planning to completion, ensuring timelines, costs, and execution stay aligned.",
  },
  {
    title: "Damage & Repairability",
    number: "03",
    image: "https://images.unsplash.com/photo-1581091215367-59ab6b43f4be",
    desc: "We assess structural issues and recommend the most efficient repair strategies.",
  },
  {
    title: "Cost Estimation",
    number: "04",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    desc: "Accurate cost projections that help you plan and execute with confidence.",
  },
];

const capabilities = [
  {
    title: "Engineering Precision",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    desc: "Every structure is guided by detailed engineering systems focused on long-term performance, structural integrity, and safety.",
  },
  {
    title: "Construction Excellence",
    image: "https://images.unsplash.com/photo-1581090700227-1e8c1c6b8f5d",
    desc: "We emphasize quality workmanship, careful material selection, and coordinated project delivery.",
  },
];

const process = [
  {
    number: "01",
    title: "Consultation",
    desc: "We begin by understanding your vision, project requirements, and construction objectives.",
  },
  {
    number: "02",
    title: "Planning & Estimation",
    desc: "Project requirements are translated into a structured plan covering scope, resources, and estimated costs.",
  },
  {
    number: "03",
    title: "Execution & Oversight",
    desc: "Construction activities are coordinated with attention to quality, communication, and project milestones.",
  },
  {
    number: "04",
    title: "Evaluation & Delivery",
    desc: "Completed work is reviewed against project requirements as part of the delivery process.",
  },
];

const testimonials = [
  {
    text: "Dee Scepter delivered our project with exceptional precision and discipline. The engineering oversight was unmatched.",
    name: "Private Investor",
  },
  {
    text: "From feasibility to completion, everything was structured, transparent and professionally executed.",
    name: "Property Developer",
  },
  {
    text: "Their ability to manage cost and maintain quality sets them apart in the market.",
    name: "Landowner",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ConstructionServices() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative isolate flex min-h-[620px] items-center overflow-hidden px-6 pb-24 pt-40 md:px-10">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/40" />

          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8BC45]">
                Dee Scepter / Construction Services
              </p>

              <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                Engineering-Led
                <br />
                <span className="text-[#E8BC45]">Construction.</span>
                <br />
                Built Around You.
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-white/65 md:text-lg">
                From initial planning to construction delivery, Dee Scepter
                brings technical expertise, disciplined project coordination,
                and a commitment to quality at every stage.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-[#E8BC45] px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5D06B]"
                >
                  Discuss Your Project
                  <span>↗</span>
                </a>

                <a
                  href="#our-services"
                  className="inline-flex min-h-12 items-center justify-center gap-4 rounded-full border border-white/30 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15"
                >
                  Explore Our Services
                  <span>↓</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section
          id="our-services"
          className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 md:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
                  What We Do
                </p>

                <h2 className="max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
                  Services for every stage of your build.
                </h2>
              </div>

              <p className="max-w-md leading-8 text-white/55 md:justify-self-end">
                Construction demands more than execution. It requires planning,
                technical understanding, careful coordination, and consistent
                oversight.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {services.map((service, i) => (
                <motion.article
                  key={service.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: (i % 2) * 0.1,
                  }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-colors duration-300 hover:border-[#E8BC45]/40"
                >
                  <div className="h-52 overflow-hidden sm:h-64">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-widest text-[#E8BC45]">
                        {service.number} / SERVICE
                      </span>
                      <span className="text-white/40">↗</span>
                    </div>

                    <h3 className="text-xl font-semibold md:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/55">
                      {service.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ENGINEERING CAPABILITIES */}
        <section className="border-y border-white/10 bg-[#0E0E0E] px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
                Our Expertise
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Technical expertise meets
                <span className="text-white/40"> disciplined execution.</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {capabilities.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#151515]"
                >
                  <div className="h-64 overflow-hidden md:h-80">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-7 md:p-9">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
                      {item.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
              How We Work
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
              A structured approach to every project.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/55">
              Clear planning and coordinated execution are central to successful
              construction projects. Here is how we approach the delivery
              process.
            </p>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-2xl border border-white/10 bg-[#111] p-7"
                >
                  <span className="text-3xl font-semibold text-[#E8BC45]">
                    {step.number}
                  </span>

                  <h3 className="mt-10 text-lg font-semibold">{step.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS - VERIFY BEFORE LAUNCH */}
        <section className="border-t border-white/10 bg-[#0E0E0E] px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
              Client Perspectives
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              What our clients say.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((item, i) => (
                <motion.blockquote
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#151515] p-7"
                >
                  <div>
                    <span className="text-3xl text-[#E8BC45]">&ldquo;</span>

                    <p className="mt-3 text-sm leading-8 text-white/70">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-9 border-t border-white/10 pt-5">
                    <p className="text-sm font-semibold text-white">
                      {item.name}
                    </p>
                  </div>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl rounded-3xl border border-[#E8BC45]/20 bg-[#141414] px-7 py-16 text-center md:px-12 md:py-20">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
              Start a Conversation
            </p>

            <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Let's build something that lasts.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-white/55">
              Have an upcoming construction project? Tell us what you have in
              mind and let's explore how Dee Scepter can help.
            </p>

            <a
              href="/contact"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-[#E8BC45] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5D06B]"
            >
              Get a Quote
              <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
