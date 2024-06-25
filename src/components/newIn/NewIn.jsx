import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetFeaturedProduct } from '../../Features/Newsroom/newsSlices';
import { GetAllProducts, GetMarkets } from '../../Features/Product/ProductSlice';
import { Typography } from '@mui/material'; // Importing Material-UI components

// Importing Material-UI Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductBox = () => {
  const dispatch = useDispatch();
  const FeaturedP = useSelector((state) => state?.news?.FeaturedP);
  const MarketState = useSelector((state) => state?.product?.Markets);
  const ProductState = useSelector((state) => state?.product?.Products);

  const [activeMarket, setActiveMarket] = useState(null);

  useEffect(() => {
    dispatch(GetFeaturedProduct());
    dispatch(GetMarkets());
    dispatch(GetAllProducts());
  }, [dispatch]);

  const handleMarketClick = (market) => {
    setActiveMarket(market.id);
  };

  
  const settings = {
    dots: true,
    arrows: true,
    prevArrow: (
      <ArrowBackIcon
        sx={{
          fontSize: 32,
          color: 'black',
          '&:hover': {
            color: 'black', // Change color on hover
            cursor: 'pointer', // Change cursor to pointer on hover
          },
        }}
      />
    ),
    nextArrow: (
      <ArrowForwardIcon
        sx={{
          fontSize: 32,
          color: 'black',
          '&:hover': {
            color: 'black', 
            cursor: 'pointer', 
          },
        }}
      />
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const carouselSettings = {
    prevArrow: (
      <ArrowBackIcon
        sx={{
          fontSize: 32,
          color: 'white',
          '&:hover': {
            color: 'white', 
            cursor: 'pointer', 
          },
        }}
      />
    ),
    nextArrow: (
      <ArrowForwardIcon
        sx={{
          fontSize: 32,
          color: 'white',
          '&:hover': {
            color: 'white', 
            cursor: 'pointer', 
          },
        }}
      />
    ),
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };

  // Filter and limit products based on active market
  const filteredProducts = ProductState?.filter(product => product.marketId === activeMarket).slice(0, 4) || [];
  const firstBlock = filteredProducts.slice(0, 2);
  const secondBlock = filteredProducts.slice(2, 4);

  return (
    <section className="new-in-featured mb-4">
      <div className="new-in-featured__wrapper">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-xl-6">
              <div className="new-in new-in-featured__box">
                <Typography variant="h2" className="new-in-featured__title">New In</Typography>
                <div className="ajax-carousel-container">
                  <div className="actions">
                    {MarketState?.map((market) => (
                      <div
                        key={market.id}
                        className={`action-button ${activeMarket === market.id ? 'active' : ''}`}
                        onClick={() => handleMarketClick(market)}
                      >
                        {market.name}
                      </div>
                    ))}
                  </div>
                  <div className="ajax-carousel">
                    <div className="container-fluid carousel-container new">
                      <div className="row productboxwrap pb-0 ml- mr-0">
                        <div className="col-12">
                          <div className="container pl-2 pr-2">
                            <Slider {...settings}>
                              {firstBlock.map((product) => (
                                <div key={product.id} style={{ flex: '1 0 48%', boxSizing: 'border-box', padding: '10px' }}>
                                  <Link to={`/ProductDetail/${product.id}`} tabIndex="-1">
                                    <div>
                                      <div className="product-box" data-id={product.id} data-quantity="YOUR_PRODUCT_QUANTITY" data-price="YOUR_PRODUCT_PRICE">
                                        <div className="product-box__img">
                                          <img src={product.image} alt={product.title} className="lazy-scroll loaded" />
                                        </div>
                                        <div className="product-box__title">
                                          <Typography variant="body1">{product.title}</Typography>
                                        </div>
                                        <div className="product-box__code">
                                          <div className="product-box__code">{product.id}</div>
                                        </div>
                                        <Typography variant="body2" className="product-box__desc">{product.description}</Typography>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              ))}
                            </Slider>
                            {secondBlock.length > 0 && (
                              <Slider {...settings}>
                                {secondBlock.map((product) => (
                                  <div key={product.id} style={{ flex: '1 0 48%', boxSizing: 'border-box', padding: '10px' }}>
                                    <Link to={`/ProductDetail/${product.id}`} tabIndex="-1">
                                      <div>
                                        <div className="product-box" data-id={product.id} data-quantity="YOUR_PRODUCT_QUANTITY" data-price="YOUR_PRODUCT_PRICE">
                                          <div className="product-box__img">
                                            <img src={product.image} alt={product.title} className="lazy-scroll loaded" />
                                          </div>
                                          <div className="product-box__title">
                                            <Typography variant="body1">{product.title}</Typography>
                                          </div>
                                          <div className="product-box__code">
                                            <div className="product-box__code">{product.id}</div>
                                          </div>
                                          <Typography variant="body2" className="product-box__desc">{product.description}</Typography>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                ))}
                              </Slider>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="featured-products__slider jsFeaturedProductsHome featured-products__slider h-100 slick-initialized slick-slider slick-dotted">
                <Slider {...carouselSettings}>
                  {FeaturedP?.map(product => (
                    <div key={product.Product.id} className="featured-products new-in-featured__box" style={{ backgroundImage: `url(${product.imageUrl})` }}>
                      <Typography variant="h2" className="new-in-featured__title">{product.title}</Typography>
                      <div className="featured-products__tag">{product.title}</div>
                      <div className="product-box">
                        <a href={product.Product.link} className="product-box__img" tabIndex="-1">
                          <img src={product.Product.image} alt={product.title} />
                        </a>
                        <a href={product.link} className="product-box__title" tabIndex="-1">
                          <Typography variant="body1">{product.Product.title}</Typography>
                        </a>
                        <div className="product-box__availability product-box__availability--in-stock">
                          <Typography variant="body2">{product.Product.availability}</Typography>
                        </div>
                        <Typography variant="body2" className="product-box__desc">{product.Product.description}</Typography>
                        <Link to={`/ProductDetail/${product.Product.id}`} className="btn btn-secondary btn-primary-white">
                          <span>View details</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBox;
