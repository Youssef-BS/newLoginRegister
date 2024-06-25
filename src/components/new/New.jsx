import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { projects } from './data';
import { Link } from 'react-router-dom';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'; 
import './New.css'; 

function New() {
  const [currentSlide, setCurrentSlide] = useState(0); 

  const sliderRef = useRef(null); 
    const goToPrevious = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev(); 
      }
    };
  
    const goToNext = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); 
      }
    };

  const settings = {
    prevArrow: <ArrowBackIos sx={{ fontSize: 32 }} onClick={goToPrevious} />,
    nextArrow: <ArrowForwardIos sx={{ fontSize: 32 }} onClick={goToNext} />, 
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    afterChange: (current) => setCurrentSlide(current), 
  };



  return (
    <div className="image-mapper-container">
      <Slider ref={sliderRef} {...settings}>
        {projects.map((project, index) => (
          <div className="mapper-slick" key={index}>
            <div className="container-fluid main">
              <div className="row no-gutters">
                <div className="col-lg-5 col-xl-5 col-md-12 text">
                  <div className="wrap inner pt-10 pb-10 pr-5 pl-5">
                    <div className="projects-title-cont">
                      <h2>Our Projects</h2>
                      <Link to="/projects" className="more">
                        View all projects
                      </Link>
                    </div>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <div className="btn-container">
                      <Link to={'/project-select'} className="btn btn-primary-gray btn-big mt-4">
                        Learn More
                      </Link>
                    </div>
                    <div className="arrows-notification">
                      <div className="notification">
                        Click the <ArrowForwardIos className="icon" /> button to view more about the products used in this
                        project
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-xl-7 col-md-12 pl-0 image-wrap">
                  <div className="imagemapper-wrapper">
                    <img src={project.imageUrl} alt={project.title} className="crisp canvas-img" />
                    {project.pins.map((pin, pinIndex) => (
                      <div
                        key={pinIndex}
                        className="imapper-pin pin-style"
                        data-sku={pin.sku}
                        style={{ top: pin.top, left: pin.left }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* Navigation buttons */}
      <button className="slider-nav-btn prev" onClick={goToPrevious}>
        <ArrowBackIos sx={{ fontSize: 32 }} />
      </button>
      <button className="slider-nav-btn next" onClick={goToNext}>
        <ArrowForwardIos sx={{ fontSize: 32 }} />
      </button>
    </div>
  );
}

export default New;
