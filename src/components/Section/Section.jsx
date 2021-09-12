import PropTypes from "prop-types";
import css from "./Section.module.css";

export default function Section({ title, children }) {
  return (
    <section>
      <h1 className={css.titleFeedback}>{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
