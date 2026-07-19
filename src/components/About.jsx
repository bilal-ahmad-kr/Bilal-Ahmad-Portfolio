import {
  FaUserGraduate,
  FaLaptopCode,
  FaCode,
  FaCertificate,
  FaLocationDot,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
} from "../utils/animations";

const stats = [
  { number: "5", title: "Projects" },
  { number: "5", title: "Certificates" },
  { number: "1.5+", title: "Learning Years" },
  { number: "10+", title: "Technologies" },
];

const About = () => {
  return (
    <section id="about" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-semibold">About Me</p>
          <h2 className="text-4xl font-bold mt-3">Building the Future with Code</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-slate-800 rounded-3xl p-8 border border-slate-700"
          >
            <h3 className="text-3xl font-bold mb-6">
              Bilal Ahmad
            </h3>

            <p className="text-gray-300 leading-8">
              I'm a Software Engineering student passionate about building
              modern, responsive, and scalable web applications.

              <br />
              <br />

              I enjoy creating clean user interfaces using React.js,
              Tailwind CSS, JavaScript and continuously improving my
              frontend and backend development skills.
            </p>

            <div className="space-y-6 mt-10">

              <div className="flex items-center gap-4">
                <FaUserGraduate className="text-blue-500 text-2xl" />
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-gray-400">
                    BS Software Engineering
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaLaptopCode className="text-blue-500 text-2xl" />
                <div>
                  <h4 className="font-semibold">
                    Specialization
                  </h4>
                  <p className="text-gray-400">
                    MERN Stack Development
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaCode className="text-blue-500 text-2xl" />
                <div>
                  <h4 className="font-semibold">
                    Technologies
                  </h4>
                  <p className="text-gray-400">
                    HTML • CSS • JavaScript • React • Node.js • Express • MongoDB
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaCertificate className="text-blue-500 text-2xl" />
                <div>
                  <h4 className="font-semibold">
                    Certifications
                  </h4>
                  <p className="text-gray-400">
                    Meta • IBM • Microsoft
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaLocationDot className="text-blue-500 text-2xl" />
                <div>
                  <h4 className="font-semibold">
                    Location
                  </h4>
                  <p className="text-gray-400">
                    Pakistan
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 transition duration-300"
              >
                <h3 className="text-5xl font-bold text-blue-500">
                  {item.number}
                </h3>

                <p className="text-gray-300 mt-4">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;