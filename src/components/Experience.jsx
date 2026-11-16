import { motion } from "framer-motion";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Experience.css";

export default function Experience() {
  const { experience } = PortfolioContent;

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="experience-header"
        >
          <span className="section-tag">{experience.tag}</span>
          <h2 className="section-title">
            {experience.title}{" "}
            <span className="highlight">{experience.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{experience.description}</p>
        </motion.div>

        <div className="experience-timeline">
          {experience.roles.map((role, index) => (
            <motion.article
              key={role.id}
              className="role-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="role-rail" aria-hidden="true">
                <span className="role-dot" />
              </div>
              <div className="role-body">
                <div className="role-top">
                  <p className="role-period">{role.period}</p>
                  <h3 className="role-title">{role.role}</h3>
                  <p className="role-org">
                    {role.org}
                    <span className="role-place">{role.place}</span>
                  </p>
                </div>
                <ul className="role-points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="experience-notes">
          {experience.notes.map((note, index) => (
            <motion.article
              key={note.title}
              className="note-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <p className="note-meta">{note.meta}</p>
              <h3 className="note-title">{note.title}</h3>
              <p className="note-body">{note.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
