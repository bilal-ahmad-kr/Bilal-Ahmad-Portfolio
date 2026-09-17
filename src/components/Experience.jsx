import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer } from "../utils/animations";

const timeline = [
  {
    id: 1,
    Icon: FaGraduationCap,
    title: "BS Software Engineering",
    company: "The Islamia University of Bahawalpur",
    date: "2024 - Present",
    description:
      "Learning software engineering principles, web development, databases, software architecture, and AI fundamentals.",
  },
  {
    id: 2,
    Icon: FaBriefcase,
    title: "Frontend / MERN Developer",
    company: "Personal Projects",
    date: "2025 - Present",
    description:
      "Building responsive React applications, dashboards, healthcare systems, and modern web interfaces.",
  },
  {
    id: 3,
    Icon: FaCertificate,
    title: "Professional Certifications",
    company: "Coursera | IBM | Meta | Microsoft",
    date: "2025 - Present",
    description:
      "Completed multiple industry-recognized certifications in React, AI, Full Stack Development, and Prompt Engineering.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white text-slate-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            My Journey
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            Experience &amp; Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative border-l-2 border-slate-200 ml-5"
        >
          {timeline.map(({ id, Icon, title, company, date, description }) => (
            <motion.div
              key={id}
              variants={fadeLeft}
              className="mb-10 ml-8 relative"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute -left-[49px] top-5 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white ring-4 ring-white"
              >
                <Icon size={16} />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md shadow-sm p-6 transition-all"
              >
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                  {date}
                </span>

                <h3 className="text-xl font-bold mt-3 text-slate-900">
                  {title}
                </h3>

                <h4 className="text-slate-500 text-sm mt-1">{company}</h4>

                <p className="text-slate-500 mt-4 leading-7 text-sm">
                  {description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
