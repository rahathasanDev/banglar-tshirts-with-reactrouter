import React from 'react';

const Cart = ({ cart, handleremoveFromCart }) => {
  return (
    <div className=''>
      <h2 className='text-3xl font-serif'>Order Summery:{cart.length}</h2>
      <div className='grid grid-cols-1'>
       <div className=''>
       {
          cart.map(eachshirt => <p key={eachshirt._id} className=' font-semibold text-xl  '>{eachshirt.name}
            <button className='mt-2 p-2 ' onClick={() => handleremoveFromCart(eachshirt._id)}>Remove</button></p>)
        }
       </div>
      </div>
    </div>
  );
};

export default Cart;