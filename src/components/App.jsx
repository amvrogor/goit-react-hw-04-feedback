import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  LeaveFeedback = option => {
    return this.setState({ [option]: this.state[option] + 1 });
  };

  countTotalFeedback = feedbacks => {
    return Object.values(feedbacks).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback(this.state) === 0
      ? 0
      : (this.state.good / this.countTotalFeedback(this.state)) * 100;
  };

  render() {
    return (
      <>
        <Layout>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.LeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
          <GlobalStyle />
        </Layout>
      </>
    );
  }
}
