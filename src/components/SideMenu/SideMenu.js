import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { GetAll, GetAllProducts,GetMarkets } from '../../Features/Product/ProductSlice';
import { Link } from 'react-router-dom';
import { ChevronRight, Check, MonetizationOn } from '@mui/icons-material';


const SideMenu = ({ isOpen,isopen2,onClose }) => {
  const Side = useSelector((state)=> state.product.All )

 
  const [SideMeState, setSideMeState] = useState(useSelector((state)=> state?.product?.All));


  console.log(Side)
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showThirdLevel, setShowThirdLevel] = useState(false);
    const [showFourthLevel, setShowFourthLevel] = useState(false);
    const [showFiveLevel,setShowFiveLevel]= useState(false)
    const [responsiveweb,setResponsiveWeb]=useState("");
    const [responsiveMob,setResponsiveMob]=useState("")
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const MarketState = useSelector((state)=> state?.product?.Markets);
    const ProductState = useSelector((state)=> state?.product?.Products);
    const [activeMarket, setActiveMarket] = useState("");
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSub, setAtiveSub] = useState("");
    const [activeSubSub, setActiveSubSub] = useState(null);
  

  
    const [activeMarketProducts, setActiveMarketProducts] = useState([]);
  const dispatch = useDispatch()
  
    useEffect (()=>{
      dispatch(GetMarkets())
      dispatch(GetAllProducts())
  
    },[dispatch]);
    const handleMarketClick = (market) => {
      if (market === activeMarket) {
        setShowSubMenu(!showSubMenu); // Toggle third level if clicking on the same category
      } else {
        setActiveMarket(market); // Set new active category
        setShowSubMenu(true); // Show third level for the new category
      }
      };
      const handleCategoryClick = (categoryId) => {
      
        if (categoryId === activeCategory) {
          setShowThirdLevel(!showThirdLevel); // Toggle third level if clicking on the same category
        } else {
          setActiveCategory(categoryId); // Set new active category
          setShowThirdLevel(true); // Show third level for the new category
        }// assuming market object has a products property
      };
      const handleSubcategoryClick = (sub) => {
        if (sub === activeSub) {
          setShowFourthLevel(!showFourthLevel); // Toggle third level if clicking on the same category
        } else {
          setAtiveSub(sub); // Set new active category
          setShowFourthLevel(true); // Show third level for the new category
        } // assuming market object has a products property
      };
// Define event handlers to toggle visibility of menu levels
const ss = (marketId) => {
  setSideMeState(prevState => {
      const updatedState = prevState?.map(market => {
          if (market.id === marketId) {
              return {
                  ...market,
                  showSubMenu: !market.showSubMenu
              };
          }
          return market;
      });
      return updatedState;
  });
};

const dd = (marketId, categoryId) => {
  setSideMeState(prevState => {
      const updatedState = prevState?.map(market => {
          if (market.id === marketId) {
              const updatedCategories = market?.Categories.map(category => {
                  if (category.id === categoryId) {
                      return {
                          ...category,
                          showThirdLevel: !category.showThirdLevel
                      };
                  }
                  return category;
              });
              return {
                  ...market,
                  categories: updatedCategories
              };
          }
          return market;
      });
      return updatedState;
  });
};
console.log(activeMarket)

