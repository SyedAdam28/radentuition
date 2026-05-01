import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { usePageMeta } from "./ui/usePageMeta";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const categories = [
  { id: "all", name: "All Photos" },
  { id: "classroom", name: "Classroom Learning" },
  { id: "meetings", name: "Parent Meetings" },
  { id: "activities", name: "Fun Activities" },
  { id: "achievements", name: "Achievements" },
];

const galleryItems = [
  {
    category: "classroom",
    src: "/images/classroom1.jpeg",
    alt: "Tutor providing individual attention to a student",
    title: "One-on-One Tutoring",
  },
  {
    category: "classroom",
    src: "/images/classroom3.jpeg",
    alt: "Large group of happy students in the classroom",
    title: "Group Learning Session",
  },
  {
    category: "classroom",
    src: "/images/classroom4.jpeg",
    alt: "Teacher explaining concepts on the whiteboard",
    title: "Expert Whiteboard Sessions",
  },
  {
    category: "classroom",
    src: "/images/classroom5.jpeg",
    alt: "Student focused on learning and creative work",
    title: "Creative Learning Sessions",
  },
  {
    category: "classroom",
    src: "/images/classroom6.jpeg",
    alt: "Teacher assisting students with their work",
    title: "Hands-on Mentorship",
  },
  {
    category: "classroom",
    src: "/images/classroom7.jpeg",
    alt: "Students actively participating in a lesson",
    title: "Student Engagement",
  },
  {
    category: "classroom",
    src: "/images/classroom9.jpeg",
    alt: "Students celebrating success at RADEN Tutoring Hub",
    title: "Student Success Moments",
  },
  {
    category: "classroom",
    src: "/images/classroom10.jpeg",
    alt: "Focused student working in the classroom",
    title: "Productive Study Environment",
  },
  {
    category: "activities",
    src: "/images/funactivities1.jpeg",
    alt: "Students enjoying fun activities at RADEN",
    title: "Fun Activity Session",
  },
  {
    category: "activities",
    src: "/images/funactivities2.jpeg",
    alt: "Exciting group activities at RADEN Tutoring Hub",
    title: "Group Fun Activities",
  },
  {
    category: "activities",
    src: "/images/funactivities3.jpeg",
    alt: "Creative fun activities with students",
    title: "Creative Play & Learn",
  },
  {
    category: "activities",
    src: "/images/funactivities4.jpeg",
    alt: "Students participating in engaging activities",
    title: "Engaging Activities",
  },
  {
    category: "achievements",
    src: "/images/achivements1.jpeg",
    alt: "Student with trophy at RADEN Tutoring Hub",
    title: "Trophy of Excellence",
  },
  {
    category: "achievements",
    src: "/images/achivements2.jpeg",
    alt: "Group success at RADEN Tutoring Hub",
    title: "Success Stories",
  },
  {
    category: "achievements",
    src: "/images/achivements3.jpeg",
    alt: "Achievement certificates at RADEN",
    title: "Certificate of Achievement",
  },
  {
    category: "achievements",
    src: "/images/achivements4.jpeg",
    alt: "Student achievement celebration",
    title: "Celebrating Success",
  },
  {
    category: "achievements",
    src: "/images/achivements5.jpeg",
    alt: "Top performer at RADEN Tutoring Hub",
    title: "Academic Top Performer",
  },
  {
    category: "achievements",
    src: "/images/achivements6.jpeg",
    alt: "Students with medals and certificates",
    title: "Medal of Excellence",
  },
  {
    category: "achievements",
    src: "/images/achivements7.jpeg",
    alt: "Proud student moment at RADEN",
    title: "Proud Achievement",
  },
  {
    category: "achievements",
    src: "/images/achivements8.jpeg",
    alt: "Student academic success celebration",
    title: "Success Milestone",
  },
  {
    category: "meetings",
    src: "/images/classroom2.jpeg",
    alt: "Parent-teacher consultation at RADEN Tutoring Hub",
    title: "Parent-Teacher Meeting",
  },
  {
    category: "meetings",
    src: "/images/classroom8.jpeg",
    alt: "Interaction between teacher and parent regarding student progress",
    title: "Progress Discussion",
  },
  {
    category: "classroom",
    src: "/images/classroom11.jpeg",
    alt: "Exterior view of RADEN Tutoring Hub academy",
    title: "Academy Exterior",
  },
  {
    category: "classroom",
    src: "/images/classroom12.jpeg",
    alt: "Entrance view of RADEN Tutoring Hub academy",
    title: "Academy Entrance",
  },
  {
    category: "classroom",
    src: "/images/classroom13.jpeg",
    alt: "Interactive classroom learning environment",
    title: "Modern Learning Space",
  },
];

export default function Gallery() {
  usePageMeta(
    "Campus & Students Gallery | RADEN Tutoring Hub",
    "Glimpse into the vibrant learning environment at RADEN Tutoring Hub. Explore photos of our modern classrooms, fun activities, and student achievements in Adambakkam.",
    "tuition center photos, modern classroom Chennai, student activities Adambakkam, classroom infrastructure Chennai, RADEN gallery images, student success photos, learning environment Adambakkam, campus tour RADEN, achievement wall Chennai"
  );

  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white mb-4">Our Gallery</h1>
            <p className="max-w-3xl mx-auto">
              Explore our vibrant learning environment, student activities, and memorable moments at RADEN Tutoring Hub
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-[#1E3A8A] dark:text-white text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Highlights
          </motion.h2>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {galleryItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md group relative">
                    <ImageWithFallback
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>

      {/* Filtered Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-[#1E3A8A] text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl cursor-pointer"
                  onClick={() => setLightbox(galleryItems.indexOf(item))}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-white m-0 text-base">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">No photos available in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].alt}
                className="w-full object-contain max-h-[80vh]"
              />
              <div className="bg-[#1E3A8A] text-white p-4 text-center">
                <p className="text-[#D4AF37] font-medium">{galleryItems[lightbox].title}</p>
                <button
                  onClick={() => setLightbox(null)}
                  className="mt-2 text-sm text-white/70 hover:text-white"
                >
                  ✕ Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
}
