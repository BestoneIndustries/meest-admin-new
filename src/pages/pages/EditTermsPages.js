import React from "react";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

export default function EditTermsPages() {
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
                      <Link to="/">Pages </Link>
                    </li>
                    <li className="breadcrumb-item active">Edit Terms Pages</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="basic-datatable">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">Edit Term Pages</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <form>
                                <fieldset className="form-group">
                                  <textarea
                                    className="form-control"
                                    id="basicTextarea"
                                    rows="3"
                                    placeholder=""
                                  ></textarea>
                                </fieldset>
                                <fieldset className="form-group">
                                  <textarea
                                    className="form-control"
                                    id="basicTextarea"
                                    rows="3"
                                    placeholder=""
                                  ></textarea>
                                </fieldset>
                                <fieldset className="form-group">
                                  <textarea
                                    className="form-control"
                                    id="basicTextarea"
                                    rows="3"
                                    placeholder=""
                                  ></textarea>
                                </fieldset>
                                <div className="api-buttons mt-2">
                                  <button className="btn btn-primary shadow waves-effect waves-light">
                                    SAVE
                                  </button>
                                </div>
                              </form>
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
