import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_NUMBER = "2348033302881"; // country code, no +, no spaces
const DEFAULT_MESSAGE = "Hello Dee Scepter, I'd like to make an enquiry.";

export default function WhatsAppButton() {
  const { pathname } = useLocation();

  // Don't show on the admin pages
  if (pathname.startsWith("/secret-admin") || pathname.startsWith("/admin")) {
    return null;
  }

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:scale-110 md:bottom-8 md:right-8"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}