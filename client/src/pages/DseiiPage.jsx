import { ArrowRight, Landmark, TrendingUp, HardHat, Handshake } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DseiiInterestForm from "../components/DseiiInterestForm";
import campusImage from "../assets/dseii-campus.webp";
import universitiesImage from "../assets/dseii-universities.webp";
import investorsImage from "../assets/dseii-investors.webp";
import constructionImage from "../assets/dseii-construction.webp";
import ecosystemImage from "../assets/dseii-ecosystem.webp";

const PILLARS = [
  {
    title: "University Partnerships",
    body: "Connecting universities with development and investment opportunities for infrastructure projects.",
    image: universitiesImage,
  },
  {
    title: "Investment Opportunities",
    body: "Identifying and presenting opportunities for investment in higher education infrastructure.",
    image: investorsImage,
  },
];

const IMPACT_STEPS = [
  { title: "Project Identification", body: "Identify and structure viable higher education infrastructure opportunities." },
  { title: "Capital & Partnerships", body: "Connect projects with suitable investors, developers and strategic partners." },
  { title: "Delivery & Impact", body: "Support the development of sustainable infrastructure that creates lasting value for institutions and communities." },
];

const STAKEHOLDERS = [
  {
    icon: Landmark,
    label: "Universities / Institutions",
    title: "Turn infrastructure needs into structured opportunities.",
    body: "Universities and higher education institutions can present infrastructure needs, development priorities and potential projects for consideration by suitable partners.",
  },
  {
    icon: TrendingUp,
    label: "Investors",
    title: "Discover opportunities with long-term potential.",
    body: "Explore higher education infrastructure opportunities and connect with projects requiring investment and strategic capital.",
  },
  {
    icon: HardHat,
    label: "Developers",
    title: "Bring expertise to viable projects.",
    body: "Connect with institutions and investment partners seeking development, construction and project delivery expertise.",
  },
  {
    icon: Handshake,
    label: "Professional Partners",
    title: "Contribute expertise where it matters.",
    body: "Architects, engineers, consultants, financial professionals and other specialists can participate in projects aligned with their capabilities.",
  },
];

const HOW_IT_WORKS = [
  { label: "Identify", title: "Identify the Opportunity", body: "Infrastructure needs and potential development opportunities are submitted and assessed." },
  { label: "Structure", title: "Structure the Project", body: "Relevant information, requirements and potential partnership models are developed around the opportunity." },
  { label: "Connect", title: "Connect the Right Partners", body: "Suitable investors, developers and professional partners are connected with the opportunity." },
];

const INVESTOR_POINTS = [
  { title: "Long-Term Value", body: "Opportunities connected to infrastructure with enduring institutional and social relevance." },
  { title: "Structured Opportunities", body: "Projects presented within a framework designed to facilitate meaningful engagement." },
  { title: "Strategic Partnerships", body: "Opportunities to participate alongside institutions, developers and professional partners." },
];

function Eyebrow({ children }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">{children}</p>;
}

function CtaLink({ children }) {
  return (
    <a href="#connect" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#E8BC45]">
      {children} <ArrowRight size={16} className="text-[#E8BC45]" />
    </a>
  );
}

