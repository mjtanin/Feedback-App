import { useState } from 'react';
import { FeedbackList, FeedbackStats, Header } from './components';
import FeedbackData from "./data/FeedbackData";

const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = id => {
        if(window.confirm('Are you sure you want to delete feedback')){
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }
    return (
        <>
        <div className="container">
            <Header text={'Feedback UI'} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
        </>
    )
}

export default App