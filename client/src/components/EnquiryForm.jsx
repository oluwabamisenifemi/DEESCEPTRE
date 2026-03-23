import { useState } from "react";

export default function EnquiryForm() {
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    socialMediaAccount: "",
    socialMediaHandle: "",
  });

  const BUSINESS_WHATSAPP = "2348012345678";
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

    const message = `
Hello, I would like to make an enquiry.

Name: ${form.name}
Email: ${form.email}
Phone Number: ${form.phone}
Social Media Account: ${form.socialMediaAccount}
Social Media Handle: ${form.socialMediaHandle}
    `.trim();

    const whatsappUrl = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setForm({
      name: "",
      email: "",
      phone: "",
      socialMediaAccount: "",
      socialMediaHandle: "",
    });

    setIsOpen(false);
  };

  return (
    <section className="w-full bg-black px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleToggle}
            className="rounded-full border border-white/15 bg-white/5 px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-white/10"
          >
            {isOpen ? "Close" : "Enquire"}
          </button>
        </div>

        <div
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