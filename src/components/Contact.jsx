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

// Fallback variants explicit layout issues se bachne ke liye
const localFadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const localFadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

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
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to send message!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-semibold tracking-wider">
            CONTACT
          </p>
          <h2 className="text-4xl font-bold mt-3">
            Let's Work Together
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to internships, freelance projects, and remote
            opportunities. Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email */}
            <motion.div
              variants={fadeLeft || localFadeLeft}
              whileHover={{ x: 8, scale: 1.02 }}
              className="flex items-center gap-5 bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-blue-500 transition cursor-pointer"
            >
              <FaEnvelope className="text-3xl text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:bilalhassan779966@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition break-all"
                >
                  bilalhassan779966@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Github */}
            <motion.div
              variants={fadeLeft || localFadeLeft}
              whileHover={{ x: 8, scale: 1.02 }}
              className="flex items-center gap-5 bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-blue-500 transition cursor-pointer"
            >
              <FaGithub className="text-3xl text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <a
                  href="https://github.com/bilal-ahmad-kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  github.com/bilal-ahmad-kr
                </a>
              </div>
            </motion.div>

            {/* Linkedin */}
            <motion.div
              variants={fadeLeft || localFadeLeft}
              whileHover={{ x: 8, scale: 1.02 }}
              className="flex items-center gap-5 bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-blue-500 transition cursor-pointer"
            >
              <FaLinkedin className="text-3xl text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/bilal-ahmad-kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  linkedin.com/in/bilal-ahmad-kr
                </a>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              variants={fadeLeft || localFadeLeft}
              whileHover={{ x: 8, scale: 1.02 }}
              className="flex items-start gap-5 bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-green-500 transition"
            >
              <FaWhatsapp className="text-3xl text-green-500 mt-1 flex-shrink-0" />
              <div className="flex flex-col w-full">
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <a
                  href="https://wa.me/923486158431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 mt-1 transition"
                >
                  +92 348 6158431
                </a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/923486158431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-4 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl font-semibold w-fit text-white transition"
                >
                  <FaWhatsapp />
                  Chat on WhatsApp
                </motion.a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={fadeLeft || localFadeLeft}
              whileHover={{ x: 8, scale: 1.02 }}
              className="flex items-center gap-5 bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-blue-500 transition"
            >
              <FaLocationDot className="text-3xl text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">Pakistan</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Container Fix */}
          <div className="w-full block">
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              variants={fadeRight || localFadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6 w-full"
            >
              <div>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-slate-800 p-4 rounded-lg outline-none border border-slate-700 focus:border-blue-500 text-white transition-all"
                />
              </div>

              <div>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-slate-800 p-4 rounded-lg outline-none border border-slate-700 focus:border-blue-500 text-white transition-all"
                />
              </div>

              <div>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full bg-slate-800 p-4 rounded-lg outline-none border border-slate-700 focus:border-blue-500 text-white transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-60 py-4 rounded-lg font-semibold transition shadow-md cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;