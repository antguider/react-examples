import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../../store/cartSlice';

const products = [
  { id: 1, name: "Apple", price: 1.0 },
  { id: 2, name: "Banana", price: 0.5 },
  { id: 3, name: "Cherry", price: 2.0 },
];

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatchTest = useDispatch();
  
  const handleAddtoCart = (product) => {
    dispatchTest(addToCart(product));
  }

  const handleUpdate = (product, flag) => {
    const quantity = flag === 'remove' ? product.quantity - 1 : product.quantity + 1;
    dispatchTest(updateQuantity({ ...product, quantity }));
  }

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name} (${product.price})</span>
          <button onClick={() => handleAddtoCart(product)}>Add to Cart</button>
        </div>
      ))}
      <h2>Shopping cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.items.map((item) => (
            <div key={item.id}>
              <span>{item.name} x {item.quantity} (${item.price * item.quantity})</span>
              <button onClick={() => handleUpdate(item, 'add')} >+</button>
              <button onClick={() => handleUpdate(item, 'remove')} >-</button>
              <button onClick={() => dispatchTest(removeFromCart(item))} >Remove</button>
            </div>
          ))}
          <h3>Total: ${cart.totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  )
}

export default ShoppingCart
