import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function ManageAPIServerKey() {
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
                      Manage API Server Keys
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="basic-datatable">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">API Settings (API v1)</h4>
                      </div>
                    </div>
                    <p className="px-2 mt-2">
                      Use these keys to setup your application(s).
                    </p>
                    <div className="card-content">
                      <div className="card-body card-dashboard pt-0">
                        <div className="api-key-wrapper">
                          <p className="mb-0">
                            <span>API ID</span>
                          </p>
                          <p>abee576d002cfe8fae8e71d3d746f516</p>
                        </div>
                        <hr />
                        <div className="api-key-wrapper">
                          <p className="mb-0">
                            <span>API Secret Key</span>
                          </p>
                          <p>36de4cbf54b0799f9e32395b624381b4</p>
                        </div>
                        <hr />
                        <div className="api-buttons mt-4">
                          <button
                            className="btn btn-primary shadow waves-effect waves-light"
                            onclick="alert('Are you sure you want to reset the api secret key? all of your windows / phone applications will stop working on all your users devices.')"
                          >
                            RESET KEYS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Server Key (API v2)</h4>
                      </div>
                    </div>
                    <p className="px-2 mt-2">
                      Use this key to setup and access the API endpoints.{" "}
                      <a href="">Read Documentation</a>
                    </p>
                    <div className="card-content">
                      <div className="card-body card-dashboard pt-0">
                        <div className="api-key-wrapper">
                          <p className="mb-0">
                            <span>Server Key</span>
                          </p>
                          <p>36de4cbf54b0799f9e32395b624381b4</p>
                        </div>
                        <hr />
                        <div className="api-buttons mt-4">
                          <button
                            className="btn btn-primary shadow waves-effect waves-light"
                            onclick="alert('Are you sure you want to reset the api secret key? all of your windows / phone applications will stop working on all your users devices.')"
                          >
                            RESET SERVER KEY
                          </button>
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
