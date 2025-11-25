import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, DollarSign, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { toast } from "sonner@2.0.3";

export function Booking() {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    time: "",
    venue: "",
    needVenue: false,
    services: "",
    budget: "",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const message = `
${language === "en" ? "New Event Booking Request" : "Nouvelle Demande de Réservation"}

${t.booking.form.name}: ${formData.name}
${t.booking.form.email}: ${formData.email}
${t.booking.form.phone}: ${formData.phone}
${t.booking.form.eventType}: ${formData.eventType}
${t.booking.form.date}: ${formData.date}
${t.booking.form.time}: ${formData.time}
${t.booking.form.venue}: ${formData.venue}
${t.booking.form.needVenue}: ${formData.needVenue ? (language === "en" ? "Yes" : "Oui") : "No"}
${t.booking.form.services}: ${formData.services}
${t.booking.form.budget}: ${formData.budget}
${t.booking.form.specialRequests}: ${formData.specialRequests}
    `.trim();

    // WhatsApp number for Cameroon (replace with actual number)
    const whatsappNumber = "237600000000"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        language === "en"
          ? "Redirecting to WhatsApp..."
          : "Redirection vers WhatsApp..."
      );
      window.open(whatsappUrl, "_blank");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        date: "",
        time: "",
        venue: "",
        needVenue: false,
        services: "",
        budget: "",
        specialRequests: "",
      });
    }, 1000);
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-blue-50 via-amber-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 mb-4">{t.booking.title}</h2>
          <p className="text-blue-900 text-xl">{t.booking.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="shadow-2xl border-2 border-pink-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-blue-900" />
                {t.booking.title}
              </CardTitle>
              <CardDescription>
                {language === "en"
                  ? "Fill in your details and we'll contact you within 24 hours via WhatsApp"
                  : "Remplissez vos coordonnées et nous vous contacterons dans les 24 heures via WhatsApp"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name, Email, Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.booking.form.name} *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.booking.form.email} *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t.booking.form.phone} *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+237 6XX XXX XXX"
                  />
                </div>

                {/* Event Type */}
                <div className="space-y-2">
                  <Label htmlFor="eventType">{t.booking.form.eventType} *</Label>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t.booking.form.eventType} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">{t.booking.form.eventTypes.wedding}</SelectItem>
                      <SelectItem value="birthday">{t.booking.form.eventTypes.birthday}</SelectItem>
                      <SelectItem value="corporate">{t.booking.form.eventTypes.corporate}</SelectItem>
                      <SelectItem value="babyshower">{t.booking.form.eventTypes.babyShower}</SelectItem>
                      <SelectItem value="anniversary">{t.booking.form.eventTypes.anniversary}</SelectItem>
                      <SelectItem value="other">{t.booking.form.eventTypes.other}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-900" />
                      {t.booking.form.date} *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-900" />
                      {t.booking.form.time} *
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>

                {/* Venue */}
                <div className="space-y-2">
                  <Label htmlFor="venue" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-900" />
                    {t.booking.form.venue}
                  </Label>
                  <Input
                    id="venue"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    placeholder="Douala, Bonapriso"
                  />
                  <div className="flex items-center space-x-2 mt-2">
                    <Checkbox
                      id="needVenue"
                      checked={formData.needVenue}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, needVenue: checked as boolean })
                      }
                    />
                    <label htmlFor="needVenue" className="text-sm text-gray-700 cursor-pointer">
                      {t.booking.form.needVenue}
                    </label>
                  </div>
                </div>

                {/* Services */}
                <div className="space-y-2">
                  <Label htmlFor="services">{t.booking.form.services} *</Label>
                  <Select
                    value={formData.services}
                    onValueChange={(value) => setFormData({ ...formData, services: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t.booking.form.services} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="decor">{t.booking.form.serviceOptions.decor}</SelectItem>
                      <SelectItem value="catering">{t.booking.form.serviceOptions.catering}</SelectItem>
                      <SelectItem value="both">{t.booking.form.serviceOptions.both}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <Label htmlFor="budget" className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-blue-900" />
                    {t.booking.form.budget} *
                  </Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t.booking.form.budget} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100k-500k">{t.booking.form.budgetOptions.range1}</SelectItem>
                      <SelectItem value="500k-1m">{t.booking.form.budgetOptions.range2}</SelectItem>
                      <SelectItem value="1m-2m">{t.booking.form.budgetOptions.range3}</SelectItem>
                      <SelectItem value="2m+">{t.booking.form.budgetOptions.range4}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="specialRequests">{t.booking.form.specialRequests}</Label>
                  <Textarea
                    id="specialRequests"
                    rows={4}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder={
                      language === "en"
                        ? "Any specific themes, dietary requirements, or special requests..."
                        : "Thèmes spécifiques, exigences alimentaires ou demandes spéciales..."
                    }
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-950 hover:to-blue-800 text-lg"
                >
                  {isSubmitting ? (
                    t.booking.form.sending
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t.booking.form.submit}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
