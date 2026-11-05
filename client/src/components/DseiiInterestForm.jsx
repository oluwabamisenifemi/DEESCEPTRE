import { useState } from "react";
import axios from "axios";

const WHATSAPP_NUMBER = "2348033302881"; // country code, no +, no spaces

const ROLES = [
  "University / Higher Education Institution",
  "Investor",
  "Developer",
  "Professional Partner",
  "Other",
];

const INTERESTS = [
  "University Development",
  "Investment Opportunities",
  "Development Partnership",
  "Professional Services",
  "Other",
];

const SIZES = [
  "Under $1 million",
  "$1m – $10m",
  "$10m – $50m",
  "Above $50m",
  "Not sure yet",
];

const EMPTY_FORM = {
  role: ROLES[0],
  interest: INTERESTS[0],
  name: "",
  email: "",
  phone: "",
  organisation: "",
  jobTitle: "",
  location: "",
  size: "",
  message: "",
  helpWith: "",
  consent: false,
};

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-[#171717] px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition focus:border-[#E8BC45]/60";
const labelClass = "mb-2 block text-sm font-medium text-white/70";

export default function DseiiInterestForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      "DSEII Expression of Interest",
      "",
      `I'm a/an: ${form.role}`,
      `Interested in: ${form.interest}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Organisation: ${form.organisation}`,
      form.jobTitle && `Position: ${form.jobTitle}`,
      form.location && `Location: ${form.location}`,
      form.size && `Estimated size: ${form.size}`,
      `About: ${form.message}`,
      form.helpWith && `Help needed with: ${form.helpWith}`,
    ]
      .filter(Boolean)
      .join("\n");

    // 1. Open WhatsApp straight away (while it still counts as a click)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");

    // 2. Save a copy on the server in the background
    axios.post("/api/dseii", form).catch((error) => console.log("DSEII form save failed:", error));

    setForm(EMPTY_FORM);
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="ds-role" className={labelClass}>I'm a/an</label>
        <select id="ds-role" name="role" value={form.role} onChange={handleChange} className={inputClass}>
          {ROLES.map((r) => <option key={r}>{r}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="ds-interest" className={labelClass}>I'm interested in</label>
        <select id="ds-interest" name="interest" value={form.interest} onChange={handleChange} className={inputClass}>
          {INTERESTS.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="ds-name" className={labelClass}>Your name *</label>
        <input id="ds-name" name="name" required value={form.name} onChange={handleChange} placeholder="Eg: John Doe" className={inputClass} />
      </div>

      <div>
        <label htmlFor="ds-email" className={labelClass}>Your email *</label>
        <input id="ds-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="name@company.com" className={inputClass} />
      </div>

      <div>
        <label htmlFor="ds-phone" className={labelClass}>Phone number *</label>
        <input id="ds-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="Full number (incl. prefix)" className={inputClass} />
      </div>

      <div>
        <label htmlFor="ds-org" className={labelClass}>Organisation / Institution *</label>
        <input id="ds-org" name="organisation" required value={form.organisation} onChange={handleChange} placeholder="Eg: ABC University / ABC Investments" className={inputClass} />
      </div>

      <div>
        <label htmlFor="ds-job" className={labelClass}>Job title / Position</label>
        <input id="ds-job" name="jobTitle" value={form.jobTitle} onChange={handleChange} placeholder="Eg: Director / Managing Partner" className={inputClass} />
      </div>

      <div>
        <label htmlFor="ds-location" className={labelClass}>Project / Opportunity location</label>
        <input id="ds-location" name="location" value={form.location} onChange={handleChange} placeholder="City / State / Country" className={inputClass} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="ds-size" className={labelClass}>Estimated project / investment size</label>
        <select id="ds-size" name="size" value={form.size} onChange={handleChange} className={inputClass}>
          <option value="">— Please choose an option —</option>
          {SIZES.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="ds-message" className={labelClass}>Tell us about your project, opportunity or interest *</label>
        <textarea id="ds-message" name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Tell us briefly about your project, investment interest, institution or the opportunity you would like to discuss." className={inputClass} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="ds-help" className={labelClass}>What would you like DSEII to help you with?</label>
        <textarea id="ds-help" name="helpWith" rows={3} value={form.helpWith} onChange={handleChange} placeholder="Eg: project development, investment, university partnership, funding, technical expertise" className={inputClass} />
      </div>

      <label className="sm:col-span-2 flex items-start gap-3 text-sm text-white/60">
        <input type="checkbox" name="consent" required checked={form.consent} onChange={handleChange} className="mt-1 h-4 w-4 accent-[#E8BC45]" />
        I agree to receive communications from Dee Scepter Limited regarding DSEII opportunities, partnerships and related information.
      </label>

      <button
        type="submit"
        className="sm:col-span-2 inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#E8BC45] px-8 text-sm font-semibold text-black transition hover:bg-[#F5D06B]"
      >
        Submit Expression of Interest
      </button>

      {sent && (
        <p className="sm:col-span-2 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-sm text-emerald-300">
          Thank you. Your expression of interest has been sent. Please press send in WhatsApp, and the DSEII team will be in touch.
        </p>
      )}
    </form>
  );
}