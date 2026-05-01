import { Link } from "react-router";
import { BookOpen, Users, Award, Clock, Home as HomeIcon, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { usePageMeta } from "./ui/usePageMeta";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

export default function Home() {
  usePageMeta(
    "Best Tutoring Center in Adambakkam, Chennai",
    "RADEN Tutoring Hub offers premier offline & online tutoring for Class 1-12 in Adambakkam, Chennai. Specialized in CBSE, State Board, and personalized coaching for academic excellence.",
    "RADEN Tutoring Hub, RADEN Tuition Center, best tutoring Adambakkam, tuition center Chennai, CBSE coaching Chennai, State Board tuition Adambakkam, home tuition Adambakkam, Class 1-12 tuition Chennai, personalized coaching Chennai, evening classes Adambakkam, private tutors Chennai, academic excellence Adambakkam, RADEN education"
  );

  const classes = [
    { name: "Class 1-5", description: "Foundation building for young learners" },
    { name: "Class 6-8", description: "Strengthening core concepts" },
    { name: "Class 9-10", description: "Board exam preparation" },
    { name: "Class 11-12", description: "Advanced learning & competitive exams" },
  ];

  const services = [
    {
      icon: <BookOpen className="h-12 w-12 text-[#D4AF37]" />,
      title: "Offline Classes",
      description: "Interactive classroom sessions with experienced teachers",
    },
    {
      icon: <Globe className="h-12 w-12 text-[#D4AF37]" />,
      title: "Online Classes",
      description: "Flexible learning from the comfort of your home",
    },
    {
      icon: <HomeIcon className="h-12 w-12 text-[#D4AF37]" />,
      title: "Home Tuitions",
      description: "Personalized one-on-one attention at your doorstep",
    },
  ];

  const features = [
    {
      icon: <Users className="h-10 w-10 text-[#D4AF37]" />,
      title: "Experienced Faculty",
      description: "Learn from qualified and dedicated teachers",
    },
    {
      icon: <Award className="h-10 w-10 text-[#D4AF37]" />,
      title: "Proven Results",
      description: "Track record of excellent student performance",
    },
    {
      icon: <Clock className="h-10 w-10 text-[#D4AF37]" />,
      title: "Flexible Timings",
      description: "Batches available for all schedules",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-24 relative overflow-hidden">
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#D4AF37]/10 translate-y-1/2 -translate-x-1/4"
          animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1
              className="text-white mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Welcome to RADEN Tutoring Hub
            </motion.h1>
            <motion.p
              className="mb-2 max-w-2xl mx-auto text-blue-100 font-medium text-lg italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              "Education opens doors, but Quality unlocks success."
            </motion.p>
            <motion.p
              className="mb-8 max-w-2xl mx-auto text-[#D4AF37] font-bold text-xl uppercase tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Quality Education isn't Extra. It's ESSENTIAL.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-[#D4AF37] text-[#1E3A8A] px-10 py-4 rounded-xl font-semibold hover:bg-[#C4A137] transition-colors no-underline shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Enquire for Admission
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classes Offered */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[#1E3A8A] dark:text-white mb-4">Classes We Offer</h2>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive tutoring for all grades</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((cls, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-[#D4AF37] cursor-default"
              >
                <h3 className="text-[#1E3A8A] dark:text-[#D4AF37] mb-2">{cls.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{cls.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[#1E3A8A] dark:text-white mb-4">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-400">Choose the learning mode that suits you best</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-[#1E3A8A] dark:text-[#D4AF37] mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white mb-4">Why Choose RADEN?</h2>
            <p className="text-gray-200">We are committed to your success</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-white mb-2">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[#1E3A8A] dark:text-white mb-4">Our Academy in Action</h2>
            <p className="text-gray-600 dark:text-gray-400">Get a glimpse of our learning environment</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/classroom1.jpeg", alt: "Classroom learning" },
              { src: "/images/classroom13.jpeg", alt: "Modern learning space" },
              { src: "/images/classroom6.jpeg", alt: "Hands-on Mentorship" },
              { src: "/images/classroom5.jpeg", alt: "Group activities" },
            ].map((img, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="aspect-square rounded-xl overflow-hidden shadow-md group"
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/gallery"
              className="inline-block bg-[#1E3A8A] text-white px-8 py-3 rounded-xl hover:bg-[#2563EB] transition-colors no-underline"
            >
              View Full Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#D4AF37] to-[#C4A137]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[#1E3A8A] mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-[#1E3A8A] mb-8">Join hundreds of successful students at RADEN Tutoring Hub</p>
            <Link
              to="/contact"
              className="inline-block bg-[#1E3A8A] text-white px-8 py-3 rounded-xl hover:bg-[#2563EB] transition-colors no-underline font-semibold shadow-lg"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
