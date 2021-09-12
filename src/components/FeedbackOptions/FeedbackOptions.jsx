import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const keyObject = Object.keys(options);
  return (
    <div className={css.wrapperButtons}>
      {keyObject.map((nameButton, key) => (
        <button
          key={key}
          type="submit"
          onClick={() => onLeaveFeedback(nameButton)}
        >
          {nameButton}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
