import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const tshirtsdata =useLoaderData();
  return (
    <div>
      <h1>This is HOME:{tshirtsdata.length}</h1>
    </div>
  );
};

export default Home;