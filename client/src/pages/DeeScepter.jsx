import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  ShieldCheck,
  Gauge,
  Landmark,
  CheckCircle2,
} from "lucide-react";

const competencies = [
  "Real estate development strategy",
  "Feasibility & cost modelling",
  "Preliminary & concept design coordination",
  "Development approvals & documentation",
  "Design-build execution",
  "Structural systems integration",
  "Home fit-out & finishing",
  "Energy-efficient housing solutions",
];

const deliveryModel = [
  "Cost predictability",
  "Delivery transparency",
  "Risk mitigation",
  "Structural integrity",
  "Timeline discipline",
];

const completedProjects = [
  { name: "Beacon Apartments", meta: "Lekki" },
  { name: "The Pelican Apartments", meta: "Lekki" },
  { name: "Project Tectum", meta: "Location to be disclosed" },
  { name: "Nexus Apartments", meta: "In development" },
];

const partners = [
  "Landowners",
  "Private investors",
  "Financial institutions",
  "Off-plan buyers",
];

function SectionHeading({ eyebrow, title, body }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {body && (
        <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">
          {body}
        </p>
      )}
    </motion.div>
  );
}

function Card({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function DeeScepter() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-white">
              DEE SCEPTER
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Engineering-Led Real Estate Development
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#overview" className="transition hover:text-white">
              Overview
            </a>
            <a href="#competencies" className="transition hover:text-white">
              Competencies
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#partners" className="transition hover:text-white">
              Partnerships
            </a>
          </nav>

          <a
            href="#partners"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Contact
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="mx-auto grid min-h-[90vh] max-w-7xl items-end gap-14 px-6 pb-14 pt-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-20 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-zinc-500">
                Lagos • Design to Construction Framework
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-7xl lg:text-[6rem]">
                Dee Scepter Limited
                <span className="mt-3 block text-zinc-400">
                  Engineering-Led Real Estate Development
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                Dee Scepter Limited develops residential projects through
                disciplined feasibility analysis, cost modelling, and
                engineering-led execution.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                >
                  View Framework
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Track Record
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-5 shadow-2xl shadow-black/40"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { value: "08+", label: "Core delivery capabilities" },
                  { value: "04", label: "Active & completed signature projects" },
                  { value: "100%", label: "Engineering-led oversight model" },
                  { value: "24/7", label: "Structured project visibility" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
                  >
                    <p className="text-3xl font-semibold tracking-tight text-white">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[24px] border border-emerald-400/20 bg-emerald-400/5 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/70">
                  Integrated Delivery
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Predictable cost control, delivery transparency, structured
                  payment models, and risk-aware construction management.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="overview" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <SectionHeading
            eyebrow="Company Overview"
            title="Structured residential development anchored by engineering discipline"
            body="Dee Scepter Limited is a Lagos-based real estate development and engineering company delivering structured residential assets through integrated design-to-construction frameworks."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="min-h-[320px]">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Delivery Model
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    An integrated framework built for control and clarity
                  </h3>
                </div>
                <Building2 className="h-8 w-8 text-white/70" />
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {deliveryModel.map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="min-h-[320px]">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Strategic Summary
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Engineering leadership embedded at executive level
                  </h3>
                </div>
                <ShieldCheck className="h-8 w-8 text-white/70" />
              </div>

              <p className="mt-8 text-base leading-7 text-zinc-400">
                Our integrated structure enables predictable cost control,
                delivery transparency, structured payment models, and
                risk-aware construction management.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "Construction oversight control",
                  "Procurement discipline",
                  "Reduced technical risk",
                  "Long-term structural performance",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section
          id="competencies"
          className="border-y border-white/8 bg-white/[0.02] py-24"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading
              eyebrow="Core Competencies"
              title="Integrated capabilities across the real estate delivery chain"
              body="From feasibility and approvals to structural systems and final fit-out, the platform is built to coordinate technical, commercial, and execution layers as one disciplined process."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {competencies.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group rounded-[28px] border border-white/10 bg-black/30 p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-500">
                      0{index + 1}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:text-white" />
                  </div>
                  <p className="mt-10 text-lg font-medium leading-7 text-white">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <SectionHeading
            eyebrow="Track Record"
            title="Residential projects delivered through structured execution"
            body="Selected projects reflect a delivery approach that prioritises feasibility discipline, technical control, and buildable outcomes."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 to-black"
              >
                <div className="relative h-64 overflow-hidden border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),linear-gradient(135deg,#111_0%,#050505_100%)]">
                  <div className="absolute bottom-5 left-5 rounded-full border border-white/12 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.28em] text-zinc-300">
                    Project {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-zinc-400">{project.meta}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-zinc-500 transition group-hover:text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.02] py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading
              eyebrow="Strategic Advantage"
              title="Executive-level engineering oversight shapes every phase"
              body="Engineering leadership embedded at executive level creates tighter construction oversight, procurement discipline, lower technical risk, and stronger long-term structural performance."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                { icon: Gauge, title: "Construction oversight control" },
                { icon: Landmark, title: "Procurement discipline" },
                { icon: ShieldCheck, title: "Reduced technical risk" },
                { icon: Building2, title: "Long-term structural performance" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="rounded-[28px] border border-white/10 bg-black/40 p-6"
                  >
                    <Icon className="h-9 w-9 text-white/80" />
                    <p className="mt-10 text-xl font-medium leading-8 text-white">
                      {item.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="partners" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <SectionHeading
            eyebrow="Partnership Model"
            title="Built for landowners, investors, and strategic development stakeholders"
            body="We partner with investors, landowners, and strategic stakeholders seeking disciplined development backed by technical expertise."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="h-full">
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                Collaboration Base
              </p>
              <div className="mt-8 space-y-4">
                {partners.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-4"
                  >
                    <span className="text-base text-white">{item}</span>
                    <CheckCircle2 className="h-5 w-5 text-emerald-300/80" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-full">
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                Agreement Structure
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Structured development agreements with disciplined execution
                frameworks.
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
                Our partnership model aligns commercial intent with technical
                control, helping stakeholders move from site opportunity to
                build-ready delivery with stronger visibility and more reliable
                execution outcomes.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Feasibility-led entry",
                  "Transparent project structuring",
                  "Disciplined budget oversight",
                  "Execution accountability",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/10 bg-black/35 px-4 py-4 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <p className="text-lg font-semibold tracking-[0.18em] text-white">
              DEE SCEPTER LIMITED
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
              Dee Scepter Limited is a Lagos-based real estate development and
              engineering company delivering residential projects through
              disciplined feasibility analysis, cost modelling, and
              engineering-led execution.
            </p>
          </div>

          <div className="text-sm text-zinc-500">
            <p>Engineering-Led Real Estate Development</p>
            <p className="mt-2">Lagos, Nigeria</p>
          </div>
        </div>
      </footer>
    </div>
  );
}