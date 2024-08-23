import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import boxyShirt from './Assets/Desktop/boxyShirt.png';
import trainers from './Assets/Desktop/Trainers.png';
import tommyHilfiger from './Assets/Desktop/tommyHilfiger.png';
import './Men.css'; 

const Men: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="men-container">
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
        <div className='container-one'>
          <div className='images'>
            <img src={tommyHilfiger} alt="" className='imgs'/>
            <p><i className="fa-regular fa-heart"></i></p>
          </div>
          <div className='text'>
            <p>Tommy Hilfiger logo hoodie in dark green</p>
            <p>₦50,000</p>
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className='container-two'>
          <div className='images'>
            <img src={trainers} alt="" className='imgs' />
            <p><i className="fa-regular fa-heart"></i></p>
          </div>
          <div className='text'>
            <p>New Balance 530 trainers in white and grey</p>
            <p>₦40,000</p>
          </div>
          <div>
          <button>Add to Cart</button>
          </div>
        </div>
        <div className='container-three'>
          <div className='images'>
            <img src={boxyShirt} alt="" className='imgs' />
            <p><i className="fa-regular fa-heart"></i></p>
          </div>
          <div className='text'>
            <p>Short sleeve boxy shirt in black with contrast stitch</p>
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

export default Men;


