import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { GetAll, GetAllProductMarket, GetAllProducts, GetMarkets } from '../../Features/Product/ProductSlice';
const CategoryBox = () => {

  const [data,setData] = useState({})

  const dispatch = useDispatch();
  const MarketState = useSelector((state)=> state?.product?.Markets);
  const ProductState = useSelector((state)=> state?.product?.Products);


  useEffect (()=>{
    dispatch(GetMarkets())
    dispatch(GetAllProducts())
    setData(ProductState)

  },[dispatch]);
 console.log(ProductState);

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1445,
            settings: {
                dots: false
            },
        },
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots:false
            },
        },
        {
            breakpoint: 768,
            settings: {
                dots: false,
            },
        }
    ],

  };
  
  

  return (
    <section className="section-categories-boxes">
      <div className="container-fluid">
        <div className="row">
        {MarketState?.slice(0,4).map((market)=>(
            <div className="col-xl-6 mb-4">
            <div className="category-box">
              <div className="category-box__left">
                <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="category-box__image-wrapper">
                  <img className="category-box__image" src="https://www.fos-lighting.eu/uploads/categories_0_cat_image_172.png" alt="Intelligent Lighting Technology" />
                </a>
                <h2 className="category-box__title">{market.name}</h2>
                <div className="category-box__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</div>
                <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="btn btn-primary-gray btn-big-fn18 category-box__btn">Explore</a>
              </div>
              <div className="category-box__right">
                <Slider {...settings}>
                  {ProductState?.map((product)=>(
                     product?.MarketId == market?.id ? (   
                    <div key={product.id}>
                      <div className="product-box">
                        <div className="product-box__img">
                        <Link to={`/ProductDetail/${product.id}`}>

                          <img src={product?.image} alt={product?.title} />
                          </Link>
                        </div>
                        <div className="product-box__title">
                          <span>{product?.title}</span>
                        </div>
                        <p className="product-box__desc">{product.description}</p>
                        {/* <Link to="/explore" className="btn btn-primary-gray btn-big-fn18 category-box__btn">Explore</Link> */}
                      </div>
                    </div>
                    ):null
                  ))}
                </Slider>
              </div>
            </div>
          </div>

))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBox;