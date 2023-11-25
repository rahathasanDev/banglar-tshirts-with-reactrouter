import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirtdata from './Tshirtdata';
import '../Style/Home.css'

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
    </div>
  );
};

export default Home;