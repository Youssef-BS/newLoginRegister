import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {GetNews} from '../../Features/Newsroom/newsSlices';
import { Link } from 'react-router-dom';

function AllNews() {
  const dispatch = useDispatch();
  const NewsState = useSelector((state)=> state?.news?.News)
 
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
    <div id="maincontent" className="maincontent ">
      {/* Begin Main Content */}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col">
            <div className="pb-5">
              <div className="headingtitle text-center pt-2 pb-3 pb-lg-5">Newsroom</div>
              <div className="row">
                <div className="col inner-pages-text">
                  <div className="row news-page">
                    {NewsState?.map((news)=>(
                      <div className="col-lg-6">
                      <div className="home-boxes__box home-boxes__box--white">
                        <a href="https://www.fos-lighting.eu/fos-bicolor-200w-fresnel-p-2768.html" className="wrap-link row flex-column flex-xl-row">
                          <div className="home-boxes__box-left col-12 col-lg">
                            <img src="/images/product.jpg" className="img-fluid" alt="" />
                          </div>
                          <div className="home-boxes__box-right col">
                            <h2>{news?.Product?.title}</h2>
                            <p className="home-boxes__date"><i className="las la-calendar mr-2"></i>09/02/2024</p>
                            <p>{news?.Product?.title}</p>
                            <Link to={`/ProductDetail/${news?.Product.id}`}><span className="btn btn-primary btn-big">View details</span></Link>

                          </div>
                        </a>
                      </div>
                    </div>
                    ))}
                    
                 
                    {/* Add more news items here */}
                  </div>
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

export default AllNews;
