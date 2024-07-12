import axios from 'axios';

const API_URL = 'http://localhost:3000/wishlist'; // Adjust the URL as needed

// Create a new wishlist
const createWishlist = async (userId, total) => {
  const response = await axios.post(API_URL, { UserId: userId, total });
  return response.data;
};

// Get all wishlists for a user
const getWishlistsByUser = async (userId) => {
  const response = await axios.get(`${API_URL}/user/${userId}`);
  return response.data;
};

// Add a product to a wishlist
const addProductToWishlist = async (userId, productId, quantity) => {
  const response = await axios.post(`${API_URL}/add`, { UserId: userId, ProductId: productId, quantity });
  return response.data;
};

// Update product quantity in wishlist
const updateProductQuantity = async (wishlistId,productId, quantity) => {
  const response = await axios.post(`${API_URL}/update`, { wishlistId,productId, quantity });
  return response.data;
};

// Remove a product from wishlist
const removeProductFromWishlist = async (wishlistId,productId) => {
  const response = await axios.post(`${API_URL}/remove`,{ wishlistId, productId });
  return response.data;
};

export default {
  createWishlist,
  getWishlistsByUser,
  addProductToWishlist,
  updateProductQuantity,
  removeProductFromWishlist
};
