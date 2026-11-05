import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function EnquiryForm({ defaultOpen = false }) {
  const { hash } = useLocation();

  // Start open on the Contact page, or when the link ends in #enquiry
  const [isOpen, setIsOpen] = useState(defaultOpen || hash === "#enquiry");

  useEffect(() => {
    if (hash !== "#enquiry") return;

    // Scroll to the enquiry section
    const timer = setTimeout(() => {
      document.getElementById("enquiry")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [hash]);


  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    socialMediaAccount: "",
    socialMediaHandle: "",
  });

  const BUSINESS_WHATSAPP = "2348033302881";
  // Replace with the business owner's WhatsApp number
  // Use country code, no +, no spaces, no dashes

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };




  
const handleSubmit = (e) => {
  e.preventDefault();

  // WHATSAPP MESSAGE
  const message = `
New Website Enquiry

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Social Media: ${form.socialMediaAccount}
Handle: ${form.socialMediaHandle}
    `;

  const whatsappUrl =
    `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;

  // 1. Open WhatsApp immediately, while it still counts as a click
  window.open(whatsappUrl, "_blank");

  // 2. Send the email copy in the background.
  //    If it fails, WhatsApp has already opened, so the visitor isn't affected.
  axios
    .post("/api/enquiry", {
      name: form.name,
      email: form.email,
      phone: form.phone,
      socialMedia: form.socialMediaAccount,
      handle: form.socialMediaHandle,
    })
    .catch((error) => console.log("Enquiry email failed:", error));

  // 3. Clear the form
  setForm({
    name: "",
    email: "",
    phone: "",
    socialMediaAccount: "",
    socialMediaHandle: "",
  });
};

  return (
    <section
  id="enquiry"
  className="w-full scroll-mt-24 bg-black px-6 py-16 text-white md:px-10"
>
      <div className="mx-auto max-w-5xl">

<div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">

  {/* LEFT SIDE: WEBSITE COPY */}
  <div className="max-w-2xl">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8BC45]">
      Let's Connect
    </p>

    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
      Have a project in mind?
    </h2>

    <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55">
      Whether you're planning a property development,
      need construction expertise, or want to explore
      an investment partnership, tell us what you're
      working on.
    </p>
  </div>

  {/* RIGHT SIDE: ENQUIRE BUTTON */}
  <button
    type="button"
    onClick={handleToggle}
    aria-expanded={isOpen}
    aria-controls="enquiry-form"
    className="
      group inline-flex min-h-[52px]
      w-full shrink-0 items-center justify-center
      gap-6 rounded-full bg-[#E8BC45]
      px-8 py-4 text-sm font-semibold text-black
      transition-all duration-300
      hover:-translate-y-1 hover:bg-[#F5D06B]
      hover:shadow-[0_10px_30px_rgba(232,188,69,0.15)]
      md:w-auto
    "
  >
    {isOpen ? "Close Form" : "Enquire Now"}

    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
      {isOpen ? "−" : "↗"}
    </span>
  </button>

</div>


        <div
        id="enquiry-form"
          className={`grid transition-all duration-500 ease-in-out ${
            isOpen ? "mt-8 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="rounded-[32px] border border-white/12 bg-black px-6 py-8 sm:px-8 md:px-12 md:py-10">
              <div className="mb-8">
                <p className="mb-2 text-sm uppercase tracking-[0.18em] text-white/45">
                  Enquiry Form
                </p>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Let’s discuss your project
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-white/55 md:text-base">
                  Fill in your information and continue the conversation on
                  WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-white/70"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Justin Vallesteros"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#171717] px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition duration-300 focus:border-white/25 focus:bg-[#1d1d1d]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-white/70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="justin@email.com"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#171717] px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition duration-300 focus:border-white/25 focus:bg-[#1d1d1d]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-base font-medium text-white/70"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 801 234 5678"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#171717] px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition duration-300 focus:border-white/25 focus:bg-[#1d1d1d]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="socialMediaAccount"
                    className="mb-3 block text-base font-medium text-white/70"
                  >
                    Social Media Account
                  </label>
                  <input
                    id="socialMediaAccount"
                    type="text"
                    name="socialMediaAccount"
                    value={form.socialMediaAccount}
                    onChange={handleChange}
                    placeholder="Instagram / TikTok / X / Facebook"
                    className="w-full rounded-2xl border border-white/10 bg-[#171717] px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition duration-300 focus:border-white/25 focus:bg-[#1d1d1d]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="socialMediaHandle"
                    className="mb-3 block text-base font-medium text-white/70"
                  >
                    Social Media Handle
                  </label>
                  <input
                    id="socialMediaHandle"
                    type="text"
                    name="socialMediaHandle"
                    value={form.socialMediaHandle}
                    onChange={handleChange}
                    placeholder="@username"
                    className="w-full rounded-2xl border border-white/10 bg-[#171717] px-5 py-4 text-base text-white placeholder:text-white/35 outline-none transition duration-300 focus:border-white/25 focus:bg-[#1d1d1d]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-2xl bg-white/18 px-6 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-white/25"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}