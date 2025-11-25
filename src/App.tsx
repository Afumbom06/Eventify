import { LanguageProvider } from "./contexts/LanguageContext";
import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Booking } from "./components/Booking";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Booking />
        <Contact />
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}
