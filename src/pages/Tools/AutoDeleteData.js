import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function AutoDeleteData() {
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
                      <Link to="/">Tools </Link>
                    </li>
                    <li className="breadcrumb-item active">Auto Delete Data</li>
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
                            <h4 className="card-title">Auto Delete Data</h4>
                            <p className="mt-1 mb-0 ">
                              It's recommended to create a backup before
                              applying any actions.
                            </p>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <form>
                                <h6>Select what you want to delete</h6>
                                <div className="form-group">
                                  <select
                                    className="select2 form-control select2-hidden-accessible"
                                    data-select2-id="1"
                                    tabindex="-1"
                                    aria-hidden="true"
                                  >
                                    <option value="square" data-select2-id="3">
                                      Delete all in active user
                                    </option>
                                    <option value="rectangle">
                                      Delete user that are not logged in from
                                      last 1 week
                                    </option>
                                    <option value="rectangle">
                                      Delete user that are not logged in from
                                      last 1 month
                                    </option>
                                    <option value="rectangle">
                                      Delete user that are not logged in from
                                      last 1 year
                                    </option>
                                  </select>
                                </div>
                                <p>
                                  This process might take some time, you can
                                  check for your site changes after few minutes.
                                </p>
                                <div className="api-buttons mt-2">
                                  <button
                                    className="btn btn-primary shadow waves-effect waves-light"
                                    onclick="alert('Are you sure you want to delete? this action cannot be undo')"
                                  >
                                    Delete Data
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
