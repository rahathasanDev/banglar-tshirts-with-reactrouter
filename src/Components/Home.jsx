import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirtdata from './Tshirtdata';
import '../Style/Home.css'
import Cart from './Cart';

const Home = () => {
  const tshirtsdata = useLoaderData();
  return (
    <div className='home-container'>
      <div className='t-shirt-continer'> {
        tshirtsdata.map(tshirts => <Tshirtdata
          key={tshirts._id}
          tshirts={tshirts}>

        </Tshirtdata>)
      }</div>
    
     <Cart></Cart>
    </div>
  );
};

export default Home;