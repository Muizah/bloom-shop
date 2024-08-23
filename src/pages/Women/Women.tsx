import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import redGown from './Assets/Desktop/redGown.png';
import brownGown from './Assets/Desktop/brownGown.png';
import shoe from './Assets/Desktop/shoe.png';
import './Women.css'; 

const Women: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="women-container">
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
      <main className="main">
        <div className="container-one">
          <div className="images">
            <img src={redGown} alt="" className='imgs'/>
          </div>
          <div className="text">
            <p>Red Dress with Slit</p>
            <p>₦16,500</p>
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
        
        <div className="container-two">
          <div className="images">
            <img src={shoe} alt="" className='imgs'/>
          </div>
          <div className="text">
            <p>PVC Rhinestones Decor Peep Toe Stiletto Slingback pumps</p>
            <p>₦23,500</p>
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="container-three">
          <div className="images">
            <img src={brownGown} alt="" className='imgs'/>
          </div>
          <div className="text">
            <p>Brown Tie Midi Dress</p>
            <p>₦50,000</p>
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Women;
