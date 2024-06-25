import React from 'react';
import { logout } from '../Features/auth/authSlice';
import { useDispatch } from 'react-redux';

const LogOffPage = () => {


  const dispatch = useDispatch();

  const handleLogout = async () => {
    try  {
      await dispatch(logout());
    }catch(error) {
      console.log('error' + error.message)
    }
  }
  
  return (
    <div id="maincontent" className="maincontent">
      <div className="headingtitle logoff-cont">
        <h1>Log Off</h1>
      </div>

      <div className="mainwrap">
        <div className="content logoff-content">
          <div className="description">
            You have been logged off your account. It is now safe to leave the computer.
            <br />
            <br />
            Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.
          </div>
          <div className="separator"></div>
          <div>
            <a href="/">
              <input
                type="button"
                border="0"
                alt="Continue"
                value="Continue"
                title="Continue"
                className="shop-btn"
                onClick={handleLogout}
              />
            </a>
          </div>
        </div>
      </div>
      {/* End Main Content */}
    </div>
  );
};

export default LogOffPage;
