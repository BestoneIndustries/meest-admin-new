import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function CustomJSCSS() {
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
                    <li className="breadcrumb-item active"> Custom JS / CSS</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-12 col-md-12">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <h4 className="card-title col-md-4">
                            Custom JS / CSS{" "}
                          </h4>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <fieldset className="form-label-group">
                                    <textarea
                                      className="form-control"
                                      id="label-textarea"
                                      rows="6"
                                      placeholder="Header Custom JavaScript"
                                    ></textarea>
                                    <label for="label-textarea">
                                      Header Custom JavaScript
                                    </label>
                                  </fieldset>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <fieldset className="form-label-group">
                                    <textarea
                                      className="form-control"
                                      id="label-textarea"
                                      rows="6"
                                      placeholder="Footer Custom JavaScript"
                                    ></textarea>
                                    <label for="label-textarea">
                                      Footer Custom JavaScript
                                    </label>
                                  </fieldset>
                                </div>
                              </div>

                              <div className="col-sm-12">
                                <div className="form-group">
                                  <fieldset className="form-label-group">
                                    <textarea
                                      className="form-control"
                                      id="label-textarea"
                                      rows="6"
                                      placeholder="Header CSS Style"
                                    ></textarea>
                                    <label for="label-textarea">
                                      Header CSS Style
                                    </label>
                                  </fieldset>
                                </div>
                              </div>

                              <div className="col-sm-12 mt-3">
                                <a href="#" className="btn btn-primary shadow">
                                  Save
                                </a>
                              </div>
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
