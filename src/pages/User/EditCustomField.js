import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function EditCustomField() {
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
                      <Link to="/Manage-Users">Users </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Manage Custom Profile Field
                    </li>
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
                            <h4 className="card-title">Edit Custom Field</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <p>{`Use {{LANG lang_variable}} to translate the field data. e.g: {{LANG first_name}}`}</p>
                            <div className="api-key-wrapper">
                              <form>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div id="" className="form-group">
                                      <label className="mb-1">Field Type</label>
                                      <select
                                        className="select2-size-lg form-control"
                                        id="large-select"
                                      >
                                        <option value="">Text box</option>
                                        <option value="">Text area</option>
                                        <option value="">Select box</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div id="" className="form-group">
                                      <label>Field Name</label>
                                      <input
                                        type="text"
                                        placeholder=""
                                        className="form-control input-style"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div id="" className="form-group">
                                      <label>Field Length</label>
                                      <input
                                        type="text"
                                        placeholder=""
                                        className="form-control input-style"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label className="mb-1">
                                        Field Placement
                                      </label>
                                      <select
                                        className="select2-size-lg form-control"
                                        id="large-select"
                                      >
                                        <option value="">
                                          General settings
                                        </option>
                                        <option value="">
                                          Profile settings
                                        </option>
                                        <option value="">Social links</option>
                                        <option value="">
                                          Don't show the field in settings page
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <fieldset className="form-group">
                                      <label>Field Description</label>
                                      <textarea
                                        className="form-control"
                                        id="basicTextarea"
                                        rows="3"
                                        placeholder="Page Content"
                                      ></textarea>
                                    </fieldset>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label className="mb-1">
                                        Show On The Registration Page
                                      </label>
                                      <select
                                        className="select2-size-lg form-control"
                                        id="large-select"
                                      >
                                        <option value="">No</option>
                                        <option value="">Yes</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label className="mb-1">
                                        Show On User Profile Page
                                      </label>
                                      <select
                                        className="select2-size-lg form-control"
                                        id="large-select"
                                      >
                                        <option value="">No</option>
                                        <option value="">Yes</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="api-buttons mt-3">
                                      <button className="btn btn-primary shadow waves-effect waves-light">
                                        Create
                                      </button>
                                    </div>
                                  </div>
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
