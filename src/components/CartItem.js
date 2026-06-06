import React, { useContext } from 'react';
import { AppContext } from './context';

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease } = useContext(AppContext);
  return (
    <article style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
      <img src={img} alt={title} style={{ width: '80px' }} />
      <div style={{ flex: 1, paddingLeft: '20px' }}>
        <h4>{title}</h4>
        <h4 id={`cart-item-price-${id}`}>${price}</h4>
        <button onClick={() => remove(id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>remove</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button id={`increment-btn-${id}`} onClick={() => increase(id)} style={{ cursor: 'pointer', border: 'none', background: 'none', fontSize: '20px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" fill="#61dafb"><path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"/></svg>
        </button>
        <p id={`cart-amount-${id}`} style={{ margin: '5px 0' }}>{amount}</p>
        <button id={`decrement-btn-${id}`} onClick={() => decrease(id)} style={{ cursor: 'pointer', border: 'none', background: 'none', fontSize: '20px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" fill="#61dafb"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;