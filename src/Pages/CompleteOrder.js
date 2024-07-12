import React from 'react';
import { Edit, Lock, Add, Check, Truck, University, CashRegister, ShoppingCart, Percent } from '@mui/icons-material';
import { Radio, FormControlLabel, TextareaAutosize } from '@mui/material';
import { LocalShippingOutlined, AccountBalanceOutlined, ShoppingCartOutlined , MonetizationOn } from '@mui/icons-material';
import { CheckBoxOutlineBlank, CheckBox } from '@mui/icons-material';

const Col1 = () => {
    return (
        <div className="checkout-column column-1">
            <div className="checkout-box personal-details">
                <h3 className="step_title">
                    Company Details
                    <div className="edit-details" style={{ display: 'block' }}>
                        <span>Edit</span>
                        <Lock />
                    </div>
                </h3>
                <section className="step">
                    <div id="customer-details">
                        <div className="express-customer-toggle" style={{ display: 'none' }}>
                            Payment Details <Add />
                        </div>
                        <div id="expresscustomer" className="locked">
                            <div className="box">
                                <div className="field">
                                    <div className="fieldlabel">Company name:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="company" id="company" value="WEB EVENT SERVICES" readOnly />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">VAT:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="vat" id="vat" value="FR92521062331" readOnly />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">First name:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="firstname" id="firstname" value="Chaouki" readOnly />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">Last name:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="lastname" id="lastname" value="RAFRAFI" readOnly />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">Telephone:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="telephone" id="telephone" value="+33606502951" readOnly />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">Email Address:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="email_address" id="email_address" value="wes.france@yahoo.com" readOnly />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">Address:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="street_address" id="street_address" value="7 rue Éric Tabarly" readOnly />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">Postcode:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="postcode" id="postcode" value="91300" readOnly />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">City:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="city" id="city" value="Massy" readOnly />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">Country:</div>
                                    <div className="fieldkey">
                                        <select name="country" id="country">
                                            <option value="">Select</option>
                                            <option value="84">Greece</option>
                                            <option value="55">Cyprus</option>
                                        </select>
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fieldkey change-customer-details-container_mobile mobile">
                        <a href="https://www.fos-lighting.eu/account_edit.php?origin=checkout" id="change-customer-details" className="mainimagebutton1">
                            Account Information
                        </a>
                    </div>

                    <div className="checkbox-holder">
                        <div className="cboxcontainer send-other">
                            <input type="checkbox" name="send-to-different-address" id="send-to-different-address" value="1" />
                            <label htmlFor="send-to-different-address" className="css-label">
                                Ship to a different address?
                            </label>
                        </div>
                    </div>

                    <div className="new-address">
                        <select name="available_addresses" id="autocomplete_available_addresses" className="update-totals">
                            <option value="#" disabled>Select Address</option>
                            <option value="19936">WEB EVENT SERVICES, Chaouki RAFRAFI, 7 rue Éric Tabarly, Massy, 91300, France</option>
                            <option value="new">New address</option>
                        </select>
                        <div className="show-action send-to-different-address">
                            <div className="box">
                                <div className="field">
                                    <div className="fieldlabel">First name:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="firstname_shipping" id="firstname_shipping" />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">Last name:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="lastname_shipping" id="lastname_shipping" />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">Address:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="street_address_shipping" id="street_address_shipping" />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">Telephone:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="telephone_shipping" id="telephone_shipping" />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">Postcode:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="postcode_shipping" id="postcode_shipping" />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">City:</div>
                                    <div className="fieldkey">
                                        <input type="text" name="city_shipping" id="city_shipping" />
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="fieldlabel">Country:</div>
                                    <div className="fieldkey">
                                        <select name="country_shipping" id="country_shipping">
                                            <option value="">Select</option>
                                            <option value="84">Greece</option>
                                            {/* Add more countries as needed */}
                                        </select>
                                        &nbsp;
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};


const OrderSummary = () => {
  return (
      <div className="checkout-column column-2">
          <div className="checkout-box shipping">
              <section id="step_2">
                  <div className="title shippings">
                      <h3 className="step_title"><LocalShippingOutlined />Shipping Method</h3>
                  </div>
                  <div className="box">
                      <div className="shipping-module">
                          <div className="module">
                              <FormControlLabel
                                  control={<Radio />}
                                  label={
                                      <div className="module-title">
                                          Delivery at Place<br />
                                          (freight cost will be included to your invoice)
                                      </div>
                                  }
                              />
                          </div>
                      </div>
                      <div className="shipping-module">
                          <div className="module">
                              <FormControlLabel
                                  control={<Radio />}
                                  label={
                                      <div className="module-title">
                                          Delivery at carrier on Friday<br />
                                          (freight cost will be included to your invoice)
                                      </div>
                                  }
                              />
                          </div>
                      </div>
                  </div>
              </section>
          </div>

          <div className="checkout-box payment">
              <h3 className="step_title"><AccountBalanceOutlined />Payment Method</h3>
              <section id="step_3" className="inactivate step">
                  <div className="payment-details-container">
                      <div className="payment-module">
                          <FormControlLabel
                              control={<Radio />}
                              label="Bank account deposit"
                          />
                      </div>
                      <div className="payment-module">
                          <FormControlLabel
                              control={<Radio />}
                              label="Payment By Card"
                          />
                      </div>
                  </div>
              </section>
          </div>

          <div className="confirmation-container">
              <div className="title">
                  <h3 className="step_title"><ShoppingCartOutlined />Order summary</h3>
              </div>

              <div>
                  <div className="titles">
                      <div className="title">Product(s)</div>
                      <div className="qty">Quantity</div>
                      <div className="price">Price</div>
                  </div>

                  <div className="confirmation-product">
                      <div className="description">
                          <div className="item">
                              <span className="image">
                                  <img src="uploads/thumbnails/products_0_image_1020.jpg.thumb_57x38.jpg" alt=" IWM-200ΚΩΔΙΚΟΣ: L005774 " />
                              </span>

                              <div className="inner">
                                  <span className="name">IWM-200</span>
                                  <span className="model">Model: L005774</span>
                              </div>
                          </div>
                          <div className="qty">2</div>
                          <div className="price">345.00€</div>
                      </div>
                  </div>

                  <div className="confirmation-product">
                      <div className="description">
                          <div className="item">
                              <span className="image">
                                  <img src="uploads/thumbnails/products_0_image_1329.jpg.thumb_57x38.jpg" alt=" FOS Vintage 7 UltraΚΩΔΙΚΟΣ: L006087 " />
                              </span>

                              <div className="inner">
                                  <span className="name">FOS Vintage 7 Ultra</span>
                                  <span className="model">Model: L006087</span>
                              </div>
                          </div>
                          <div className="qty">1</div>
                          <div className="price">672.80€</div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="checkout-box comments">
              <div className="comments-container">
                  <div className="title">
                      <h3 className="step_title">Add Comments About Your Order</h3>
                  </div>
                  <div className="description">
                      <TextareaAutosize
                          name="comments"
                          placeholder="Add comments or instructions about your order ..."
                          rowsMin={2}
                          style={{ width: '100%' }}
                      />
                  </div>
              </div>
          </div>
      </div>
  );
};

const OrderTotals = () => {
  return (
      <div className="checkout-column column-3">
          <div className="title">
              <h3 className="step_title"><MonetizationOn /> Order Totals</h3>
          </div>
          <div className="container">
              <div className="checkout-totals-container">
                  <div className="checkout-box totals">
                      <div className="confirmation-check-totals">
                          <div className="order-total-container">
                              <div className="order-total total">
                                  <div className="order-total-title">Total:</div>
                                  <div className="order-total-text"><b>1,017.80€</b></div>
                              </div>
                          </div>
                          <div className="description prices-not-include-vat">
                              Prices do not include VAT
                          </div>
                          <div className="description button">
                              <input
                                  type="submit"
                                  value="Confirm Order"
                                  className="shop-btn"
                                  id="confirm_order_submit"
                                  border="0"
                                  alt="Confirm Order"
                                  title="Confirm Order"
                              />
                          </div>
                      </div>
                  </div>
              </div>

              <div className="field agree-check-box" style={{ marginTop: '12px' }}>
                  <div className="cboxcontainer d-flex flex-column">
                      <input type="checkbox" name="agreeterms" value="0" id="agreeterms" />
                      <label htmlFor="agreeterms" className="css-label">
                          <CheckBoxOutlineBlank /> I agree with<a className="ml-1" href="https://www.fos-lighting.eu/gdpr.php" target="_blank" style={{ textDecoration: 'underline' }}> personal data terms</a>
                      </label>
                  </div>
              </div>

              <div className="field agree-check-box">
                  <div className="cboxcontainer d-flex flex-column">
                      <input type="checkbox" name="agreeterms_cooperations" value="0" id="agreeterms_cooperations" />
                      <label htmlFor="agreeterms_cooperations" className="css-label">
                          <CheckBoxOutlineBlank /> I accept <a href="https://www.fos-lighting.eu/terms-of-cooperation-pr-3.html" target="_blank">cooperation terms</a>
                      </label>
                  </div>
              </div>

              <div className="field coupon-btn-container">
                  <span className="coup-btn">Got a coupon? Click here to use it</span>
              </div>

              <div className="container coupon-main-cont" style={{ display: 'none' }}>
                  {/* Discount Coupons */}
                  <div className="checkout-box discount">
                      <div className="discount-coupon-container">
                          <div className="title"><Percent /> Discount Coupon</div>
                          <div className="description fieldkey">
                              <Percent />
                              <input type="text" name="discount_coupon" id="discount_coupon" className="has-icon" placeholder="Coupon Code" />
                          </div>
                      </div>
                  </div>
                  {/* End Discount Coupons */}
              </div>

          </div>
      </div>
  );
};
const CompleteOrderForm = () => {
    
    return (
       
        <form name="checkout" id="checkout" action="https://www.fos-lighting.eu/checkout_process.php" method="post" noValidate>
            <input type="hidden" name="action" value="process" />
            <input type="hidden" name="pass" value="true" />
            <input type="hidden" name="form-action" value="https://www.fos-lighting.eu/checkout_process.php" />
            <input type="hidden" name="customer_id" value="16445" />

            <div className="progress-container">
                <ul className="progress-steps">
                    <li className="done" value="0"><i className="las la-door-open"></i></li>
                    <li className="active checkout" value="0"><i className="las la-shopping-cart"></i></li>
                    <li className="final" value="0"><i className="las la-check"></i></li>
                </ul>
            </div>

            <div className="one-page-checkout">

                <div className="headingtitle">
                    <h1>Complete Your Order</h1>
                </div>

                <div className="mainwrap inner">
                    <div className="tablet-container">
                        <Col1/>
                        <OrderSummary/>


                        
                    </div>
                    <OrderTotals/>

                </div>
            </div>
            </form>
            
            
       
    );
};

export default CompleteOrderForm;
