import React from 'react';

const Explore = () => {
    return (
        <div id="mainbody" className="mainbody">
            <div className="breadcrumb_container">
                <div className="breadcrumb" id="breadcrumb_static">
                    <div className="mainwrap container-fluid">
                        <a href="https://www.fos-lighting.eu" className="headerNavigation">Home</a>
                        <i>/</i>
                        <a href="https://www.fos-lighting.eu/intelligent-audio-c-173.html" className="headerNavigation">Intelligent Audio</a>
                        <i>/</i>
                        <a href="https://www.fos-lighting.eu/active-speakers-c-173_97.html" className="headerNavigation">Active Speakers</a>
                    </div>
                </div>
            </div>
            <div id="maincontent" className="maincontent">
                <div className="container-fluid category-description-container">
                    <div className="row">
                        <div className="col title">
                            <div className="headingtitle">
                                <a href="https://www.fos-lighting.eu/intelligent-audio-c-173.html" className="category-box__image-wrapper">
                                    <img className="header-logo" src="/images/categ.png" alt="Active Speakers" />
                                </a>
                                <h1>Active Speakers</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-categories-wrap">
                    <div className="container-fluid product-categories">
                        <div className="row my-0">
                            <div className="categorybox col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                                <a href="https://www.fos-lighting.eu/plywood-active-speakers-c-173_97_98.html" className="boxlink">
                                    <div className="image">
                                        <picture>
                                        <source media="(min-width: 1361px)" srcSet="https://www.fos-lighting.eu/uploads/categories_0_cat_image_172.png" />

                                            <img src="https://www.fos-lighting.eu/uploads/categories_0_cat_image_172.png" className="lazyload" alt="Plywood Active Speakers" />
                                        </picture>
                                    </div>
                                    <div className="title">
                                        <span>Plywood Active Speakers</span>
                                    </div>
                                </a>
                            </div>
                            <div className="categorybox col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                                <a href="https://www.fos-lighting.eu/abs-active-speakers-c-173_97_99.html" className="boxlink">
                                    <div className="image">
                                        <picture>
                                          
                                            <source media="(min-width: 1361px)" srcSet="https://www.fos-lighting.eu/uploads/categories_0_cat_image_172.png" />
                                            <img src="https://www.fos-lighting.eu/uploads/categories_0_cat_image_172.png" className="lazyload" alt="ABS Active Speakers" />
                                        </picture>
                                    </div>
                                    <div className="title">
                                        <span>ABS Active Speakers</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