const handleSubcategoryClickl = (marketId, categoryId, subcategoryId) => {
  setSideMeState(prevState => {
      const updatedState = prevState.map(market => {
          if (market.id === marketId) {
              const updatedCategories = market.Categories.map(category => {
                  if (category.id === categoryId) {
                      const updatedSubcategories = category.Subcategories.map(subcategory => {
                          if (subcategory.id === subcategoryId) {
                              return {
                                  ...subcategory,
                                  showFourthLevel: !subcategory.showFourthLevel
                              };
                          }
                          return subcategory;
                      });
                      return {
                          ...category,
                          subcategories: updatedSubcategories
                      };
                  }
                  return category;
              });
              return {
                  ...market,
                  categories: updatedCategories
              };
          }
          return market;
      });
      return updatedState;
  });
};

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    const toggleThirdLevel = () => {
        setShowThirdLevel(!showThirdLevel);
    };

    const toggleFourthLevel = () => {
        setShowFourthLevel(!showFourthLevel);
    };
    const toggleFiveLevel = () => {
      setShowFourthLevel(!showFourthLevel);
  };
    const toggleMenuu = () => {
        setIsMenuOpen(true);
        setResponsiveMob(false)
      };

    useEffect(() => {
        if (window.innerWidth > 1000) {
        document.body.className = isOpen ? 'guest no-scroll' : 'guest';}
        else if (window.innerWidth < 1000){
            setResponsiveMob(isopen2)
            document.body.className = responsiveMob ? 'guest menu-open' : 'guest';}
            if(isMenuOpen){
                document.body.className = 'guest';


            }


    }, [isOpen,isMenuOpen,isopen2]);

    return (
      <>
      <nav id="ddfullscreenmenu" className={responsiveMob ? 'openmenu' : ''}>
          <div className="mobile-title-menu">Main Menu</div>
          <div id="closex" onClick={toggleMenuu}></div>
          <div id="ulwrapper">
              {/* Define your UL (nested) menu below */}
              <ul className="submenu" style={{ zIndex: 183 }}>
                  <li className="breadcrumb">FOS Technologies</li>
                  <li className="menu-view-all">
                      <a href="https://www.fos-lighting.eu/fos-technologies-c-172.html">View Category</a>
                  </li>
                  <li className="header">
                      <a href="#">Stage Lighting</a>
                  </li>
                  <li className="header">
                      <a href="#">Static Led</a>
                  </li>
              </ul>
              <ul id="fullscreenmenu-ul" className="firstLevel" style={{ zIndex: 182 }}>
                  <li className="header">
                      <a href="#">
                          FOS Technologies
                          <div className="root-image">
                              <img src="uploads/thumbnails/categories_0_cat_image_172.png.thumb_100x90.png" border="0" title="FOS Technologies" alt="FOS Technologies" />
                          </div>
                      </a>
                  </li>
                  {/* 
                  <li className="mobile-menu-item first">
                      <a href="https://www.new.fos-lighting.eu/specials.php">Offers</a>
                  </li>
                  */}
                  <li className="mobile-menu-item">
                      <a href="https://www.fos-lighting.eu/news.php">Newsroom</a>
                  </li>
                  <li className="mobile-menu-item">
                      <a href="projects.php">Projects</a>
                  </li>
                  <li className="mobile-menu-item">
                      <a href="who-we-are-pr-1.html">About us</a>
                  </li>
                  <li className="mobile-menu-item">
                      <a href="https://www.fos-lighting.eu/contact_us.php">Contact us</a>
                  </li>
              </ul>
          </div>
      </nav>
      <section className={`side-menu main-menu-container ${isOpen ? '' : 'hide'}`}>
          <div className="inner">
              <div className="first-level">
                  <ul>
                      {Side?.map((market) => (
                          <li
                              key={market.id}
                              className={`has-children menu-item jsFirstLevelMenuItem ${showSubMenu ? 'second-level-container' : ''} ${
                                  market.id === activeMarket ? 'active' : ''
                              }`}
                          >
                              <a
                                  onClick={() => handleMarketClick(market?.id)}
                                  className="d-flex flex-column main-parent-cat op-50"
                                  title={market.name}
                                  data-href={market.url}
                              >
                                  <img className="img-fluid" src={market.image} alt={market.name} />
                                  {market.name}
                              </a>
                              <ChevronRight
                                  className={`las la-angle-right op-50`}
                                  data-href="https://www.fos-lighting.eu/intelligent-audio-c-173.html"
                              />
                              {showSubMenu && market.id === activeMarket && (
                                  <ul className="second-level" style={{ display: showSubMenu ? 'block' : 'none' }}>
                                      <ul className="inner-second" style={{ maxHeight: '571px' }}>
                                          {Side?.find((m) => m.id == activeMarket)?.Categories?.map((category) => {
                                              return (
                                                  <li
                                                      key={category.id}
                                                      className={`menu-item has-children third-level-container ${
                                                          category.id === activeCategory ? 'active' : ''
                                                      }`}
                                                  >
                                                      <a
                                                          onClick={() => handleCategoryClick(category?.id)}
                                                          title={category?.name}
                                                          data-href={category.url}
                                                      >
                                                          {category.name}
                                                      </a>
                                                      <ChevronRight
                                                          className={`las la-angle-right`}
                                                          data-href="https://www.fos-lighting.eu/active-speakers-c-173_97.html"
                                                          onClick={toggleThirdLevel}
                                                      />
                                                      {showThirdLevel && category.id === activeCategory && (
                                                          <ul
                                                              className="third-level"
                                                              style={{ display: showThirdLevel ? 'block' : 'none' }}
                                                          >
                                                              <ul className="inner-third" style={{ maxHeight: '571px' }}>
                                                                  {category.Subcategories.length > 0 ? (
                                                                      category.Subcategories.map((subcategory) => (
                                                                          <li
                                                                              key={subcategory.id}
                                                                              className={`menu-item ${
                                                                                  subcategory.id === activeSub ? 'active' : ''
                                                                              }`}
                                                                          >
                                                                              <a
                                                                                  onClick={() =>
                                                                                      handleSubcategoryClick(
                                                                                          subcategory?.id
                                                                                      )
                                                                                  }
                                                                                  title={subcategory.name}
                                                                                  data-href={subcategory.url}
                                                                              >
                                                                                  {subcategory.name}
                                                                              </a>
                                                                              <ChevronRight
                                                                                  className={`las la-angle-right`}
                                                                                  data-href="https://www.fos-lighting.eu/abs-active-speakers-c-173_97_99.html"
                                                                              />
                                                                              {showFourthLevel &&
                                                                                  subcategory.id === activeSub && (
                                                                                      <ul
                                                                                          className="fourth-level menu-products-container"
                                                                                          style={{
                                                                                              display: showFourthLevel
                                                                                                  ? 'block'
                                                                                                  : 'none',
                                                                                          }}
                                                                                      >
                                                                                          {Side.find(
                                                                                              (m) => m.id == activeMarket
                                                                                          )?.Categories.find(
                                                                                              (c) => c.id == activeCategory
                                                                                          )?.Subcategories.find(
                                                                                              (c) => c.id == activeSub
                                                                                          )?.Products.map(
                                                                                              (product) => (
                                                                                                  <li key={product.id}>
                                                                                                      <Link
                                                                                                          onClick={onClose}
                                                                                                          to={`/ProductDetail/${product.id}`}
                                                                                                          target="_self"
                                                                                                          className="menu-product-link d-inline-flex align-items-center"
                                                                                                      >
                                                                                                          <div className="menu-product-link__img mr-3">
                                                                                                              <img
                                                                                                                  src="/images/product.jpg"
                                                                                                                  alt="IHOS Wheels Kit"
                                                                                                              />
                                                                                                          </div>
                                                                                                          <div className="menu-product-link__title">
                                                                                                              <span>IHOS Wheels Kit</span>
                                                                                                          </div>
                                                                                                      </Link>
                                                                                                  </li>
                                                                                              )
                                                                                          )}
                                                                                      </ul>
                                                                                  )}
                                                                          </li>
                                                                      ))
                                                                  ) : (
                                                                      category.Products.map((product) => (
                                                                          <li key={product.id}>
                                                                              <Link
                                                                                  onClick={onClose}
                                                                                  to={`/ProductDetail/${product.id}`}
                                                                                  target="_self"
                                                                                  className="menu-product-link d-inline-flex align-items-center"
                                                                              >
                                                                                  <div className="menu-product-link__img mr-3">
                                                                                      <img
                                                                                          src="/images/product.jpg"
                                                                                          alt="IHOS Wheels Kit"
                                                                                      />
                                                                                  </div>
                                                                                  <div className="menu-product-link__title">
                                                                                      <span>{product.title}</span>
                                                                                  </div>
                                                                              </Link>
                                                                          </li>
                                                                      ))
                                                                  )}
                                                              </ul>
                                                          </ul>
                                                      )}
                                                  </li>
                                              );
                                          })}
                                      </ul>
                                  </ul>
                              )}
                          </li>
                      ))}
                  </ul>
                  <div className="tags-menu">
                      <span className="news">
                          <a href="https://www.fos-lighting.eu/news.php">Newsroom</a>
                      </span>
                      <span className="account">
                          <a href="https://www.fos-lighting.eu/create_account.php">Become a Dealer</a>
                      </span>
                      <span className="projects">
                          <a href="projects.php">Projects</a>
                      </span>
                      <span className="about">
                          <a href="who-we-are-pr-1.html">About us</a>
                      </span>
                      <span className="contact">
                          <a href="https://www.fos-lighting.eu/contact_us.php">Contact us</a>
                      </span>
                  </div>
              </div>
          </div>
      </section>
  </>
    );
};

export default SideMenu;
