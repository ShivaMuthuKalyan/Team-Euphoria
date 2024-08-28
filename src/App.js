import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Homebar from './Homebar';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Maintenance from './Maintenance';
import Map from './Map';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Homebar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/maintenance" element={<Maintenance />} />
                        <Route path="/map" element={<Map/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;