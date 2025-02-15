import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sensor.css";
import { FaArrowLeft } from "react-icons/fa";

const SensorMonitoring = () => {
    const navigate = useNavigate();

    // State to store sensor data
    const [sensorData, setSensorData] = useState({
        soilMoisture: "--",
        temperature: "--",
        humidity: "--",
        nitrogen: "--",
        phosphorus: "--",
        calcium: "--",
    });

    // Function to fetch sensor data (Replace with actual API or MQTT broker)
    const fetchSensorData = async () => {
        try {
            const response = await fetch("http://localhost:5000/sensors"); // Adjust API URL
            const data = await response.json();
            setSensorData({
                soilMoisture: data.soilMoisture || "--",
                temperature: data.temperature || "--",
                humidity: data.humidity || "--",
                nitrogen: data.nitrogen || "--",
                phosphorus: data.phosphorus || "--",
                calcium: data.calcium || "--",
            });
        } catch (error) {
            console.error("Error fetching sensor data:", error);
        }
    };

    // Fetch sensor data every 5 seconds
    useEffect(() => {
        fetchSensorData();
        const interval = setInterval(fetchSensorData, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="sensor-monitoring-container">
            <h2>Sensor Monitoring</h2>

            {/* Sensor Data Table */}
            <div className="sensor-table">
                <table>
                    <thead>
                        <tr>
                            <th>Soil Moisture</th>
                            <th>Temperature</th>
                            <th>Humidity</th>
                            <th>Nitrogen</th>
                            <th>Phosphorus</th>
                            <th>Calcium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{sensorData.soilMoisture}</td>
                            <td>{sensorData.temperature}</td>
                            <td>{sensorData.humidity}</td>
                            <td>{sensorData.nitrogen}</td>
                            <td>{sensorData.phosphorus}</td>
                            <td>{sensorData.calcium}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Back Button (Moved to Bottom) */}
            <button className="back-btn" onClick={() => navigate("/homepage")}>
                <FaArrowLeft /> Back to Homepage
            </button>
        </div>
    );
};

export default SensorMonitoring;
