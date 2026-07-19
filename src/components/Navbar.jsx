import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Certificates", id: "certificates" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white tracking-wide"
        >
          Bilal
          <span className="text-blue-500"> Ahmad</span>
          <span className="text-pink-400"> Developer </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-gray-300 hover:text-blue-500 transition duration-300 font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="https://github.com/bilal-ahmad-kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/bilal-ahmad-kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="/resume/Bilal_Ahmad_Resume.pdf"
            download="Bilal_Ahmad_Resume.pdf"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition duration-300 font-medium"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col gap-5 p-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-blue-500 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-2xl mt-2">
              <a
                href="https://github.com/bilal-ahmad-kr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/bilal-ahmad-kr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Resume Button */}
            <a
              href="/resume/Bilal_Ahmad_Resume.pdf"
              download="Bilal_Ahmad_Resume.pdf"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-center font-semibold transition duration-300"
            >
              Download Resume
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;