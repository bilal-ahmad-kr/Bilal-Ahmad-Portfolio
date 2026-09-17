import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";

const skills = [
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#0F172A" },
  { name: "JavaScript", Icon: FaJs, color: "#E9B949" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: FaNodeJs, color: "#5FA04E" },
  { name: "Express.js", Icon: SiExpress, color: "#475569" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Python", Icon: FaPython, color: "#4B8BBE" },
  { name: "Git", Icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", Icon: FaGithub, color: "#0F172A" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white text-slate-900 py-24 px-6">
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
            My Skills
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            Skills &amp; Technologies
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl leading-8">
            Tools and technologies I work with to build modern, responsive
            and scalable web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {skills.map(({ name, Icon, color }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.04 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-blue-300 hover:shadow-md shadow-sm transition-all"
            >
              <Icon size={34} color={color} />

              <h3 className="text-xs sm:text-sm font-medium text-slate-700 text-center">
                {name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
