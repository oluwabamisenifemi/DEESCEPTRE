import { useState } from "react";
import axios from "axios";
import { CalendarCheck } from "lucide-react";

const WHATSAPP_NUMBER = "2348033302881"; // country code, no +, no spaces

const INVESTOR_TYPES = [
  "Private investor",
  "Landowner",
  "Financial institution",
  "Off-plan buyer",
  "Other",
];

const INVESTMENT_RANGES = [
  "Under ₦50 million",
  "₦50m – ₦200m",
  "₦200m – ₦500m",
  "Above ₦500m",
  "Prefer to discuss",
];

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  investorType: "",
  investmentRange: "",
  meetingFormat: "Video call",
  preferredDate: "",
  preferredTime: "Morning",
  message: "",
};

function getTomorrow() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-[#171717] px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition focus:border-[#E8BC45]/60";
const labelClass = "mb-2 block text-sm font-medium text-white/70";

export default function InvestorMeetingForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [sent, setSent] = useState(false);

  // Earliest date someone can pick: tomorrow
  const [tomorrow] = useState(getTomorrow);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      "Investor Meeting Request",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Investor type: ${form.investorType}`,
      `Investment range: ${form.investmentRange}`,
      `Meeting format: ${form.meetingFormat}`,
      `Preferred date: ${form.preferredDate} (${form.preferredTime})`,
      form.message && `Notes: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    // 1. Open WhatsApp straight away (while it still counts as a click)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");

    // 2. Save a copy on the server in the background
    axios
      .post("/api/meetings", form)
      .catch((error) => console.log("Meeting request save failed:", error));

    setForm(EMPTY_FORM);
    setSent(true);
  };

  return (
    <section id="book-meeting" className="scroll-mt-24 px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 rounded-3xl border border-[#E8BC45]/20 bg-[#141414] px-6 py-12 md:px-12 md:py-16 lg:grid-cols-[0.8fr_1.2fr]">
        {/* LEFT: intro */}
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8BC45]/10 text-[#E8BC45]">
            <CalendarCheck size={22} />
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#E8BC45]">
            Book an Investor Meeting
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Let's talk about your investment.
          </h2>
          <p className="mt-5 max-w-md text-white/55">
            Tell us a little about yourself and when suits you. Our team will
            confirm the meeting time and share the relevant project information
            beforehand.
          </p>
          {sent && (
            <p className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-sm text-emerald-300">
              Thank you. Your request has been sent. Please press send in
              WhatsApp, and we'll confirm your meeting shortly.
            </p>
          )}
        </div>

        {/* RIGHT: form */}
        <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="im-name" className={labelClass}>Full name</label>
            <input id="im-name" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
          </div>

          <div>
            <label htmlFor="im-email" className={labelClass}>Email</label>
            <input id="im-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@email.com" className={inputClass} />
          </div>

          <div>
            <label htmlFor="im-phone" className={labelClass}>Phone</label>
            <input id="im-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+234 801 234 5678" className={inputClass} />
          </div>

          <div>
            <label htmlFor="im-type" className={labelClass}>I am a…</label>
            <select id="im-type" name="investorType" required value={form.investorType} onChange={handleChange} className={inputClass}>
              <option value="" disabled>Select one</option>
              {INVESTOR_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="im-range" className={labelClass}>Investment range</label>
            <select id="im-range" name="investmentRange" required value={form.investmentRange} onChange={handleChange} className={inputClass}>
              <option value="" disabled>Select one</option>
              {INVESTMENT_RANGES.map((r) => <option key={r}>{r}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="im-date" className={labelClass}>Preferred date</label>
            <input id="im-date" name="preferredDate" type="date" required min={tomorrow} value={form.preferredDate} onChange={handleChange} className={`${inputClass} [color-scheme:dark]`} />
          </div>

          <div>
            <label htmlFor="im-time" className={labelClass}>Preferred time</label>
            <select id="im-time" name="preferredTime" value={form.preferredTime} onChange={handleChange} className={inputClass}>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <span className={labelClass}>Meeting format</span>
            <div className="flex flex-wrap gap-3">
              {["Video call", "In person", "Phone call"].map((f) => (
                <label
                  key={f}
                  className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm transition ${
                    form.meetingFormat === f
                      ? "border-[#E8BC45] bg-[#E8BC45]/10 text-[#E8BC45]"
                      : "border-white/10 text-white/60 hover:border-white/25"
                  }`}
                >
                  <input type="radio" name="meetingFormat" value={f} checked={form.meetingFormat === f} onChange={handleChange} className="sr-only" />
                  {f}
                </label>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="im-message" className={labelClass}>Anything we should know? (optional)</label>
            <textarea id="im-message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="e.g. interested in off-plan units at Nexus Apartments" className={inputClass} />
          </div>

          <button
            type="submit"
            className="sm:col-span-2 inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#E8BC45] px-8 text-sm font-semibold text-black transition hover:bg-[#F5D06B]"
          >
            Request Meeting
          </button>
        </form>
      </div>
    </section>
  );
}