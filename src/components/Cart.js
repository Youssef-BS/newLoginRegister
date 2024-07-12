import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCart, updateCartItemQuantity, removeFromCart } from '../Features/cart/cartSlice';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { DeleteOutline, Remove, Add } from '@mui/icons-material';

const Cart = ({ closeCart }) => {
  const userId = 1; // Assuming you have a specific user ID
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.cart);
  const updState = useSelector((state) => state.cart.upd);
  const [total, setTotal] = useState(0);
  const cartRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCart(userId));
  }, [userId, updState, dispatch]);

  useEffect(() => {
    if (cartState.length > 0) {
      let total = 0;
      cartState[0].CartProducts.forEach((cartProduct) => {
        total += cartProduct.Product.price * cartProduct.quantity;
      });
      setTotal(total);
    }
  }, [cartState]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        closeCart(); // Call closeCart function when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartRef, closeCart]);

  const increaseQuantity = (cartId, productId, quantity) => {
    dispatch(updateCartItemQuantity({ cartId, productId, quantity: quantity + 1 }));
  };

  const decreaseQuantity = (cartId, productId, quantity) => {
    if (quantity > 1) {
      dispatch(updateCartItemQuantity({ cartId, productId, quantity: quantity - 1 }));
    } else {
      dispatch(removeFromCart({ cartId, productId }));
    }
  };

  const removeItem = (cartId, productId) => {
    dispatch(removeFromCart({ cartId, productId }));
  };

  return (
    <div id="shopping-cart-items-container" className="container dynamic_content active" ref={cartRef}>
      {cartState[0]?.CartProducts.length === 0 ? (
        <div id="shopping-cart-items-wrapper">
          <div className="centerit empty">Your cart is empty.</div>
        </div>
      ) : (
        <div id="shopping-cart-items-wrapper">
          <div className="panel" id="mini-cart-panel">
            <div className="items">
              {cartState[0]?.CartProducts.map((item) => (
                <div className="item" key={item.Product.id}>
                  <div className="image">
                    <Link to={`/ProductDetail/${item.Product.id}`}>
                      <img src={item.Product.image} className="mouseOver" alt={item.Product.name} />
                    </Link>
                  </div>
                  <div className="description">
                    <div className="title">
                      <Link to={`/ProductDetail/${item.Product.id}`}>
                        <span className="name">{item.Product.title}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="price_container">
                    <div className="price">
                      <span>Price:</span> {item.Product.price}€
                    </div>
                    <div className="actionbar">
                      <IconButton
                        className="update-minicart-quantity decrease-minicart-quantity"
                        onClick={() => decreaseQuantity(cartState[0].id, item.Product.id, item.quantity)}
                      >
                        <Remove />
                      </IconButton>
                      <TextField
                        type="text"
                        name="minicart_quantity[]"
                        value={item.quantity}
                        className="selectform minicart_quantity_action"
                        InputProps={{
                          readOnly: true,
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                className="update-minicart-quantity increase-minicart-quantity"
                                onClick={() => increaseQuantity(cartState[0].id, item.Product.id, item.quantity)}
                              >
                                <Add />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <IconButton className="minicart_delete_product" onClick={() => removeItem(cartState[0].id, item.Product.id)}>
                        <DeleteOutline />
                      </IconButton>
                    </div>
                    <div className="clear"></div>
                  </div>
                  <div className="clear"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="total total_amount">
            <span>Total:</span> {total.toFixed(2)}€
          </div>
          <div className="goto">
            <Link to="/shopcart">
              <button type="button" className="shop-btn outline">
                <span>Shopping cart</span>
              </button>
            </Link>
            <Link className="shop-btn has-icon right" to="/complete-order" id="gotocheckout">
              Checkout <i className="las la-arrow-right"></i>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
