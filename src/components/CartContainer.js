import React, { useContext } from 'react';
import { AppContext } from './context';
import CartItem from './CartItem';

const CartContainer = () => {
  const { cart, total, clearCart } = useContext(AppContext);

  if (cart.length === 0) {
    return (
      <section style={{ textAlign: 'center', marginTop: '50px' }}>
        <header>
          <h2>your bag</h2>
          <h4 style={{ color: '#666' }}>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2>YOUR BAG</h2>
      </header>
      <div id="cart-items-list">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer style={{ marginTop: '40px', borderTop: '2px solid #eee', paddingTop: '20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 'bold' }}>
          <h4>Total</h4>
          <h4 id="cart-total-amount">$ {total}</h4>
        </div>
        <button 
          id="clear-all-cart" 
          onClick={clearCart} 
          style={{ background: '#ff4d4f', color: 'white', border: 'none', padding: '10px 20px', fontSize: '16px', borderRadius: '4px', cursor: 'pointer', marginTop: '20px' }}
        >
          CLEAR CART
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;