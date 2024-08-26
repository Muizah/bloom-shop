import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import redDress from './Assets/Desktop/redDress.png';
import brownDress from './Assets/Desktop/brownDress.png';
import heels from './Assets/Desktop/heels.png';
import './Women.css'; 

type Item = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const Women: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [heartedItems, setHeartedItems] = useState<number[]>([]);
  const [cart, setCart] = useState<Item[]>([]);

  const items: Item[] = [
    { id: 1, name: 'Red Dress with Slit', price: '₦16,500', image: redDress },
    { id: 2, name: 'PVC Rhinestones Decor Peep Toe Stiletto Slingback pumps', price: '₦23,500', image: heels },
    { id: 3, name: 'Brown Tie Midi Dress', price: '₦50,000', image: brownDress },
  ];

  const toggleHeart = (id: number, item: Item) => {
   if (heartedItems.includes(id)) {
    // If already hearted, remove from hearted items
    setHeartedItems(heartedItems.filter(itemId => itemId !== id));
  } else {
    // If not hearted, add to hearted items and add to cart
    setHeartedItems([...heartedItems, id]);
    setCart([...cart, item]);
   }
};

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
          <p><i className="fa-regular fa-shopping-cart" aria-hidden="true"></i></p>
          <p><i className="fa-regular fa-heart"></i></p>
        </div>
      </header>
      <main className='main'>
        {items.map(item => (
          <div className='container' key={item.id}>
            <div className='images'>
              <img src={item.image} alt={item.name} className='imgs' />
              <p onClick={() => toggleHeart(item.id, item)}>
                <i className={heartedItems.includes(item.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
              </p>
            </div>
            <div className='text'>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            <div>
              <button onClick={() => setCart([...cart, item])}>Add to Cart</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Women;
