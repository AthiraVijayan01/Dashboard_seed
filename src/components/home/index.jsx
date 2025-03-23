import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import { FaUsers, FaDatabase, FaLeaf, FaChartBar, FaTools, FaBell } from "react-icons/fa";

const Homepage = () => {
    const navigate = useNavigate();

    const handleAlertsClick = () => {
        navigate('/alerts');
    };

    const handleAboutClick = () => {
        navigate('/about'); 
    };

    const handleSensorMonitoringClick = () => {
        navigate('/sensor-monitoring'); // Navigate to Sensor Monitoring page
    };

    const handleUserManagementClick = () => {
        navigate('/user-management'); // Navigate to User Management page
    };

    return (
        <div className="homepage-container">
            <div className="header">
                <h1>SEED: The Smart Agriculture</h1>
            </div>

            <div className="description">
                <p>
                    🌱 <strong>SEED</strong> is an AI & IoT-powered agricultural platform designed to enhance 
                    <strong> crop prediction, resource management, and farm productivity</strong>. By integrating real-time 
                    sensor data with machine learning models, SEED helps farmers and analysts make 
                    <strong> data-driven decisions</strong> for improved yield and sustainability.
                </p>
            </div>

            <div className="dashboard">
                <h2>Welcome</h2>
                <div className="grid-container">
                    <div className="grid-item" onClick={handleUserManagementClick}><FaUsers /> User Management</div>
                    <div className="grid-item" onClick={handleSensorMonitoringClick}><FaDatabase /> Sensor Monitoring</div> 

                    <div className="grid-item"><FaChartBar /> Reports & Analytics</div>
                    <div className="grid-item" onClick={handleAlertsClick}><FaBell /> Alerts & Notifications</div> 
                    <div className="grid-item" onClick={handleAboutClick}><FaTools /> About</div> 
                </div>
            </div>
        </div>
    );
};

export default Homepage;
