import { createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
    typography: {
        fontFamily: `"DM Sans Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
        "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        h1: {
            fontSize: '2.5rem',
        },
        h2: {
            fontSize: '2rem',
        },
        body1: {
            fontSize: '1rem',
        },
    },
    palette: {
        primary: {
            light: '#42a5f5',
            main: '#1976d2',
            dark: '#1565c0',
        },
        secondary: {
            light: '#ba68c8',
            main: '#9c27b0',
            dark: '#7b1fa2',
        },
        error: {
            light: '#ef5350',
            main: '#d32f2f',
            dark: '#c62828',
        },
        warning: {
            light: '#ff9800',
            main: '#ed6c02',
            dark: '#e65100',
        },
        info: {
            light: '#03a9f4',
            main: '#0288d1',
            dark: '#01579b',
        },
        success: {
            light: '#4caf50',
            main: '#2e7d32',
            dark: '#1b5e20',
        },
    },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                header: {
                    fontSize: "16px",
                    fontWeight: '400', // Optional: make it bold
                },
                columnHeader: {
                    fontSize: "16px", // This targets the column header specifically
                    color: '#637381'
                },
            },
        },
    },
});

export default theme;
