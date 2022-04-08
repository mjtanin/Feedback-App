import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import { Card } from './';

const FeedbackItem = ({ feedback, handleDelete }) => {

  return (
      <div className="feedback-list">
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button onClick={() => handleDelete(feedback.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{feedback.text}</div>
        </Card>
      </div>
  )
}

FeedbackItem.propTypes = {
    feedback: PropTypes.object.isRequired
}

export default FeedbackItem