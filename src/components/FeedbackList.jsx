import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FeedbackItem } from "./";
import FeedbackContext from './context/FeedbackContext';

const FeedbackList = () => {

  const { feedback } = useContext(FeedbackContext)

  if(!feedback || feedback.length === 0) return <h2>No Feedback Yet</h2>

  return (
      <div className="feedback-list">
          <AnimatePresence>
          {feedback.map((item) => (
              <motion.div
                key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
              >
                  <FeedbackItem key={item.id} item={item} />
              </motion.div>
          ))}
          </AnimatePresence>
      </div>
  )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.any.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList