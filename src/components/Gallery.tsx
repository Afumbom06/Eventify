import { useState } from "react";
import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import eventImage from "figma:asset/54a41a03b940218db72252ff660cd44ad9f490d6.png";
import { X } from "lucide-react";

type GalleryCategory = "all" | "decor" | "catering" | "events";

export function Gallery() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const galleryItems = [
    {
      url: eventImage,
      category: "decor" as const,
    },
    {
      url: eventImage,
      category: "catering" as const,
    },
    {
      url: eventImage,
      category: "decor" as const,
    },
    {
      url: eventImage,
      category: "events" as const,
    },
    {
      url: eventImage,
      category: "decor" as const,
    },
    {
      url: eventImage,
      category: "catering" as const,
    },
    {
      url: eventImage,
      category: "decor" as const,
    },
    {
      url: eventImage,
      category: "events" as const,
    },
    {
      url: eventImage,
      category: "catering" as const,
    },
  ];

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: "all", label: t.gallery.filter.all },
    { id: "decor", label: t.gallery.filter.decor },
    { id: "catering", label: t.gallery.filter.catering },
    { id: "events", label: t.gallery.filter.events },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 mb-4">{t.gallery.title}</h2>
          <p className="text-blue-900 text-xl mb-8">{t.gallery.subtitle}</p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-950 hover:to-blue-800"
                    : ""
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Masonry columnsCount={3} gutter="1rem">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setLightboxImage(item.url)}
              >
                <img
                  src={item.url}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white capitalize">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightboxImage}
              alt="Gallery preview"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
