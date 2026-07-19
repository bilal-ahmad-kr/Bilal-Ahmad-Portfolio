// import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
// import profile from "../assets/images/profile.jpeg";
// import { motion } from "framer-motion";
// import {
//   fadeUp,
//   fadeRight,
//   staggerContainer,
// } from "../utils/animations";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen bg-slate-950 text-white flex items-center"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >

//           <motion.p
//             variants={fadeUp}
//             className="text-blue-500 font-semibold mb-3"
//           >
//             Hi, I'm
//           </motion.p>

//           <motion.h1
//             variants={fadeUp}
//             className="text-5xl md:text-7xl font-bold leading-tight"
//           >
//             Bilal <span className="text-blue-500">Ahmad</span>
//           </motion.h1>

//           <motion.h2
//             variants={fadeUp}
//             className="text-2xl md:text-3xl text-gray-300 mt-6 font-semibold"
//           >
//             MERN Stack Developer
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             className="text-gray-400 mt-6 leading-8 max-w-xl"
//           >
//             Software Engineering student passionate about building beautiful,
//             responsive, and scalable web applications using React.js,
//             Tailwind CSS, JavaScript and modern frontend technologies.
//           </motion.p>

//           <motion.div
//             variants={fadeUp}
//             className="flex flex-wrap gap-5 mt-10"
//           >
//             <motion.a
//               href="#projects"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold flex items-center gap-2"
//             >
//               View Projects
//               <FaArrowRight />
//             </motion.a>

//             <motion.a
//               href="#contact"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-7 py-3 rounded-xl"
//             >
//               Contact Me
//             </motion.a>
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             className="flex gap-5 mt-10"
//           >
//             <motion.a
//               href="https://github.com/bilal-ahmad-kr"
//               target="_blank"
//               rel="noreferrer"
//               whileHover={{
//                 y: -6,
//                 scale: 1.2,
//               }}
//               className="text-3xl"
//             >
//               <FaGithub />
//             </motion.a>

//             <motion.a
//               href="https://linkedin.com/in/bilal-ahmad-kr"
//               target="_blank"
//               rel="noreferrer"
//               whileHover={{
//                 y: -6,
//                 scale: 1.2,
//               }}
//               className="text-3xl"
//             >
//               <FaLinkedin />
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT */}
//         <motion.div
//           variants={fadeRight}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="flex justify-center"
//         >
//           <div className="relative">

//             <motion.div
//               animate={{
//                 scale: [1, 1.1, 1],
//                 opacity: [0.25, 0.4, 0.25],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//               }}
//               className="absolute inset-0 bg-blue-500 rounded-full blur-3xl"
//             />

//             <motion.img
//               src={profile}
//               alt="Bilal Ahmad"
//               whileHover={{
//                 scale: 1.05,
//                 rotate: 1,
//               }}
//               transition={{
//                 duration: 0.4,
//               }}
//               className="relative w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-blue-500 shadow-2xl"
//             />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

import { FaGithub, FaLinkedin, FaArrowRight, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiFiverr } from "react-icons/si";
import profile from "../assets/images/profile.jpeg";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeRight,
  staggerContainer,
} from "../utils/animations";
import useTypewriter from "../utils/useTypewriter";

// roles that type/delete in a loop under your name
const ROLES = [
  "MERN Stack Developer",
  "Frontend Developer",
  "React.js Developer",
];

// three descriptions that cycle the same way
const DESCRIPTIONS = [
  "Software Engineering student passionate about building beautiful, responsive, and scalable web applications using React.js, Tailwind CSS, JavaScript and modern frontend technologies.",
  "MERN Stack Developer skilled in building full-stack apps with MongoDB, Express.js, React and Node.js, focused on writing clean, maintainable code.",
  "Open to remote frontend opportunities, eager to collaborate with international teams and deliver pixel-perfect, performant user interfaces.",
];

// tech stack icons that orbit the profile picture, evenly spaced
const ORBIT_ICONS = [
  { id: "react", Icon: FaReact, color: "#61DAFB" },
  { id: "node", Icon: FaNodeJs, color: "#83CD29" },
  { id: "js", Icon: SiJavascript, color: "#F7DF1E" },
  { id: "mongodb", Icon: SiMongodb, color: "#47A248" },
  { id: "python", Icon: FaPython, color: "#4B8BBE" },
  { id: "fiverr", Icon: SiFiverr, color: "#1DBF73" },
];

const Hero = () => {
  const { text: roleText, paused: rolePaused, togglePause: toggleRole } =
    useTypewriter(ROLES, { typingSpeed: 90, deletingSpeed: 45, pauseTime: 1500 });

  const { text: descText, paused: descPaused, togglePause: toggleDesc } =
    useTypewriter(DESCRIPTIONS, { typingSpeed: 25, deletingSpeed: 12, pauseTime: 2400 });

  const radius = 155; // orbit distance from center — keep icons just outside the photo edge

  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <motion.p
            variants={fadeUp}
            className="text-blue-500 font-semibold mb-3"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Bilal <span className="text-blue-500">Ahmad</span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            onClick={toggleRole}
            title={rolePaused ? "Click to resume" : "Click to pause"}
            className="text-2xl md:text-3xl text-gray-300 mt-6 font-semibold cursor-pointer select-none min-h-[2.5rem]"
          >
            {roleText}
            <span className="text-blue-500 animate-pulse">|</span>
            {rolePaused && (
              <span className="text-sm text-gray-500 ml-2">(paused)</span>
            )}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            onClick={toggleDesc}
            title={descPaused ? "Click to resume" : "Click to pause"}
            className="text-gray-400 mt-6 leading-8 max-w-xl cursor-pointer select-none min-h-[6rem]"
          >
            {descText}
            <span className="text-blue-500 animate-pulse">|</span>
            {descPaused && (
              <span className="text-sm text-gray-500 ml-2 block">(paused)</span>
            )}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-5 mt-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold flex items-center gap-2"
            >
              View Projects
              <FaArrowRight />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-7 py-3 rounded-xl"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex gap-5 mt-10"
          >
            <motion.a
              href="https://github.com/bilal-ahmad-kr"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -6,
                scale: 1.2,
              }}
              className="text-3xl"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/bilal-ahmad-kr"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -6,
                scale: 1.2,
              }}
              className="text-3xl"
            >
              <FaLinkedin />
            </motion.a>
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
          {/* wrapper is intentionally BIGGER than the photo so the icons have
              room to orbit around it instead of hiding underneath it */}
          <div className="relative w-[320px] h-[320px] md:w-[460px] md:h-[460px] flex items-center justify-center">

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.25, 0.4, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute inset-0 bg-blue-500 rounded-full blur-3xl z-0"
            />

            {/* orbiting icon ring — spins forever, icons stay upright.
                z-20 keeps it ABOVE the photo no matter what. */}
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
                    <div className="orbit-icon-counter w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-lg shadow-blue-500/10">
                      <Icon size={20} color={color} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* photo is smaller than the wrapper (z-10, below the icons) so
                there's a visible ring of empty space for the icons to sit in */}
            <motion.img
              src={profile}
              alt="Bilal Ahmad"
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative z-10 w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
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
          animation: orbitSpin 20s linear infinite;
        }
        .orbit-icon-counter {
          animation: orbitSpinReverse 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;