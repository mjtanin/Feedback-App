import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FeedbackItem } from "./";

const FeedbackList = ({ feedback, handleDelete }) => {

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
                  <FeedbackItem key={item.id} feedback={item} handleDelete={handleDelete} />
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