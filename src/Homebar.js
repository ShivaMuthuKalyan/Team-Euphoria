import React from 'react';
import './Homebar.css';

const Homebar = () => {
    return (
        <div className="homebar">
            <div className="logo"></div>
            <div className="profile">
                <img 
                    src="https://via.placeholder.com/40" 
                    alt="User Profile" 
                    className="profile-pic"
                />
                <span className="profile-name">Euphoria</span>
            </div>
        </div>
    );
};

export default Homebar;
