import React, { useContext } from "react";
import $ from "jquery";
import { useHistory } from "react-router-dom";

import { UserContext } from "../context/UserContext";

let isMenuOpen = false;

export default function Header() {
  const onMenuBtnClick = () => {
    $("body").addClass("menu-open");
    isMenuOpen = true;
  };

  $("html").click(function () {
    if (isMenuOpen) {
      console.log("11 object");
      $("body").removeClass("menu-open");
      isMenuOpen = false;
    }
  });

  const { meestUser, dispatch } = useContext(UserContext);

  const history = useHistory();

  const onLogoutClickHandler = () => {
    localStorage.setItem("meestUser", null);
    localStorage.setItem("token", "");
    dispatch({ type: "CLEAR" });
    history.push("/login");
  };

  return (
    <>
      <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow">
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div className="navbar-collapse" id="navbar-mobile">
              <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center navIcon">
                <ul className="nav navbar-nav">
                  <li
                    className="nav-item mobile-menu d-xl-none mr-auto mymenu"
                    onClick={onMenuBtnClick}
                  >
                    <a
                      className="nav-link nav-menu-main menu-toggle hidden-xs"
                      href="#"
                    >
                      <i className="ficon feather icon-menu"></i>
                    </a>
                  </li>
                </ul>
                {/* <!-- <ul className="nav navbar-nav bookmark-icons">-->
                            <!-- li.nav-item.mobile-menu.d-xl-none.mr-auto-->
                            <!--   a.nav-link.nav-menu-main.menu-toggle.hidden-xs(href='#')-->
                            <!--     i.ficon.feather.icon-menu-->
                          <!--  <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-todo.html" data-toggle="tooltip" data-placement="top" title="Todo"><i className="ficon feather icon-check-square"></i></a></li>
                            <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-chat.html" data-toggle="tooltip" data-placement="top" title="Chat"><i className="ficon feather icon-message-square"></i></a></li>
                            <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-email.html" data-toggle="tooltip" data-placement="top" title="Email"><i className="ficon feather icon-mail"></i></a></li>
                            <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-calender.html" data-toggle="tooltip" data-placement="top" title="Calendar"><i className="ficon feather icon-calendar"></i></a></li>
                        </ul>--> */}
                {/* <!-- <ul className="nav navbar-nav">
                            <li className="nav-item d-none d-lg-block"><a className="nav-link bookmark-star"><i className="ficon feather icon-star warning"></i></a>
                                <div className="bookmark-input search-input">
                                    <div className="bookmark-input-icon"><i className="feather icon-search primary"></i></div>
                                    <input className="form-control input" type="text" placeholder="Explore Meest..." tabindex="0" data-search="template-list">
                                    <ul className="search-list search-list-bookmark"></ul>
                                </div>-->
                                <!-- select.bookmark-select-->
                                <!--   option Chat-->
                                <!--   option email-->
                                <!--   option todo-->
                                <!--   option Calendar-->
                          <!--  </li>
                        </ul> */}
              </div>

              
              <ul className="nav navbar-nav">
                <li className="dropdown dropdown-user nav-item">
                  <a
                    className="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <span>
                      <img
                        className="round"
                        src={meestUser && meestUser.displayPicture}
                        alt="avatar"
                        height="40"
                        width="40"
                      />
                    </span>
                    &nbsp; &nbsp;
                    <div className="user-nav d-sm-flex d-none">
                      <span className="user-name text-bold-600">
                        {meestUser &&
                          `${meestUser.firstName} ${meestUser.lastName}`}
                      </span>
                      <span
                        className="user-status"
                        style={{ marginTop: "7px" }}
                      >
                        Available
                      </span>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="edit-profile.html">
                      <i className="feather icon-user"></i> Edit Profile
                    </a>
                    {/* <!-- <a className="dropdown-item" href="app-email.html"><i className="feather icon-mail"></i> My Inbox</a><a className="dropdown-item" href="app-todo.html"><i className="feather icon-check-square"></i> Task</a><a className="dropdown-item" href="app-chat.html"><i className="feather icon-message-square"></i> Chats</a> --> */}
                    <div className="dropdown-divider"></div>
                    <div
                      className="dropdown-item"
                      onClick={onLogoutClickHandler}
                    >
                      <i className="feather icon-power"></i> Logout
                    </div>
                  </div>


                </li>

                {/* <li className="nav-item nav-search">
                    <a className="nav-link nav-link-search">
                      <i className="ficon feather icon-search"></i>
                    </a>
                    <div className="search-input">
                      <div className="search-input-icon">
                        <i className="feather icon-search primary"></i>
                      </div>
                      <input
                        className="input"
                        type="text"
                        placeholder="Explore Meest..."
                        tabindex="-1"
                        data-search="template-list"
                      />
                      <div className="search-input-close">
                        <i className="feather icon-x"></i>
                      </div>
                      <ul className="search-list search-list-main"></ul>
                    </div>
                  </li> */}




              </ul>



   

            </div>
          </div>
        </div>
      </nav>
      <ul className="main-search-list-defaultlist d-none">
        <li className="d-flex align-items-center">
          <a className="pb-25" href="#">
            <h6 className="text-primary mb-0">Files</h6>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between w-100"
            href="#"
          >
            <div className="d-flex">
              <div className="mr-50">
                <img
                  src="app-assets/images/icons/xls.png"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">Two new item submitted</p>
                <small className="text-muted">Marketing Manager</small>
              </div>
            </div>
            <small className="search-data-size mr-50 text-muted">
              &apos;17kb
            </small>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between w-100"
            href="#"
          >
            <div className="d-flex">
              <div className="mr-50">
                <img
                  src="app-assets/images/icons/jpg.png"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">52 JPG file Generated</p>
                <small className="text-muted">FontEnd Developer</small>
              </div>
            </div>
            <small className="search-data-size mr-50 text-muted">
              &apos;11kb
            </small>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between w-100"
            href="#"
          >
            <div className="d-flex">
              <div className="mr-50">
                <img
                  src="app-assets/images/icons/pdf.png"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">25 PDF File Uploaded</p>
                <small className="text-muted">Digital Marketing Manager</small>
              </div>
            </div>
            <small className="search-data-size mr-50 text-muted">
              &apos;150kb
            </small>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between w-100"
            href="#"
          >
            <div className="d-flex">
              <div className="mr-50">
                <img
                  src="app-assets/images/icons/doc.png"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">Anna_Strong.doc</p>
                <small className="text-muted">Web Designer</small>
              </div>
            </div>
            <small className="search-data-size mr-50 text-muted">
              &apos;256kb
            </small>
          </a>
        </li>
        <li className="d-flex align-items-center">
          <a className="pb-25" href="#">
            <h6 className="text-primary mb-0">Members</h6>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between py-50 w-100"
            href="#"
          >
            <div className="d-flex align-items-center">
              <div className="avatar mr-50">
                <img
                  src="app-assets/images/portrait/small/avatar-s-8.jpg"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">John Doe</p>
                <small className="text-muted">UI designer</small>
              </div>
            </div>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between py-50 w-100"
            href="#"
          >
            <div className="d-flex align-items-center">
              <div className="avatar mr-50">
                <img
                  src="app-assets/images/portrait/small/avatar-s-1.jpg"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">Michal Clark</p>
                <small className="text-muted">FontEnd Developer</small>
              </div>
            </div>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between py-50 w-100"
            href="#"
          >
            <div className="d-flex align-items-center">
              <div className="avatar mr-50">
                <img
                  src="app-assets/images/portrait/small/avatar-s-14.jpg"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">Milena Gibson</p>
                <small className="text-muted">Digital Marketing Manager</small>
              </div>
            </div>
          </a>
        </li>
        <li className="auto-suggestion d-flex align-items-center cursor-pointer">
          <a
            className="d-flex align-items-center justify-content-between py-50 w-100"
            href="#"
          >
            <div className="d-flex align-items-center">
              <div className="avatar mr-50">
                <img
                  src="app-assets/images/portrait/small/avatar-s-6.jpg"
                  alt="png"
                  height="32"
                />
              </div>
              <div className="search-data">
                <p className="search-data-title mb-0">Anna Strong</p>
                <small className="text-muted">Web Designer</small>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <ul className="main-search-list-defaultlist-other-list d-none">
        <li className="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer">
          <a className="d-flex align-items-center justify-content-between w-100 py-50">
            <div className="d-flex justify-content-start">
              <span className="mr-75 feather icon-alert-circle"></span>
              <span>No results found.</span>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
}
