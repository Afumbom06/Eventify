import { motion } from "motion/react";
import { Sparkles, UtensilsCrossed, Package, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useLanguage } from "../contexts/LanguageContext";
import eventImage from "figma:asset/54a41a03b940218db72252ff660cd44ad9f490d6.png";

export function Services() {
  const { t } = useLanguage();

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const decorServices = [
    t.services.decor.weddings,
    t.services.decor.birthdays,
    t.services.decor.corporate,
    t.services.decor.babyShowers,
    t.services.decor.anniversaries,
  ];

  const cateringServices = [
    t.services.catering.starters,
    t.services.catering.mains,
    t.services.catering.pastries,
    t.services.catering.drinks,
  ];

  const packages = [
    {
      name: t.services.packages.silver,
      price: "500,000",
      features: [
        "Basic Décor",
        "Menu for 50 guests",
        "2 Servers",
        "Standard Setup",
      ],
      color: "from-gray-400 to-gray-600",
    },
    {
      name: t.services.packages.gold,
      price: "1,200,000",
      features: [
        "Premium Décor",
        "Menu for 100 guests",
        "5 Servers",
        "Full Setup & Cleanup",
        "Sound System",
      ],
      color: "from-amber-600 to-amber-700",
      popular: true,
    },
    {
      name: t.services.packages.premium,
      price: "2,500,000",
      features: [
        "Luxury Décor",
        "Menu for 200 guests",
        "10+ Staff",
        "Complete Event Management",
        "Sound & Lighting",
        "Photography",
      ],
      color: "from-blue-900 to-blue-700",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">{t.services.title}</h2>
          <p className="text-blue-900 text-xl">{t.services.subtitle}</p>
        </motion.div>

        {/* Décor Services */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={eventImage}
              alt="Decoration services"
              className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900">{t.services.decor.title}</h3>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              {t.services.decor.description}
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {decorServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg"
                >
                  <ChevronRight className="w-4 h-4 text-blue-900" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <Button
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-950 hover:to-blue-800"
            >
              {t.common.bookNow}
            </Button>
          </motion.div>
        </div>

        {/* Catering Services */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900">{t.services.catering.title}</h3>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              {t.services.catering.description}
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {cateringServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-amber-50 p-3 rounded-lg"
                >
                  <ChevronRight className="w-4 h-4 text-amber-700" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800"
              >
                {t.services.catering.customMenu}
              </Button>
              <Button
                onClick={scrollToBooking}
                variant="outline"
              >
                {t.services.catering.tasting}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <img
              src={eventImage}
              alt="Catering services"
              className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
            />
          </motion.div>
        </div>

        {/* Event Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900">{t.services.packages.title}</h3>
            </div>
            <p className="text-gray-700 text-lg">
              {t.services.packages.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`relative overflow-hidden hover:shadow-2xl transition-all ${pkg.popular ? 'border-2 border-amber-600 scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-amber-600 to-amber-700">
                        Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-xl mb-4`} />
                    <CardTitle>{pkg.name}</CardTitle>
                    <CardDescription className="text-2xl text-gray-900 mt-2">
                      {t.services.packages.starting} <span className="font-bold">{pkg.price} FCFA</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{t.services.packages.includes}:</p>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-blue-900 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={scrollToBooking}
                      className={`w-full bg-gradient-to-r ${pkg.color}`}
                    >
                      {t.services.packages.learnMore}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
