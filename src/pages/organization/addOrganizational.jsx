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
import axios from "axios";

const AddOrganizational = ({ open, onClose}) => {
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

    const [isLoading, setIsLoading] = useState(false);

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setIsLoading(true); // Show loading state

        try {
            // Post the data to the API
            const token = localStorage.getItem('authToken');
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}api/admin/organization`,
                formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        // Add any other custom headers here
                    }
                },
            );
            console.log(response)
            // Log success and call addOrganization to update the state in parent
            console.log('Organization added successfully:', response.data);


            alert('Organization added successfully!');
            setFormData(false);
            onClose(); // Close the modal
        } catch (error) {
            console.error('Error adding organization:', error.status );
            alert('Failed to add organization. Please try again.');
            onClose();
        } finally {
            setIsLoading(false); // Hide loading state
        }
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
                        gap: 2,
                        mt: 2,
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
                <Button variant="outlined" onClick={onClose}>Cancel</Button>
                <Button
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading} // Disable button during loading
                >
                    {isLoading ? 'Adding...' : 'Add'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddOrganizational;
