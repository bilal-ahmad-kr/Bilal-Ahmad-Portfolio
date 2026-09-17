import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaCode,
} from "react-icons/fa6";

const quickLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Certificates", id: "certificates" },
  { name: "Contact", id: "contact" },
];

const socials = [
  {
    Icon: FaGithub,
    href: "https://github.com/bilal-ahmad-kr",
    label: "GitHub",
  },
  {
    Icon: FaLinkedin,
    href: "https://linkedin.com/in/bilal-ahmad-kr",
    label: "LinkedIn",
  },
  {
    Icon: FaWhatsapp,
    href: "https://wa.me/923486158431",
    label: "WhatsApp",
  },
  {
    Icon: FaEnvelope,
    href: "mailto:bilalhassan779966@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 text-lg">
                <FaCode />
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                Bilal Ahmad
              </h2>
            </div>

            <p className="text-slate-500 mt-4 leading-7 text-sm max-w-sm">
              Software Engineering Student | Full-Stack JavaScript Developer |
              AI Enthusiast passionate about building modern, responsive, and
              scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-900">Quick Links</h3>

            <ul className="space-y-2.5 text-slate-500 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-900">
              Connect With Me
            </h3>

            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

            <p className="text-slate-500 mt-6 text-sm">
              📍 Bahawalpur, Pakistan
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Bilal Ahmad. All rights reserved.
          </p>

          <p className="text-slate-400 text-sm">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
