import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, GraduationCap, Sun, Moon, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Close mobile menu and scroll to top on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <header className="bg-[#1E3A8A] text-white sticky top-0 z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 no-underline group">
              <motion.div
                className="flex items-center justify-center"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/logo.png" 
                  alt="RADEN Tutoring Hub Logo" 
                  className="h-14 w-auto object-contain rounded-sm"
                />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-white m-0 text-lg leading-tight group-hover:text-[#D4AF37] transition-colors">RADEN TUTORING HUB</h1>
                <p className="text-[#D4AF37] text-xs m-0">Excellence in Education</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 transition-colors no-underline text-sm font-medium ${
                    isActive(item.path)
                      ? "text-[#D4AF37] border-b-2 border-[#D4AF37]"
                      : "text-white hover:text-[#D4AF37]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Dark Mode Toggle */}
              <motion.button
                onClick={() => setDark(!dark)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="ml-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {dark ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-5 w-5 text-[#D4AF37]" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-5 w-5 text-white" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile buttons */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Toggle dark mode"
              >
                {dark ? (
                  <Sun className="h-5 w-5 text-[#D4AF37]" />
                ) : (
                  <Moon className="h-5 w-5 text-white" />
                )}
              </button>
              <button
                className="text-white p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden overflow-hidden pb-4"
              >
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-3 py-2 no-underline text-sm ${
                      isActive(item.path)
                        ? "text-[#D4AF37] bg-white/10"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1E3A8A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  <img 
                    src="/logo.png" 
                    alt="RADEN Logo" 
                    className="h-12 w-auto object-contain rounded-sm"
                  />
                </div>
                <h3 className="text-[#D4AF37] m-0">RADEN TUTORING HUB</h3>
              </div>
              <p className="text-sm text-gray-300">Education opens doors, but Quality unlocks success. Quality Education isn't Extra, it's Essential.</p>
            </div>
            <div>
              <h4 className="text-[#D4AF37] mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-sm text-gray-300 hover:text-[#D4AF37] no-underline transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[#D4AF37] mb-4">Contact Info</h4>
              <p className="text-sm text-gray-300">📞 +91 7358079633 | 044-46364458</p>
              <p className="text-sm text-gray-300 mt-1 flex items-center gap-2">
                <Instagram className="h-4 w-4 text-[#D4AF37]" />
                <a 
                  href="https://www.instagram.com/radentutoringhub?igsh=MXN1OGMyYXFrM3MwYw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#D4AF37] no-underline transition-colors"
                >
                  Instagram: @radentutoringhub
                </a>
              </p>
              <p className="text-sm text-gray-300 mt-1">📍 #18, First Floor, Surendra Nagar 4th Street, Medavakkam Main Road, Adambakkam, Chennai-600088</p>
              <p className="text-sm text-gray-300 mt-1">🕐 Mon–Sat: 4 PM–9 PM | Sun: Holiday</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} RADEN Tutoring Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
