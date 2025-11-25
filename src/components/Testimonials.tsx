import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Marie Nkeng",
      event: "Wedding in Douala",
      rating: 5,
      text: "Absolutely magical! They transformed our wedding venue into a fairytale. The decoration was stunning and the food was exceptional. Our guests are still talking about it!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    },
    {
      name: "Jean-Paul Kamga",
      event: "Corporate Gala",
      rating: 5,
      text: "Professional service from start to finish. They understood our corporate branding and created an elegant atmosphere. The catering was top-notch with both local and international cuisine.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
    },
    {
      name: "Aminata Diallo",
      event: "Birthday Party",
      rating: 5,
      text: "I wanted something special for my 30th birthday and they delivered beyond my expectations! The décor was Instagram-worthy and the food was delicious. Highly recommend!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aminata",
    },
    {
      name: "David Mbah",
      event: "Anniversary Celebration",
      rating: 5,
      text: "Perfect service for our 25th anniversary. They paid attention to every detail and the romantic setup was exactly what we envisioned. Thank you for making our day special!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    {
      name: "Françoise Ndongo",
      event: "Baby Shower",
      rating: 5,
      text: "Beautiful baby shower decoration in soft pink and gold. The team was so professional and the catering menu was perfect for our guests. Worth every franc!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Francoise",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">{t.testimonials.title}</h2>
          <p className="text-blue-900 text-xl">{t.testimonials.subtitle}</p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-1 h-full"
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="w-10 h-10 text-amber-600 mb-4 opacity-50" />
                      
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <p className="text-gray-700 mb-6 flex-grow italic">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-4 mt-auto">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full bg-gray-100"
                        />
                        <div>
                          <p className="text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.event}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl text-blue-900 mb-2">500+</div>
            <div className="text-gray-600">Events Organized</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-blue-900 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-blue-900 mb-2">50+</div>
            <div className="text-gray-600">Professional Staff</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
