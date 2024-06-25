import React, { useRef } from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons from React Icons
import {Link} from "react-router-dom";
// Custom next arrow component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

// Custom previous arrow component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

const Videos = () => {
  const sliderRef = useRef(null); // Ref for the Slider component

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section className="section-video-slider mb-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Slider ref={sliderRef} {...settings}>
              <div className="product-info-video-wrapper product-info-video-wrapper--fullradius">
                <div className="video-slider__video-wrapper jsVideoSlideWrapper jsNotYtVideo">
                  <ReactPlayer
                    url="https://videos.pexels.com/video-files/5948574/5948574-hd_1920_1080_30fps.mp4"
                    playing={true}
                    loop={true}
                    muted={true}
                    width='100%'
                    height='auto'
                  />
                  <div className="video-slider__slide-play jsPlayVideoSlider d-md-none">
                    <FaPlay /> {/* Replacing image with FaPlay icon */}
                  </div>
                  <div className="video-slider__slide-play jsLoadingVideoSlider">
                    {/* You can replace loading image with any loading animation */}
                    <div>Loading...</div>
                  </div>
                </div>
                <div className="video-slider__video-info">
                  <div className="video-slider__video-info-text">
                    <h2>Spark Jet Pro V2</h2>
                    <p>The best sparkle machine with RDM function and height adjustment channel! Adjustable Height 1.5-5M, Maximum Single Continuous Duration 30s, Heat Up Time 5 Minutes, seetronic connectors, consumption 20-25g/Minute.</p>
                  </div>
                  <div className="video-slider__video-info-btn">
                  <Link to="/ProductDetail" className="btn btn-primary btn-big jsPlayVideoSliderBtn" tabIndex="-1">Explore more</Link>
                  </div>
                </div>
              </div>
              {/* Add more video slides below */}
              <div className="product-info-video-wrapper product-info-video-wrapper--fullradius">
                <div className="video-slider__video-wrapper jsVideoSlideWrapper jsNotYtVideo">
                  <ReactPlayer
                    url="https://videos.pexels.com/video-files/5948574/5948574-hd_1920_1080_30fps.mp4"
                    playing={true}
                    loop={true}
                    muted={true}
                    width='100%'
                    height='auto'
                  />
                  <div className="video-slider__slide-play jsPlayVideoSlider d-md-none">
                    <FaPlay /> {/* Replacing image with FaPlay icon */}
                  </div>
                  <div className="video-slider__slide-play jsLoadingVideoSlider">
                    {/* You can replace loading image with any loading animation */}
                    <div>Loading...</div>
                  </div>
                </div>
                <div className="video-slider__video-info">
                  <div className="video-slider__video-info-text">
                    <h2>Spark Jet Pro V2</h2>
                    <p>The best sparkle machine with RDM function and height adjustment channel! Adjustable Height 1.5-5M, Maximum Single Continuous Duration 30s, Heat Up Time 5 Minutes, seetronic connectors, consumption 20-25g/Minute.</p>
                  </div>
                  <div className="video-slider__video-info-btn">
                  <Link to="/ProductDetail" className="btn btn-primary btn-big jsPlayVideoSliderBtn" tabIndex="-1">Explore more</Link>
                  </div>
                </div>
              </div>
              <div className="product-info-video-wrapper product-info-video-wrapper--fullradius">
                <div className="video-slider__video-wrapper jsVideoSlideWrapper jsNotYtVideo">
                  <ReactPlayer
                    url="https://videos.pexels.com/video-files/5948574/5948574-hd_1920_1080_30fps.mp4"
                    playing={true}
                    loop={true}
                    muted={true}
                    width='100%'
                    height='auto'
                  />
                  <div className="video-slider__slide-play jsPlayVideoSlider d-md-none">
                    <FaPlay /> {/* Replacing image with FaPlay icon */}
                  </div>
                  <div className="video-slider__slide-play jsLoadingVideoSlider">
                    {/* You can replace loading image with any loading animation */}
                    <div>Loading...</div>
                  </div>
                </div>
                <div className="video-slider__video-info">
                  <div className="video-slider__video-info-text">
                    <h2>Spark Jet Pro V2</h2>
                    <p>The best sparkle machine with RDM function and height adjustment channel! Adjustable Height 1.5-5M, Maximum Single Continuous Duration 30s, Heat Up Time 5 Minutes, seetronic connectors, consumption 20-25g/Minute.</p>
                  </div>
                  <div className="video-slider__video-info-btn">
                    <Link to="/ProductDetail" className="btn btn-primary btn-big jsPlayVideoSliderBtn" tabIndex="-1">Explore more</Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;
