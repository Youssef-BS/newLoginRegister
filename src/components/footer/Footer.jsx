import React from 'react';
import {Link} from "react-router-dom";
import ScrollToTop from '../scrollToTop/ScrollToTop';

const Footer = () => {
  return (
    <>
    <div className="footer py-3 py-lg-5">
      <div className="container-fluid">
        <div className="row">
          {/* Support Section */}
          <div className="col-md-4 column menu icon d-flex flex-xl-row flex-column support">
            <div className="menu-left">
              <svg viewBox="0 0 40 43">
                <g fill="#080808" fillRule="nonzero">
                  <path d="M39.956 23.915a7.28 7.28 0 00-2.534-5.546v-.444c0-4.304-1.689-8.74-4.622-12.202C29.689 2.041 25.644 0 21.467 0h-2.89C9.423 0 2.623 9.45 2.623 17.925v.4a7.332 7.332 0 00-2.577 5.59A7.3 7.3 0 005.11 30.88c.711 1.508 2.267 2.529 4.045 2.529 2.444 0 4.444-1.997 4.444-4.437v-9.85c0-2.44-2-4.437-4.445-4.437A4.396 4.396 0 005.29 16.95c-.311.089-.622.222-.934.355.312-7.41 6.4-15.618 14.223-15.618h2.888c7.778 0 13.911 8.208 14.267 15.574-.356-.178-.755-.311-1.2-.444-.8-1.287-2.222-2.174-3.822-2.174-2.445 0-4.445 1.996-4.445 4.436v9.895c0 2.218 1.6 4.037 3.734 4.392v2.219c0 1.73-1.423 3.15-3.156 3.15h-3.156c-.489-1.02-1.867-1.73-3.556-1.73-2.088 0-3.733 1.153-3.733 2.573 0 1.464 1.645 2.573 3.733 2.573 1.69 0 3.067-.71 3.556-1.73h3.156c2.667 0 4.844-2.174 4.844-4.836V33.32c1.334-.31 2.445-1.198 3.022-2.351 3.068-.932 5.246-3.772 5.246-7.055z"/>
                  <path d="M9.156 16.327a2.767 2.767 0 012.755 2.751v9.894a2.767 2.767 0 01-2.755 2.751 2.767 2.767 0 01-2.756-2.75v-9.85c-.045-1.553 1.2-2.796 2.756-2.796zM4.667 19.123v9.76a5.691 5.691 0 01-2.934-4.968 5.638 5.638 0 012.934-4.97v.178zM20.089 40.464c-1.289 0-2.045-.577-2.045-.887 0-.31.8-.888 2.045-.888 1.289 0 2.045.577 2.045.888.044.31-.756.887-2.045.887zM30.711 31.768a2.767 2.767 0 01-2.755-2.75v-9.895a2.767 2.767 0 012.755-2.75 2.767 2.767 0 012.755 2.75v9.894a2.767 2.767 0 01-2.755 2.751zM35.156 28.973V18.857a5.665 5.665 0 013.11 5.058 5.665 5.665 0 01-3.11 5.058z"/>
                </g>
              </svg>
              <h2>Need help?</h2>
              <h4>Our team is here for you</h4>
            </div>
            <div className="menu-right">
              <p className="text-center">
                <a className="mb-0 mail-link" href="mailto:support@fos-lighting.eu">support@fos-lighting.eu</a>
              </p>
              <p className="home-boxes__divider">Or</p>
              <Link to="/Support" target="_blank" className="btn btn-outline btn-outline--orange btn-big-fn18 w-100">Support</Link>
            </div>
          </div>
          {/* Dealer Section */}
          <div className="col-md-4 column menu icon d-flex flex-xl-row flex-column dealer">
            <div className="menu-left">
              <svg viewBox="0 0 48 31">
                <g fill="#080808" fillRule="nonzero">
                  <path d="M11.89 14.598l-.03-.031a1.991 1.991 0 00-1.406-.574c-.548 0-1.06.215-1.439.606l-3.323 3.393a2.034 2.034 0 00.033 2.86l.032.032c.377.37.875.574 1.406.574.548 0 1.058-.215 1.438-.606l3.323-3.394c.774-.796.76-2.08-.033-2.86zM15.973 17.626l-.032-.031a1.995 1.995 0 00-1.405-.574 1.99 1.99 0 00-1.44.606l-3.32 3.395c-.775.796-.76 2.08.032 2.86l.032.03c.377.371.876.576 1.406.576.547 0 1.059-.216 1.438-.607l3.323-3.394a2.035 2.035 0 00-.034-2.86zM20.319 20.293l-.033-.032a1.993 1.993 0 00-1.406-.574c-.548 0-1.058.216-1.438.607l-3.323 3.394a2.034 2.034 0 00.033 2.86l.032.032c.376.37.875.574 1.406.574a1.99 1.99 0 001.439-.606l3.322-3.395c.775-.797.76-2.081-.032-2.86zM24.4 23.2l-.032-.033a1.992 1.992 0 00-1.405-.572 1.99 1.99 0 00-1.439.606l-3.322 3.394c-.776.797-.76 2.081.033 2.86l.033.032c.375.37.875.574 1.405.574.547 0 1.059-.215 1.438-.606l3.323-3.395c.775-.797.76-2.08-.033-2.86z"></path>
                  <path d="M27.972 8.436c-3.519 3.35-6.243 4.603-6.359 4.656l-.022.008c-.525.168-1.15.256-1.808.256-.835 0-1.525-.138-1.863-.257-.682-.24-1.844-1.369-2.346-2.278-.517-.937-.068-2.355-.047-2.415l.016-.053 7.723-7.33c-.37-.37-1.104-.559-2.186-.559-2.95 0-7.415 1.435-7.665 1.517-.337.15-.825.226-1.45.226-1.117 0-2.33-.237-2.524-.275h-.006C8.78 1.932 7.064.895 6.788.725c-.28-.099-.547-.15-.79-.15-.66 0-.971.37-1.03.446L1.247 9.57C.077 11.78-.008 12.425.002 12.589c2.044.5 4.754 3.454 5.427 4.218l3.875-3.81.062-.013c.33-.07.647-.106.945-.106 2.382 0 3.05 2.214 3.201 2.917a5.83 5.83 0 01.569-.029c2.82 0 3.407 2.272 3.525 3.047a5.64 5.64 0 011.113-.12c2.586 0 3.181 2.185 3.308 2.92 1.36-.207 2.408.086 3.109.864 1.116 1.233.942 3.231.934 3.315l-.007.078-3.837 3.921c.536.288 1.046.432 1.519.432 1.898 0 2.725-2.351 2.733-2.376l.06-.175.182.033c.317.057.62.086.898.086 2.564 0 2.696-2.436 2.7-2.539l.012-.27.26.068a5.74 5.74 0 001.43.201c2.67 0 2.938-2.531 2.947-2.638l.023-.237.233.043c.396.075.766.112 1.1.112.893 0 1.563-.267 1.99-.793.826-1.015.529-2.678.511-2.774-.7-2.804-9.6-9.585-10.852-10.528z"></path>
                </g>
              </svg>
              <h2>Become a Dealer</h2>
            </div>
            <div className="menu-right">
              <p>
                <b>Work with us</b><br />
                Be a partner in growth
              </p>
              <Link to="/create-account" className="btn btn-primary-black-text btn-big-fn18 w-100">Create Account</Link>
            </div>
          </div>
          {/* Sales Team Section */}
          <div className="col-md-4 column menu icon d-flex flex-xl-row flex-column dealer">
            <div className="menu-left">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="44px" height="44px" viewBox="0 0 44 44" version="1.1">
                <title>F43EAF7D-8FD4-41BB-BF73-B6DEDB94B1AD</title>
                <g id="V5_after-client-feedback" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Homepage_blacktiles_Video_A-Copy" transform="translate(-1316.000000, -1316.000000)">
                    <g id="Group-88" transform="translate(55.000000, 245.000000)">
                      <g id="Group-85" transform="translate(1223.000000, 1008.000000)">
                        <g id="mark_as_unread_black_24dp" transform="translate(38.000000, 63.000000)">
                          <polygon id="Path" points="0 0 44 0 44 44 0 44"></polygon>
                          <path d="M35.3693043,12.8878719 L30.644087,12.8878719 L20.2304348,7.45080092 L8.4173913,13.6128146 L8.4173913,31.0114416 C6.41826087,31.0114416 4.7826087,29.3803204 4.7826087,27.3867277 L4.7826087,13.1959725 C4.7826087,12.2354233 5.36417391,11.2205034 6.23652174,10.7674142 L20.2304348,3.82608696 L33.9335652,10.7674142 C34.7150435,11.1842563 35.2602609,12.0360641 35.3693043,12.8878719 Z M37.4956522,14.7002288 L13.8695652,14.7002288 C11.8704348,14.7002288 10.2347826,16.3313501 10.2347826,18.3249428 L10.2347826,34.6361556 C10.2347826,36.6297483 11.8704348,38.2608696 13.8695652,38.2608696 L37.4956522,38.2608696 C39.4947826,38.2608696 41.1304348,36.6297483 41.1304348,34.6361556 L41.1304348,18.3249428 C41.1304348,16.3313501 39.4947826,14.7002288 37.4956522,14.7002288 Z M37.4956522,21.3515789 L25.6826087,27.3867277 L13.8695652,21.3515789 L13.8695652,18.3249428 L25.6826087,24.3600915 L37.4956522,18.3249428 L37.4956522,21.3515789 Z" id="Shape" fill="#080808" fillRule="nonzero"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <h2>Contact our Sales Team</h2>
            </div>
            <div className="menu-right">
              <p>
                <b>We are all ears</b><br />
                We would like to hear from you
              </p>
              <Link to="/CntactsUs" className="btn btn-outline btn-outline--orange btn-big-fn18 w-100">Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright py-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6 col-lg text-left order-1 order-lg-1">
            <a href="https://www.fos-lighting.eu/cookies.php">Cookies Policy</a>
          </div>
          <div className="col-12 col-lg-auto text-center footer-copyright__center-column mt-3 mt-lg-0 copy order-10 order-lg-1">
            <span className="copyright-text">Copyright © 2024 - All Rights Reserved.</span>
            <span className="web-develop-text">Designed and developed by <a href="#" title="web-experts.gr" target="_blank" rel="nofollow">WLA</a><img className="ml-2" src="https://www.fos-lighting.eu/images/web-experts-copyright.png" /></span>
          </div>
          <div className="col-6 col-lg text-right order-1 order-lg-1">
            <a href="https://www.fos-lighting.eu/gdpr.php">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
    <div className="to-top-icons show bottom">
      <ScrollToTop />
      <div className="to-top-filters" data-toggle="modal" data-target="#filtersModal">
        <i className="las la-sliders-h"></i> <span>Filters</span>
      </div>
    </div>
    </>
  );
};

export default Footer;