export default function DseiiPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden">
          <img src={campusImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 md:px-10 md:pb-32 md:pt-48">
            <Eyebrow>Dee Scepter Education Infrastructure Initiative</Eyebrow>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Mobilising Global Capital for World-Class Higher Education Infrastructure in Africa.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
              DSEII connects universities, investors, developers and professional partners to support the
              delivery of quality education infrastructure across Africa.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#connect" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#E8BC45] px-8 text-sm font-semibold text-black transition hover:bg-[#F5D06B]">
                Partner With Us <ArrowRight size={16} />
              </a>
              <a href="#how-it-works" className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/30 bg-black/30 px-8 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
                Discover the Initiative
              </a>
            </div>
          </div>
        </section>

        {/* ── TWO PILLARS ── */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Transforming Education Infrastructure Through Partnership.</h2>
            <p className="mt-5 text-white/60">
              DSEII brings together universities, investors, developers and professional partners to create
              opportunities for the development of world-class higher education infrastructure.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
                <img src={p.image} alt="" loading="lazy" className="h-60 w-full object-cover" />
                <div className="p-7">
                  <p className="text-sm text-[#E8BC45]">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-xl font-semibold uppercase tracking-wide">{p.title}</h3>
                  <p className="mt-3 text-white/60">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FROM OPPORTUNITY TO IMPACT ── */}
        <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">From Opportunity to Impact</h2>
            <p className="mt-5 max-w-3xl text-white/60">
              DSEII provides a structured platform for connecting higher education institutions with the
              capital, expertise and development partners required to deliver transformative infrastructure
              projects across Africa.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {IMPACT_STEPS.map((s) => (
                <div key={s.title} className="rounded-3xl border border-white/10 bg-[#141414] p-7">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#E8BC45]">{s.title}</h3>
                  <p className="mt-4 text-white/70">{s.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-4xl text-white/55">
              DSEII is designed to help move viable education infrastructure projects from concept to
              implementation. By bringing the right stakeholders together, the initiative creates a clearer
              pathway for universities seeking development support, investors seeking credible opportunities
              and professional partners seeking meaningful projects to participate in.
            </p>
          </div>
        </section>

        {/* ── THE OPPORTUNITY ── */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-2">
          <img src={campusImage} alt="Modern African university campus" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <div>
            <Eyebrow>The Opportunity</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Building the Infrastructure Behind Africa's Next Generation.</h2>
            <p className="mt-5 text-white/60">
              Africa's higher education sector continues to evolve, creating a growing need for modern,
              functional and sustainable infrastructure that can support institutions, students and communities.
            </p>
            <p className="mt-4 text-white/60">
              DSEII seeks to help bridge the gap between infrastructure needs and the capital, expertise and
              partnerships required to address them.
            </p>
            <p className="mt-4 text-white/60">
              By bringing universities, investors, developers and professional partners into the same
              ecosystem, DSEII creates a platform for identifying opportunities, developing partnerships and
              advancing projects that can deliver lasting value.
            </p>
            <CtaLink>Explore opportunities</CtaLink>
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Built for Those Who Build the Future.</h2>
            <p className="mt-5 max-w-2xl text-white/60">
              DSEII creates a common platform for stakeholders with different capabilities, interests and
              infrastructure needs.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {STAKEHOLDERS.map((s, i) => (
                <div key={s.label} className="rounded-3xl border border-white/10 bg-[#141414] p-7">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                      {String(i + 1).padStart(2, "0")} — {s.label}
                    </p>
                    <s.icon size={22} className="text-[#E8BC45]" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-white/60">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW DSEII WORKS ── */}
        <section id="how-it-works" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:px-10 md:py-28">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">How DSEII Works</h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/60">
              A structured pathway for turning infrastructure needs into opportunities for collaboration and investment.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {HOW_IT_WORKS.map((s, i) => (
              <div key={s.label} className="rounded-3xl border border-white/10 bg-[#111] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8BC45]">
                  {String(i + 1).padStart(2, "0")} — {s.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-white/60">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#E8BC45]/20 bg-[#141414] p-8 md:flex-row md:items-center">
            <h3 className="text-2xl font-semibold">Have an opportunity, capability or investment interest?</h3>
            <a href="#connect" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#E8BC45] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#F5D06B]">
              Tell us where you fit <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* ── FOR INVESTORS ── */}
        <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>For Investors</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Invest in Infrastructure. Participate in Lasting Value.</h2>
              <p className="mt-5 text-white/60">
                Higher education infrastructure represents more than physical development. It creates
                platforms for learning, innovation, economic participation and long-term institutional growth.
              </p>
              <p className="mt-4 text-white/60">
                DSEII provides a platform for investors to discover infrastructure opportunities within the
                higher education sector and explore potential pathways for participation.
              </p>
              <ul className="mt-8 space-y-5">
                {INVESTOR_POINTS.map((p) => (
                  <li key={p.title} className="border-l-2 border-[#E8BC45] pl-5">
                    <p className="font-semibold">{p.title}</p>
                    <p className="mt-1 text-sm text-white/55">{p.body}</p>
                  </li>
                ))}
              </ul>
              <CtaLink>Register investment interest</CtaLink>
            </div>
            <img src={investorsImage} alt="Education infrastructure investment analysis" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          </div>
        </section>

        {/* ── FOR UNIVERSITIES ── */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-2">
          <img src={constructionImage} alt="University building under construction" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <div>
            <Eyebrow>For Universities &amp; Institutions</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Have an Infrastructure Need? Let's Explore the Possibilities.</h2>
            <p className="mt-5 text-white/60">
              Whether you are planning a new campus, expanding existing facilities or seeking support for a
              major infrastructure project, DSEII provides a pathway for connecting institutional needs with
              potential development, investment and professional partners.
            </p>
            <p className="mt-4 text-white/60">
              Submit your project or infrastructure requirement and provide the information needed for an
              initial assessment.
            </p>
            <CtaLink>Submit a project opportunity</CtaLink>
          </div>
        </section>

        {/* ── ECOSYSTEM ── */}
        <section className="border-y border-white/10 bg-[#0d0d0d] px-6 py-20 text-center md:px-10 md:py-28">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">An Ecosystem Built Around Collaboration.</h2>
            <p className="mt-5 text-white/60">
              Major infrastructure projects require more than capital. They require institutions with a clear
              vision, developers who can execute, professionals who can solve complex challenges and partners
              who understand the long-term value of sustainable development.
            </p>
            <img src={ecosystemImage} alt="The DSEII ecosystem of universities, investors, developers and partners" loading="lazy" className="mx-auto mt-12 w-full rounded-3xl" />
            <p className="mt-10 text-white/60">
              Together, these stakeholders can help transform infrastructure requirements into viable projects
              and meaningful development opportunities.
            </p>
          </div>
        </section>

        {/* ── CONNECT WITH DSEII (FORM) ── */}
        <section id="connect" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20 md:px-10 md:py-28">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Connect With DSEII</h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/60">
              Whether you represent a university, have an infrastructure project, are exploring investment
              opportunities or provide professional development expertise, we would like to understand how you
              can participate in the DSEII ecosystem.
            </p>
          </div>
          <div className="mt-12 rounded-3xl border border-white/10 bg-[#111] p-6 md:p-10">
            <DseiiInterestForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}