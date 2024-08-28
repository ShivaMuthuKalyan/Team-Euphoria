import React from 'react';
import './Maintenance.css';

const Maintenance = () => {
    const maintenanceTasks = [
        { title: 'Tyre Performance', description: 'Change The Recquired one.', status: 'Completed', date: '2024-08-01' },
        { title: 'Tire Rotation', description: 'Rotate tires to ensure even wear.', status: 'Pending', date: '2024-08-15' },
        { title: 'Run Predictive Analysis', description: 'Inspect Tyres.', status: 'In Progress', date: '2024-08-10' },
    ];

    return (
        <div className="maintenance-page"><br/><br/>
            <h1 className="maintenance-title">Maintenance Tasks</h1>
            <div className="maintenance-grid">
                {maintenanceTasks.map((task, index) => (
                    <div className="maintenance-card" key={index}>
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <p><strong>Status:</strong> {task.status}</p>
                        <p><strong>Date:</strong> {task.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Maintenance;
