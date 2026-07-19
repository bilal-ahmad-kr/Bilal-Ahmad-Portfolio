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
} from "react-icons/si";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
} from "../utils/animations";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500 text-6xl" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500 text-6xl" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-6xl" />,
  },
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400 text-6xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-6xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-6xl" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-white text-6xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-6xl" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-400 text-6xl" />,
  },
  {
    name: "Python",
    icon: <FaPython className="text-yellow-300 text-6xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-600 text-6xl" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-white text-6xl" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-semibold">
            MY SKILLS
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I enjoy building modern web applications using these
            technologies and continuously expanding my technical skills.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-blue-500 transition-all"
            >
              {skill.icon}

              <h3 className="mt-5 text-lg font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;