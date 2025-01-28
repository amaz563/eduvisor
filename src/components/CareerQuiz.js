import React, { useState } from 'react';

const CareerQuiz = () => {
    const [answers, setAnswers] = useState(Array(10).fill('')); // Assuming 10 questions
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to process answers and suggest careers
        setSubmitted(true);
    };

    return (
        <div>
            <h1>Career Guidance Quiz</h1>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    {answers.map((answer, index) => (
                        <div key={index}>
                            <label>
                                Question {index + 1}:
                                <input
                                    type="text"
                                    value={answer}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                />
                            </label>
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <h2>Your Answers:</h2>
                    <ul>
                        {answers.map((answer, index) => (
                            <li key={index}>Question {index + 1}: {answer}</li>
                        ))}
                    </ul>
                    {/* Logic to suggest careers based on answers can be added here */}
                </div>
            )}
        </div>
    );
};

export default CareerQuiz;
