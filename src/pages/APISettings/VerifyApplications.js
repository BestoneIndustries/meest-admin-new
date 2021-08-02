import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function VerifyApplications() {
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
                      <Link to="/">API Settings </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Mobile &amp; Verify Applications
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
                  <div className="card">
                    <div className="card-header border-bottom pb-0">
                      <div className="col-12">
                        <h4 className="card-title">Use The Applications</h4>
                        <p className="mt-2">
                          If you use one of those products listed below, you
                          need to verify them before you can use them.
                        </p>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div className="bug-fix-content mb-2">
                          <p className="mb-0">
                            You can get the native Windows Messenger from
                            <a href="">Here</a>
                          </p>
                        </div>
                        <div className="bug-fix-content mb-2">
                          <p className="mb-0">
                            You can get the native Android Messenger from
                            <a href="">Here</a>
                          </p>
                        </div>
                        <div className="bug-fix-content mb-2">
                          <p className="mb-0">
                            You can get the native IOS Messenger from
                            <a href="">Here</a>
                          </p>
                        </div>
                        <div className="bug-fix-content">
                          <p className="mb-0">
                            You can get the native Android Timeline Application
                            from<a href="">Here</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">
                              Verify Android Messenger
                            </h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <form>
                                <div id="" className="form-group">
                                  <input
                                    type="text"
                                    placeholder="Android Messenger Verification Code"
                                    className="form-control input-style"
                                  />
                                </div>
                                <p>
                                  <a href="">Get Verification Code</a>
                                </p>
                                <div className="api-buttons mt-2">
                                  <button className="btn btn-primary shadow waves-effect waves-light">
                                    VERIFY
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
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Verify IOS Messenger</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div className="api-key-wrapper">
                          <form>
                            <div id="" className="form-group">
                              <input
                                type="text"
                                placeholder="IOS Messenger Verification Code"
                                className="form-control input-style"
                              />
                            </div>
                            <p>
                              <a href="">Get Verification Code</a>
                            </p>
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
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">
                          Windows Desktop Messenger
                        </h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div className="api-key-wrapper">
                          <form>
                            <div id="" className="form-group">
                              <input
                                type="text"
                                placeholder="Windows Desktop Verification Code"
                                className="form-control input-style"
                              />
                            </div>
                            <p>
                              <a href="">Get Verification Code</a>
                            </p>
                            <div className="api-buttons mt-2">
                              <button className="btn btn-primary shadow waves-effect waves-light">
                                VERIFY
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">
                          Android Timeline Application
                        </h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div className="api-key-wrapper">
                          <form>
                            <div id="" className="form-group">
                              <input
                                type="text"
                                placeholder="Android Timeline Verification Code"
                                className="form-control input-style"
                              />
                            </div>
                            <p>
                              <a href="">Get Verification Code</a>
                            </p>
                            <div className="api-buttons mt-2">
                              <button className="btn btn-primary shadow waves-effect waves-light">
                                VERIFY
                              </button>
                            </div>
                          </form>
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
