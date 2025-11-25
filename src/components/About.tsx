import { motion } from "motion/react";
import { Award, Users, Heart, TrendingUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import eventImage from "figma:asset/54a41a03b940218db72252ff660cd44ad9f490d6.png";

export function About() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Users,
      title: t.about.reason1,
      description: t.about.reason1Text,
    },
    {
      icon: Award,
      title: t.about.reason2,
      description: t.about.reason2Text,
    },
    {
      icon: Heart,
      title: t.about.reason3,
      description: t.about.reason3Text,
    },
    {
      icon: TrendingUp,
      title: t.about.reason4,
      description: t.about.reason4Text,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">{t.about.title}</h2>
          <p className="text-blue-900 text-xl">{t.about.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={eventImage}
              alt="Event planning team"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              {t.about.description}
            </p>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-600">
              <h3 className="text-gray-900 mb-3">{t.about.mission}</h3>
              <p className="text-gray-600">{t.about.missionText}</p>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-gray-900 text-center mb-12">{t.about.whyChoose}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-gray-900 mb-2">{reason.title}</h4>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
