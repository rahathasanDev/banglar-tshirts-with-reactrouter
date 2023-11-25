import React from 'react';




// here you should use same props(tshirts ) as like you using in <Home> component <<<{
// tshirtsdata.map(tshirts=><Tshirtdata
//   key={tshirts._id}
//   tshirts={tshirts}>

//   </Tshirtdata>)
//  }>>>UseLoaderData 

const Tshirtdata = ({ tshirts }) => {
  const { picture, name, price } = tshirts;
  return (
    <div className='mt-2'>
      <div className='border border-gray-400  rounded-lg p-8'>
        <img className='place-items-center w-64 h-64 rounded-lg p-1' src={picture} alt="" />
        <h2 className='font-mono'>{name}</h2>
        <p className='text-2xl font-bold'>${price}</p>
        <button className=''>Buy Now</button>

      </div>
      


    </div>
  );
};

export default Tshirtdata;