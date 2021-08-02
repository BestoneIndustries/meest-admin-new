import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function ChangeSiteDesign() {
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
                    <li className="breadcrumb-item active">
                      Change Site Design
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
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Change Site Design</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          This system is only supported for the default theme,
                          for sunshine you can edit the colors thru CSS files:
                        </p>

                        <p>./themes/sunshine/css/style.css</p>

                        <p>./themes/sunshine/layout/style.phtml </p>
                        <br />
                        <div className="row">
                          <div className="col-sm-12">
                            <h4>Welcome Page</h4>
                            <div className="form-group">
                              <label>Favicon</label>{" "}
                              <span className="camera-icon">
                                <i
                                  className="fa fa-camera"
                                  aria-hidden="true"
                                ></i>
                                <input
                                  type="file"
                                  name="text"
                                  className=""
                                  placeholder="Favicon"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                />
                              </span>
                              <div className="help-block"></div>
                              <span className="welcom-alert">
                                Maximum size allowed 50kb
                              </span>
                            </div>
                          </div>

                          <div className="col-sm-12 mt-2">
                            <h4>Header</h4>
                            <div className="form-group">
                              <label>Logo (470x75)</label>{" "}
                              <span className="camera-icon">
                                <i
                                  className="fa fa-camera"
                                  aria-hidden="true"
                                ></i>
                                <input
                                  type="file"
                                  name="text"
                                  className=""
                                  placeholder="Favicon"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                />
                              </span>
                              <div className="help-block"></div>
                              <span className="welcom-alert">
                                Maximum size allowed 50kb
                              </span>
                            </div>
                          </div>

                          <div className="col-sm-12 mt-1">
                            <div className="form-group">
                              <div className="controls">
                                <label>Header Background Color</label>
                                <input
                                  type="color"
                                  name="text"
                                  className="form-control wdth-20"
                                  placeholder="Enter Minimum withdrawal request"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 mt-1">
                            <div className="form-group">
                              <div className="controls">
                                <label>Header Icons/Text color</label>
                                <input
                                  type="color"
                                  name="text"
                                  className="form-control wdth-20"
                                  placeholder="Enter Amount"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 mt-1">
                            <div className="form-group">
                              <div className="controls">
                                <label>
                                  Header Search Input Background Color
                                </label>
                                <input
                                  type="color"
                                  name="text"
                                  className="form-control wdth-20"
                                  placeholder="Enter Amount"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 mt-1">
                            <div className="form-group">
                              <div className="controls">
                                <label>Header Icons Shadow Color</label>
                                <input
                                  type="color"
                                  name="text"
                                  className="form-control wdth-20"
                                  placeholder="Enter Amount"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <h4>Body</h4>
                            <div className="form-group">
                              <label>Body Background Color</label>
                              <input
                                type="color"
                                name="text"
                                className="form-control wdth-20"
                                placeholder="Favicon"
                                required=""
                                data-validation-required-message="This First Name field is required"
                                aria-invalid="false"
                              />
                              <div className="help-block"></div>
                            </div>
                          </div>

                          <div className="col-sm-12 mt-2">
                            <h4>Buttons</h4>
                            <div className="form-group">
                              <label>Text Color</label>
                              <input
                                type="color"
                                name="text"
                                className="form-control wdth-20"
                                placeholder="Favicon"
                                required=""
                                data-validation-required-message="This First Name field is required"
                                aria-invalid="false"
                              />
                              <div className="help-block"></div>
                            </div>
                          </div>

                          <div className="col-sm-12 mt-1">
                            <div className="form-group">
                              <div className="controls">
                                <label>Background Color</label>
                                <input
                                  type="color"
                                  name="text"
                                  className="form-control wdth-20"
                                  placeholder="Enter Amount"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 mt-1">
                            <div className="form-group">
                              <div className="controls">
                                <label>Text Hover Color</label>
                                <input
                                  type="color"
                                  name="text"
                                  className="form-control wdth-20"
                                  placeholder="Enter Amount"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 mt-1">
                            <div className="form-group">
                              <div className="controls">
                                <label>Hover Background Color</label>
                                <input
                                  type="color"
                                  name="text"
                                  className="form-control wdth-20"
                                  placeholder="Enter Amount"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 mt-1">
                            <div className="form-group">
                              <div className="controls">
                                <label>Disabled Background Color</label>
                                <input
                                  type="color"
                                  name="text"
                                  className="form-control wdth-20"
                                  placeholder="Enter Amount"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 mt-3">
                            <p>
                              Please make sure to clean your browser cache after
                              changing the design settings.
                            </p>
                            <br />
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
