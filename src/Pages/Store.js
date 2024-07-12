import React from 'react';

// Subcomponents for better code organization
const Categories = () => (
    <div className="col-auto products-listing__col-left">
    <div className="products-listing__categories-wrapper">
      <div className="products-listing__categories-logo">
        <img className="header-logo" src="uploads/thumbnails/categories_0_cat_image_172.png.thumb_49x45.png" alt="Category Logo" />
      </div>
      <h2 className="products-listing__categories-title">Categories</h2>
      <ul className="products-listing__categories-links">
        <li>
          {/* <a className="active-link" href="#">Moving Lights</a> */}
          <a className="active-link" href="https://www.fos-lighting.eu/moving-lights-c-172_5.html">Moving Lights</a>
        </li>
        <li>
          {/* <a className="active-link" href="#">Led Strobe</a> */}
          <a className="" href="https://www.fos-lighting.eu/led-strobe-c-172_19.html">Led Strobe</a>
        </li>
        <li>
          {/* <a className="active-link" href="#">Fabrics & Gear</a> */}
          <a className="" href="https://www.fos-lighting.eu/fabrics-gear-c-172_53.html">Fabrics & Gear</a>
        </li>
        <li>
          {/* <a className="active-link" href="#">Cases & Accessories</a> */}
          <a className="" href="https://www.fos-lighting.eu/cases-accessories-c-172_37.html">Cases & Accessories</a>
        </li>
      </ul>
    </div>
  </div>
);

