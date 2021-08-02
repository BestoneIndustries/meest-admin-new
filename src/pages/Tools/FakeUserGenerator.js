import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function FakeUserGenerator() {
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
                    <li className="breadcrumb-item active">
                      Fake User Generator
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
                            <h4 className="card-title">Fake User Generator</h4>
                            <p className="mt-1 mb-0">
                              Generate unlimited fake users.
                            </p>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <form>
                                <div id="" className="form-group">
                                  <input
                                    type="text"
                                    placeholder="How many users you want to generate?"
                                    className="form-control input-style"
                                  />
                                </div>
                                <div id="" className="form-group">
                                  <input
                                    type="text"
                                    placeholder="Password (Choose the password that will be used for all users, default: 123456789)"
                                    className="form-control input-style"
                                  />
                                </div>
                                <label>
                                  <strong>Create Random Avatar?</strong>
                                </label>
                                <div className="form-group">
                                  <ul className="list-unstyled mb-0">
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input type="radio" name="radio" />
                                          Yes
                                        </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input type="radio" name="radio" />
                                          No
                                        </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  If avatar is enabled, you might see dublicated
                                  avatars, avatars are generated randomly.
                                </p>
                                <p>
                                  This process might take some time, you can
                                  check for your site changes after few minutes.
                                </p>
                                <div className="api-buttons mt-2">
                                  <button className="btn btn-primary shadow waves-effect waves-light">
                                    Generate fake Data
                                  </button>
                                  <button className="btn shadow waves-effect waves-light">
                                    Delete all Fake Users
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
