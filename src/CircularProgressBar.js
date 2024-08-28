import React from 'react';
import './CircularProgressBar.css';


const CircularProgressBar = ({ size = 100, strokeWidth = 10  , val}) => {
    

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (val / 100) * circumference;

   
    const getColorClass = () => {
        if (val < 30) {
            return 'low';
        } else if (val < 70) {
            return 'medium';
        } else {
            return 'high';
        }
    };

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="circular-progress-bar"
        >
            <circle
                className="circular-bg"
                stroke="#eee"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={radius}
                cx={size / 2}
                cy={size / 2}
            />
            <circle
                className={`circular-progress ${getColorClass()}`}
                fill="transparent"
                strokeWidth={strokeWidth}
                r={radius}
                cx={size / 2}
                cy={size / 2}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
            />
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="20px"
                fill="#333"
            >
                {val}
            </text>
        </svg>
    );
};

export default CircularProgressBar;
