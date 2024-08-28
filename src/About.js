import React from 'react';

const About = () => {
    return (
        <div style={{ padding: '50px', backgroundColor: '#1e1e1e', color: '#ffffff', minHeight: '100vh' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#ff5722' }}>
                    About Euphoria
                </h1>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.8', marginBottom: '40px' }}>
                    Welcome to Euphoria, where cutting-edge technology meets innovation.
                    We specialize in providing real-time monitoring systems that bring you
                    closer to your vehicle's inner workings. Our goal is to empower drivers
                    with the tools they need to stay ahead of the curve.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', margin: '10px', padding: '20px', backgroundColor: '#333', borderRadius: '10px' }}>
                        <h2 style={{ fontSize: '2rem', color: '#ff5722' }}>Innovative Technology</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                            Our platform leverages the latest in IoT and data analytics to
                            provide real-time insights into your vehicle’s performance.
                        </p>
                    </div>
                    <div style={{ flex: '1', margin: '10px', padding: '20px', backgroundColor: '#333', borderRadius: '10px' }}>
                        <h2 style={{ fontSize: '2rem', color: '#ff5722' }}>User-Friendly Interface</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                            Euphoria’s dashboard is designed to be intuitive and easy to
                            use, ensuring that you can access the information you need
                            quickly and efficiently.
                        </p>
                    </div>
                    <div style={{ flex: '1', margin: '10px', padding: '20px', backgroundColor: '#333', borderRadius: '10px' }}>
                        <h2 style={{ fontSize: '2rem', color: '#ff5722' }}>Stay Informed</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                            Receive alerts and updates in real-time, so you are always
                            aware of your vehicle's status, wherever you are.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
