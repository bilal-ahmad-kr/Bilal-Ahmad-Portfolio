import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { FaCode, FaDownload } from "react-icons/fa6";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Certificates", id: "certificates" },
  { name: "Contact", id: "contact" },
];

const roles = ["Engineer", "Designer", "Developer"];

const Logo = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <a href="#home" className="flex items-center gap-2 select-none">
      <span className="text-blue-600 text-xl">
        <FaCode />
      </span>

      <motion.span
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xl font-bold tracking-tight text-slate-900"
      >
        Bilal
      </motion.span>

      <span className="relative h-7 overflow-hidden inline-flex items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[roleIndex]}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-xl font-bold tracking-tight text-blue-600 whitespace-nowrap"
          >
            {roles[roleIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </a>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // subtle shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200 shadow-sm"
          : "border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                className={`text-[15px] font-medium transition-colors duration-300 ${
                  active === link.id
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </a>

              {active === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/bilal-ahmad-kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 text-lg transition-colors"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/bilal-ahmad-kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 text-lg transition-colors"
          >
            <FaLinkedin />
          </a>

          <motion.a
            href="/resume/Bilal_Ahmad.pdf"
            download="Bilal_Ahmad.pdf"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors font-medium text-sm flex items-center gap-2 shadow-sm shadow-blue-600/20"
          >
            <FaDownload size={13} />
            Download Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden text-slate-800 text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <ul className="flex flex-col gap-5 p-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <div className="flex items-center gap-5 text-xl mt-2 text-slate-600">
                <a
                  href="https://github.com/bilal-ahmad-kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/bilal-ahmad-kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>

              <a
                href="/resume/Bilal_Ahmad_Resume.pdf"
                download="Bilal_Ahmad_Resume.pdf"
                onClick={() => setMenuOpen(false)}
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-center font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <FaDownload size={14} />
                Download Resume
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
