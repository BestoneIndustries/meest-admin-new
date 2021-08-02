import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function BlogLink() {
  return (
    <>
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-left mb-0">
                    Article (Blog)
                  </h2>
                  <div className="breadcrumb-wrapper col-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Blogs</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
              <div className="form-group breadcrum-right">
                <div className="dropdown">
                  <button
                    className="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="feather icon-settings"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      Chat
                    </a>
                    <a className="dropdown-item" href="#">
                      Email
                    </a>
                    <a className="dropdown-item" href="#">
                      Calendar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="knowledge-base-search">
              <div className="row">
                <div className="col-12">
                  <div className="card knowledge-base-bg white">
                    <div className="card-content">
                      <div className="card-body p-sm-4 p-2">
                        <h1 className="white">
                          Dedicated Source Used on Website
                        </h1>
                        <p className="card-text mb-2">
                          Bonbon sesame snaps lemon drops marshmallow ice cream
                          carrot cake croissant wafer.
                        </p>
                        <form>
                          <fieldset className="form-group position-relative has-icon-left mb-0">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              id="searchbar"
                              placeholder="Search Topic or Keyword"
                            />
                            <div className="form-control-position">
                              <i className="feather icon-search px-1"></i>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="knowledge-base-content">
              <div className="row search-content-info">
                <div className="col-md-4 col-sm-6 col-12 search-content">
                  <div className="card">
                    <div className="card-body text-center">
                      <Link to="/Blog-Details">
                        <img
                          src="app-assets/images/pages/graphic-1.png"
                          className="mx-auto mb-2"
                          width="180"
                          alt="knowledge-base-image"
                        />
                        <h4>SALES AUTOMATION</h4>
                        <small className="text-dark">
                          Muffin lemon drops chocolate carrot cake chocolate bar
                          sweet roll.
                        </small>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 search-content">
                  <div className="card">
                    <div className="card-body text-center">
                      <Link to="/Blog-Details">
                        <img
                          src="app-assets/images/pages/graphic-2.png"
                          className="mx-auto mb-2"
                          width="180"
                          alt="knowledge-base-image"
                        />
                        <h4>MARKETING AUTOMATION</h4>
                        <small className="text-dark">
                          Gingerbread sesame snaps wafer soufflé. Macaroon
                          brownie ice cream
                        </small>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 search-content">
                  <div className="card">
                    <div className="card-body text-center">
                      <Link to="/Blog-Details">
                        <img
                          src="app-assets/images/pages/graphic-3.png"
                          className="mx-auto mb-2"
                          width="180"
                          alt="knowledge-base-image"
                        />
                        <h4>MARKETING BI</h4>
                        <small className="text-dark">
                          cotton candy caramels danish chocolate cake pie candy.
                          Lemon drops tart.
                        </small>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 search-content">
                  <div className="card">
                    <div className="card-body text-center">
                      <Link to="/Blog-Details">
                        <img
                          src="app-assets/images/pages/graphic-4.png"
                          className="mx-auto mb-2"
                          width="180"
                          alt="knowledge-base-image"
                        />
                        <h4>PERSONALIZATION</h4>
                        <small className="text-dark">
                          Pudding oat cake carrot cake lemon drops gummies
                          marshmallow.
                        </small>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 search-content">
                  <div className="card">
                    <div className="card-body text-center">
                      <Link to="/Blog-Details">
                        <img
                          src="app-assets/images/pages/graphic-5.png"
                          className="mx-auto mb-2"
                          width="180"
                          alt="knowledge-base-image"
                        />
                        <h4>EMAIL MARKETING</h4>
                        <small className="text-dark">
                          Gummi bears pudding icing sweet caramels
                          chocolate.Muffin croissant
                        </small>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 search-content">
                  <div className="card">
                    <div className="card-body text-center">
                      <Link to="/Blog-Details">
                        <img
                          src="app-assets/images/pages/graphic-6.png"
                          className="mx-auto mb-2"
                          width="180"
                          alt="knowledge-base-image"
                        />
                        <h4>DEMAND GENERATION</h4>
                        <small className="text-dark">
                          Dragée jelly beans candy canes pudding cake wafer.
                          Muffin croissant.
                        </small>
                      </Link>
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
