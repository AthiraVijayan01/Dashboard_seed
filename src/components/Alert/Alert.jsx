import React, { useState, useEffect } from "react";
import { FaExclamationTriangle, FaCheckCircle, FaBell, FaTimesCircle, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Alert.css";

const AlertPage = () => {
    const [alerts, setAlerts] = useState([]);
    const navigate = useNavigate(); // Initialize the navigate function

    // Function to simulate real-time sensor data (Replace with actual API fetch)
    const generateSensorData = () => {
        return {
            moisture: Math.floor(Math.random() * 100),  // 0 to 100%
            rainfall: Math.floor(Math.random() * 10),   // 0 to 10 mm
            humidity: Math.floor(Math.random() * 100),  // 0 to 100%
            temperature: Math.floor(Math.random() * 50) // 0 to 50°C
        };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newSensorData = generateSensorData();
            checkAlerts(newSensorData);
        }, 5000); // Updates every 5 seconds (adjust as needed)

        return () => clearInterval(interval);
    }, []);

    // Function to check sensor data and generate alerts
    const checkAlerts = (data) => {
        const newAlerts = [];

        if (data.moisture < 30) {
            newAlerts.push({ message: "Soil moisture is low! Irrigation needed.", type: "warning" });
        }
        if (data.rainfall > 8) {
            newAlerts.push({ message: "Heavy rainfall detected. Irrigation not required.", type: "info" });
        }
        if (data.humidity < 20) {
            newAlerts.push({ message: "Low humidity detected. Increase irrigation frequency.", type: "warning" });
        }
        if (data.temperature > 40) {
            newAlerts.push({ message: "High temperature alert! Monitor crop hydration.", type: "danger" });
        }

        if (newAlerts.length > 0) {
            playAlertSound();
        }

        setAlerts(newAlerts);
    };

    // Function to play an alert sound
    const playAlertSound = () => {
        const alertSound = new Audio("/alert.mp3"); // Place an alert sound file in the public folder
        alertSound.play();
    };

    // Function to dismiss an alert
    const dismissAlert = (index) => {
        const updatedAlerts = alerts.filter((alert, i) => i !== index);
        setAlerts(updatedAlerts);
    };

    // Handle back button click
    const handleBackClick = () => {
        navigate("/homepage"); // Navigate to the homepage
    };

    return (
        <div className="alerts-container">
            {/* Back Button */}
            <button className="back-btn" onClick={handleBackClick}>
                <FaArrowLeft /> Back to Homepage
            </button>

            <h2><FaBell /> Alerts & Notifications</h2>
            {alerts.length === 0 ? (
                <p className="no-alerts"><FaCheckCircle /> No alerts. All conditions are normal.</p>
            ) : (
                <ul className="alert-list">
                    {alerts.map((alert, index) => (
                        <li key={index} className={`alert ${alert.type}`}>
                            <div className="alert-content">
                                <FaExclamationTriangle className="alert-icon" />
                                <span>{alert.message}</span>
                            </div>
                            <FaTimesCircle
                                className="dismiss-icon"
                                onClick={() => dismissAlert(index)}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AlertPage;
