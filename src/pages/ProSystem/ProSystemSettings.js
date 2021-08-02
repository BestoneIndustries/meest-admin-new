import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

export default function ProSystemSettings() {
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
                    <li className="breadcrumb-item active"> Pro System Settings</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Pro System Settings</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <ul className="list-unstyled mb-2">
                          <h5>
                            Pro System{" "}
                            <span
                              data-toggle="tooltip"
                              data-placement="right"
                              title="If you disbale Pro Mode, All features will be free and activated without the boost feature."
                            >
                              <i className="feather icon-help-circle"></i>
                            </span>
                          </h5>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="radio" checked="" />
                                Enable
                              </label>
                            </fieldset>
                          </li>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="radio" />
                                Disabled
                              </label>
                            </fieldset>
                          </li>
                        </ul>
                        <ul className="list-unstyled mb-2">
                          <h5>Recurring Payment</h5>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="radio" checked="" />
                                Enable
                              </label>
                            </fieldset>
                          </li>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="radio" />
                                Disabled
                              </label>
                            </fieldset>
                          </li>
                        </ul>
                        <ul className="list-unstyled mb-0">
                          <h5>Refund System</h5>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="radio" checked="" />
                                Enable
                              </label>
                            </fieldset>
                          </li>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="radio" />
                                Disabled
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

                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Edit Pro Packages</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered table-hover table-striped mb-0">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{ color: "green" }}>
                                <td scope="row">
                                  <i className="feather icon-star"></i> Star
                                </td>
                                <td>Enable</td>
                                <td>
                                  <a
                                    href="#"
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#prosystem-edit"
                                    className="btn btn-info shadow"
                                  >
                                    Edit
                                  </a>
                                </td>
                              </tr>
                              <tr style={{ color: "#ea9b05" }}>
                                <td scope="row">
                                  <i className="feather icon-zap"></i> Hot
                                </td>
                                <td>Enable</td>
                                <td>
                                  <a
                                    href="#"
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#prosystem-edit"
                                    className="btn btn-info shadow"
                                  >
                                    Edit
                                  </a>
                                </td>
                              </tr>
                              <tr style={{ color: "red" }}>
                                <td scope="row">
                                  <i className="feather icon-star"></i> Ultima
                                </td>
                                <td>Enable</td>
                                <td>
                                  <a
                                    href="#"
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#prosystem-edit"
                                    className="btn btn-info shadow"
                                  >
                                    Edit
                                  </a>
                                </td>
                              </tr>
                              <tr style={{ color: "#183D46" }}>
                                <td scope="row">
                                  <i className="feather icon-navigation"></i> VIP
                                </td>
                                <td>Enable</td>
                                <td>
                                  <a
                                    href="#"
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#prosystem-edit"
                                    className="btn btn-info shadow"
                                  >
                                    Edit
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
