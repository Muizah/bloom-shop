import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import pinkGown from './Assets/Desktop/pinkGown.png';
import shirt from './Assets/Desktop/shirt.png';
import dungaree from './Assets/Desktop/dungaree.png';
import './Kids.css'; 

type Item = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const Kids: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [heartedItems, setHeartedItems] = useState<number[]>([]);
  const [cart, setCart] = useState<Item[]>([]);

  const items: Item[] = [
    { id: 1, name: 'Pink Sleeveless Satin Ball Dress', price: '₦40,000', image: pinkGown },
    { id: 2, name: 'Multicolor Short Sleeve Polo Tee for Boys', price: '₦31,000', image: shirt },
    { id: 3, name: 'Denim Blue Skirt Dungaree', price: '₦22,000', image: dungaree },
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
    <div className="kids-container">
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

export default Kids;
