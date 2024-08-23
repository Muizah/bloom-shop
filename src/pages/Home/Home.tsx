import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import womenDesktop from './Assets/Desktop/desktopWomen_img.png';
import menDesktop from './Assets/Desktop/desktopMen_img.png';
import kidsDesktop from './Assets/Desktop/desktopKids_img.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Home.css'; 

const Home: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="home-container">
      <header className='header'>

        <p className='bloom'>BLOOM</p>

        <div className='current'>
          <Link to="/" className={currentPath === '/' ? 'active-link' : ''}>Home</Link>
          <Link to="/men" className={currentPath === '/men' ? 'active-link' : ''}>Men</Link>
          <Link to="/women" className={currentPath === '/women' ? 'active-link' : ''}>Women</Link>
          <Link to="/kids" className={currentPath === '/kids' ? 'active-link' : ''}>Kids</Link>
        </div>

        <div className='icons'>
          <p><i className="fa fa-shopping-cart" aria-hidden="true"></i></p>
          <p><i className="fa-regular fa-heart"></i></p>
        </div>
      </header>
      <main className='main'>
        <div className="women">
          <Link to="/women">
            <p>WOMEN</p>
          </Link>
          <Link to="/women">
          <img src={womenDesktop} alt="" />
          </Link>
        </div>
        <div className="men">
          <Link to="/men">
            <p>MEN</p>
          </Link>
          <Link to="/men">
          <img src={menDesktop} alt="" />
          </Link>
        </div>
        <div className="kids">
          <Link to="/kids">
            <p>KIDS</p>
          </Link>
          <Link to="/kids">
          <img src={kidsDesktop} alt="" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;

