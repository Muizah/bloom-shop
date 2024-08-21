import React from 'react';
import splashScreenImg from './Assets/splashScreen_img.png'; 
import './SplashScreen.css'; // Optional: If you have styles for the Women component

const SplashScreen: React.FC = () => {
  return (
    <div className="splashscreen-container">
      <h1>SplashScreen Page</h1>
      <img src={splashScreenImg} alt="Splash Screen" /> 
    </div>
  );
};

export default SplashScreen;

