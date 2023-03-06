import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [optionGood, setOptionGood] = useState(0);
  const [optionNeutral, setOptionNeutral] = useState(0);
  const [optionBad, setOptionBad] = useState(0);

  const options = {
    good: optionGood,
    neutral: optionNeutral,
    bad: optionBad,
  };

  const LeaveFeedback = option => {
    if (option === 'good') return setOptionGood(prev => prev + 1);
    if (option === 'neutral') return setOptionNeutral(prev => prev + 1);
    if (option === 'bad') return setOptionBad(prev => prev + 1);
  };

  const countTotalFeedback = feedbacks => {
    return Object.values(feedbacks).reduce((acc, item) => acc + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback(options) === 0
      ? 0
      : (options.good / countTotalFeedback(options)) * 100;
  };

  return (
    <>
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(options)}
            onLeaveFeedback={LeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback(options)}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
        <GlobalStyle />
      </Layout>
    </>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   LeaveFeedback = option => {
//     return this.setState({ [option]: this.state[option] + 1 });
//   };

//   countTotalFeedback = feedbacks => {
//     return Object.values(feedbacks).reduce((acc, item) => acc + item, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return this.countTotalFeedback(this.state) === 0
//       ? 0
//       : (this.state.good / this.countTotalFeedback(this.state)) * 100;
//   };

//   render() {
//     return (
//       <>
//         <Layout>
//           <Section title="Please leave feedback">
//             <FeedbackOptions
//               options={Object.keys(this.state)}
//               onLeaveFeedback={this.LeaveFeedback}
//             />
//           </Section>
//           <Section title="Statistics">
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback(this.state)}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           </Section>
//           <GlobalStyle />
//         </Layout>
//       </>
//     );
//   }
// }
