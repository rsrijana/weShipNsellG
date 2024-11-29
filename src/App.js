import React from "react";
import { useLocation } from "react-router-dom"; // Import for getting current route
import Header from './Layout/header';
import Sidebar from './Layout/Sidebar';
import Router from "./Router/router";
import './App.css';
import Box from "@mui/material/Box";


function App() {
    const location = useLocation(); // Get the current route

    // Check if the current route is the login page
    const isLoginPage = location.pathname === "/login";

    return (
        <div>
            {/* Only show Sidebar and Header if not on the login page */}
            {!isLoginPage && (
                <Box sx={{ display: "flex" }}>
                    <Sidebar />
                    <Header />
                </Box>
            )}
            <Router />
        </div>
    );
}

export default App;
