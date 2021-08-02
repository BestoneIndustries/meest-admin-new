import React from "react";

import Footer from "../../../components/Footer";

import { Link } from "react-router-dom";

export default function CreateNewForum() {
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
                      <Link to="/">Manage Features</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/">Forums </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      {" "}
                      Create New Forum
                    </li>
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
                        <h4 className="card-title">Create New Forum</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Name</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter Name"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <fieldset className="form-label-group">
                                <textarea
                                  className="form-control"
                                  id="label-textarea"
                                  rows="6"
                                  placeholder="Description"
                                ></textarea>
                                <label for="label-textarea">Description</label>
                              </fieldset>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <h6>Section</h6>
                            <div className="form-group">
                              <select
                                className="select2 form-control select2-hidden-accessible"
                                data-select2-id="1"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option value="square" data-select2-id="3">
                                  Nothing Selected
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 mt-3">
                            <a href="" className="btn btn-primary shadow">
                              Create Forum
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
