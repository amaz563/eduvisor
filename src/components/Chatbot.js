import React, { useState } from 'react';

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [responses, setResponses] = useState([]);

    const handleSend = () => {
        // Logic to send user input to the AI API and get a response
        // For now, we will simulate a response
        const simulatedResponse = `You asked: ${userInput}`;
        setResponses([...responses, { user: userInput, bot: simulatedResponse }]);
        setUserInput('');
    };

    return (
        <div>
            <h1>AI Chatbot</h1>
            <div>
                {responses.map((response, index) => (
                    <div key={index}>
                        <p><strong>User:</strong> {response.user}</p>
                        <p><strong>Bot:</strong> {response.bot}</p>
                    </div>
                ))}
            </div>
            <input
                type="text"
                placeholder="Ask a question..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Chatbot;
