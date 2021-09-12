import PropTypes from "prop-types";
import { Component } from "react";
import css from "./Section.module.css";

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h1 className={css.titleFeedback}>{title}</h1>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
