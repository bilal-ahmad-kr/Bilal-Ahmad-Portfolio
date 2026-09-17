import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaLocationDot,
} from "react-icons/fa6";

import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
} from "../utils/animations";

const contactItems = [
  {
    Icon: FaEnvelope,
    title: "Email",
    value: "bilalhassan779966@gmail.com",
    href: "mailto:bilalhassan779966@gmail.com",
  },
  {
    Icon: FaGithub,
    title: "GitHub",
    value: "github.com/bilal-ahmad-kr",
    href: "https://github.com/bilal-ahmad-kr",
  },
  {
    Icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/bilal-ahmad-kr",
    href: "https://linkedin.com/in/bilal-ahmad-kr",
  },
  {
    Icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+92 348 6158431",
    href: "https://wa.me/923486158431",
  },
  {
    Icon: FaLocationDot,
    title: "Location",
    value: "Bahawalpur, Pakistan",
    href: null,
  },
];

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_v5i2jpg",
        "template_iytdnaz",
        form.current,
        "zq8azhvpxcwdaOwog"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          toast.error("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-white text-slate-900 py-24 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <p className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            Let's Work Together
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl leading-8">
            I'm always open to internships, freelance projects, and remote
            opportunities. Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactItems.map(({ Icon, title, value, href }) => {
              const Wrapper = href ? motion.a : motion.div;

              return (
                <Wrapper
                  key={title}
                  {...(href
                    ? { href, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  variants={fadeLeft}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md shadow-sm transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Icon size={16} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 text-sm">
                      {title}
                    </h3>
                    <p className="text-slate-500 text-sm mt-0.5 break-all">
                      {value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}

            <motion.a
              variants={fadeLeft}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/923486158431"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold text-white transition-colors shadow-sm"
            >
              <FaWhatsapp size={17} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5 w-full"
          >
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full bg-slate-50 p-3.5 rounded-lg outline-none border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Your email address"
                required
                className="w-full bg-slate-50 p-3.5 rounded-lg outline-none border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
                className="w-full bg-slate-50 p-3.5 rounded-lg outline-none border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 transition-all resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-60 py-3.5 rounded-lg font-semibold transition-colors shadow-md shadow-blue-600/20 cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
