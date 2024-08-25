import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const products = [
  { id: 1, name: "Apple", price: 1.0 },
  { id: 2, name: "Banana", price: 0.5 },
  { id: 3, name: "Cherry", price: 2.0 },
];

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.items);
  console.log('cart', cart);

  const dispatchTest = useDispatch();
  console.log('dispatch', dispatchTest);

  const handleClick = (product) => {
    dispatchTest(addToCart(product));
  }

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name} (${product.price})</span>
          <button onClick={() => handleClick(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default ShoppingCart
