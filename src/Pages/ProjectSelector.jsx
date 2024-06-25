import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import "./projectSelector.css";

const ImageMapperContainer = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
      const settingsProduct = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Display five products at a time
        slidesToScroll: 1, // Slide by one product
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
      

  return (
    <>
   <div id="maincontent" className="maincontent ">
    {/* Begin Main Content */}
    <div className="headingtitle">
        <div className="mainwrap project_title_container">
            {/* <div className="project_title">300x Scorpio Beams by Sky Solutions company, at the end of the trilogy of concerts!</div> */}
        </div>
    </div>
    <div className="breadcrumb"><b>You are here: </b> <a href="https://www.fos-lighting.eu" className="headerNavigation">Home</a> » <a href="https://www.fos-lighting.eu/projects.php" className="headerNavigation">Projects</a> » 300x Scorpio Beams by Sky Solutions company, at the end of the trilogy of concerts!</div>

    <div className="container-fluid mb-5">
        <div className="section-bg-w-br-30 p-3 p-lg-5">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="product-page-section__title text-left">
                        300x Scorpio Beams by Sky Solutions company, at the end of the trilogy of concerts!
                    </h1>
                    <p className="text-left">The production and design company, Sky Solutions based in Belgrade, Serbia, put in action 300 pearl and black Scorpio beams, in a very impressive setup for three concerts of Aleksandra Prijovic!&nbsp;<br />
                        <br />
                        Check out the inspiring setup and result!&nbsp;<br />
                        <br />
                        Production Company &amp; design: <a href="https://skymusicproduction.rs/">Sky Music</a><br />
                        Featured FOS fixture: <a href="https://www.fos-lighting.eu/fos-scorpio-beam-p-610.html">Scorpio Beam</a><br />
                        <a href="https://www.facebook.com/SkymusicEvents">Facebook Page</a><br />
                        <br />
                        &nbsp;
                    </p>
                </div>
                <div className="col-lg-6">
                    <div style={{ width: '100%', height: '400px' }}>
                        <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" className="project-main-image-heading" border="0" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid mb-5">
        <div className="section-bg-w-br-30 px-5 pb-5 d-none">
            <div className="project-description">
                <div className="column_left ">
                    <div className="description d-none">
                        The production and design company, Sky Solutions based in Belgrade, Serbia, put in action 300 pearl and black Scorpio beams, in a very impressive setup for three concerts of Aleksandra Prijovic!&nbsp;<br />
                        <br />
                        Check out the inspiring setup and result!&nbsp;<br />
                        <br />
                        Production Company &amp; design: <a href="https://skymusicproduction.rs/">Sky Music</a><br />
                        Featured FOS fixture: <a href="https://www.fos-lighting.eu/fos-scorpio-beam-p-610.html">Scorpio Beam</a><br />
                        <a href="https://www.facebook.com/SkymusicEvents">Facebook Page</a><br />
                        <br />
                        &nbsp;
                    </div>
                </div>
            </div>
            <div className="column_right">
            </div>
            <div className="clear"></div>
        </div>

        <div className="container-fluid mb-5">
                <div className="section-bg-w-br-30 px-5 pb-5 d-none">
                    <div className="project-description">
                        {/* Your existing project description */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 mb-5">
                        <div className="product-page-section product-page-section--gallery position-relative">
                            <h2 className="product-page-section__title">Gallery</h2>
                            <div className="project-gallry-outer-wrapper">
                            <Slider {...settings}>
      <div className="project-gallery-wrapper">
        <a className="project-gallery-img jsAboutImgLightbox" tabIndex="0">
          <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" className="mainimage" alt="Gallery Image 1" />
        </a>
      </div>
      <div className="project-gallery-wrapper">
        <a className="project-gallery-img jsAboutImgLightbox" tabIndex="0">
          <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" className="mainimage" alt="Gallery Image 1" />
        </a>
      </div>
      <div className="project-gallery-wrapper">
        <a className="project-gallery-img jsAboutImgLightbox" tabIndex="0">
          <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" className="mainimage" alt="Gallery Image 1" />
        </a>
      </div>
      <div className="project-gallery-wrapper">
        <a className="project-gallery-img jsAboutImgLightbox" tabIndex="0">
          <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" className="mainimage" alt="Gallery Image 1" />
        </a>
      </div>
      <div className="project-gallery-wrapper">
        <a className="project-gallery-img jsAboutImgLightbox" tabIndex="0">
          <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" className="mainimage" alt="Gallery Image 1" />
        </a>
      </div>
      <div className="project-gallery-wrapper">
        <a className="project-gallery-img jsAboutImgLightbox" tabIndex="0">
          <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" className="mainimage" alt="Gallery Image 1" />
        </a>
      </div>
      <div className="project-gallery-wrapper">
        <a className="project-gallery-img jsAboutImgLightbox" tabIndex="0">
          <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" className="mainimage" alt="Gallery Image 1" />
        </a>
      </div>
    
    </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
    </div>

    <div className="container-fluid mb-5 project-single">
      <div className="row">
        <div className="col-12">
          <div className="product-page-section">
            <h2 className="product-page-section__title">Products Used</h2>
            <div className="products-carouesl-product-info">
              <div className="projects_related_products">
                <Slider {...settingsProduct}>
                  {/* Render product slides */}
                  {products.map((product, index) => (
                    <div key={index}>
                      <a href={product.link}>
                        <div className="product-box" data-id={product.id} data-quantity={product.quantity} data-price={product.price} data-on_request={product.onRequest} data-flag_instock={product.inStock} data-set={product.set}>
                          <div className="product-box__img">
                            <img className="lazy-scroll loaded" src={product.image} />
                          </div>
                          <div className="product-box__title">
                            <span>{product.name}</span>
                          </div>
                          <div className="product-box__code">
                            <div className="product-box__code"></div>
                          </div>
                          <p className="product-box__desc">{product.description}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>
  



    </>
  );
};

const products = [
    {
      id: 1,
      name: "Product 1",
      link: "https://example.com/product1",
      image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      quantity: 10,
      price: 99.99,
      onRequest: 0,
      inStock: 1,
      set: 0,
      description: "Description of Product 1"
    },
    {
      id: 2,
      name: "Product 2",
      link: "https://example.com/product2",
      image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      quantity: 5,
      price: 149.99,
      onRequest: 0,
      inStock: 1,
      set: 0,
      description: "Description of Product 2"
    },
    {
      id: 3,
      name: "Product 3",
      link: "https://example.com/product3",
      image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      quantity: 20,
      price: 79.99,
      onRequest: 1,
      inStock: 0,
      set: 0,
      description: "Description of Product 3"
    },
    {
      id: 4,
      name: "Product 4",
      link: "https://example.com/product4",
      image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      quantity: 15,
      price: 199.99,
      onRequest: 0,
      inStock: 1,
      set: 0,
      description: "Description of Product 4"
    },
    {
      id: 5,
      name: "Product 5",
      link: "https://example.com/product5",
      image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      quantity: 8,
      price: 129.99,
      onRequest: 0,
      inStock: 1,
      set: 0,
      description: "Description of Product 5"
    },
    {
      id: 6,
      name: "Product 6",
      link: "https://example.com/product6",
      image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      quantity: 12,
      price: 109.99,
      onRequest: 0,
      inStock: 1,
      set: 0,
      description: "Description of Product 6"
    },
    {
      id: 7,
      name: "Product 7",
      link: "https://example.com/product7",
      image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      quantity: 25,
      price: 89.99,
      onRequest: 0,
      inStock: 1,
      set: 0,
      description: "Description of Product 7"
    }
  ];
  

export default ImageMapperContainer;
