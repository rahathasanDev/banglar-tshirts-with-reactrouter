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
      <div className='bg-gray-500  rounded-lg'>
        <img className='place-items-center w-64 h-64 rounded-lg p-1'src={picture} alt="" />
        <h2>{name}</h2>
      </div>

    </div>
  );
};

export default Tshirtdata;