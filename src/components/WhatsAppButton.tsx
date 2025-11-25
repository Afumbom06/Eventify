import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function WhatsAppButton() {
  const { t, language } = useLanguage();

  const handleClick = () => {
    const message = language === "en"
      ? "Hello! I'm interested in your event planning services."
      : "Bonjour! Je suis intéressé par vos services d'organisation d'événements.";
    
    const whatsappUrl = `https://wa.me/237600000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl flex items-center gap-3 group transition-all"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        {t.whatsapp.chat}
      </span>
    </motion.button>
  );
}