const Breadcrumb = () => (
    <div className="row">
    <div className="container inner">
      <div className="row">
        <div className="col-12">
          <div className="breadcrumb_container">
            <div className="breadcrumb" id="breadcrumb_static">
              <div className="mainwrap">
                <a href="https://www.fos-lighting.eu" className="headerNavigation">Home</a><i>/</i>
                <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="headerNavigation">FOS Technologies</a><i>/</i>
                <a href="https://www.fos-lighting.eu/moving-lights-c-172_5.html" className="headerNavigation">Moving Lights</a><i>/</i>
                <a href="https://www.fos-lighting.eu/beam-c-172_5_7.html" className="headerNavigation">Beam</a>
              </div>
            </div>
            <div className="breadcrumb new fixed" id="breadcrumb_interactive">
              <div className="mainwrap">
                <div className="interactive_breadcrumb">
                  <div className="breadcrumb_seperator container home">
                    <a className="breadcrumb_home" href="https://www.fos-lighting.eu">
                      <i className="las la-home" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="breadcrumb_seperator container">
                    <div className="holder">
                      <div className="inner_holder">
                        <div className="interactive wordwrap" data-type="products_category" data-id="172" data-link="https://www.fos-lighting.eu/fos-technologies-c-172.html">
                          <span>FOS Technologies</span>
                        </div>
                        <i className="las la-arrow-right gotolink" aria-hidden="true"></i>
                        <ul className="updated">
                          <li className="search">
                            <input type="text" name="search_breadcrumb" id="search_breadcrumb" value="Search" onBlur={() => { if (this.value=='') this.value='Search' }} onFocus={() => { if(this.value =='Search' ) this.value='' }} className="selectform search_breadcrumb" autoComplete="off" />
                            <i className="las la-times clear_breadcrumb_search" aria-hidden="true" style={{ display: 'none' }}></i>
                          </li>
                          <li data-initial-id="172" data-link="https://www.fos-lighting.eu/fos-technologies-c-172.html" className="update_breadcrumb_title selected">FOS Technologies</li>
                          <li data-initial-id="173" data-link="https://www.fos-lighting.eu/intelligent-audio-c-173.html" className="update_breadcrumb_title">Intelligent Audio</li>
                          <li data-initial-id="174" data-link="https://www.fos-lighting.eu/visualization-tools-c-174.html" className="update_breadcrumb_title"> Visualization Tools</li>
                          <li data-initial-id="175" data-link="https://www.fos-lighting.eu/truss-suspension-c-175.html" className="update_breadcrumb_title">Truss &amp; Suspension</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="breadcrumb_seperator container">
                    <div className="holder">
                      <div className="inner_holder">
                        <div className="interactive wordwrap" data-type="products_category" data-id="5" data-link="https://www.fos-lighting.eu/moving-lights-c-172_5.html">
                          <span>Moving Lights</span>
                        </div>
                        <i className="las la-arrow-right gotolink" aria-hidden="true"></i>
                        <ul className="updated">
                          <li className="search">
                            <input type="text" name="search_breadcrumb" id="search_breadcrumb" value="Search" onBlur={() => { if (this.value=='') this.value='Search' }} onFocus={() => { if(this.value =='Search' ) this.value='' }} className="selectform search_breadcrumb" autoComplete="off" />
                            <i className="las la-times clear_breadcrumb_search" aria-hidden="true" style={{ display: 'none' }}></i>
                          </li>
                          <li data-initial-id="5" data-link="https://www.fos-lighting.eu/moving-lights-c-172_5.html" className="update_breadcrumb_title selected">Moving Lights</li>
                          <li data-initial-id="68" data-link="https://www.fos-lighting.eu/led-par-c-172_68.html" className="update_breadcrumb_title">Led Par</li>
                          <li data-initial-id="17" data-link="https://www.fos-lighting.eu/stage-lighting-c-172_17.html" className="update_breadcrumb_title">Stage Lighting</li>
                          <li data-initial-id="11" data-link="https://www.fos-lighting.eu/static-led-c-172_11.html" className="update_breadcrumb_title">Static Led</li>
                          <li data-initial-id="58" data-link="https://www.fos-lighting.eu/battery-operated-c-172_58.html" className="update_breadcrumb_title">Battery Operated</li>
                          <li data-initial-id="19" data-link="https://www.fos-lighting.eu/led-strobe-c-172_19.html" className="update_breadcrumb_title">Led Strobe</li>
                          <li data-initial-id="20" data-link="https://www.fos-lighting.eu/laser-c-172_20.html" className="update_breadcrumb_title">Laser</li>
                          <li data-initial-id="73" data-link="https://www.fos-lighting.eu/follow-spots-c-172_73.html" className="update_breadcrumb_title">Follow Spots</li>
                          <li data-initial-id="72" data-link="https://www.fos-lighting.eu/moving-fixtures-c-172_72.html" className="update_breadcrumb_title">Moving Fixtures</li>
                          <li data-initial-id="30" data-link="https://www.fos-lighting.eu/dmx-tools-c-172_30.html" className="update_breadcrumb_title">DMX Tools</li>
                          <li data-initial-id="22" data-link="https://www.fos-lighting.eu/smoke-effects-c-172_22.html" className="update_breadcrumb_title">Smoke &amp; Effects</li>
                          <li data-initial-id="88" data-link="https://www.fos-lighting.eu/architectural-lighting-c-172_88.html" className="update_breadcrumb_title">Architectural Lighting</li>
                          <li data-initial-id="31" data-link="https://www.fos-lighting.eu/cables-plugs-c-172_31.html" className="update_breadcrumb_title">Cables &amp; Plugs</li>
                          <li data-initial-id="42" data-link="https://www.fos-lighting.eu/power-distribution-c-172_42.html" className="update_breadcrumb_title">Power Distribution</li>
                          <li data-initial-id="53" data-link="https://www.fos-lighting.eu/fabrics-gear-c-172_53.html" className="update_breadcrumb_title">Fabrics &amp; Gear</li>
                          <li data-initial-id="37" data-link="https://www.fos-lighting.eu/cases-accessories-c-172_37.html" className="update_breadcrumb_title">Cases &amp; Accessories</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="holder">
                      <div className="inner_holder">
                        <div className="interactive wordwrap" data-type="products_category" data-id="7" data-link="https://www.fos-lighting.eu/beam-c-172_5_7.html">
                          <span>Beam</span>
                        </div>
                        <i className="las la-arrow-right gotolink" aria-hidden="true"></i>
                        <ul className="updated">
                          <li className="search">
                            <input type="text" name="search_breadcrumb" id="search_breadcrumb" value="Search" onBlur={() => { if (this.value=='') this.value='Search' }} onFocus={() => { if(this.value =='Search' ) this.value='' }} className="selectform search_breadcrumb" autoComplete="off" />
                            <i className="las la-times clear_breadcrumb_search" aria-hidden="true" style={{ display: 'none' }}></i>
                          </li>
                          <li data-initial-id="6" data-link="https://www.fos-lighting.eu/hybrid-c-172_5_6.html" className="update_breadcrumb_title">Hybrid</li>
                          <li data-initial-id="7" data-link="https://www.fos-lighting.eu/beam-c-172_5_7.html" className="update_breadcrumb_title selected">Beam</li>
                          <li data-initial-id="8" data-link="https://www.fos-lighting.eu/wash-c-172_5_8.html" className="update_breadcrumb_title">Wash</li>
                          <li data-initial-id="9" data-link="https://www.fos-lighting.eu/spot-c-172_5_9.html" className="update_breadcrumb_title">Spot</li>
                          <li data-initial-id="86" data-link="https://www.fos-lighting.eu/waterproof-c-172_5_86.html" className="update_breadcrumb_title">Waterproof</li>
                          <li data-initial-id="10" data-link="https://www.fos-lighting.eu/multi-beam-c-172_5_10.html" className="update_breadcrumb_title">Multi Beam</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
            <div className="product-listing__info-header">
              Moving Lights subcategories:
            </div>
          </div>
        </div>
        <div className="col mb-2">
          <div className="products-listing__subcategories-wrapper jsProductListingSubCatSlider slick-initialized slick-slider">
            <div className="prev-arrow slick-arrow slick-disabled" aria-disabled="true">
              <i className="las la-angle-left"></i>
            </div>
            <div className="slick-list draggable">
              <div className="slick-track">
                <a href="https://www.fos-lighting.eu/wash-c-172_5_8.html" className="products-listing__subcategorie slick-slide slick-active" style={{ width: '244px' }} data-slick-index="2" aria-hidden="false" tabIndex="0">
                  <div className="products-listing__subcategorie-img">
                    <img src="uploads/thumbnails/categories_0_cat_image_8.jpg.thumb_80x59.jpg" />
                  </div>
                  <span>Wash</span>
                </a>
              </div>
            </div>
            <div className="next-arrow slick-arrow" aria-disabled="false">
              <i className="las la-angle-right"></i>
            </div>
          </div>
          <div className="headingtitle padding_top">
            <h1 className="">
              Beam
            </h1>
          </div>
          <div className="products-in-listing-container">
            <span id="products-in-listing">9</span>
            <span className="items-description"> products</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FiltersComponent = () => (
    <div className="my-3">
    <div className="outer-filters-wrap">
      <div className="prefilters container-fluid">
        <div className="row filterbox bar">
          <input type="hidden" name="product_listing_type" value="c_172_5_7" />
          <input type="hidden" name="chooseProductListingPage" value="1" id="chooseProductListingPage" className="chooseProductListingPage" />
          <input type="hidden" name="chooseProductListingItemsPerPage" value="72" id="chooseProductListingItemsPerPage" className="chooseProductListingItemsPerPage" />
          <input type="hidden" name="sort" value="new" id="sort" className="sort_listing" />
          <div className="modal fade" id="filtersModal" tabIndex="-1" role="dialog" aria-labelledby="filtersModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered filters" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle"><i className="las la-sliders-h"></i> Filters</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <i className="las la-times"></i>
                  </button>
                </div>
                <div className="modal-body"></div>
                <div className="modal-footer py-4">
                  <div className="m-auto">
                    <button type="button" className="shop-btn outline mx-2 clear_all_filters" value="">
                      Clear <i className="las la-trash-alt"></i>
                    </button>
                    <button type="button" className="shop-btn mx-2" data-dismiss="modal" value="">
                      Save and close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filters-wrap small">
            <input type="hidden" name="max_allow_filters_categories_preview" value="7" />
            <button type="button" className="btn show-all-filters" data-toggle="modal" data-target="#filtersModal" style={{ display: 'none' }}>
              <span>All Filters</span> <i className="fa fa-sliders"></i>
            </button>
          </div>
          <div className="filters-actions-wrap">
            <div className="extended_filters_category filter basic items-per-page listing-actions">
              <div className="flabel price_range_label toggle_filter_category">
                <span className="items-pp-label">Show 72 products</span><i className="las la-angle-down" aria-hidden="true"></i>
              </div>
              <div className="extended_filter_field_container">
                <div className="ffield">
                  <div className="actions">
                    <div className="filters-drop-container">
                      <ul className="chooseProductListingItemsPerPageList filter-drop-menu">
                        <li data-id="36" className="chooseProductListingItemsPerPageListElement">Show 36 products</li>
                        <li data-id="72" className="chooseProductListingItemsPerPageListElement selected">Show 72 products</li>
                        <li data-id="view-all" className="chooseProductListingItemsPerPageListElement">View all</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="extended_filters_category filter basic sorting product-listing-action">
              <div className="flabel toggle_filter_category">
                <span className="cat-name">Sort by Date</span> <i className="las la-sort-amount-down"></i>
              </div>
              <div className="extended_filter_field_container">
                <div className="ffield">
                  <div data-id="new" className="sortListElement sortListElement_new selected">Sort by Date</div>
                </div>
              </div>
            </div>
            <div className="paginationFilterContainer"></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="live-filters-wrapper" id="live-filters-wrapper">
              <div className="live-filters-container">
                <div className="active-filters filter basic live-filters">
                  <i className="flabel">Selected Filters</i>
                  <div className="filters-actions"></div>
                </div>
                <div className="clear_all_filters">
                  <div className="text">Clear <i className="las la-trash-alt"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProductList = () => (
    <div id="productboxwrapContainer" className="productboxwrapContainer products_container">
    <input type="hidden" name="allow_max_page" value="1" />
    <input type="hidden" name="totalProducts" value="9" />
    <div id="productboxwrap" className="productboxwrap container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-4 mb-4 list-box">
          <a href="https://www.fos-lighting.eu/fos-titan-beam-p-472.html">
            <div className="product-box" data-parent_category="172" data-product-parent-category="7" data-category="7" data-manufacturer="0" data-sortorder="1" data-price="0" data-id="472" data-filters="" data-filters-categories="" data-quantity="0" data-availiable="0" data-is_expected="" data-on_request="0" data-flag_instock="0" data-set="0" data-available_soon="" data-attributes="">
              <div className="product-box__img">
                <img className="lazy-scroll loaded" src="/images/product.jpg" alt="Product" />
              </div>
              <div className="product-box__title">
                <span>FOS TITAN Beam</span>
              </div>
              <div className="product-box__code">
                <div className="product-box__code">L005310</div>
              </div>
              <p className="product-box__desc">
                Professional Beam with Super Prisms (16 facet+24 facet prism) and powerful, ultra bright OSRAM 7R Lamp (2000 hours) , 3 phase P/T motors , Solid Beam angle: 2.5° ,Anti-reflection 136mm front lenses , Control Channel:14/16 DMX ,11 colors , 16 gobos ,  Frost filter, Motorized focus from near to far (2.5M-30M) , 13.2kgs.
              </p>
              <div className="product-box__extra-info">
                <div className="product-box__hot">
                  <div className="product-box__inner">
                    <i className="las la-fire"></i>
                    <span>Hot product</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div id="no_products">There are currently no products.</div>
  </div>
);

const Store = () => (
  <div id="mainbody" className="mainbody">
    <div id="maincontent" className="maincontent">
      <div className="container-fluid pl-0 pr-0 products-listing__container">
        <div className="row no-gutters">
            <Categories/>
          
          <div className="col products-listing__col-right">
            <div className="container-fluid category-description-container">
             <Breadcrumb/>
             </div>
             <FiltersComponent/>
             <ProductList/>

              
              <div className="description prices-not-include-vat">
                Prices do not include VAT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);


export default Store;
