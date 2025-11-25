import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: t.nav.home, id: "home" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.services, id: "services" },
    { label: t.nav.gallery, id: "gallery" },
    { label: t.nav.testimonials, id: "testimonials" },
    { label: t.nav.booking, id: "booking" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white">🎉</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900">Event Planner</span>
              <span className="text-blue-900 text-xs">Cameroon</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  language === "en"
                    ? "bg-white text-blue-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🇬🇧 EN
              </button>
              <button
                onClick={() => setLanguage("fr")}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  language === "fr"
                    ? "bg-white text-blue-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🇫🇷 FR
              </button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
