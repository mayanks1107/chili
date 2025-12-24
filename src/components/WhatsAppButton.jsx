import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const phoneNumber = "+918135045121" // Your WhatsApp number
  const message = encodeURIComponent("Hi, I would like to get in touch with WaiThai Organics.") // Optional pre-filled message

  return (
    <a
      href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1ebe5d] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transition"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
    </a>
  )
}
