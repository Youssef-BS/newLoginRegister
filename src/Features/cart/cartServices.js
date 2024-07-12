import axios from 'axios';

const API_URL = 'http://localhost:3000/cart/';

// Fetch all items in the cart
const fetchCartItems = async (cartId) => {
  const response = await axios.get(`${API_URL}${cartId}`);
  return response.data;
};
const fetchCart= async (userId) => {
    const response = await axios.get(`${API_URL}${userId}/cart`);
    return response.data;
  };                                                                                                            

// Add a product to the cart
const addToCart = async (userId, productId, quantity) => {
  const response = await axios.post(`${API_URL}${userId}/add`, { productId, quantity });
  return response.data;
};

// Update product quantity in the cart
const updateCartItemQuantity = async (cartId, productId, quantity) => {
  const response = await axios.post(`${API_URL}${cartId}/update`, { productId, quantity });
  return response.data;
};

// Remove a product from the cart
const removeFromCart = async (cartId, productId) => {
  await axios.delete(`${API_URL}${cartId}/remove`, { data: { productId } });
  return productId;
};

const cartService = {
  fetchCartItems,
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  fetchCart
};

export default cartService;
