import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <div className="hel" style={{ padding: '50px', backgroundColor: '#1e1e1e', color: '#ffffff', minHeight: '130vh'}}>
            <div style={{ maxWidth: '100%', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#ff5722' }}>
                    Welcome to Euphoria
                </h1>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.8', marginBottom: '40px' }}>
                    Revolutionizing the way you interact with your vehicle. At Euphoria, we bring you
                    closer to your vehicle’s health and performance with cutting-edge monitoring tools
                    and real-time data insights.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', margin: '10px', padding: '20px', backgroundColor: '#333', borderRadius: '10px' }}>
                        <h2 style={{ fontSize: '2rem', color: '#ff5722' }}>Real-Time Monitoring</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                            Stay ahead of any potential issues with our comprehensive, real-time monitoring
                            solutions that give you insights on temperature, pressure, and more.
                        </p>
                    </div>
                    <div style={{ flex: '1', margin: '10px', padding: '20px', backgroundColor: '#333', borderRadius: '10px' }}>
                        <h2 style={{ fontSize: '2rem', color: '#ff5722' }}>Advanced Analytics</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                            Make informed decisions with data-driven analytics that help you understand
                            your vehicle’s performance trends and optimize its maintenance.
                        </p>
                    </div>
                    <div style={{ flex: '1', margin: '10px', padding: '20px', backgroundColor: '#333', borderRadius: '10px' }}>
                        <h2 style={{ fontSize: '2rem', color: '#ff5722' }}>Seamless Integration</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                            Easily integrate Euphoria with your existing systems to create a unified
                            platform that enhances your driving experience.
                        </p>
                    </div>
                </div>
                <div style={{ marginTop: '50px', padding: '20px', backgroundColor: '#444', borderRadius: '10px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#ff5722' }}>Get Started Today</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px' }}>
                        Join the community of forward-thinking drivers who are taking control of their
                        vehicle’s performance with Euphoria. Whether you're a casual driver or a car enthusiast,
                        we have the tools you need to ensure your vehicle is in top shape.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <a href="/dashboard" style={{ textDecoration: 'none', padding: '10px 20px', backgroundColor: '#ff5722', color: '#fff', borderRadius: '5px', fontSize: '1.2rem' }}>
                            In Cab Assistance
                        </a>
                        <a href="/maintenance" style={{ textDecoration: 'none', padding: '10px 20px', backgroundColor: '#00bcd4', color: '#fff', borderRadius: '5px', fontSize: '1.2rem' }}>
                            Maintenance
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

