import React from "react";
import Footer from "../../components/Footer";
import {Link} from "react-router-dom"

export default function JobsLink() {
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
                  <h2 className="content-header-title float-left mb-0">Jobs</h2>
                  <div className="breadcrumb-wrapper col-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Jobs Link</li>
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
            <div id="user-profile">
              <div className="row">
                <div className="col-12">
                  <div className="profile-header mb-2">
                    <div className="relative">
                      <div className="cover-container">
                        <img
                          className="img-fluid bg-cover rounded-0 w-100"
                          src="app-assets/images/profile/user-uploads/cover.jpg"
                          alt="User Profile Image"
                        />
                      </div>
                      <div className="profile-img-container d-flex align-items-center justify-content-between">
                        <img
                          src="app-assets/images/profile/user-uploads/user-13.jpg"
                          className="rounded-circle img-border box-shadow-1"
                          alt="Card image"
                        />
                        <div className="float-right">
                          <button
                            type="button"
                            className="btn btn-icon btn-icon rounded-circle btn-primary mr-1"
                          >
                            <i className="feather icon-edit-2"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-icon btn-icon rounded-circle btn-primary"
                          >
                            <i className="feather icon-settings"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end align-items-center profile-header-nav">
                      <nav className="navbar navbar-expand-sm w-100 pr-0">
                        <button
                          className="navbar-toggler pr-0"
                          type="button"
                          data-toggle="collapse"
                          data-target="navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon">
                            <i className="feather icon-align-justify"></i>
                          </span>
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="navbarSupportedContent"
                        >
                          <ul
                            className="navbar-nav justify-content-around w-75 ml-sm-auto"
                            style={{ marginTop: "10px" }}
                          >
                            <li className="nav-item px-sm-0">
                              <a href="#" className="nav-link font-small-3">
                                <span style={{ color: "sandybrown" }}>
                                  <i
                                    className="fa fa-map-marker"
                                    aria-hidden="true"
                                  ></i>
                                </span>{" "}
                                Delhi
                              </a>
                            </li>
                            <li className="nav-item px-sm-0">
                              <a href="#" className="nav-link font-small-3">
                                <span style={{ color: "red" }}>
                                  <i
                                    className="fa fa-clock-o"
                                    aria-hidden="true"
                                  ></i>
                                </span>{" "}
                                6 Hours
                              </a>
                            </li>
                            <li className="nav-item px-sm-0">
                              <a href="#" className="nav-link font-small-3">
                                <span style={{ color: "green" }}>
                                  <i
                                    className="fa fa-briefcase"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                Full Time
                              </a>
                            </li>
                            <li className="nav-item px-sm-0">
                              <a href="#" className="nav-link font-small-3">
                                <span style={{ color: "blue" }}>
                                  <i
                                    className="fa fa-tag"
                                    aria-hidden="true"
                                  ></i>{" "}
                                </span>
                                Add Friends
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <section id="profile-info">
                <div className="row">
                  <div className="col-lg-3 col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4>About</h4>
                        <i className="feather icon-more-horizontal cursor-pointer"></i>
                      </div>
                      <div className="card-body">
                        <p>
                          Tart I love sugar plum I love oat cake. Sweet roll
                          caramels I love jujubes. Topping cake wafer.
                        </p>
                        <div className="mt-1">
                          <h6 className="mb-0">Joined:</h6>
                          <p>November 15, 2015</p>
                        </div>
                        <div className="mt-1">
                          <h6 className="mb-0">Lives:</h6>
                          <p>New York, USA</p>
                        </div>
                        <div className="mt-1">
                          <h6 className="mb-0">Email:</h6>
                          <p>bucketful@fiendhead.org</p>
                        </div>
                        <div className="mt-1">
                          <h6 className="mb-0">Website:</h6>
                          <p>www.pixinvent.com</p>
                        </div>
                        <div className="mt-1">
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-primary mr-25 p-25"
                          >
                            <i className="feather icon-facebook"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-primary mr-25 p-25"
                          >
                            <i className="feather icon-twitter"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-primary p-25"
                          >
                            <i className="feather icon-instagram"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Suggested Pages</h4>
                      </div>
                      <div className="card-body suggested-block">
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/profile/pages/page-09.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <p>Rockose</p>
                            <span className="font-small-2">Company</span>
                          </div>
                          <div className="ml-auto">
                            <i className="feather icon-star"></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/profile/pages/page-08.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <p>The Devil's</p>
                            <span className="font-small-2">Clothing Store</span>
                          </div>
                          <div className="ml-auto">
                            <i className="feather icon-star"></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-1">
                            <img
                              src="app-assets/images/profile/pages/page-03.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <p>The Magician</p>
                            <span className="font-small-2">Public Figure</span>
                          </div>
                          <div className="ml-auto">
                            <i className="feather icon-star"></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/profile/pages/page-02.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <p>AC/DC</p>
                            <span className="font-small-2">Music</span>
                          </div>
                          <div className="ml-auto">
                            <i className="feather icon-star"></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/profile/pages/page-07.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <p>Eat Hard</p>
                            <span className="font-small-2">
                              Restaurant / Bar
                            </span>
                          </div>
                          <div className="ml-auto">
                            <i className="feather icon-star"></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/profile/pages/page-04.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <p>B4B</p>
                            <span className="font-small-2">Beauty Store</span>
                          </div>
                          <div className="ml-auto">
                            <i className="feather icon-star"></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/profile/pages/page-05.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <p>Kylie Jenner</p>
                            <span className="font-small-2">Public Figure</span>
                          </div>
                          <div className="ml-auto">
                            <i className="feather icon-star"></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/profile/pages/page-01.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <p>RDJ</p>
                            <span className="font-small-2">Actor</span>
                          </div>
                          <div className="ml-auto">
                            <i className="feather icon-star"></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/profile/pages/page-06.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <p>Taylor Swift</p>
                            <span className="font-small-2">Music</span>
                          </div>
                          <div className="ml-auto">
                            <i className="feather icon-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h4>Twitter Feeds</h4>
                      </div>
                      <div className="card-body">
                        <div className="twitter-feed">
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <div className="avatar mr-50">
                              <img
                                src="app-assets/images/portrait/small/avatar-s-12.jpg"
                                alt="avtar img holder"
                                height="35"
                                width="35"
                              />
                            </div>
                            <div className="user-page-info">
                              <p className="text-bold-600 mb-0">
                                Tiana Vercetti
                              </p>
                              <small>@tiana59</small>
                              <div className="badge badge-primary badge-pill badge-sm p-0">
                                <i className="feather icon-check font-small-1"></i>
                              </div>
                            </div>
                          </div>
                          <p className="mb-0">
                            I love cookie chupa chups sweet tart apple pie
                            chocolate bar. Jelly-o oat cake chupa chups.
                          </p>
                          <p className="text-primary">#js #vuejs</p>
                          <small>12 Dec 2018</small>
                        </div>
                        <div className="twitter-feed mt-2">
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <div className="avatar mr-50">
                              <img
                                src="app-assets/images/portrait/small/avatar-s-12.jpg"
                                alt="avtar img holder"
                                height="35"
                                width="35"
                              />
                            </div>
                            <div className="user-page-info">
                              <p className="text-bold-600 mb-0">
                                Tiana Vercetti
                              </p>
                              <small>@tiana59</small>
                              <div className="badge badge-primary badge-pill badge-sm p-0">
                                <i className="feather icon-check font-small-1"></i>
                              </div>
                            </div>
                          </div>
                          <p className="mb-0">
                            Carrot cake cake gummies I love I love tiramisu.
                            Biscuit marzipan cookie lemon drops.
                          </p>
                          <p className="text-primary">#python</p>
                          <small>11 Dec 2018</small>
                        </div>
                        <div className="twitter-feed mt-2">
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <div className="avatar mr-50">
                              <img
                                src="app-assets/images/portrait/small/avatar-s-12.jpg"
                                alt="avtar img holder"
                                height="35"
                                width="35"
                              />
                            </div>
                            <div className="user-page-info">
                              <p className="text-bold-600 mb-0">
                                Tiana Vercetti
                              </p>
                              <small>@tiana59</small>
                              <div className="badge badge-primary badge-pill badge-sm p-0">
                                <i className="feather icon-check font-small-1"></i>
                              </div>
                            </div>
                          </div>
                          <p className="mb-0">
                            I love cookie chupa chups sweet tart apple pie
                            chocolate bar. Jelly-o oat cake chupa chups.
                          </p>
                          <small>10 Dec 2018</small>
                        </div>
                        <div className="twitter-feed mt-2">
                          <div className="d-flex justify-content-start align-items-center mb-1">
                            <div className="avatar mr-50">
                              <img
                                src="app-assets/images/portrait/small/avatar-s-12.jpg"
                                alt="avtar img holder"
                                height="35"
                                width="35"
                              />
                            </div>
                            <div className="user-page-info">
                              <p className="text-bold-600 mb-0">
                                Tiana Vercetti
                              </p>
                              <small>@tiana59</small>
                              <div className="badge badge-primary badge-pill badge-sm p-0">
                                <i className="feather icon-check font-small-1"></i>
                              </div>
                            </div>
                          </div>
                          <p className="mb-0">
                            Muffin candy caramels. I love caramels tiramisu
                            jelly. Pie I love wafer. Chocolate cake lollipop
                            tootsie roll cake.
                          </p>
                          <p className="text-primary">#django #vuejs</p>
                          <small>9 Dec 018</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="card">
                      <div className="card-body">
                        <button
                          type="button"
                          className="btn width-101 btn-info shadow waves-effect waves-light"
                        >
                          Apply Now
                        </button>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="job-salary">
                              <h3>Mamimum</h3>
                              <p>Rs 30,000</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="job-salary">
                              <h3>Maximum</h3>
                              <p>Rs 70,000</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4>Latest Photos</h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4 col-6 user-latest-img">
                            <img
                              src="app-assets/images/profile/user-uploads/user-01.jpg"
                              className="img-fluid mb-1 rounded-sm"
                              alt="avtar img holder"
                            />
                          </div>
                          <div className="col-md-4 col-6 user-latest-img">
                            <img
                              src="app-assets/images/profile/user-uploads/user-02.jpg"
                              className="img-fluid mb-1 rounded-sm"
                              alt="avtar img holder"
                            />
                          </div>
                          <div className="col-md-4 col-6 user-latest-img">
                            <img
                              src="app-assets/images/profile/user-uploads/user-03.jpg"
                              className="img-fluid mb-1 rounded-sm"
                              alt="avtar img holder"
                            />
                          </div>
                          <div className="col-md-4 col-6 user-latest-img">
                            <img
                              src="app-assets/images/profile/user-uploads/user-04.jpg"
                              className="img-fluid mb-1 rounded-sm"
                              alt="avtar img holder"
                            />
                          </div>
                          <div className="col-md-4 col-6 user-latest-img">
                            <img
                              src="app-assets/images/profile/user-uploads/user-05.jpg"
                              className="img-fluid mb-1 rounded-sm"
                              alt="avtar img holder"
                            />
                          </div>
                          <div className="col-md-4 col-6 user-latest-img">
                            <img
                              src="app-assets/images/profile/user-uploads/user-06.jpg"
                              className="img-fluid mb-1 rounded-sm"
                              alt="avtar img holder"
                            />
                          </div>
                          <div className="col-md-4 col-6 user-latest-img">
                            <img
                              src="app-assets/images/profile/user-uploads/user-07.jpg"
                              className="img-fluid mb-1 rounded-sm"
                              alt="avtar img holder"
                            />
                          </div>
                          <div className="col-md-4 col-6 user-latest-img">
                            <img
                              src="app-assets/images/profile/user-uploads/user-08.jpg"
                              className="img-fluid mb-1 rounded-sm"
                              alt="avtar img holder"
                            />
                          </div>
                          <div className="col-md-4 col-6 user-latest-img">
                            <img
                              src="app-assets/images/profile/user-uploads/user-09.jpg"
                              className="img-fluid mb-1 rounded-sm"
                              alt="avtar img holder"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header d-flex justify-content-between">
                        <h4>Suggestions</h4>
                        <i className="feather icon-more-horizontal cursor-pointer"></i>
                      </div>
                      <div className="card-body">
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/portrait/small/avatar-s-5.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <h6 className="mb-0">Carissa Dolle</h6>
                            <span className="font-small-2">
                              6 Mutual Friends
                            </span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-icon ml-auto"
                          >
                            <i className="feather icon-user-plus"></i>
                          </button>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/portrait/small/avatar-s-6.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <h6 className="mb-0">Liliana Pecor</h6>
                            <span className="font-small-2">
                              3 Mutual Friends
                            </span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-icon ml-auto"
                          >
                            <i className="feather icon-user-plus"></i>
                          </button>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/portrait/small/avatar-s-7.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <h6 className="mb-0">Isidra Strunk</h6>
                            <span className="font-small-2">
                              2 Mutual Friends
                            </span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-icon ml-auto"
                          >
                            <i className="feather icon-user-plus"></i>
                          </button>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/portrait/small/avatar-s-8.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <h6 className="mb-0">Gerald Licea</h6>
                            <span className="font-small-2">
                              1 Mutual Friends
                            </span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-icon ml-auto"
                          >
                            <i className="feather icon-user-plus"></i>
                          </button>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/portrait/small/avatar-s-9.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <h6 className="mb-0">Kelle Herrick</h6>
                            <span className="font-small-2">
                              1 Mutual Friends
                            </span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-icon ml-auto"
                          >
                            <i className="feather icon-user-plus"></i>
                          </button>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/portrait/small/avatar-s-10.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <h6 className="mb-0">Cesar Lee</h6>
                            <span className="font-small-2">
                              1 Mutual Friends
                            </span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-icon ml-auto"
                          >
                            <i className="feather icon-user-plus"></i>
                          </button>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/portrait/small/avatar-s-11.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <h6 className="mb-0">John Doe</h6>
                            <span className="font-small-2">
                              1 Mutual Friends
                            </span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-icon ml-auto"
                          >
                            <i className="feather icon-user-plus"></i>
                          </button>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-2">
                          <div className="avatar mr-50">
                            <img
                              src="app-assets/images/portrait/small/avatar-s-12.jpg"
                              alt="avtar img holder"
                              height="35"
                              width="35"
                            />
                          </div>
                          <div className="user-page-info">
                            <h6 className="mb-0">Tonia Seabold</h6>
                            <span className="font-small-2">
                              1 Mutual Friends
                            </span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-icon ml-auto"
                          >
                            <i className="feather icon-user-plus"></i>
                          </button>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary w-100 mt-1"
                        >
                          <i className="feather icon-plus mr-25"></i>Load More
                        </button>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h4>Polls</h4>
                      </div>
                      <div className="card-body">
                        <h6>
                          Who is the best actor in Marvel Cinematic Universe?
                        </h6>
                        <div className="polls-info mt-1">
                          <div className="d-flex justify-content-between">
                            <div className="vs-radio-con vs-radio-primary">
                              <input
                                type="radio"
                                name="vueradio"
                                value="false"
                              />
                              <span className="vs-radio">
                                <span className="vs-radio--border"></span>
                                <span className="vs-radio--circle"></span>
                              </span>
                              <span className="">RDJ</span>
                            </div>
                            <div className="text-right">58%</div>
                          </div>
                          <div className="progress progress-bar-primary my-50">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow="58"
                              aria-valuemin="58"
                              aria-valuemax="100"
                              style={{ width: "58%" }}
                            ></div>
                          </div>
                          <ul className="list-unstyled users-list d-flex">
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-placement="bottom"
                              data-original-title="Tonia Seabold"
                              className="avatar pull-up ml-0"
                            >
                              <img
                                className="media-object rounded-circle"
                                src="app-assets/images/portrait/small/avatar-s-12.jpg"
                                alt="Avatar"
                                height="30"
                                width="30"
                              />
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-placement="bottom"
                              data-original-title="Carissa Dolle"
                              className="avatar pull-up"
                            >
                              <img
                                className="media-object rounded-circle"
                                src="app-assets/images/portrait/small/avatar-s-5.jpg"
                                alt="Avatar"
                                height="30"
                                width="30"
                              />
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-placement="bottom"
                              data-original-title="Kelle Herrick"
                              className="avatar pull-up"
                            >
                              <img
                                className="media-object rounded-circle"
                                src="app-assets/images/portrait/small/avatar-s-9.jpg"
                                alt="Avatar"
                                height="30"
                                width="30"
                              />
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-placement="bottom"
                              data-original-title="Len Bregantini"
                              className="avatar pull-up"
                            >
                              <img
                                className="media-object rounded-circle"
                                src="app-assets/images/portrait/small/avatar-s-10.jpg"
                                alt="Avatar"
                                height="30"
                                width="30"
                              />
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-placement="bottom"
                              data-original-title="John Doe"
                              className="avatar pull-up"
                            >
                              <img
                                className="media-object rounded-circle"
                                src="app-assets/images/portrait/small/avatar-s-11.jpg"
                                alt="Avatar"
                                height="30"
                                width="30"
                              />
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-placement="bottom"
                              data-original-title="Tonia Seabold"
                              className="avatar pull-up"
                            >
                              <img
                                className="media-object rounded-circle"
                                src="app-assets/images/portrait/small/avatar-s-12.jpg"
                                alt="Avatar"
                                height="30"
                                width="30"
                              />
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-placement="bottom"
                              data-original-title="Dirk Fornili"
                              className="avatar pull-up"
                            >
                              <img
                                className="media-object rounded-circle"
                                src="app-assets/images/portrait/small/avatar-s-2.jpg"
                                alt="Avatar"
                                height="30"
                                width="30"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="polls-info mt-1">
                          <div className="d-flex justify-content-between">
                            <div className="vs-radio-con vs-radio-primary">
                              <input
                                type="radio"
                                name="vueradio"
                                value="false"
                              />
                              <span className="vs-radio">
                                <span className="vs-radio--border"></span>
                                <span className="vs-radio--circle"></span>
                              </span>
                              <span className="">Chris Hemswort</span>
                            </div>
                            <div className="text-right">16%</div>
                          </div>
                          <div className="progress progress-bar-primary my-50">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow="16"
                              aria-valuemin="16"
                              aria-valuemax="100"
                              style={{ width: "16%" }}
                            ></div>
                          </div>
                          <ul className="list-unstyled users-list d-flex">
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-placement="bottom"
                              data-original-title="Liliana Pecor"
                              className="avatar pull-up ml-0"
                            >
                              <img
                                className="media-object rounded-circle"
                                src="app-assets/images/portrait/small/avatar-s-6.jpg"
                                alt="Avatar"
                                height="30"
                                width="30"
                              />
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-placement="bottom"
                              data-original-title="Kasandra NaleVanko"
                              className="avatar pull-up"
                            >
                              <img
                                className="media-object rounded-circle"
                                src="app-assets/images/portrait/small/avatar-s-1.jpg"
                                alt="Avatar"
                                height="30"
                                width="30"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="polls-info mt-1">
                          <div className="d-flex justify-content-between">
                            <div className="vs-radio-con vs-radio-primary">
                              <input
                                type="radio"
                                name="vueradio"
                                value="false"
                              />
                              <span className="vs-radio">
                                <span className="vs-radio--border"></span>
                                <span className="vs-radio--circle"></span>
                              </span>
                              <span className="">Mark Ruffalo</span>
                            </div>
                            <div className="text-right">8%</div>
                          </div>
                          <div className="progress progress-bar-primary my-50">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow="8"
                              aria-valuemin="8"
                              aria-valuemax="100"
                              style={{ width: "8%" }}
                            ></div>
                          </div>
                          <ul className="list-unstyled users-list d-flex">
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-placement="bottom"
                              data-original-title="Lorelei Lacsamana"
                              className="avatar pull-up ml-0"
                            >
                              <img
                                className="media-object rounded-circle"
                                src="app-assets/images/portrait/small/avatar-s-4.jpg"
                                alt="Avatar"
                                height="30"
                                width="30"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="polls-info mt-1">
                          <div className="d-flex justify-content-between">
                            <div className="vs-radio-con vs-radio-primary">
                              <input
                                type="radio"
                                name="vueradio"
                                value="false"
                              />
                              <span className="vs-radio">
                                <span className="vs-radio--border"></span>
                                <span className="vs-radio--circle"></span>
                              </span>
                              <span className="">Chris Evans</span>
                            </div>
                            <div className="text-right">16%</div>
                          </div>
                          <div className="progress progress-bar-primary my-50">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow="16"
                              aria-valuemin="16"
                              aria-valuemax="100"
                              style={{ width: "16%" }}
                            ></div>
                          </div>
                          <ul className="list-unstyled users-list d-flex">
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-placement="bottom"
                              data-original-title="JeanieBulgrin"
                              className="avatar pull-up ml-0"
                            >
                              <img
                                className="media-object rounded-circle"
                                src="app-assets/images/portrait/small/avatar-s-8.jpg"
                                alt="Avatar"
                                height="30"
                                width="30"
                              />
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-placement="bottom"
                              data-original-title="Graig Muckey"
                              className="avatar pull-up"
                            >
                              <img
                                className="media-object rounded-circle"
                                src="app-assets/images/portrait/small/avatar-s-3.jpg"
                                alt="Avatar"
                                height="30"
                                width="30"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <button
                      type="button"
                      className="btn btn-primary block-element mb-1"
                    >
                      Load More
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>

      <Footer />
    </>
  );
}
