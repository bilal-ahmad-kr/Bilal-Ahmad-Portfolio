import { FaArrowUpRightFromSquare, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import certificates from "../data/certificates";
import { fadeUp, staggerContainer } from "../utils/animations";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="bg-slate-50 text-slate-900 py-24 px-6"
    >
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
              Certificates
            </h2>

            <p className="text-slate-500 mt-4 max-w-2xl leading-8">
              Professional certifications I've earned to build my skills and
              credibility.
            </p>
          </div>

          <a
            href="https://linkedin.com/in/bilal-ahmad-kr"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2 transition-colors"
          >
            View All Certificates
            <FaArrowRight size={12} />
          </a>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {certificates.map((certificate) => (
            <motion.a
              key={certificate.id}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md shadow-sm p-5 flex flex-col gap-4 transition-all group"
            >
              <div className="flex items-start justify-between gap-3">
                <img
                  src={certificate.image}
                  alt={certificate.provider}
                  className="h-9 w-auto max-w-[110px] object-contain"
                />

                <FaArrowUpRightFromSquare
                  size={13}
                  className="text-slate-300 group-hover:text-blue-600 transition-colors shrink-0 mt-1"
                />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 text-sm leading-snug">
                  {certificate.title}
                </h3>

                <p className="text-slate-500 text-xs mt-1.5">
                  {certificate.provider}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;
