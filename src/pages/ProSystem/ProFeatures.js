import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

export default function ProFeatures() {
  useEffect(() => {
    // $(document).ready(function () {
    //   $('[data-toggle="tooltip"]').tooltip();
    // });
  }, []);

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
                      <Link to="/">Pro System</Link>
                    </li>
                    <li className="breadcrumb-item active"> Pro Features</li>
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
                        <h4 className="card-title">Pro Features</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <ul className="list-unstyled mb-2">
                          <h5>upload System</h5>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="radio1" checked="" />
                                All Users
                              </label>
                            </fieldset>
                          </li>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="radio1" />
                                Pro Users
                              </label>
                            </fieldset>
                          </li>
                        </ul>
                        <ul className="list-unstyled mb-0">
                          <h5>Make Calls</h5>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="radio" checked="" />
                                All Users
                              </label>
                            </fieldset>
                          </li>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="radio" />
                                Pro Users
                              </label>
                            </fieldset>
                          </li>
                        </ul>
                        <div className="mt-3">
                          <a href="#" className="btn btn-primary shadow">
                            Save
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="modal fade"
              id="prosystem-edit"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header pro-setting-header border-bottom">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Edit Pro Package
                    </h5>
                    <button
                      type="button"
                      className="close-btn"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label className="col-form-label">Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">Status</label>
                        <select className="form-control">
                          <option>Enable</option>
                          <option>Disable</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary">
                      Save Change
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>

      <Footer />
    </>
  );
}
