import { Phone, MapPin, Mail, Clock, MessageSquare, Send, User, BookOpen, ChevronDown, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { usePageMeta } from "./ui/usePageMeta";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type FormData = {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  grade: string;
  subjects: string;
  mode: string;
  message: string;
};

const PHONE = "7358079633";
const ADDRESS = "#18, First Floor, Surendra Nagar 4th Street, Medavakkam Main Road, Adambakkam, Chennai-600088, Tamil Nadu";
const LANDLINE = "044-46364458";
const LANDMARK = "Near Surendra Nagar Bus Stop";
const EMAIL = "radentutoringhub@gmail.com";
const INSTAGRAM = "https://www.instagram.com/radentutoringhub?igsh=MXN1OGMyYXFrM3MwYw==";

const timings = [
  { day: "Monday", time: "4:00 pm – 9:00 pm" },
  { day: "Tuesday", time: "4:00 pm – 9:00 pm" },
  { day: "Wednesday", time: "4:00 pm – 9:00 pm" },
  { day: "Thursday", time: "4:00 pm – 9:00 pm" },
  { day: "Friday", time: "4:00 pm – 9:00 pm" },
  { day: "Saturday", time: "4:00 pm – 9:00 pm" },
  { day: "Sunday", time: "Holiday" },
];

const todayIndex = new Date().getDay(); // 0=Sun,1=Mon,...,6=Sat
const dayOrder = [1, 2, 3, 4, 5, 6, 0]; // Mon-Sun indices

const faqs = [
  {
    q: "What classes do you offer?",
    a: "We offer comprehensive tutoring for Class 1 to Class 12, covering all major subjects for board exam preparation.",
  },
  {
    q: "Do you provide online classes?",
    a: "Yes, we offer offline classes, online classes, and home tuitions based on your preference and convenience.",
  },
  {
    q: "What are the batch sizes?",
    a: "We maintain small batch sizes to ensure personalized attention and effective learning for each student.",
  },
  {
    q: "How can I enroll my child?",
    a: "Fill out our admission enquiry form on this page, or contact us directly via phone or WhatsApp. Our team will guide you through the enrollment process.",
  },
  {
    q: "What are your timings?",
    a: "We are open Monday to Saturday: 4:00 pm – 9:00 pm. Sunday is a Holiday.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Contact() {
  usePageMeta(
    "Admission Enquiry | Contact Us - RADEN Tutoring Hub",
    "Start your child's journey to success. Contact RADEN Tutoring Hub in Adambakkam, Chennai for admissions, home tuition, or online classes. Call +91 7358079633.",
    "enrollment enquiry Chennai, contact RADEN Tutoring, tuition center Adambakkam address, home tuition booking Chennai, admission process Adambakkam, RADEN tutoring phone number, tutoring services enquiry, Chennai tuition location"
  );

  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    defaultValues: {
      studentName: "",
      parentName: "",
      phone: "",
      email: "",
      grade: "",
      subjects: "",
      mode: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const text = `*New Admission Enquiry – RADEN Tutoring Hub*\n\nStudent: ${data.studentName}\nParent: ${data.parentName}\nPhone: ${data.phone}\nEmail: ${data.email}\nGrade: ${data.grade}\nSubjects: ${data.subjects}\nMode: ${data.mode}\nMessage: ${data.message}`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
    form.reset();
  };

  const handleWhatsApp = () => {
    const message = "Hello, I would like to enquire about admission at RADEN Tutoring Hub.";
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank");
  };

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
            <h1 className="text-white mb-4">Contact Us</h1>
            <p className="max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to us for admission enquiries,
              course information, or any other assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {[
              {
                icon: <Phone className="h-8 w-8 text-[#D4AF37]" />,
                title: "Call Us",
                details: `+91 ${PHONE} | ${LANDLINE}`,
                subdetails: "Mobile and Landline available",
              },
              {
                icon: <MapPin className="h-8 w-8 text-[#D4AF37]" />,
                title: "Address",
                details: ADDRESS,
                subdetails: `Landmark: ${LANDMARK}`,
              },
              {
                icon: <Instagram className="h-8 w-8 text-[#D4AF37]" />,
                title: "Instagram",
                details: "@radentutoringhub",
                subdetails: "Follow us for latest updates",
                link: INSTAGRAM
              },
              {
                icon: <Mail className="h-8 w-8 text-[#D4AF37]" />,
                title: "Email",
                details: EMAIL,
                subdetails: "We'll respond within 24 hours",
              },
              {
                icon: <Clock className="h-8 w-8 text-[#D4AF37]" />,
                title: "Office Hours",
                details: "Mon–Sat: 4:00 pm – 9:00 pm",
                subdetails: "Sunday: Holiday",
              },
            ].map((info, i) => (
              <motion.a
                key={i}
                href={"link" in info ? info.link : undefined}
                target={"link" in info ? "_blank" : undefined}
                rel={"link" in info ? "noopener noreferrer" : undefined}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center border-t-4 border-[#D4AF37] no-underline block ${"link" in info ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-[#1E3A8A] dark:text-[#D4AF37] mb-2">{info.title}</h3>
                <p className="text-gray-800 dark:text-gray-200 mb-1 text-sm">{info.details}</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">{info.subdetails}</p>
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enquiry Form */}
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#1E3A8A] dark:text-[#D4AF37] mb-2">Admission Enquiry</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                Fill out the form below and we'll contact you via WhatsApp.
              </p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-green-700 text-sm"
                >
                  ✅ Your enquiry has been sent! We'll reach out soon.
                </motion.div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="studentName"
                      rules={{ 
                        required: "Student name is required",
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: "Only letters and spaces are allowed"
                        }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter student name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="parentName"
                      rules={{ 
                        required: "Parent name is required",
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: "Only letters and spaces are allowed"
                        }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parent Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter parent name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      rules={{ 
                        required: "Phone is required",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Phone number must be exactly 10 digits"
                        }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="10-digit number" {...field} maxLength={10} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="grade"
                      rules={{ required: "Grade is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Class / Grade *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select grade" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {["1","2","3","4","5","6","7","8","9","10","11","12"].map(g => (
                                <SelectItem key={g} value={`Class ${g}`}>Class {g}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mode"
                      rules={{ required: "Mode is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Learning Mode *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select mode" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Offline Classes">Offline Classes</SelectItem>
                              <SelectItem value="Online Classes">Online Classes</SelectItem>
                              <SelectItem value="Home Tuition">Home Tuition</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subjects"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subjects of Interest</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Maths, Science, English" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any specific requirements or questions..."
                            className="resize-none"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#1E3A8A] hover:bg-[#2563EB] text-white flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Enquiry via WhatsApp
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              {/* Quick Contact */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-[#1E3A8A] dark:text-[#D4AF37] mb-6">Quick Contact</h2>
                <div className="space-y-4">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20BD5A] transition-colors flex items-center justify-center gap-3"
                  >
                    <MessageSquare className="h-5 w-5" />
                    Contact via WhatsApp
                  </button>
                  <a
                    href={`tel:+91${PHONE}`}
                    className="w-full bg-[#D4AF37] text-[#1E3A8A] px-6 py-3 rounded-lg hover:bg-[#C4A137] transition-colors flex items-center justify-center gap-3 no-underline"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now: +91 {PHONE}
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-[#1E3A8A] dark:text-[#D4AF37] mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#D4AF37]" /> Office Timings
                </h3>
                <div className="space-y-2">
                  {timings.map((t, i) => {
                    const isToday = dayOrder[i] === todayIndex;
                    return (
                      <div
                        key={t.day}
                        className={`flex justify-between text-sm py-1.5 px-2 rounded ${isToday ? "bg-[#D4AF37]/20 font-semibold" : ""}`}
                      >
                        <span className={`${isToday ? "text-[#1E3A8A] dark:text-[#D4AF37]" : "text-gray-700 dark:text-gray-300"}`}>
                          {t.day} {isToday && <span className="text-xs text-[#D4AF37]">(Today)</span>}
                        </span>
                        <span className={t.time === "Closed" ? "text-red-500" : "text-gray-600 dark:text-gray-400"}>
                          {t.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-[#1E3A8A] dark:text-[#D4AF37] mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#D4AF37]" /> Find Us
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    title="RADEN Tutoring Hub Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d80.2015641!3d12.9863319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzEwLjgiTiA4MMKwMTInMDUuNiJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/place/12%C2%B059'10.8%22N+80%C2%B012'05.6%22E/@12.9863319,80.2015641,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm text-[#1E3A8A] dark:text-[#D4AF37] hover:underline no-underline"
                >
                  <MapPin className="h-4 w-4" /> Open in Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ with Accordion */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[#1E3A8A] dark:text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Everything you need to know</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 px-2"
                >
                  <AccordionTrigger className="text-[#1E3A8A] dark:text-[#D4AF37] hover:no-underline text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
