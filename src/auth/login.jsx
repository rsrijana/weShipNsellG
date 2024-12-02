import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.currentTarget;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    const login = async (username, password) => {

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}api/auth/login`,
                { username, password }
            );
            console.log(response)
            const token = response.data; // Adjust based on your API's response

            // Save token to localStorage/sessionStorage
            localStorage.setItem("authToken", token);

            // Redirect to dashboard
            navigate("/");
        } catch (error) {
            console.error("Error:", error.message);

            // Optional: Show error in a popup
            alert(`Login failed: ${error.message}`);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(formData.username, formData.password);
    };

    return (
        <div className="dashboard" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form className="form" onSubmit={handleSubmit} style={{ maxWidth: "400px", width: "100%" }}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            margin: "10px 0",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            margin: "10px 0",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        backgroundColor: "#1976d2",
                        color: "#fff",
                        padding: "12px",
                        fontSize: "16px",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Log in
                </button>
            </form>
        </div>
    );
};

export default Login;
