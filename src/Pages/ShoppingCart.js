import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { fetchCart, updateCartItemQuantity, removeFromCart } from '../Features/cart/cartSlice';

const ShoppingCart = () => {
  const userId = 1;
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.cart);
  const updState = useSelector((state) => state.cart.upd);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(fetchCart(userId));
  }, [userId, updState]);

  useEffect(() => {
    if (cartState.length > 0) {
      let total = 0;
      cartState[0].CartProducts.map((cartProduct) => {
        total += cartProduct.Product.price * cartProduct.quantity;
      });
      setTotal(total);
    }
  }, [cartState]);

  const decreaseQuantity = (cartId, productId, quantity) => {
    if (quantity > 1) {
      dispatch(updateCartItemQuantity({ cartId, productId, quantity: quantity - 1 }));
    } else {
      dispatch(removeFromCart({ cartId, productId }));
    }
  };

  const removeFromCart = (cartId, productId) => {
    dispatch(removeFromCart({ cartId, productId }));
  };

  const increaseQuantity = (cartId, productId, quantity) => {
    dispatch(updateCartItemQuantity({ cartId, productId, quantity: quantity + 1 }));
  };

  return (
    <div id="maincontent" className="maincontent cart">
      <div className="container-fluid">
        <div className="section-bg-w-br-30">
          <div id="shopping_cart_dynamic_content" className="mainwrap shopping_cart_dynamic_content mt-3 mb-5">
            <div className="headingtitle">
              <h1>Shopping Cart</h1>
            </div>

            <div className="box text"></div>

            <div className="content cart">
              <div className="products">
                <form
                  name="cart_quantity"
                  id="cart_quantity"
                  action="https://www.fos-lighting.eu/shopping_cart.php?action=update_product"
                  method="post"
                >
                  <div className="shoppingCart">
                    <div className="productCart titles-row">
                      <div className="productItemCart title">
                        <div className="productRemoveCart">Delete</div>
                        <div className="centerit productImageCart">Image</div>
                        <div className="productTitleCart">Product(s)</div>
                        <div className="productQuantityCart">Quantity</div>
                        <div className="productPriceCart">Total</div>
                      </div>
                    </div>
                    {cartState[0]?.CartProducts?.map((cartProduct) => (
                      <div className="productCart">
                        <div>
                          <div className="productItemCart">
                            <div className="productRemoveCart">
                              <div className="delete action">
                                <input
                                  type="checkbox"
                                  name="cart_delete[]"
                                  value="1020"
                                  className="cart_delete_product_value cart_close_value"
                                />
                              </div>
                              <div className="delete text cart_close">
                                <DeleteIcon onClick={() => removeFromCart(cartState[0].id, cartProduct.Product.id)} />
                              </div>
                            </div>
                            <div className="centerit productImageCart">
                              <Link to={`/ProductDetail/${cartProduct.Product.id}`}>
                                <img
                                  style={{ width: '75px', height: '75px', borderRadius: '100%' }}
                                  src={cartProduct.Product.image}
                                  border="0"
                                  title={cartProduct.Product.title}
                                  alt={cartProduct.Product.title}
                                />
                              </Link>
                            </div>
                            <div className="productTitleCart">
                              <Link to={`/ProductDetail/${cartProduct.Product.id}`} className="productNameCart">
                                <b>{cartProduct.Product.title}</b>
                              </Link>
                              <span className="productModelCart">Model: {cartProduct.Product.code}</span>
                            </div>
                            <div className="productQuantityCart">
                              <RemoveIcon onClick={() => decreaseQuantity(cartState[0].id, cartProduct.Product.id, cartProduct.quantity)} />
                              <input
                                type="text"
                                name="cart_quantity[]"
                                id="cart_quantity[]"
                                value={cartProduct.quantity}
                                style={{ width: '40px', textAlign: 'center' }}
                                className="selectform cart_quantity_action cart_quantity_value"
                              />
                              <AddIcon onClick={() => increaseQuantity(cartState[0].id, cartProduct.Product.id, cartProduct.quantity)} />
                            </div>
                            <div className="productPriceCart">
                              <b>{cartProduct.Product.price}€</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="shoppingCartDescription">
                    <div className="title">Total</div>
                    <div className="box total">
                      <div className="inner">
                        <div className="description total total_amount">
                          <span id="cart-text">Total:</span>
                          <span id="cart-value">{total}</span>
                          <div className="clear"></div>
                        </div>
                        <div className="description prices-not-include-vat">Prices do not include VAT</div>
                      </div>

                      <div className="description buttons">
                        <Link to="/complete-order">
                          <div className="shop-btn has-icon right">
                            <span>Checkout</span>
                            <i className="las la-arrow-right"></i>
                          </div>
                        </Link>
                      </div>

                      <div className="description buttons">
                        <a href="https://www.fos-lighting.eu">
                          <input
                            type="button"
                            border="0"
                            alt="Continue Shopping"
                            value="Continue Shopping"
                            title="Continue Shopping"
                            className="continue-shop"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
