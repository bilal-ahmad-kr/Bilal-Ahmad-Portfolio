import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold">
              Bilal<span className="text-blue-500">.</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Software Engineering Student | Full-Stack JavaScript Developer |
              AI Enthusiast passionate about building modern, responsive, and
              scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-blue-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-blue-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#certificates"
                  className="hover:text-blue-400 transition"
                >
                  Certificates
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/bilal-ahmad-kr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/bilal-ahmad-kr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://wa.me/923486158431"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href="mailto:bilalhassan779966@gmail.com"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-500 transition"
              >
                <FaEnvelope size={20} />
              </a>
            </div>

            <p className="text-gray-400 mt-6">📍 Pakistan</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Bilal Ahmad. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm flex items-center gap-2">
            Built with
            <FaHeart className="text-red-500" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
