import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import projects from "../data/Projects";
import { fadeUp, staggerContainer } from "../utils/animations";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-50 text-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-4 mb-14"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              My Projects
            </h2>

            <p className="text-slate-500 mt-4 max-w-2xl leading-8">
              Here are some of the projects I've built. Each project helped me
              learn, solve real problems, and improve my development skills.
            </p>
          </div>

          <a
            href="https://github.com/bilal-ahmad-kr"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2 transition-colors"
          >
            View All Projects
            <FaArrowRight size={12} />
          </a>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
