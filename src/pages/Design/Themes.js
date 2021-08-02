import React from "react";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

export default function Themes() {
  return (
    <>
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="breadcrumb-wrapper col-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Design</Link>
                    </li>
                    <li className="breadcrumb-item active"> Themes</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-12 col-md-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4>Manage Themes</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-12">
                            <div className="card">
                              <a href="#">
                                <div
                                  className="card-header align-items-start pb-0"
                                  style={{
                                    boxShadow:
                                      "0 4px 25px 0 rgba(0, 0, 0, 0.1)",
                                  }}
                                >
                                  <div className="col-12 col-sm-4 col-md-5 col-lg-4 mr-0">
                                    <div className="avatar bg-rgba-primary p-50 m-0">
                                      <img
                                        src="app-assets/images/icons/themeLogo-2.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-8 col-md-7 col-lg-8 ">
                                    <h2 className="text-bold-700 mb-25">
                                      Light Mode
                                    </h2>
                                    <p className="mt-1">Version: 1.0</p>
                                    <p>Author: Meest</p>
                                    <p style={{ color: "green" }}>Activated</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-12">
                            <div className="card">
                              <a href="#">
                                <div
                                  className="card-header align-items-start pb-0"
                                  style={{
                                    boxShadow:
                                      "0 4px 25px 0 rgba(0, 0, 0, 0.1)",
                                  }}
                                >
                                  <div className="col-12 col-sm-4 col-md-5 col-lg-4 mr-0">
                                    <div className="avatar bg-rgba-primary p-50 m-0">
                                      <img
                                        src="app-assets/images/icons/themeLogo.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-8 col-md-7 col-lg-8">
                                    <h2 className="text-bold-700 mb-25">
                                      Dark Mode
                                    </h2>
                                    <p className="mt-1">Version: 2.0</p>
                                    <p>Author: Meest</p>
                                    <p>Active</p>
                                  </div>
                                </div>
                              </a>
                            </div>
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
