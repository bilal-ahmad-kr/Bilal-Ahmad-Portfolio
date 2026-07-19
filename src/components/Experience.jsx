import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer } from "../utils/animations";

const timeline = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    title: "BS Software Engineering",
    company: "The Islamia University of Bahawalpur",
    date: "2024 - Present",
    description:
      "Learning software engineering principles, web development, databases, software architecture, and AI fundamentals.",
  },
  {
    id: 2,
    icon: <FaBriefcase />,
    title: "Frontend / MERN Developer",
    company: "Personal Projects",
    date: "2025 - Present",
    description:
      "Building responsive React applications, dashboards, healthcare systems, and modern web interfaces.",
  },
  {
    id: 3,
    icon: <FaCertificate />,
    title: "Professional Certifications",
    company: "Coursera | IBM | Meta | Microsoft",
    date: "2025 - Present",
    description:
      "Completed multiple industry-recognized certifications in React, AI, Full Stack Development, and Prompt Engineering.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-semibold">
            MY JOURNEY
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Experience & Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative border-l-2 border-blue-500 ml-6"
        >
          {timeline.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeLeft}
              whileHover={{ x: 8 }}
              className="mb-14 ml-10 relative"
            >
              {/* Icon */}
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="absolute -left-[53px] top-1 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg"
              >
                {item.icon}
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-blue-500"
              >
                <span className="text-blue-400 text-sm">
                  {item.date}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <h4 className="text-gray-400 mt-1">
                  {item.company}
                </h4>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.description}
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