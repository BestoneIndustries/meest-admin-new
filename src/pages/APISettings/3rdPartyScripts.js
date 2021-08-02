import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function ThridPartyScripts() {
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
                      Manage API User List
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
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">
                              Mobile &amp; API Settings {`>`} Third party sites
                            </h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="third-party-scripts">
                              <span>
                                Site that uses PlayTube script, e.g.
                                https://playtubescript.com
                              </span>
                              <h5>https://playtubescript.com</h5>
                              <hr />
                              <p>
                                This feature allows you to integrate PlayTube
                                script with your site, so videos will be
                                embedded in the post box if someone shares a
                                link from your site.
                              </p>
                              <p>
                                What is <a href="">PlayTube?</a>
                              </p>
                              <div className="api-buttons mt-2">
                                <button className="btn btn-primary shadow waves-effect waves-light">
                                  SAVE
                                </button>
                              </div>
                            </div>
                          </div>
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
                              Mobile &amp; API Settings {`>`} Third party sites
                            </h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="third-party-scripts">
                              <span>
                                Site that uses Deep Sound script, e.g.
                                https://deepsoundscript.com
                              </span>
                              <h5>https://deepsoundscript.com</h5>
                              <hr />
                              <p>
                                This feature allows you to integrate Deep Sound
                                script with your site, so Sounds will be
                                embedded in the post box if someone shares a
                                link from your site.
                              </p>
                              <p>
                                What is <a href="">Deep Sound?</a>
                              </p>
                              <div className="api-buttons mt-2">
                                <button className="btn btn-primary shadow waves-effect waves-light">
                                  SAVE
                                </button>
                              </div>
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
