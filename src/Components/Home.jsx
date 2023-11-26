import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirtdata from './Tshirtdata';
import '../Style/Home.css'
import Cart from './Cart';
import toast from 'react-hot-toast';

const Home = () => {
  const tshirtsdata = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = tshirt => {
    const exists = cart.find(ts => ts._id === tshirt._id);
    if (exists) {
toast('You Have already added this product')
    }
    else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }

  }

  const handleremoveFromCart = id => {
    const remaining = cart.filter(ts => ts._id !== id);
    setCart(remaining);

  }
  return (
    <div className='home-container'>
      <div className='t-shirt-continer'> {
        tshirtsdata.map(tshirts => <Tshirtdata
          key={tshirts._id}
          tshirts={tshirts}
          handleAddToCart={handleAddToCart}>

        </Tshirtdata>)
      }</div>

      <Cart cart={cart}
        handleremoveFromCart={handleremoveFromCart}></Cart>
    </div>
  );
};

export default Home;