import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useParams } from "react-router-dom";
import { UseSelector,useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { GetProductById } from '../Features/Product/ProductSlice';
import AccountPage from '../components/Accountinfo/Accountinfo';
function ProductDetail() {
  const [xDisplayStyle, setXDisplayStyle] = useState('none');
  const [bDisplayStyle, setBDisplayStyle] = useState('block');
  const params = useParams()
  const dispatch = useDispatch();
  const ProductState = useSelector((state)=> state.product.Product)
  useEffect(()=>{
    dispatch(GetProductById(params.id))

  },[params.id])
  console.log(ProductState)
  const Extra_images = ProductState?.extra_image ? JSON.parse(ProductState.extra_image) : null;

const products = [
  {
    id: 1,
    name: "Product 1",
    link: "https://example.com/product1",
    image: "/images/product.jpg",
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
    image: "/images/product.jpg",
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
    image: "/images/product.jpg",
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
    image: "/images/product.jpg",
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
    image: "/images/product.jpg",
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
    image: "/images/product.jpg",
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
    image: "/images/product.jpg",
    quantity: 25,
    price: 89.99,
    onRequest: 0,
    inStock: 1,
    set: 0,
    description: "Description of Product 7"
  }
];


  const settingsProduct = {
    dots: false,
    arrows: true,

    infinite: true,
    speed: 500,
    slidesToShow: 5, // Display five products at a time
    slidesToScroll: 1, // Slide by one product
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settingsProduct: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settingsProduct: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settingsProduct: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  
const product = [
  {
    code: "L006793",
    title: "FOS Ares Profile",
    description: "Professional low noise Led profile moving head for stages and theater applications, high power 600W LED engine module, 4-55° linear zoom, intelligent fan, noise 45dB, Framing system: 4 Blades with +/-45° rotation, Color system: CMY + independent CTO, Animation wheel, Iris, 7 interchangeable rotating and 7 static gobos, 6 dichroic color filters, 4-facet prism, 0-100% linear frost, Linear Dimmer 0-100%, 32kg.",
    extra_image: [
      "https://www.fos-lighting.eu/uploads/products_1_image_2748.jpg",
      "https://www.fos-lighting.eu/uploads/products_2_image_2748.jpg",
      "https://www.fos-lighting.eu/uploads/products_3_image_2748.jpg",
      "https://www.fos-lighting.eu/uploads/products_4_image_2748.jpg",
      "https://www.fos-lighting.eu/uploads/products_5_image_2748.jpg"
    ],
    price: 2498,
    availability: "Out of stock",
    stock_eta: "in the last week of April 2024",
    features: "https://www.youtube.com/embed/PAhbZ_wBZUQ",
    technical_details: {
      technical_details_1: {
        technical_details_title: "Product description",
        technical_details_description: "Profile moving head, with maximum light shaping capabilities, and CRI: ≥ 70 suitable for event, theater, and tv applications, Intelligent fan, noise levels from 45 DB. Modular design for easy production, testing, and maintenance. X / Y positioning is smooth and accurate, ±1°, Magnetic encoder technology. Lens diameter 149 with up to 53.5 degrees linear smooth zoom. 4 blades move smoothly, and bi-directional control."
      },
      technical_details_2: {
        technical_details_title: "Light Source / Optics",
        technical_details_description: "High Power 600 Watt LED, with an approximate lifespan of 20,000 hours. Motorized zoom from 4.5 to 53.5 degrees. Linear dimming & 4 dimmer curves."
      },
      technical_details_3: {
        technical_details_title: "Mechanical effects",
        technical_details_description: "CMY & CTO linear color mixing system. 6x dichroic color & rainbow effect. Slide-in and continuous rotating animation wheel. 7x interchangeable rotating gobos. 7x fixed gobos. Soft edge and hard edge frost filters with immediate or linear insertion. 4-Facet rotating prism. Motorized iris with linear control (5 to 100%)."
      },
      technical_details_4: {
        technical_details_title: "Framing System",
        technical_details_description: "4x blades with insertion and angle control of +/- 45 degrees. Full coverage of the light path. A single blade can block the light output completely. Rotation of the framing system from 0 to 45 degrees."
      },
      technical_details_5: {
        technical_details_title: "Technical Specifications",
        technical_details_description: "CRI ≥ 70, suitable for events. Input voltage: AC100 - 240 Volt. Maximum power consumption: 800W. 3 & 5 pin XLR for DMX connection. DMX Control with 29, 34 or 37 CH. IP20, for indoor use only. Working temperature from 0 to 45 degrees Celsius. Cooling fan smart control, noise levels from 45 to 57 dB. Dimensions: 374 x 355 x 736 mm. Net weight: 32 Kg."
      },
      technical_details_6: {
        technical_details_title: "Packing Details",
        technical_details_description: "Carton box for 1 pc: 71 x 61 x 72 cm - 35 kg"
      }
    },
    MarketId: 1,
    CategoryId: 1,
    SubcategoryId: 1
  },]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1114) {
        setXDisplayStyle('none');
        setBDisplayStyle('block');
      } else {
        setXDisplayStyle('block');
        setBDisplayStyle('none');
      }
    };

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="mainbody" className="mainbody pinfo">
      {/* Breadcrumb */}
      <div className="breadcrumb" id="breadcrumb_static">
        <div className="mainwrap container-fluid">
          <a href="https://www.fos-lighting.eu" className="headerNavigation">Home</a>
          <i>/</i>
          <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="headerNavigation">FOS Technologies</a>
          <i>/</i>
          <a href="https://www.fos-lighting.eu/stage-lighting-c-172_17.html" className="headerNavigation">Stage Lighting</a>
          <i>/</i>
          <a href="https://www.fos-lighting.eu/retro-lighting-c-172_17_164.html" className="headerNavigation">Retro Lighting</a>
          <i>/</i>
          <a href="https://www.fos-lighting.eu/fos-halo-led-p-432.html" className="headerNavigation">FOS Halo Led</a>
        </div>
      </div>

      {/* Main Content */}
      <div id="maincontent" className="maincontent">
        {/* Product Main Content */}
        <div className="container-fluid mb-40px">
          <form
            name="cart_quantity_form"
            id="cart_quantity_form"
            action="https://www.fos-lighting.eu/fos-halo-led-p-432.html?action=add_product"
            method="post"
            className="cart_quantity_form"
          >
            {/* Product Details */}
            <div className="product-main-section-wrapper">
              <div className="row product-main-row">
                {/* PRODUCT COLUMN 1 */}
                <div className="col product-c-1">
                  <div className="headingtitle" style={{ display: bDisplayStyle }}>
                    <h1>{ProductState?.title}</h1>
                    <div className="product__category-img">
                      <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html">
                        <img className="cat-logo" src="/images/logo1.svg" alt="Category Logo" />
                      </a>
                    </div>
                    <div className="product_model">
                      <div className="model-wrap">
                        <div className="model">
                          <span>Product code:</span>
                          {ProductState?.code}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-title-info row no-gutters"></div>
                  <div className="product-c-1__wrapper">
                    <div className="product-gallery">
                      <div className="image">
                        <a href={ProductState?.image} id="main_product_image_link">
                          <img src={ProductState?.image} className="crisp" draggable="false" border="0" />
                          <div className="product-box__extra-info">
                            <div className="product-box__hot">
                              <i className="las la-fire"></i>
                              <span>Hot product</span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <input type="hidden" name="product_original_image" value={product.image} />
                      <div className="extra-images vertical">
                        {Extra_images?.map((image, index) => (
                          <div className="box additional_image" key={index}>
                            <a href={image} data-fancybox="product-image" data-caption={product.title} className="gallerySmallImage" data-change={image}>
                              <img src={image} border="0" title={product.title} alt={product.title} />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* PRODUCT COLUMN 2 */}
                <div className="col product-c-2">
                  <div className="headingtitle" style={{ display: xDisplayStyle }}>
                    <h1>{ProductState?.title}</h1>
                    <div className="product__category-img">
                      <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html">
                        <img className="cat-logo" src="/images/logo1.svg" alt="Category Logo" />
                      </a>
                    </div>
                    <div className="product_model">
                      <div className="model-wrap">
                        <div className="model">
                          <span>Product code:</span>
                          {ProductState?.code}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-c-2__wrapper">
                    <div className="product_description">{ProductState?.description}</div>
                    <div className="product-checkpoints">
                      <a href="https://www.fos-lighting.eu/why-choose-fos-pr-6.html" target="_blank" className="product-checkpoint-item">
                        <img src="images/icons/Checkmark.svg" alt="" />
                        <span>Why choose FOS</span>
                      </a>
                      <a href="https://www.fos-lighting.eu/terms-of-cooperation-pr-3.html" target="_blank" className="product-checkpoint-item">
                        <img src="images/icons/Checkmark.svg" alt="" />
                        <span>2 years warranty</span>
                      </a>
                    </div>
                    <div className="login-for-price login-popup-link mt-4">Please <b>login</b> to see the price 
                      <svg viewBox="0 0 17 18">
                        <g fill="#F58220" fillRule={"nonzero"}>
                          <path d="M8.5 9A4.5 4.5 0 104 4.5 4.507 4.507 0 008.5 9zm0-7.66A3.159 3.159 0 115.341 4.5 3.163 3.163 0 018.5 1.342V1.34zM1.345 18c0-3.713 3.21-6.734 7.155-6.734 3.945 0 7.154 3.021 7.154 6.734H17c0-2.122-.896-4.157-2.49-5.657C12.916 10.843 10.754 10 8.5 10s-4.416.843-6.01 2.343a7.938 7.938 0 00-1.847 2.594A7.542 7.542 0 000 18h1.345z"></path>
                        </g>
                      </svg>
                    </div>
                    {/* Additional Product Details */}
                    {/* You can add more details here */}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Product Page Sections */}
        <div className="container-fluid mb-40px">
          <div className="row">
            <div className="col-12">
              <div className="product-page-section position-relative">
                {/* Product Tabs */}
                <div className={"product-page-section-bottom"}>
                  <nav className="position-relative mb-lg-5 mb-3">
                    <div className="nav nav-tabs d-flex justify-content-start justify-content-lg-center border-btm-unset jsProductTabs" id="product-tabs" role="tablist">
                      <button className="nav-link active" id="features-tab" data-toggle="tab" data-target="#features" type="button" role="tab" aria-controls="features" aria-selected="true">Features</button>
                      <button className="nav-link" id="techical-details-tab" data-toggle="tab" data-target="#techical-details" type="button" role="tab" aria-controls="techical-details" aria-selected="true">Technical Details</button>
                      <button className="nav-link" id="accesorries-tab" data-toggle="tab" data-target="#accesorries" type="button" role="tab" aria-controls="accesorries" aria-selected="true">Accessories</button>
                    <button className="nav-link" id="documents-tab" data-toggle="tab" data-target="#documents" type="button" role="tab" aria-controls="documents" aria-selected="true">Documents</button>
                    <button className="nav-link" id="videos-tab" data-toggle="tab" data-target="#videos" type="button" role="tab" aria-controls="videos" aria-selected="true">Videos</button>
                      {/* Add more tabs here */}
                    </div>
                  </nav>
               <div className="tab-content jsProductTabsContent" id="myTabContent">
  <div className="tab-pane fade " id="features" role="tabpanel" aria-labelledby="features-tab">
    <div className="product-info-video-wrapper">
      <iframe
        width="100%"
        height="100%"
        id="video"
        src="//www.youtube.com/embed/bGNl3PMiAeQ?enablejsapi=1&amp;html5=1"
        frameBorder="0"
        allowFullScreen=""
        title="FOS Nitro BSW"
        data-gtm-yt-inspected-8="true"
      ></iframe>
    </div>
  </div>
  <div className="tab-pane fade" id="techical-details" role="tabpanel" aria-labelledby="techical-details-tab">
  <div className="row">
      <div className="col-lg-7 m-auto col-single">
        <div className="accordion accordion--products-details" id="detailsAccordion">
          <div className="card">
            <div className="card-header" id="heading-details-1">
              <div className="collapsed" type="button" data-toggle="collapse" data-target="#details-1" aria-expanded="false" aria-controls="details-1">
                Product Description
              </div>
            </div>
            <div id="details-1" className="collapse" aria-labelledby="heading-details-1" data-parent="#detailsAccordion">
              <div className="card-body">
                <p>Beam/Spot/Wash fixture, based on Stage 295 Watt Discharge Lamp.<br />
                  The newest technology NEOLUX lamp 295 watt become Nitro BSW&nbsp; the ideal solution<br />
                  for large events and concerts that demand a work horse luminaire.<br />
                  &nbsp;</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="heading-details-2">
              <div className="" type="button" data-toggle="collapsed" data-target="#details-2" aria-expanded="false" aria-controls="details-2">
                Light Source / Optics
              </div>
            </div>
            <div id="details-2" className="collapse show " aria-labelledby="heading-details-2" data-parent="#detailsAccordion">
              <div className="card-body">
                <p>Based on Stage 295 Watt discharge lamp, 8000 Kelvin, lifespan of 1500 hours, and maximum luminous flux of 14000 lm.&nbsp;<br />
                  Linear zoom and focus.<br />
                  Beam mode offers 3° to 27°, spot mode ranges from 7° to 36° beam angles.<br />
                  Frost filter for wash light simulation projection.<br />
                  &nbsp;</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="heading-details-1">
              <div className="collapsed" type="button" data-toggle="collapse" data-target="#details-1" aria-expanded="false" aria-controls="details-1">
                Product Description
              </div>
            </div>
            <div id="details-1" className="collapse" aria-labelledby="heading-details-1" data-parent="#detailsAccordion">
              <div className="card-body">
                <p>Beam/Spot/Wash fixture, based on Stage 295 Watt Discharge Lamp.<br />
                  The newest technology NEOLUX lamp 295 watt become Nitro BSW&nbsp; the ideal solution<br />
                  for large events and concerts that demand a work horse luminaire.<br />
                  &nbsp;</p>
              </div>
            </div>
          </div>
          {/* Additional card elements for Effects, Control, Technical Specifications */}
        </div>
      </div>
    </div>
</div>
<div className="tab-pane fade  active show " id="features" role="tabpanel" aria-labelledby="features-tab">
  <div className="product-page-section product-page-section--slider">
    <div className="products-carouesl-product-info">
      <div className="jsProductCarosulFiveProducts slick-initialized slick-slider">
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

  {/* Additional tab panes go here */}
</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProductDetail;
