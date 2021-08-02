import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function AdvSystemSettings() {








  
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
                      Advertisements System Setting
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div class="content-body">
            <section id="dashboard-analytics">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="card">
                    <div class="card-header border-bottom">
                      <div class="col-12">
                        <h4 class="card-title">Advertisements Settings</h4>
                      </div></div>
                    <div class="card-content">
                      <div class="card-body">
                        <ul class="list-unstyled mb-0">
                          <h5>Advertisements System <i class="feather icon-help-circle" data-toggle="tooltip" title="Allow users to create ads."></i>
                            <small class="text-danger">(This may allow to disable ads from the app.)</small></h5>
                          <li class="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="radio" checked="" />
                                  Enable
                                                    </label>
                            </fieldset>
                          </li>
                          <li class="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="radio" />
                                    Disabled
                                                    </label>
                            </fieldset>
                          </li>

                        </ul>
                        <br />
                        <div class="row">

                          <div class="col-sm-12">

                            <div class="form-group">
                              <div class="controls">
                                <label>Cost by View Charge in <span class="text-danger">INR</span></label>
                                <input type="text" name="text" class="form-control" placeholder="Enter Cost" required="" data-validation-required-message="This First Name field is required" aria-invalid="false" />
                                <div class="help-block"></div></div>
                            </div>
                          </div>
                          <div class="col-sm-12">
                            <div class="form-group">
                              <div class="controls">
                                <label>Cost by Click Charge in <span class="text-danger">INR</span></label>
                                <input type="text" name="text" class="form-control" placeholder="Enter Cost" required="" data-validation-required-message="This First Name field is required" aria-invalid="false" />
                                <div class="help-block"></div></div>
                            </div>
                          </div>
                          <div class="col-sm-12">
                            <div class="form-group">
                              <div class="controls">
                                <label>Pay per lead Charge in <span class="text-danger">INR</span></label>
                                <input type="text" name="text" class="form-control" placeholder="Enter Cost" required="" data-validation-required-message="This First Name field is required" aria-invalid="false" />
                                <div class="help-block"></div></div>
                            </div>
                          </div>
                          {/* <div class="col-sm-12 mt-3">
                            <a href="#" class="btn btn-primary shadow">Save</a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="card">
                    <div class="card-header border-bottom">
                      <div class="col-12">
                        <h4 class="card-title">Top Up Praveen Rastogi's Wallet</h4>
                      </div></div>
                    <div class="card-content">
                      <div class="card-body">

                        <div class="row">

                          <div class="col-sm-12">
                            <div class="form-group">
                              <div class="controls">
                                <label>Amount</label>
                                <input type="text" name="text" class="form-control" placeholder="Enter Amount" required="" data-validation-required-message="This First Name field is required" aria-invalid="false" />
                                <div class="help-block"></div></div>
                            </div>
                          </div>
                          {/* <div class="col-sm-12 mt-3">
                            <a href="#" class="btn btn-primary shadow">Top Up</a>
                          </div> */}
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
