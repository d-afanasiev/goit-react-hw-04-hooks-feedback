import PropTypes from "prop-types";
import { Component } from "react";
import css from "./Notification.module.css";

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p className={css.text}>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
