import React, { useState } from 'react';
import AccountPage from '../Accountinfo/Accountinfo';

const MainHeader = () => {
  const [searchValue, setSearchValue] = useState('');
  const [manufacturersResult, setManufacturersResult] = useState('');
  const [categoriesResult, setCategoriesResult] = useState('');
  const [productsResult, setProductsResult] = useState('');
  const [hasManufacturers, setHasManufacturers] = useState(false);
  const [hasCategories, setHasCategories] = useState(false);
  const [hasProducts, setHasProducts] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const delay = (callback, ms) => {
    let timer = 0;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(callback, ms || 0);
    };
  };

  const handleSearch = (value) => {
    setSearchValue(value);

    const str = value.trim();
    if (str.length > 0) {
      // Perform search operation (e.g., fetch data from backend)

      // Simulating delay for demonstration
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        // Update search results state based on fetched data
        setHasManufacturers(true); // Example setting flag to true
        setHasCategories(true); // Example setting flag to true
        setHasProducts(true); // Example setting flag to true
        // Update search results content
        // setManufacturersResult(...) // Update with fetched manufacturers data
        // setCategoriesResult(...) // Update with fetched categories data
        // setProductsResult(...) // Update with fetched products data
      }, 1000); // Simulated delay of 1 second
    } else {
      // Clear search results if input is empty
      setHasManufacturers(false);
      setHasCategories(false);
      setHasProducts(false);
    }
  };

  return (
    <div className="main-header">
      <AccountPage/>
      {/* Header content */}
      <div className="col search-header-col">
        <div className="header-search">
          <div className="search-container inner txt-c clearfix search--open" id="search-container">
            <div className="search search__form" id="search_bar">
              <input
                type="text"
                name="keywords"
                id="keywords"
                className="selectform keywords"
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                autoComplete="off"
                placeholder="I'm looking for..."
              />
              <img src="images/icons/search.svg" alt="Search" />
              <div className="loader" style={{ display: isSearching ? 'block' : 'none' }}>
                <div className="loader-icon"></div>
              </div>
            </div>
          </div>
          <div className="acresults" id="acresults">
            {/* Render search results */}
          </div>
        </div>
      </div>
      {/* Other header content */}

    </div>
  );
};

export default MainHeader;