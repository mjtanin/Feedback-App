import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AboutIconLink, FeedbackForm, FeedbackList, FeedbackStats, Header } from './components';
import FeedbackData from "./data/FeedbackData";
import { AboutPage } from './pages';

const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = id => {
        if(window.confirm('Are you sure you want to delete feedback')){
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]);

    }


    return (
        <Router>
            <Header text={'Feedback UI'} />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={(
                        <>
                            <FeedbackForm handleFeedback={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                            
                            
                        </>
                    )}>

                    </Route>
                    <Route exact path='/about' element={<AboutPage />} />

                </Routes>
            </div>

            <AboutIconLink />
        </Router>
    )
}

export default App