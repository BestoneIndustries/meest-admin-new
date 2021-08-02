import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function EditKeywordLanguage() {
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
                      <Link to="/">Languages</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Edit Language & Key
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Edit Language</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-12">
                            <label className="form-label">
                              Language Name{" "}
                              <small>
                                Use only english letters, no spaces allowed.
                                E.g: russian
                              </small>
                            </label>
                            <div className="form-group">
                              <input
                                type="text"
                                name="text"
                                className="form-control"
                                placeholder="Enter New Language"
                                required=""
                                data-validation-required-message=""
                                aria-invalid="false"
                              />
                            </div>
                            <p>Note: This may take up to 5 minutes.</p>
                            <a href="#" className="btn btn-primary shadow">
                              Save
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Edit Key</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-12">
                            <label className="form-label">
                              Key Name{" "}
                              <small>
                                Use only english letters, no spaces allowed,
                                example: this_is_a_key
                              </small>
                            </label>
                            <div className="form-group">
                              <input
                                type="text"
                                name="text"
                                className="form-control"
                                placeholder="Enter Key Name"
                                required=""
                                data-validation-required-message=""
                                aria-invalid="false"
                              />
                            </div>
                            <p>&nbsp;</p>
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
