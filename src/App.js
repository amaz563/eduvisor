import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UniversityComparison from './components/UniversityComparison';
import UniversityDetail from './components/UniversityDetail';
import Chatbot from './components/Chatbot';
import CareerQuiz from './components/CareerQuiz';
import ScholarshipList from './components/ScholarshipList';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Graduvisor</h1>
                <Routes>
                    <Route path="/" element={<UniversityComparison />} />
                    <Route path="/university/:id" element={<UniversityDetail />} />
                    <Route path="/chatbot" element={<Chatbot />} />
                    <Route path="/career-quiz" element={<CareerQuiz />} />
                    <Route path="/scholarships" element={<ScholarshipList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
