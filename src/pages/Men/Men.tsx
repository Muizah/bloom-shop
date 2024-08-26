import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import boxyShirt from './Assets/Desktop/boxyShirt.png';
import trainers from './Assets/Desktop/Trainers.png';
import tommyHilfiger from './Assets/Desktop/tommyHilfiger.png';
import './Men.css'; 

type Item = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const Men: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [heartedItems, setHeartedItems] = useState<number[]>([]);
  const [cart, setCart] = useState<Item[]>([]);

  const items: Item[] = [
    { id: 1, name: 'Tommy Hilfiger logo hoodie in dark green', price: '₦50,000', image: tommyHilfiger },
    { id: 2, name: 'New Balance 530 trainers in white and grey', price: '₦40,000', image: trainers },
    { id: 3, name: 'Short sleeve boxy shirt in black with contrast stitch', price: '₦50,000', image: boxyShirt },
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

export default Men;


