import React from 'react';

const Cart = ({cart}) => {
  return (
    <div>
      <h2 className='text-3xl font-serif'>Order Summery:{cart.length}</h2>
    </div>
  );
};

export default Cart;