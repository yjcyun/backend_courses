import { useState } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

const FeedbackPage = ({ feedbackItems }) => {
  const [feedbackData, setFeedbackData] = useState();

  const loadFeedbackHandler = (id) => {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  };

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.key}>
            {item.text}{' '}
            <button onClick={() => loadFeedbackHandler(item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: { feedbackItems: data },
  };
};

export default FeedbackPage;
