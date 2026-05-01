import { Target, Eye, Heart, Users, Award, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { usePageMeta } from "./ui/usePageMeta";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function About() {
  usePageMeta(
    "Our Mission & Vision | Top Quality Education in Chennai",
    "Discover the story of RADEN Tutoring Hub. Our expert faculty and student-centered approach make us the preferred choice for parents in Chennai. Learn about our vision for excellence.",
    "experienced tutors Chennai, teacher-student ratio, educational vision Chennai, tutor profiles Adambakkam, RADEN Tutoring faculty, academic mentorship Chennai, holistic education Adambakkam, professional coaching Chennai, RADEN Tutoring Hub history"
  );

  const values = [
    {
      icon: <Heart className="h-10 w-10 text-[#D4AF37]" />,
      title: "Student-Centered",
      description: "We prioritize each student's unique learning needs and goals",
    },
    {
      icon: <Award className="h-10 w-10 text-[#D4AF37]" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality education",
    },
    {
      icon: <Users className="h-10 w-10 text-[#D4AF37]" />,
      title: "Community",
      description: "Building a supportive learning environment for all",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-[#D4AF37]" />,
      title: "Innovation",
      description: "Using modern teaching methods and technology",
    },
  ];

  const achievements = [
    { number: "100+", label: "Students Enrolled" },
    { number: "97%", label: "Success Rate" },
    { number: "10+", label: "Expert Teachers" },
    { number: "5+", label: "Years of Excellence" },
  ];

  const differentiators = [
    {
      title: "Personalized Attention",
      description: "Small batch sizes ensure every student receives individual attention and customized learning plans.",
    },
    {
      title: "Experienced Faculty",
      description: "Our teachers are highly qualified, experienced, and passionate about student success.",
    },
    {
      title: "Regular Assessments",
      description: "Periodic tests and feedback help track progress and identify areas for improvement.",
    },
    {
      title: "Parent Engagement",
      description: "Regular parent-teacher meetings keep families informed about student progress.",
    },
  ];

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
            <h1 className="text-white mb-4">About RADEN Tutoring Hub</h1>
              "Education opens doors, but Quality unlocks success." Quality Education isn't Extra, it's Essential.
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border-t-4 border-[#D4AF37]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1E3A8A] p-3 rounded-lg">
                  <Eye className="h-8 w-8 text-[#D4AF37]" />
                </div>
                <h2 className="text-[#1E3A8A] dark:text-[#D4AF37] m-0">Our Vision</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                To empower students with strong academic knowledge and confidence for their future. We envision a world where every student has access to quality education that nurtures their potential and prepares them for success in all aspects of life.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border-t-4 border-[#D4AF37]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1E3A8A] p-3 rounded-lg">
                  <Target className="h-8 w-8 text-[#D4AF37]" />
                </div>
                <h2 className="text-[#1E3A8A] dark:text-[#D4AF37] m-0">Our Mission</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                To provide quality tutoring through personalized learning, experienced teachers, and supportive classroom environments. We are committed to helping each student reach their full potential through innovative teaching methods and dedicated support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#1E3A8A] dark:text-white mb-4">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-400">The principles that guide everything we do</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-[#1E3A8A] dark:text-[#D4AF37] mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-4">Our Achievements</h2>
            <p className="text-gray-200">Numbers that speak for our commitment to excellence</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  className="text-[#D4AF37] text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                >
                  {achievement.number}
                </motion.div>
                <p className="text-gray-200 text-sm">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#1E3A8A] dark:text-white mb-4">What Makes Us Different</h2>
            <p className="text-gray-600 dark:text-gray-400">Why parents and students trust RADEN Tutoring Hub</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md border-l-4 border-[#D4AF37]"
              >
                <h3 className="text-[#1E3A8A] dark:text-[#D4AF37] mb-3">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
