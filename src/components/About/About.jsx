import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css"; // Importing CSS file

const AboutPage = () => {
    const navigate = useNavigate();

    // Navigate back to Home page
    const handleBackClick = () => {
        navigate("/home");
    };

    return (
        <div className="about-page">
            {/* Overlay Content */}
            <div className="overlay">
                <h1>🌱 SEED: The Smart Agriculture</h1>
                <p>Harnessing IoT & AI to revolutionize farming for small-scale farmers in Kerala.</p>

                {/* Mission Statement */}
                <div className="mission-section">
                    <h2>Our Mission</h2>
                    <p>
                        SEED is designed to empower farmers by integrating real-time environmental monitoring with
                        AI-driven crop prediction. We strive to promote sustainable and efficient farming practices
                        through technology.
                    </p>
                </div>

                {/* Features Section */}
                <div className="features-section">
                    <h2>🔍 Key Features</h2>
                    <ul>
                        <li>📡 Smart Sensors: Monitors soil pH, humidity, temperature, and salinity.</li>
                        <li>🔧 IoT Integration: ESP32 & NodeMCU for seamless data collection.</li>
                        <li>📊 AI Predictions: Machine Learning for crop & fertilizer recommendations.</li>
                        <li>📱 Mobile & Web Dashboard for farmers and administrators.</li>
                    </ul>
                </div>

                {/* Team Section */}
                <div className="team-section">
                    <h2>👨‍💻 Meet Our Team</h2>
                    <p>Aby Pious Vinoy | Athira Vijayan | Ashwin Joseph | Sreeraj K</p>
                </div>

                {/* Guides Section */}
                <div className="guides-section">
                    <h2>🎓 Project Guide</h2>
                    <p>Pillai Praveen Thulasidharan</p>
                </div>

                {/* Back Button */}
                <button className="back-button" onClick={handleBackClick}>Back to Home</button>
            </div>
        </div>
    );
};

export default AboutPage;
