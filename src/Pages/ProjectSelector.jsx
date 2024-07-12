import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchProjectWithGalleriesAndProducts } from '../Features/projectProduct/projectProductSlice'; // Adjust path as per your slice location
import "./projectSelector.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ImageMapperContainer = () => {
    const dispatch = useDispatch();
    const [selectedProject  , setSelectSelectedProject] = useState([]) ; 
    const [selectProducts , setSelectProducts] = useState([]) ;
    const { id } = useParams(); // Assuming you are using react-router-dom for routing

    useEffect(() => {
        const getData = async () => {
             const res = await axios.get(`http://localhost:3000/projects/${id}`)
             setSelectSelectedProject(res.data)
        }
        getData() ;
    }, [dispatch, id]);


useEffect(()=> {
  const getData = async () => {
    const res = await axios.get(`http://localhost:3000/project-product/projectbyId/${id}`)
    setSelectProducts(res.data.products)
}
getData() ;
}, [id])

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
        slidesToShow: 5,
        slidesToScroll: 1,
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

    // Handle initial loading state or if selectedProject is not yet available
    if (!selectedProject) {
        return <div>Loading...</div>; // Replace with a loading indicator or null
    }

    // Render component content once selectedProject is available
    return (
        <div id="maincontent" className="maincontent">
            {/* Main Content */}
            <div className="headingtitle">
                <div className="mainwrap project_title_container">
                    <div className="project_title">{selectedProject.title}</div>
                </div>
            </div>
            <div className="breadcrumb">
                <b>You are here: </b>
                <a href="https://www.fos-lighting.eu" className="headerNavigation">Home</a> »
                <a href="https://www.fos-lighting.eu/projects.php" className="headerNavigation">Projects</a> »
                {selectedProject.title}
            </div>

            <div className="container-fluid mb-5">
                <div className="section-bg-w-br-30 p-3 p-lg-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="product-page-section__title text-left">
                                {selectedProject.title}
                            </h1>
                            <p className="text-left">{selectedProject.description}</p>
                        </div>
                        <div className="col-lg-6">
                            <div style={{ width: '100%', height: '400px' }}>
                                <img src={selectedProject.image} className="project-main-image-heading" alt="Main Project" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-5">
                <div className="section-bg-w-br-30 px-5 pb-5">
                    <div className="project-description">
                        {/* Render project description or additional details */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 mb-5">
                        <div className="product-page-section product-page-section--gallery position-relative">
                            <h2 className="product-page-section__title">Gallery</h2>
                            <div className="project-gallery-outer-wrapper">
                                <Slider {...settings}>
                                    {selectedProject.galleries?.map((gallery, index) => (
                                        <div key={index} className="project-gallery-wrapper">
                                            <a className="project-gallery-img jsAboutImgLightbox" tabIndex="0">
                                                <img src={gallery.url} className="mainimage" alt={`Gallery Image ${index + 1}`} />
                                            </a>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-5 project-single">
                <div className="row">
                    <div className="col-12">
                        <div className="product-page-section">
                            <h2 className="product-page-section__title">Products Used</h2>
                            <div className="products-carousel-product-info">
                                <div className="projects_related_products">
                                    <Slider {...settingsProduct}>
                                        {selectProducts?.map((product, index) => (
                                            <div key={index}>
                                                <a href={product.link}>
                                                    <div className="product-box" data-id={product.id} data-quantity={product.quantity} data-price={product.price} data-on_request={product.onRequest} data-flag_instock={product.inStock} data-set={product.set}>
                                                        <div className="product-box__img">
                                                            <img className="lazy-scroll loaded" src={product.image} alt={`Product Image ${index + 1}`} />
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
    );
};

export default ImageMapperContainer;
