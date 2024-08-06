// index.js or App.js
// import '@fontsource/public-sans'; // npm install @fontsource/public-sans
import Header from './Layout/header';
import Sidebar from './Layout/Sidebar';
import Router from "./Router/router";
import './App.css';

function App() {
  return (
      <div>
        <Sidebar /> 
        <Header />
        <Router />
      </div>
  );
}

export default App;
