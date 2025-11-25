import { motion, useInView } from "motion/react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { Phone, Calendar, Award, Users, MessageCircle, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import eventImage from "figma:asset/54a41a03b940218db72252ff660cd44ad9f490d6.png";

export function Hero() {
  const { t, language } = useLanguage();
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = "237123456789";
    const message = language === "fr"
      ? "Bonjour, je suis intéressé par vos services d'événementiel."
      : "Hello, I'm interested in your event planning services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  // Stats data
  const stats = [
    { 
      value: 500, 
      suffix: "+", 
      label: language === "fr" ? "Événements Réussis" : "Events Completed",
      icon: Calendar 
    },
    { 
      value: 100, 
      suffix: "%", 
      label: language === "fr" ? "Satisfaction Client" : "Client Satisfaction",
      icon: Award 
    },
    { 
      value: 10, 
      suffix: "+", 
      label: language === "fr" ? "Années d'Expérience" : "Years Experience",
      icon: Users 
    },
  ];

  // Counter animation
  const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isInView, end]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Dramatic Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={eventImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Multiple gradient overlays for dramatic effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        {/* Dramatic pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-100 text-sm">
                {language === "fr" ? "Planification d'Événements de Luxe" : "Luxury Event Planning"}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl !leading-tight mb-4">
                {t.hero.tagline}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-slate-200 text-lg md:text-xl max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("booking")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {t.hero.cta}
              </Button>
              <Button
                size="lg"
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {language === "fr" ? "WhatsApp" : "WhatsApp"}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>
                  <div className="text-2xl text-white">
                    {isInView && <Counter end={stat.value} suffix={stat.suffix} />}
                  </div>
                  <p className="text-sm text-slate-300">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image - Top Left */}
              <motion.div
                className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <img
                  src={eventImage}
                  alt="Luxury Event"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2">
                    <p className="text-white text-sm">
                      {language === "fr" ? "Mariages de Luxe" : "Luxury Weddings"}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Small Image - Bottom Left */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <img
                  src={eventImage}
                  alt="Birthday Events"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute bottom-3 left-3 z-20">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5">
                    <p className="text-white text-xs">
                      {language === "fr" ? "Anniversaires" : "Birthdays"}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Small Image - Bottom Right */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <img
                  src={eventImage}
                  alt="Catering Services"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute bottom-3 left-3 z-20">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5">
                    <p className="text-white text-xs">
                      {language === "fr" ? "Restauration" : "Catering"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 shadow-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-white text-sm">
                    {language === "fr" ? "Appelez-nous" : "Call Us"}
                  </p>
                  <p className="text-white">+237 123 456 789</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile Image - Visible on small screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:hidden relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img
              src={eventImage}
              alt="Luxury Event"
              className="w-full h-full object-cover aspect-[16/9]"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
