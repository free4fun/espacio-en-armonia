import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
function WhatsAppFloatingButton() {
  return (
    <Link
      to="https://wa.me/59898825922"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
      aria-label="Chat en WhatsApp"
    >
      <FaWhatsapp className="w-10 h-10" />
    </Link>
  );
}

export default WhatsAppFloatingButton;
