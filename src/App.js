import "./App.css";
import PropTypes from "prop-types";
import { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = (feedbacks) => {
    const valuesFeedback = Object.values(feedbacks);
    const totalFeedback = valuesFeedback.reduce((total, feedback) => {
      return (total += feedback);
    }, 0);
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = (feedback) => {
    const goodFeedback = feedback.good;
    const valuesFeedback = Object.values(feedback);
    const totalFeedback = valuesFeedback.reduce((total, feedback) => {
      return (total += feedback);
    }, 0);
    return Math.round((goodFeedback / totalFeedback) * 100);
  };

  onLeaveFeedback = (value) => {
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="feedback">
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

          <Section title="Statistics">
            {this.countTotalFeedback(this.state) === 0 ? (
              <Notification message="No feedback given" />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback(this.state)}
                positivePercentage={this.countPositiveFeedbackPercentage(
                  this.state
                )}
              />
            )}
          </Section>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};

export default App;
