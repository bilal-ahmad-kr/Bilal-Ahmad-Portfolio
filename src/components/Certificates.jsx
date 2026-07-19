import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import certificates from "../data/certificates";
import { fadeUp, staggerContainer } from "../utils/animations";

const Certificates = () => {
  return (
    <section
      id="certificates"
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
            CERTIFICATIONS
          </p>

          <h2 className="text-4xl font-bold mt-3">
            My Certificates
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications that reflect my continuous learning
            in web development, AI, and modern technologies.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500"
            >
              {/* Certificate Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={certificate.image}
                  alt={certificate.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="p-5">

                <h3 className="text-xl font-bold">
                  {certificate.title}
                </h3>

                <p className="text-blue-400 mt-2">
                  {certificate.provider}
                </p>

                <motion.a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="inline-flex items-center gap-2 mt-5 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition"
                >
                  View Certificate
                  <FaExternalLinkAlt />
                </motion.a>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;