import axios from "axios";

const getNews = async()=>{
    const response = await axios.get(
        'http://localhost:3000/pro/news',
    );
    return response.data;
}
const getFeaturedProduct = async()=>{
    const response = await axios.get(
        'http://localhost:3000/pro/featured-product',
    );
    return response.data;
}
  const AuthNews = {
   getNews,
   getFeaturedProduct
};

export default AuthNews
