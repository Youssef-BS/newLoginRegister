import React from 'react';
import { Link } from 'react-router-dom';

const AllNewsRoom = () => {
  return (
    <div id="maincontent" className="maincontent">
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col">
            <div className="pb-5">
              <div className="headingtitle text-center pt-2 pb-3 pb-lg-5">gg</div>
              <div className="row">
                <div className="col inner-pages-text">
                  <div className="row news-page">
                    {/* News items */}
                    <div className="col-lg-6">
                      <div className="home-boxes__box home-boxes__box--white">
                        <a href="https://www.fos-lighting.eu/iem-pro-p-2795.html" className="wrap-link row flex-column flex-xl-row">
                          <div className="home-boxes__box-left col-12 col-lg">
                            <img src="https://www.fos-lighting.eu/uploads/thumbnails/news_0_image_31.jpg.thumb_190x126.jpg" className="img-fluid" alt="" />
                          </div>
                          <div className="home-boxes__box-right col">
                            <h2>IEM-PRO stereo wireless monitoring</h2>
                            <p className="home-boxes__date"><i className="las la-calendar mr-2"></i>06/04/2024 </p>
                            <p>Professional stereo wireless monitoring system with built-in DSP, latest UHF transmission technology to ensure high fidelity clear sound, UHF 660-690 MHz, True diversity system to avoid drop-out in long-distance transmission, range up to 100m, adjust left/right balanced level on the bodypack receiver, Aluminum alloy bodypack has a 1000mAh built-in lithium battery, battery life is 6 hours.</p>
                            <Link to="/ProductDetail" className="btn btn-primary btn-big">View details</Link>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* Add more news items */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNewsRoom;
