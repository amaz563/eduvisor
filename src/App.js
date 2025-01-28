import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
                <Switch>
                    <Route path="/" exact component={UniversityComparison} />
                    <Route path="/university/:id" component={UniversityDetail} />
                    <Route path="/chatbot" component={Chatbot} />
                    <Route path="/career-quiz" component={CareerQuiz} />
                    <Route path="/scholarships" component={ScholarshipList} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
