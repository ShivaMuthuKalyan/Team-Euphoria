import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="heading">
                <h2>EUPHORIA</h2>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard">In Cab Assistance</Link>
                </li>
                <li>
                    <Link to="/maintenance">Maintainence</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/map">Map</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
