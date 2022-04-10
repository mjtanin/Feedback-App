import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AboutIconLink, FeedbackForm, FeedbackList, FeedbackStats, Header } from './components';
import { FeedbackProvider } from './components/context/FeedbackContext';
import FeedbackData from "./data/FeedbackData";
import { AboutPage } from './pages';

const App = () => {



    return (
        <FeedbackProvider>
            <Router>
                <Header text={'Feedback UI'} />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={(
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        )}>

                        </Route>
                        <Route exact path='/about' element={<AboutPage />} />

                    </Routes>
                </div>

                <AboutIconLink />
            </Router>
        </FeedbackProvider>
    )
}

export default App