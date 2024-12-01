import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Box,
} from "@mui/material";

const AddOrganizational = ({ open, onClose }) => {
    // State for form data
    const [formData, setFormData] = useState({
        name: "",
        representative_name: "",
        contact_number: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zip: "",
    });

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log form data on submit (you can replace this with your API call)
        console.log("Form Submitted with data:", formData);
        onClose(); // Close modal after submission
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Add New Organization</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2, // Adds spacing between form elements
                        mt: 2,  // Adds top margin
                    }}
                >
                    <TextField
                        label="Organization Name"
                        variant="outlined"
                        fullWidth
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Representative Name"
                        variant="outlined"
                        fullWidth
                        required
                        name="representative_name"
                        value={formData.representative_name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Contact Number"
                        variant="outlined"
                        fullWidth
                        name="contact_number"
                        value={formData.contact_number}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Address"
                        variant="outlined"
                        multiline
                        rows={3}
                        fullWidth
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="City"
                        variant="outlined"
                        fullWidth
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="State"
                        variant="outlined"
                        fullWidth
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Country"
                        variant="outlined"
                        fullWidth
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Zip Code"
                        variant="outlined"
                        fullWidth
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel </Button>
                <Button variant="outlined" type="submit" onClick={handleSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddOrganizational;
