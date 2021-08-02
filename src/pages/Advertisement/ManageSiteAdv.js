import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function ManageSiteAdv() {
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
                      <Link to="/">Advertisements</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      {" "}
                      Manage Site Advertisements
                    </li>
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
                            Manage Site Advertisements{" "}
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
                                      rows="3"
                                      placeholder="Header (Appears on all pages right under the nav bar)"
                                    ></textarea>
                                    <label for="label-textarea">
                                      Header (Appears on all pages right under
                                      the nav bar)
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
                                      rows="3"
                                      placeholder="Sidebar (Appears on the bottom of home sidebar)"
                                    ></textarea>
                                    <label for="label-textarea">
                                      Sidebar (Appears on the bottom of home
                                      sidebar)
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
                                      rows="3"
                                      placeholder="Footer (Appears on all pages right before the footer)"
                                    ></textarea>
                                    <label for="label-textarea">
                                      Footer (Appears on all pages right before
                                      the footer)
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
                                      rows="3"
                                      placeholder="Posts 1"
                                    ></textarea>
                                    <label for="label-textarea">
                                      Posts 1 (Appears after 10 posts are
                                      loaded, between the posts)
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
                                      rows="3"
                                      placeholder="Posts 2"
                                    ></textarea>
                                    <label for="label-textarea">
                                      Posts 2 (Appears after 20 posts are
                                      loaded, between the posts)
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
                                      rows="3"
                                      placeholder="Posts 3"
                                    ></textarea>
                                    <label for="label-textarea">
                                      Posts 3 (Appears after 30 posts are
                                      loaded, between the posts)
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
