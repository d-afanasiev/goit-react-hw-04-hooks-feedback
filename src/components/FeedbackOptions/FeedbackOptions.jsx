import PropTypes from "prop-types";
import { Component } from "react";
import css from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
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
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

export default FeedbackOptions;
