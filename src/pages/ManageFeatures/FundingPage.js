import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function FundingPage() {
  return (
    <>
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-left mb-0">
                    Funding
                  </h2>
                  <div className="breadcrumb-wrapper col-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Funding Details
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
              <div className="form-group breadcrum-right">
                <div className="dropdown">
                  <button
                    className="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="feather icon-settings"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      Chat
                    </a>
                    <a className="dropdown-item" href="#">
                      Email
                    </a>
                    <a className="dropdown-item" href="#">
                      Calendar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="knowledge-base-search">
              <div className="row">
                <div className="col-12">
                  <div className="card knowledge-base-bg white">
                    <div className="card-content">
                      <div className="card-body p-sm-4 p-2">
                        <h1 className="white">NewTest V4</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="knowledge-base-content">
              <div className="row search-content-info">
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="fund-details">
                        <h1>INR 500000</h1>
                        <p>Raised of INR 100000</p>
                      </div>
                      <div className="fund-details">
                        <h1>INR 1000</h1>
                        <p>Total donations</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="fund-details">
                        <h4>
                          <i
                            className="fa fa-info-circle"
                            aria-hidden="true"
                          ></i>{" "}
                          Info
                        </h4>
                        <p>Help us build the radio</p>
                      </div>
                      <div className="fund-details">
                        <h4>
                          <i className="fa fa-users" aria-hidden="true"></i>{" "}
                          Recent donations
                        </h4>
                        <div className="friend-details funding-user">
                          <div>
                            <Link to="/Profile-Details">
                              <img
                                className="friend-profile-img"
                                src="app-assets/images/profile/user-uploads/user-04.jpg"
                              />
                            </Link>
                          </div>
                          <div className="friend-name">
                            <Link to="/Profile-Details">
                              <h2>Praveen Kumar</h2>
                            </Link>
                            <a href="#">
                              <p>Rs 500 .12 hours ago</p>
                            </a>
                          </div>
                        </div>
                        <div className="friend-details funding-user">
                          <div>
                            <Link to="/Profile-Details">
                              <img
                                className="friend-profile-img"
                                src="app-assets/images/profile/user-uploads/user-04.jpg"
                              />
                            </Link>
                          </div>
                          <div className="friend-name ">
                            <Link to="/Profile-Details">
                              <h2>Praveen Kumar</h2>
                            </Link>
                            <a href="#">
                              <p>Rs 500 .12 hours ago</p>
                            </a>
                          </div>
                        </div>
                        <div className="friend-details funding-user">
                          <div>
                            <Link to="/Profile-Details">
                              <img
                                className="friend-profile-img"
                                src="app-assets/images/profile/user-uploads/user-04.jpg"
                              />
                            </Link>
                          </div>
                          <div className="friend-name">
                            <Link to="/Profile-Details">
                              <h2>Praveen Kumar</h2>
                            </Link>
                            <a href="#">
                              <p>Rs 500 .12 hours ago</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>

      <Footer />
    </>
  );
}
