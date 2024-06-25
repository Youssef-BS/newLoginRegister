import React, { useState,useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import {updateUser} from "../../Features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {selectCurrentUser} from "../../Features/auth/authSlice" ; 
import { getUser , updatePasswordUser} from '../../Features/users/userSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CodeIcon from '@mui/icons-material/Code';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const AccountPage = () => {

    const currentUser = useSelector(selectCurrentUser)
    // const userSelect = useSelector((state) => state.user.userSelect);
    const user = useSelector((state) => state.user.userSelect); 
    console.log("user" + user.id)

    console.log(currentUser)

    const dispatch = useDispatch();
      

    const Params = useParams()

  const [showModal, setShowModal] = useState(false);
  const [currentContent, setCurrentContent] = useState(Params.type);
  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  useEffect(()=>{
      setCurrentContent(Params.type)
  },[Params.type])
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation here
    if (passwordNew !== passwordConfirmation) {
      alert('New password and confirmation do not match.');
      return;
    }
    // Submit the form data
    const formData = new FormData();
    formData.append('action', 'process');
    formData.append('password_current', passwordCurrent);
    formData.append('password_new', passwordNew);
    formData.append('password_confirmation', passwordConfirmation);

    fetch('https://www.fos-lighting.eu/account_password.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle successful response
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

    const orders = [
      {
        orderId: 25990,
        orderDate: 'Tuesday 04 June, 2024',
        orderStatus: 'Packed Fos',
        products: 1,
        orderCost: '1,622.40€',
      },
      {
        orderId: 20984,
        orderDate: 'Monday 20 November, 2023',
        orderStatus: 'Packed Fos',
        products: 3,
        orderCost: '6,292.80€',
      },
      {
        orderId: 20948,
        orderDate: 'Saturday 18 November, 2023',
        orderStatus: 'Cancelled',
        products: 1,
        orderCost: '3,380.80€',
      },
    ];

    const { type } = useParams();

  
  
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      vat: '',
      address: '',
      street: '',
      city: '',
      postcode: '',
      website: '',
      country: '',
      company: '',
    });
  
    useEffect(() => {
      if (user) {
        setFormData({
          email: user.email || '',
          password: '',
          country: user.country || '',
          company: user.company || '',
          street_address: user.street_address || '',
          postcode: user.postcode || '',
          city: user.city || '',
          lastname: user.lastname || '',
          firstname: user.firstname || '',
          vat: user.vat || '',
          telephone: user.telephone || '',
          website: user.website || '',
        });
      }
    }, [user]);
  

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleUpdate = (e) => {
      e.preventDefault();
      const userId = currentUser.user.id;
      dispatch(updateUser({ id: userId, userData: formData }));
    };


    useEffect(() => {
          dispatch(getUser(currentUser.user.id));
    }, [dispatch, currentUser]);

  
    const handleUpdatePassword = async (e) => {
      e.preventDefault();
  
      if (passwordNew !== passwordConfirmation) {
        alert("New password and confirmation do not match.");
        return;
      }
  
      const userData = {
        passwordCurrent,
        passwordNew,
      };
  
      const userId = currentUser.user.id; 
  
      dispatch(updatePasswordUser({ id: userId, userData }));
      console.log("id user password" + userId)
    };

    


  const renderContent = () => {
    switch (currentContent) {
      case 'Account Information':
        return <div className="my-acount-wrap">
 <form name="account_edit" id="account_edit" onSubmit={handleUpdate}>
        <input type="hidden" name="action" value="process" />
        <div className="mainwrap my-account">
          <div className="headingtitle inner">
            <h1>Account Information</h1>
          </div>
          <div className="content edit-account account-panel">
            <div className="box">
              <div className="title first">My Account</div>

              <div className="field">
                <div className="fieldlabel">First name:</div>
                <div className="fieldkey">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="clear"></div>
              </div>

              <div className="field">
                <div className="fieldlabel">Last name:</div>
                <div className="fieldkey">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="clear"></div>
              </div>

              <div className="field">
                <div className="fieldlabel">Email Address:</div>
                <div className="fieldkey">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="clear"></div>
              </div>

              <div className="field">
                <div className="fieldlabel">Telephone:</div>
                <div className="fieldkey">
                  <input
                    type="text"
                    name="telephone"
                    id="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="clear"></div>
              </div>

              <div className="field">
                <div className="fieldlabel">Website:</div>
                <div className="fieldkey">
                  <input
                    type="text"
                    name="website"
                    id="website"
                    value={formData.website}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="clear"></div>
              </div>
            </div>

            <div className="box company">
              <div className="title">
                <span>Company Details</span>
              </div>

              <div className="field">
                <div className="fieldlabel">Company name:</div>
                <div className="fieldkey">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="clear"></div>
              </div>

              <div className="field">
                <div className="fieldlabel">VAT:</div>
                <div className="fieldkey">
                  <input
                    type="text"
                    name="vat"
                    id="vat"
                    value={formData.vat}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>

          <div className="box submit">
            <div className="field center">
              <div className="fieldkey">
                <input
                  type="submit"
                  border="0"
                  alt="Save changes"
                  value="Save changes"
                  title="Save changes"
                  className="shop-btn"
                />
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </form>

        <div className="box delete_account">
          <button id="myBtn" className="shop-btn outline" onClick={handleModalOpen}>
            Delete Account
          </button>

          {showModal && (
            <div id="deleteAccount" className="deleteAccount">
              <div className="modal-content">
                <span className="close-modal" onClick={handleModalClose}>
                  <i className="las la-times"></i>
                </span>
                <div className="modal-header">Delete Account</div>
                <div className="modal-text">After this you will not be able to restore the account!</div>
                <div className="modal-buttons">
                  <form
                    name="delete_account"
                    id="delete_account"
                    action="https://www.fos-lighting.eu/account.php"
                    method="post"
                  >
                    <input type="hidden" name="action" value="delete-process" />
                    <input type="hidden" name="customer_id" value="16445" />
                    <button type="submit" className="modal-button shop-btn danger">
                      Delete
                    </button>
                    <button type="button" className="modal-button shop-btn" onClick={handleModalClose}>
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>;
      case 'Edit Address':
        return <div className="my-account-wrap">
        <div className="mainwrap my-account" id="address_book">
          <div className="headingtitle inner">
            <h1>Edit Address</h1>
          </div>
  
          <div className="description note main">
            <i className="las la-map-marker-alt"></i>
            <span>
              This address is used as the pre-selected shipping and billing address
              for orders placed on this store.<br /><br />
              This address is also used as the base for product and service tax
              calculations.
            </span>
          </div>
  
          <div className="content account-panel">
            <div className="box addresses">
              <div className="title">Address Book Entries</div>
              <div className="addresses">
                <div className="address">
                  <div className="description">
                    <br />
                    <b>Primary Address</b> - WEB EVENT SERVICES, Chaouki RAFRAFI, 7 rue ?ric Tabarly, Massy, 91300, France
                  </div>
                  <div className="description buttons">
                    <a className="edit" href="https://www.fos-lighting.eu/address_book_process.php?edit=19936">Edit</a>
                    <a className="delete" href="https://www.fos-lighting.eu/address_book_process.php?delete=19936">Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description add-address text-center">
            <a href="https://www.fos-lighting.eu/address_book_process.php">
              <input
                type="button"
                border="0"
                alt="New Address"
                value="New Address"
                title="New Address"
                className="shop-btn"
              />
            </a>
          </div>
        </div>
      </div>;
      case 'Change Password':
        return  <div className="my-account-wrap">
        <form
          name="account_password"
          id="account_password"
          onSubmit={handleUpdatePassword}
          noValidate
        >
          <input type="hidden" name="action" value="process" />
  
          <div className="mainwrap my-account">
            <div className="headingtitle inner">
              <h1>Change Password</h1>
            </div>
  
            <div className="content account_password account-panel">
              <div className="box">
                <div style={{ marginTop: '20px' }}></div>
  
                <div className="field">
                  <div className="fieldlabel req">Current password:</div>
                  <div className="fieldkey">
                    <input
                      type="password"
                      name="password_current"
                      id="password_current"
                      maxLength="40"
                      value={passwordCurrent}
                      onChange={(e) => setPasswordCurrent(e.target.value)}
                    />
                    <span className="inputRequirement">*</span>
                  </div>
                  <div className="clear"></div>
                </div>
  
                <div className="field">
                  <div className="fieldlabel req">New password:</div>
                  <div className="fieldkey">
                    <input
                      type="password"
                      name="password_new"
                      id="password_new"
                      maxLength="40"
                      value={passwordNew}
                      onChange={(e) => setPasswordNew(e.target.value)}
                    />
                    <span className="inputRequirement">*</span>
                  </div>
                  <div className="clear"></div>
                </div>
  
                <div className="field">
                  <div className="fieldlabel req">Confirm new Password:</div>
                  <div className="fieldkey">
                    <input
                      type="password"
                      name="password_confirmation"
                      id="password_confirmation"
                      maxLength="40"
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    <span className="inputRequirement">*</span>
                  </div>
                  <div className="clear"></div>
                </div>
  
                <div className="field submit center">
                  <div className="fieldkey">
                    <input
                      type="submit"
                      border="0"
                      alt="Save"
                      value="Save"
                      title="Save"
                      className="shop-btn"
                    />
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>;
      case 'Order History':
        return <div className="my-account-wrap">
        <div className="mainwrap my-account">
          <div className="headingtitle inner">
            <h1>My Order History</h1>
          </div>
          <div className="content account_history account-panel">
            <div className="all-orders">
              {orders.map((order) => (
                <div className="order-item" key={order.orderId}>
                  <a href={`https://www.fos-lighting.eu/account_history_info.php?order_id=${order.orderId}`}>
                    <div className="title">Order Number: <b>{order.orderId}</b></div>
                    <div className="description">Order Date: <b>{order.orderDate}</b></div>
                    <div className="description status">Order Status: <b>{order.orderStatus}</b></div>
                    <div className="description">Products: <b>{order.products}</b></div>
                    <div className="description price">Order Cost: <b>{order.orderCost}</b></div>
                  </a>
                  <div className="order-details">
                    <a className="icon" href={`https://www.fos-lighting.eu/account_history_info.php?order_id=${order.orderId}`}>
                      <i className="las la-search"></i>
                    </a>
                  </div>
                </div>
              ))}
              <div className="clear"></div>
            </div>
  
            <div className="splitbox">
              <div className="left">Showing <b>1</b> to <b>{orders.length}</b> (from <b>{orders.length}</b> orders)</div>
              <div className="right">&nbsp;<b>1</b>&nbsp;</div>
            </div>
          </div>
        </div>
      </div>;
      case 'XML Products':
        return <div className="my-account-wrap">
        <div className="mainwrap my-account">
          <div className="headingtitle inner">
            <h1>XML Products</h1>
          </div>
          <div className="content account_history account-panel container">
            <div className="row">
              <div className="col-12 mb-5 mt-5">
                <p>
                  You can use the following url to import / update your eshop products: <br />
                  <b>https://www.fos-lighting.eu/products_xml.php?code=10f10c449878c6f1137e87c1fca3ad4f</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>;
      default:
        return <div>Select an option to view content.</div>;
    }
  };
  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container-fluid account-inner-pages">
      <div className="account menu home">
        <div className="headingtitle account-menu">
          <h1>My account</h1>
        </div>

        <div className="box">
      <div className={`item ${currentContent === 'Account Information' ? 'current' : ''}`}>
        <a href="#!" onClick={() => setCurrentContent('Account Information')}>
          <AccountCircleIcon />
          <span>Account Information</span>
        </a>
      </div>

      <div className={`item ${currentContent === 'Edit Address' ? 'current' : ''}`}>
        <a href="#!" onClick={() => setCurrentContent('Edit Address')}>
          <EditLocationIcon />
          <span>Edit Address</span>
        </a>
      </div>

      <div className={`item ${currentContent === 'Change Password' ? 'current' : ''}`}>
        <a href="#!" onClick={() => setCurrentContent('Change Password')}>
          <VpnKeyIcon />
          <span>Change Password</span>
        </a>
      </div>

      <div className={`item ${currentContent === 'Order History' ? 'current' : ''}`}>
        <a href="#!" onClick={() => setCurrentContent('Order History')}>
          <ShoppingCartIcon />
          <span>Order History</span>
        </a>
      </div>

      <div className={`item ${currentContent === 'XML Products' ? 'current' : ''}`}>
        <a href="#!" onClick={() => setCurrentContent('XML Products')}>
          <CodeIcon />
          <span>XML Products</span>
        </a>
      </div>

      <div className={`item ${currentContent === 'Logout' ? 'current' : ''}`}>
        <Link to={'/log-off'}>
          <ExitToAppIcon />
          <span>Logout</span>
        </Link>
      </div>

      <div className="clear"></div>
    </div>
      </div>
      {renderContent()}

      
      
    </div>
  );
};

export default AccountPage;
