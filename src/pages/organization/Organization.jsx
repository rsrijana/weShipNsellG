import React, { useState } from 'react';
import { Container } from "@mui/material";
import AddOrganizational from "./addOrganizational";

const Organization = () => {
    const [isOrganizationalModal, setOrganizationalModal] = useState(false);

    // Open the modal
    const handleOpen = () => {
        // Simulate a call (e.g., API call) before opening the modal
        setTimeout(() => {
            setOrganizationalModal(true); // Open the modal after the "call" completes
        }, 500); // Simulate a 1-second delay
    };

    // Close the modal
    const handleClose = () => {
        setOrganizationalModal(false);
    };

    return (
        <Container>
            <div className="dashboard">
                <h1>This is Organization</h1>
                {/* Open modal on button click */}
                <button onClick={handleOpen}>Add Organization</button>
            </div>
            {/* Pass state and close handler to modal */}
            <AddOrganizational open={isOrganizationalModal} onClose={handleClose} />
        </Container>
    );
};

export default Organization;
