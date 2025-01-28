import React, { useState, useEffect } from 'react';
import universitiesData from '../universities.json';

const UniversityComparison = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [universities, setUniversities] = useState(universitiesData); // Load university data

    const handleSearch = () => {
        // Logic to filter universities based on searchTerm
        const filteredUniversities = universitiesData.filter(university =>
            university.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setUniversities(filteredUniversities);
    };

    return (
        <div>
            <h1>University Comparison Tool</h1>
            <input
                type="text"
                placeholder="Search universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {/* Comparison table */}
            <table>
                <thead>
                    <tr>
                        <th>University Name</th>
                        <th>Tuition Fees</th>
                        <th>Scholarships</th>
                        <th>Admission Deadlines</th>
                        <th>Reputation</th>
                    </tr>
                </thead>
                <tbody>
                    {universities.map((university) => (
                        <tr key={university.id}>
                            <td>{university.name}</td>
                            <td>{university.tuition}</td>
                            <td>{university.scholarships}</td>
                            <td>{university.admissionDeadline}</td>
                            <td>{university.reputation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UniversityComparison;
