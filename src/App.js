// index.js or App.js
// import '@fontsource/public-sans'; // npm install @fontsource/public-sans
import Header from './Layout/header';
import Sidebar from './Layout/Sidebar';
import Router from "./Router/router";
import './App.css';
import Box from "@mui/material/Box";

function App() {
  return (
      <div>
          <Box sx={{display: "flex"}}>
              <Sidebar/>
              <Header/>
          </Box>
          <Router/>
      </div>
  );
}

export default App;
