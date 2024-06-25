import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InfoBar = () => {
  useEffect(() => {
    // Google Tag Manager setup
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      });
      const f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-NFC5TJ2');
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
 
  };

  return (
    <div className="info-bar d-none d-md-block show">
      <div className="container-fluid">
        <Slider {...settings} className="info-bar-slider">
          <div className="d-flex align-items-center justify-content-center">
            <a href="https://www.fos-lighting.eu/fos-moto-spark-m3-p-2526.html">
              <span>Moto Sparkle M3 is the first cold sparkle model with a built-in battery.</span>
              <span>Shop Now</span>
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <a href="https://www.fos-lighting.eu/kos-system-c-173_103_198.html">
              <span>Patented Line Array System KOS with&nbsp;&nbsp;waveguide technology.</span>
              <span>Shipping NOW</span>
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <a href="https://www.fos-lighting.eu/fos-moto-spark-m3-p-2526.html">
              <span>Moto Sparkle M3 is the first cold sparkle model with a built-in battery.</span>
              <span>Shop Now</span>
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default InfoBar;
