import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import EnquiryForm from "../components/EnquiryForm";
import Footer from "../components/Footer";

// ─────────────────────────────────────────────────────────────
// CONTACT DETAILS — replace these placeholders with the client's
// real details. The Google Map updates from the address below.
// ─────────────────────────────────────────────────────────────
const CONTACT = {
  address: "6th Floor, Landmark Towers, 5B Water Corporation Drive, Victoria Island, Lagos",
  phoneDisplay: "0803 330 2881 · 0808 044 8120",
  phoneLink: "+2348033302881", // the number the Call button dials
  email: "aladejo@deescepterltd.com",
  whatsapp: "2348033302881", // country code, no +, no spaces
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  CONTACT.address
)}&output=embed`;

const details = [
  {
    icon: MapPin,
    label: "Office Address",
    value: CONTACT.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      CONTACT.address
    )}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phoneLink}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us on WhatsApp",
    href: `https://wa.me/${CONTACT.whatsapp}`,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* HEADER */}
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
            Contact Us
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Let's build something that lasts.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            Reach out about a development, construction project, or
            investment partnership. Our team will get back to you promptly.
          </p>
        </section>

        {/* CONTACT DETAILS */}
        <section className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group rounded-3xl border border-white/10 bg-[#141414] p-6 transition hover:border-[#E8BC45]/40 hover:bg-[#1a1a1a]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8BC45]/10 text-[#E8BC45]">
                  <item.icon size={20} />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/45">
                  {item.label}
                </p>
                <p className="mt-2 break-words text-base text-white group-hover:text-[#E8BC45]">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* GOOGLE MAP */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Dee Scepter office location"
              src={mapSrc}
              className="h-[320px] w-full md:h-[450px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        {/* ENQUIRY FORM */}
        <EnquiryForm defaultOpen />
      </main>

      <Footer />
    </div>
  );
}