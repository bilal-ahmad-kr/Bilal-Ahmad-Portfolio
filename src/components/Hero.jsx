import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
import {
  FaCode,
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
  FaLocationDot,
} from "react-icons/fa6";
import profile from "../assets/images/profile.jpeg";
import { motion } from "framer-motion";
import { fadeUp, fadeRight, staggerContainer } from "../utils/animations";
import useTypewriter from "../utils/useTypewriter";

// roles that type/delete in a loop under the name
const ROLES = [
  "Full-Stack Developer | Software Engineering Student",
  "MERN Stack Developer",
  "React.js & Next.js Developer",
];

// three descriptions that cycle the same way
const DESCRIPTIONS = [
  "I build modern, scalable web applications using the MERN stack and love turning ideas into real-world solutions. Currently pursuing my BS Software Engineering at The Islamia University of Bahawalpur.",
  "Skilled in building full-stack apps with MongoDB, Express.js, React and Node.js, focused on writing clean, maintainable and well-structured code.",
  "Open to remote frontend opportunities, eager to collaborate with international teams and deliver pixel-perfect, performant user interfaces.",
];

// tech stack icons that orbit the profile picture, evenly spaced
const ORBIT_ICONS = [
  { id: "react", Icon: FaReact, color: "#61DAFB" },
  { id: "node", Icon: FaNodeJs, color: "#83CD29" },
  { id: "js", Icon: SiJavascript, color: "#E9B949" },
  { id: "mongodb", Icon: SiMongodb, color: "#47A248" },
  { id: "python", Icon: FaPython, color: "#4B8BBE" },
  { id: "tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
];

const STATS = [
  { Icon: FaBriefcase, value: "6+", label: "Projects Completed" },
  { Icon: FaGraduationCap, value: "Ongoing", label: "BS Software Engineering" },
  { Icon: FaLocationDot, value: "Bahawalpur", label: "Pakistan" },
];

const Hero = () => {
  const { text: roleText, paused: rolePaused, togglePause: toggleRole } =
    useTypewriter(ROLES, { typingSpeed: 55, deletingSpeed: 25, pauseTime: 1800 });

  const { text: descText, paused: descPaused, togglePause: toggleDesc } =
    useTypewriter(DESCRIPTIONS, { typingSpeed: 22, deletingSpeed: 10, pauseTime: 2600 });

  const radius = 165; // orbit distance from center

  return (
    <section
      id="home"
      className="min-h-screen bg-white text-slate-900 flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          >
            <FaCode size={13} />
            Full-Stack Developer
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-slate-900"
          >
            Hi, I'm Bilal Ahmad
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            onClick={toggleRole}
            title={rolePaused ? "Click to resume" : "Click to pause"}
            className="text-xl md:text-3xl text-slate-700 mt-5 font-semibold cursor-pointer select-none min-h-[4.5rem] md:min-h-[5rem] leading-snug"
          >
            {roleText}
            <span className="text-blue-600 animate-pulse">|</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            onClick={toggleDesc}
            title={descPaused ? "Click to resume" : "Click to pause"}
            className="text-slate-500 mt-5 leading-8 max-w-xl cursor-pointer select-none min-h-[8rem]"
          >
            {descText}
            <span className="text-blue-600 animate-pulse">|</span>
          </motion.p>

          {/* buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-md shadow-blue-600/20 transition-colors"
            >
              View My Projects
              <FaArrowRight size={14} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors"
            >
              Contact Me
              <FaEnvelope size={14} />
            </motion.a>
          </motion.div>

          {/* social */}
          <motion.div variants={fadeUp} className="flex gap-4 mt-8">
            <motion.a
              href="https://github.com/bilal-ahmad-kr"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 text-lg transition-colors"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/bilal-ahmad-kr"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 text-lg transition-colors"
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>

          {/* stats row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-slate-200"
          >
            {STATS.map(({ Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm leading-tight">
                    {value}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          {/* wrapper is bigger than the photo so icons orbit around it */}
          <div className="relative w-[320px] h-[320px] md:w-[460px] md:h-[460px] flex items-center justify-center">

            {/* soft light-blue glow behind the photo */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.5, 0.75, 0.5],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-8 bg-blue-100 rounded-full blur-3xl z-0"
            />

            {/* dashed orbit guide ring */}
            <div
              className="absolute rounded-full border border-dashed border-slate-200 z-0"
              style={{ width: radius * 2, height: radius * 2 }}
            />

            {/* orbiting icon ring — spins forever, icons stay upright */}
            <div className="absolute inset-0 orbit-ring z-20">
              {ORBIT_ICONS.map(({ id, Icon, color }, i) => {
                const angle = (360 / ORBIT_ICONS.length) * i;
                return (
                  <div
                    key={id}
                    className="absolute top-1/2 left-1/2 -mt-5 -ml-5"
                    style={{
                      transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div className="orbit-icon-counter w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-md shadow-slate-900/5">
                      <Icon size={21} color={color} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* photo sits below the icons */}
            <motion.img
              src={profile}
              alt="Bilal Ahmad"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-xl shadow-slate-900/10"
            />
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitSpinReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .orbit-ring {
          animation: orbitSpin 22s linear infinite;
        }
        .orbit-icon-counter {
          animation: orbitSpinReverse 22s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
