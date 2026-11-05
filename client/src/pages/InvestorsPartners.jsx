import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InvestorMeetingForm from "../components/InvestorMeetingForm";

const partners = [
  "Landowners",
  "Private investors",
  "Financial institutions",
  "Off-plan buyers",
];

const advantages = [
  "Feasibility-led entry",
  "Transparent project structuring",
  "Disciplined budget oversight",
  "Execution accountability",
];

export default function InvestorsPartners() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-44 md:px-10 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8BC45]">
              Dee Scepter / Investors & Partners
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-7xl">
              Structured Real Estate
              <br />
              <span className="text-[#E8BC45]">Investment Opportunities.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              We partner with investors, landowners, and strategic stakeholders
              seeking disciplined real estate development backed by technical
              expertise.
            </p>

            <a
              href="#partnership-model"
              className="mt-9 inline-flex items-center gap-4 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold transition hover:border-[#E8BC45] hover:bg-white/5"
            >
              Explore Partnerships
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </section>

        {/* PARTNERSHIP MODEL */}
        <section
          id="partnership-model"
          className="scroll-mt-24 border-t border-white/10 bg-[#0E0E0E] px-6 py-24 md:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
              Partnership Model
            </p>

            <h2 className="max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">
              Built for landowners, investors, and strategic development
              stakeholders.
            </h2>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {/* COLLABORATION BASE */}
              <div className="rounded-2xl border border-white/10 bg-[#161616] p-7 md:p-9">
                <p className="text-xs uppercase tracking-[0.25em] text-[#E8BC45]">
                  Collaboration Base
                </p>

                <div className="mt-8 space-y-4">
                  {partners.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
                    >
                      <span className="text-sm text-white/80">{item}</span>
                      <CheckCircle2
                        size={19}
                        className="shrink-0 text-[#E8BC45]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* AGREEMENT STRUCTURE */}
              <div className="rounded-2xl border border-white/10 bg-[#161616] p-7 md:p-9">
                <p className="text-xs uppercase tracking-[0.25em] text-[#E8BC45]">
                  Agreement Structure
                </p>

                <h3 className="mt-5 text-2xl font-semibold leading-tight md:text-3xl">
                  Structured development agreements with disciplined execution
                  frameworks.
                </h3>

                <p className="mt-6 text-sm leading-7 text-white/55">
                  Our partnership model aligns commercial intent with technical
                  control, helping stakeholders move from site opportunity to
                  build-ready delivery with stronger visibility and more
                  reliable execution outcomes.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {advantages.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY INVEST WITH DEE SCEPTER */}
        <section className="border-t border-white/10 bg-[#080808] px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
                The Dee Scepter Advantage
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Why Invest With
                <span className="text-[#E8BC45]"> Dee Scepter?</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-white/55">
                Real estate investment requires informed decisions, careful
                planning, and a clear understanding of risk. Our development
                approach emphasizes technical expertise, project feasibility,
                and structured collaboration.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Engineering-Led Development",
                  desc: "Technical evaluation and construction planning are central to our approach to assessing and delivering real estate projects.",
                },
                {
                  number: "02",
                  title: "Feasibility-First Approach",
                  desc: "We emphasize evaluating project requirements, development costs, and commercial assumptions before execution.",
                },
                {
                  number: "03",
                  title: "Structured Partnerships",
                  desc: "We aim to establish clearly defined responsibilities, project objectives, and communication processes with development partners.",
                },
                {
                  number: "04",
                  title: "Risk-Aware Planning",
                  desc: "Our approach considers construction, cost, scheduling, and market-related risks when assessing potential developments.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                  className="group rounded-2xl border border-white/10 bg-[#131313] p-8 transition-all duration-300 hover:border-[#E8BC45]/40 hover:bg-[#181818] md:p-10"
                >
                  <div className="mb-12 flex items-center justify-between">
                    <span className="text-3xl font-semibold text-[#E8BC45]">
                      {item.number}
                    </span>

                    <span className="text-xl text-white/30 transition-colors group-hover:text-[#E8BC45]">
                      ↗
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-8 text-white/55">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI MODEL SECTION */}
        <section
          id="roi-model"
          className="border-t border-white/10 bg-[#0E0E0E] px-6 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            {/* SECTION HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
                Investment Framework
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Understanding
                <span className="text-[#E8BC45]"> Potential Returns.</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-white/55">
                Real estate investment outcomes depend on development costs,
                market conditions, project performance, and agreed investment
                terms. Understanding these factors is essential when evaluating
                an opportunity.
              </p>
            </motion.div>

            {/* ROI FRAMEWORK CARDS */}
            <div className="mt-16 grid gap-5 md:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Capital Contribution",
                  desc: "Establish the amount of capital being considered, the proposed use of funds, and any additional funding requirements for the development.",
                },
                {
                  number: "02",
                  title: "Project Economics",
                  desc: "Evaluate projected development costs, potential sales proceeds, financing expenses, and the assumptions underlying the project's financial model.",
                },
                {
                  number: "03",
                  title: "Distribution Terms",
                  desc: "Review how potential proceeds would be allocated, including capital repayment, profit-sharing arrangements, and distribution timing, as defined by the relevant agreement.",
                },
                {
                  number: "04",
                  title: "Risk & Scenarios",
                  desc: "Consider different financial outcomes, including construction cost increases, sales delays, changes in property values, and the possibility of capital losses.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (i % 2) * 0.1,
                  }}
                  className="group rounded-2xl border border-white/10 bg-[#161616] p-8 transition-all duration-300 hover:border-[#E8BC45]/40 hover:bg-[#1B1B1B] md:p-10"
                >
                  <div className="mb-12 flex items-center justify-between">
                    <span className="text-3xl font-semibold text-[#E8BC45]">
                      {item.number}
                    </span>

                    <span className="text-xl text-white/30 transition-colors group-hover:text-[#E8BC45]">
                      ↗
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-8 text-white/55">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ROI CALCULATION EXPLANATION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 rounded-2xl border border-[#E8BC45]/20 bg-[#17150F] p-7 md:p-12"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
                Understanding the Calculation
              </p>

              <h3 className="text-2xl font-semibold md:text-3xl">
                How ROI is calculated.
              </h3>

              <p className="mt-5 max-w-3xl text-sm leading-8 text-white/60">
                Return on Investment (ROI) measures the net gain or loss on
                invested capital relative to the original investment.
              </p>

              <div className="mt-8 rounded-xl border border-white/10 bg-black/40 p-6 md:p-8">
                <p className="mb-3 text-xs uppercase tracking-widest text-[#E8BC45]">
                  General ROI Formula
                </p>

                <p className="text-lg font-semibold leading-relaxed text-white sm:text-xl md:text-2xl">
                  ROI (%) = (Net Investment Gain / Invested Capital) × 100
                </p>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  Net investment gain represents total proceeds received by the
                  investor minus invested capital. The calculation may require
                  adjustment for additional contributions, fees, taxes, and the
                  timing of distributions.
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm leading-7 text-white/50">
                  Important: This framework is provided for general information
                  only. It is not a financial projection, investment offer, or
                  guarantee of future performance. Actual investment outcomes,
                  including potential losses, depend on project circumstances
                  and legally agreed terms.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold">
                  Interested in exploring an opportunity?
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Contact Dee Scepter to discuss potential development
                  partnerships and learn more about available project
                  information.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-4 rounded-full bg-[#E8BC45] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5D06B]"
              >
                Discuss an Investment
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* OFF-PLAN INVESTMENT STRATEGY */}
        <section
          id="off-plan"
          className="border-t border-white/10 bg-[#080808] px-6 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            {/* HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
                Development Investment Strategy
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Understanding
                <span className="text-[#E8BC45]"> Off-Plan Investment.</span>
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/55">
                Off-plan real estate involves purchasing property before
                construction is completed, often based on approved development
                plans and contractual terms. It can provide early access to
                property developments, but carries construction, market, and
                delivery risks.
              </p>
            </motion.div>

            {/* STRATEGY STAGES */}
            <div className="mt-16 grid gap-5 md:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Project Assessment",
                  desc: "Evaluate the proposed development, location, feasibility, approvals, estimated costs, and market demand before making an investment decision.",
                },
                {
                  number: "02",
                  title: "Investment & Contract Review",
                  desc: "Understand purchase terms, payment schedules, contractual protections, delivery expectations, and the responsibilities of each party.",
                },
                {
                  number: "03",
                  title: "Construction & Monitoring",
                  desc: "Follow development milestones, construction progress, project expenditure, and any changes that may affect the agreed delivery schedule.",
                },
                {
                  number: "04",
                  title: "Completion & Ownership",
                  desc: "Review the completion and handover process, required documentation, outstanding obligations, and any subsequent rental or resale plans.",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (i % 2) * 0.1,
                  }}
                  className="group rounded-2xl border border-white/10 bg-[#141414] p-8 transition-all duration-300 hover:border-[#E8BC45]/40 md:p-10"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-3xl font-semibold text-[#E8BC45]">
                      {step.number}
                    </span>
                    <span className="text-lg text-white/30">↗</span>
                  </div>

                  <h3 className="text-xl font-semibold md:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-white/55">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* OPPORTUNITIES AND CONSIDERATIONS */}
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#E8BC45]/20 bg-[#17150F] p-8 md:p-10">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
                  Potential Advantages
                </p>

                <h3 className="text-2xl font-semibold">
                  Why consider off-plan property?
                </h3>

                <ul className="mt-8 space-y-5 text-sm leading-7 text-white/65">
                  <li>✓ Potential access to early-stage pricing</li>
                  <li>✓ Possible staged payment arrangements</li>
                  <li>✓ Opportunity to select units before completion</li>
                  <li>✓ Potential property value appreciation</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#141414] p-8 md:p-10">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
                  Investment Considerations
                </p>

                <h3 className="text-2xl font-semibold">
                  Understand the risks.
                </h3>

                <ul className="mt-8 space-y-5 text-sm leading-7 text-white/65">
                  <li>• Construction and completion delays</li>
                  <li>• Changes in market values and demand</li>
                  <li>• Developer, funding, and contractual risks</li>
                  <li>• Possible losses or difficulty reselling</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold">
                  Explore development opportunities.
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Speak with Dee Scepter about development partnerships and
                  request information on any opportunities currently available.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-4 rounded-full bg-[#E8BC45] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5D06B]"
              >
                Make an Enquiry
                <span>↗</span>
              </a>
            </div>

            <p className="mt-8 max-w-4xl text-xs leading-6 text-white/40">
              The information above describes general off-plan property
              investment principles. It does not confirm the availability of any
              Dee Scepter investment product, payment plan, or projected return.
              All opportunities are subject to project-specific documentation
              and risks.
            </p>
          </div>
        </section>

        {/* RISK MITIGATION APPROACH */}
        <section
          id="risk-mitigation"
          className="border-t border-white/10 bg-[#0E0E0E] px-6 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            {/* SECTION HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
                Risk Management Framework
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                A Disciplined Approach
                <br />
                to <span className="text-[#E8BC45]">Managing Risk.</span>
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/55">
                Every real estate development carries uncertainty. Identifying
                risks early, evaluating their potential impact, and establishing
                suitable controls are important parts of responsible project
                planning.
              </p>
            </motion.div>

            {/* RISK CATEGORIES */}
            <div className="mt-16 grid gap-5 md:grid-cols-2">
              {[
                {
                  number: "01",
                  category: "Technical",
                  title: "Construction & Engineering Risk",
                  desc: "Structural requirements, workmanship, material quality, and construction delays can affect project delivery.",
                  approach:
                    "Potential controls include independent inspections, technical assessments, quality checks, and documented construction milestones.",
                },
                {
                  number: "02",
                  category: "Financial",
                  title: "Cost & Funding Risk",
                  desc: "Unexpected expenses, inflation, financing constraints, and cash flow shortages can impact development budgets.",
                  approach:
                    "Potential controls include realistic cost estimates, contingency planning, periodic budget reviews, and funding assessments.",
                },
                {
                  number: "03",
                  category: "Commercial",
                  title: "Market & Sales Risk",
                  desc: "Changes in property demand, selling prices, and economic conditions can affect the financial performance of a development.",
                  approach:
                    "Potential controls include market research, conservative revenue assumptions, and scenario analysis.",
                },
                {
                  number: "04",
                  category: "Legal",
                  title: "Regulatory & Ownership Risk",
                  desc: "Land title disputes, missing approvals, regulatory changes, and contractual uncertainty can create significant project complications.",
                  approach:
                    "Potential controls include title verification, professional legal review, permit checks, and clearly documented agreements.",
                },
              ].map((risk, i) => (
                <motion.article
                  key={risk.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (i % 2) * 0.1,
                  }}
                  className="group rounded-2xl border border-white/10 bg-[#161616] p-7 transition-all duration-300 hover:border-[#E8BC45]/40 md:p-10"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-3xl font-semibold text-[#E8BC45]">
                      {risk.number}
                    </span>

                    <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50">
                      {risk.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold md:text-2xl">
                    {risk.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {risk.desc}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8BC45]">
                      Potential Mitigation Measures
                    </p>

                    <p className="text-sm leading-7 text-white/65">
                      {risk.approach}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* DUE DILIGENCE PANEL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 overflow-hidden rounded-2xl border border-[#E8BC45]/20 bg-[#17150F] p-7 md:p-12"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
                Investor Due Diligence
              </p>

              <h3 className="max-w-3xl text-2xl font-semibold md:text-4xl">
                Informed decisions begin with the right questions.
              </h3>

              <p className="mt-5 max-w-3xl text-sm leading-8 text-white/55">
                Before committing capital to a real estate development,
                prospective investors should independently assess the project
                and obtain appropriate professional advice.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {[
                  "Review land title and development approvals",
                  "Assess the project budget and funding structure",
                  "Understand contractual rights and obligations",
                  "Evaluate market assumptions and exit options",
                  "Review potential construction and delivery delays",
                  "Consider the possibility of partial or total capital loss",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/30 p-5"
                  >
                    <span className="mt-0.5 text-[#E8BC45]">✓</span>

                    <p className="text-sm leading-7 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RISK DISCLOSURE */}
            <div className="mt-8 rounded-xl border border-white/10 bg-[#141414] p-6 md:p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8BC45]">
                Important Risk Disclosure
              </p>

              <p className="text-sm leading-7 text-white/50">
                Risk mitigation measures cannot eliminate investment risk. Real
                estate development may involve delays, reduced returns,
                illiquidity, or partial or total loss of capital. The framework
                above is illustrative and does not represent a guarantee or
                confirmation of procedures currently implemented by Dee Scepter.
                Investors should review project-specific documentation and seek
                independent advice.
              </p>
            </div>
          </div>
        </section>

        {/* INVESTOR PITCH DECK SECTION */}
        <section
          id="investor-pitch-deck"
          className="border-t border-white/10 bg-[#080808] px-6 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* LEFT SIDE: CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
                  Investor Resources
                </p>

                <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                  Explore the
                  <br />
                  <span className="text-[#E8BC45]">Bigger Picture.</span>
                </h2>

                <p className="mt-7 max-w-xl text-base leading-8 text-white/55">
                  Our upcoming investor presentation will introduce Dee
                  Scepter's development approach, partnership framework, and the
                  key considerations involved in evaluating potential real
                  estate opportunities.
                </p>

                <div className="mt-9 space-y-5">
                  {[
                    "Company profile and development approach",
                    "Real estate development strategy",
                    "Investment and partnership framework",
                    "Risk considerations and due diligence",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="mt-1 text-[#E8BC45]">✓</span>

                      <p className="text-sm leading-7 text-white/70">{item}</p>
                    </div>
                  ))}
                </div>

                {/* DISABLED DOWNLOAD BUTTON */}
                <div className="mt-10">
                  <button
                    type="button"
                    disabled
                    aria-describedby="pitch-deck-status"
                    className="
              inline-flex min-h-12 w-full
              cursor-not-allowed items-center
              justify-center gap-4
              rounded-full
              border border-[#E8BC45]/20
              bg-[#E8BC45]/40
              px-8 py-4
              text-sm font-semibold
              text-white/70
              sm:w-auto
            "
                  >
                    <span>Download Investor Pitch Deck</span>
                    <span aria-hidden="true">🔒</span>
                  </button>

                  <p
                    id="pitch-deck-status"
                    className="mt-4 text-sm text-white/45"
                  >
                    Coming soon. The investor presentation is currently being
                    prepared.
                  </p>
                </div>
              </motion.div>

              {/* RIGHT SIDE: DOCUMENT PREVIEW */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl border border-white/10 bg-[#141414] p-5 shadow-2xl md:p-8"
              >
                {/* DOCUMENT HEADER */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E8BC45]/20 bg-[#E8BC45]/10">
                      <span className="text-xl text-[#E8BC45]">▤</span>
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        Investor Presentation
                      </p>
                      <p className="mt-1 text-xs text-white/40">PDF Document</p>
                    </div>
                  </div>

                  <span className="rounded-full border border-[#E8BC45]/20 bg-[#E8BC45]/10 px-4 py-2 text-xs font-medium text-[#E8BC45]">
                    Coming Soon
                  </span>
                </div>

                {/* DOCUMENT MOCKUP */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B]">
                  <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E8BC45]/10 blur-[80px]" />

                  <div className="relative flex min-h-[360px] flex-col justify-between p-8 sm:min-h-[420px] sm:p-10">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E8BC45]">
                        Dee Scepter
                      </p>

                      <div className="mt-6 h-px w-16 bg-[#E8BC45]" />
                    </div>

                    <div>
                      <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/40">
                        Planned Investor Presentation
                      </p>

                      <h3 className="max-w-sm text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                        Building Value.
                        <br />
                        <span className="text-[#E8BC45]">Creating Legacy.</span>
                      </h3>

                      <p className="mt-5 max-w-xs text-sm leading-7 text-white/45">
                        Real Estate Development
                        <br />
                        Investment & Partnership Overview
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-widest text-white/35">
                          Preview in preparation
                        </span>
                        <span className="text-xs text-[#E8BC45]">
                          DS / INVEST
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AVAILABILITY MESSAGE */}
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="text-lg text-[#E8BC45]">◷</span>

                  <div>
                    <p className="text-sm font-semibold">
                      Document Not Yet Available
                    </p>

                    <p className="mt-2 text-xs leading-6 text-white/45">
                      The official Dee Scepter investor pitch deck will be
                      available for download once finalized.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

                {/* BOOK INVESTOR MEETING */}
        <InvestorMeetingForm />
      </main>

      <Footer />
    </div>
  );
}
