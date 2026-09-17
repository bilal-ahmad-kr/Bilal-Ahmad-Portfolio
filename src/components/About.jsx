import {
  FaUserGraduate,
  FaLaptopCode,
  FaCode,
  FaCertificate,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
} from "../utils/animations";

const stats = [
  { number: "6+", title: "Projects" },
  { number: "4", title: "Certificates" },
  { number: "1.5+", title: "Learning Years" },
  { number: "10+", title: "Technologies" },
];

const highlights = [
  { Icon: FaLaptopCode, text: "Full-Stack Development" },
  { Icon: FaCode, text: "Problem Solving" },
  { Icon: FaCertificate, text: "AI & Prompt Engineering (Learning)" },
];

const details = [
  {
    Icon: FaUserGraduate,
    title: "Education",
    lines: [
      "BS Software Engineering",
      "The Islamia University of Bahawalpur (6th Semester)",
    ],
  },
  {
    Icon: FaLaptopCode,
    title: "Specialization",
    lines: ["MERN Stack Development"],
  },
  {
    Icon: FaCode,
    title: "Technologies",
    lines: ["HTML • CSS • JavaScript • React • Node.js • Express • MongoDB"],
  },
  {
    Icon: FaCertificate,
    title: "Certifications",
    lines: ["Meta • IBM • Microsoft • Dubai Future Foundation"],
  },
  {
    Icon: FaLocationDot,
    title: "Location",
    lines: ["Bahawalpur, Pakistan"],
  },
];

const About = () => {
  return (
    <section id="about" className="bg-slate-50 text-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight leading-snug">
            Passionate About
            <br />
            Building Web Solutions
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left Side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-slate-500 leading-8">
              I'm a Software Engineering student with a strong interest in
              full-stack development, problem solving and modern web
              technologies. I enjoy learning new tools, building real projects,
              and constantly improving my skills.
            </p>

            {/* highlights */}
            <div className="space-y-4 mt-8">
              {highlights.map(({ Icon, text }) => (
                <motion.div
                  key={text}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Icon size={16} />
                  </div>
                  <p className="text-slate-700 font-medium">{text}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 mt-9 border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              More About Me
              <FaArrowRight size={13} />
            </motion.a>

            {/* stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
            >
              {stats.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-xl p-5 text-center border border-slate-200 hover:border-blue-300 shadow-sm transition-colors"
                >
                  <h3 className="text-3xl font-bold text-blue-600">
                    {item.number}
                  </h3>
                  <p className="text-slate-500 text-sm mt-2">{item.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side — detail cards */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {details.map(({ Icon, title, lines }) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-4 bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 shadow-sm transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Icon size={16} />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">{title}</h4>
                  {lines.map((line) => (
                    <p key={line} className="text-slate-500 text-sm mt-1 leading-6">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
