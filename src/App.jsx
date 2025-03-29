import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import "./index.css";
import LoginPopup from './components/LoginPopup/LoginPopup';
import MainRoute from './routes/MainRoute';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Loader from './components/Loader/Loader'; // Import the Loader component

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true); // State for Loader

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <>
      <ToastContainer />
      
      {loading ? ( 
        <Loader /> // Show loader while loading
      ) : (
        <>
          {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
          <Navbar setShowLogin={setShowLogin} />
          <div className='app'>
            <MainRoute />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
