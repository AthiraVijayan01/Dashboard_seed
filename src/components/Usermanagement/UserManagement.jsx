import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserManagement.css";
import { FaTrash, FaArrowLeft } from "react-icons/fa";

const UserManagement = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    // Fetch users from the backend
    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/users"); // Adjust API URL
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // Remove user
    const removeUser = async (userId) => {
        try {
            await fetch(`http://localhost:5000/users/${userId}`, {
                method: "DELETE",
            });
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error("Error removing user:", error);
        }
    };

    // Fetch users on component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="user-management-container">
            <h2>User Management</h2>

            <div className="user-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button 
                                            className="delete-btn" 
                                            onClick={() => removeUser(user.id)}
                                        >
                                            <FaTrash /> Remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No users logged in</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Back Button */}
            <button className="back-btn" onClick={() => navigate("/homepage")}>
                <FaArrowLeft /> Back to Homepage
            </button>
        </div>
    );
};

export default UserManagement;
