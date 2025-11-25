import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.info.phone,
      content: "+237 6XX XXX XXX",
      action: "tel:+237600000000",
      actionLabel: t.contact.callNow,
    },
    {
      icon: MessageSquare,
      title: t.contact.info.whatsapp,
      content: "+237 6XX XXX XXX",
      action: "https://wa.me/237600000000",
      actionLabel: t.contact.chatWhatsApp,
    },
    {
      icon: Mail,
      title: t.contact.info.email,
      content: "events@cameroon.cm",
      action: "mailto:events@cameroon.cm",
      actionLabel: language === "en" ? "Send Email" : "Envoyer Email",
    },
    {
      icon: MapPin,
      title: t.contact.info.location,
      content: t.contact.info.locationText,
      action: null,
      actionLabel: null,
    },
    {
      icon: Clock,
      title: t.contact.info.hours,
      content: t.contact.info.hoursText,
      action: null,
      actionLabel: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const message = `
${language === "en" ? "Contact Form Message" : "Message du Formulaire de Contact"}

${t.contact.form.name}: ${formData.get("name")}
${t.contact.form.email}: ${formData.get("email")}
${t.contact.form.message}: ${formData.get("message")}
    `.trim();

    const whatsappUrl = `https://wa.me/237600000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">{t.contact.title}</h2>
          <p className="text-blue-900 text-xl">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600 mb-3">{info.content}</p>
                      {info.action && info.actionLabel && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(info.action, "_blank")}
                          className="border-blue-900 text-blue-900 hover:bg-blue-50"
                        >
                          {info.actionLabel}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127163.12629155876!2d9.614543!3d4.048611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128be1e1c0c3%3A0x6e2f7f5c5c5c5c5c!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">{t.contact.form.name} *</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      required
                      placeholder={language === "en" ? "Your name" : "Votre nom"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">{t.contact.form.email} *</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder={language === "en" ? "Your email" : "Votre email"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">{t.contact.form.message} *</Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      placeholder={
                        language === "en"
                          ? "Tell us about your event or inquiry..."
                          : "Parlez-nous de votre événement ou demande..."
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    {t.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
