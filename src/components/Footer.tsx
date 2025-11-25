import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: t.nav.home, id: "home" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.services, id: "services" },
    { label: t.nav.gallery, id: "gallery" },
    { label: t.nav.testimonials, id: "testimonials" },
    { label: t.nav.booking, id: "booking" },
    { label: t.nav.contact, id: "contact" },
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com", color: "hover:text-blue-600" },
    { icon: Instagram, url: "https://instagram.com", color: "hover:text-amber-500" },
    { icon: Twitter, url: "https://twitter.com", color: "hover:text-blue-400" },
    { icon: Youtube, url: "https://youtube.com", color: "hover:text-red-600" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">🎉</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl">Event Planner</span>
                <span className="text-amber-400 text-sm">Cameroon</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">{t.contact.title}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +237 6XX XXX XXX</li>
              <li>📧 events@cameroon.cm</li>
              <li>📍 Douala, Cameroon</li>
              <li className="pt-2 text-sm">
                {t.contact.info.hoursText}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {t.footer.copyright}
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-amber-600 fill-amber-600" /> in Cameroon
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
