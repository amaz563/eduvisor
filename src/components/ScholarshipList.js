import React from 'react';

const scholarshipsData = [
    {
        id: 1,
        name: "Scholarship A",
        eligibility: "High school seniors",
        deadline: "March 1"
    },
    {
        id: 2,
        name: "Scholarship B",
        eligibility: "Undergraduates",
        deadline: "April 15"
    },
    {
        id: 3,
        name: "Scholarship C",
        eligibility: "Graduate students",
        deadline: "May 30"
    },
    {
        id: 4,
        name: "Scholarship D",
        eligibility: "All students",
        deadline: "June 15"
    }
];

const ScholarshipList = () => {
    return (
        <div>
            <h1>Scholarship Database</h1>
            <table>
                <thead>
                    <tr>
                        <th>Scholarship Name</th>
                        <th>Eligibility</th>
                        <th>Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    {scholarshipsData.map((scholarship) => (
                        <tr key={scholarship.id}>
                            <td>{scholarship.name}</td>
                            <td>{scholarship.eligibility}</td>
                            <td>{scholarship.deadline}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScholarshipList;
