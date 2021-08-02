import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

export default function GenerateSiteMap() {
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
                    <li className="breadcrumb-item active">Generate SiteMap</li>
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
                            <h4 className="card-title">Update SiteMap</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <form>
                                <div className="form-group">
                                  <label>Updating *</label>
                                  <select
                                    className="select2-size-sm form-control"
                                    id="small-select"
                                  >
                                    <option value="">
                                      SiteMap updating rate. Default (daily)
                                    </option>
                                    <option value="">Daily</option>
                                    <option value="">Always</option>
                                    <option value="">Hourly</option>
                                    <option value="">Weekly</option>
                                    <option value="">Monthly</option>
                                    <option value="">Yearly</option>
                                    <option value="">Never</option>
                                  </select>
                                </div>
                                <p>Note: This may take up to 10 minutes.</p>
                                <div className="api-buttons mt-2">
                                  <button className="btn btn-primary shadow waves-effect waves-light">
                                    Generate
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
