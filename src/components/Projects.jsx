import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import projects from "../data/Projects";
import { fadeUp, staggerContainer } from "../utils/animations";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-6"
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
            My Projects
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills in building
            responsive, modern, and user-focused web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500"
            >

              {/* Project Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-56 object-cover"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                {/* GitHub Button */}
                <div className="mt-6">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="inline-flex items-center gap-2 bg-slate-700 hover:bg-blue-600 px-5 py-3 rounded-lg font-medium transition"
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;