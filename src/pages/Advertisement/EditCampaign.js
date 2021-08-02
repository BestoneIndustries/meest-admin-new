import React from "react";
import { Link } from "react-router-dom";

function EditCampaign() {
  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="header-navbar-shadow"></div>
      <div className="content-wrapper">
        <div className="content-header row">
          <div className="content-header-left col-md-9 col-12 mb-2">
            <div className="row breadcrumbs-top">
              <div className="col-12">
                {/* <h2 className="content-header-title float-left mb-0">
                  Advertisement
                </h2> */}
                <div className="breadcrumb-wrapper col-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Edit Campaign</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-body">
          {/* <!-- Form wizard with number tabs section start --> */}
          <section id="number-tabs dropzone-examples">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header border-bottom">
                    <div className="col-12">
                      <h4 className="card-title">Edit Campaign</h4>
                    </div>
                  </div>

                  <div className="card-content" id="card-content">
                    <div className="card-body">
                      <ul
                        className="nav nav-pills mb-2"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="pills-home-tab"
                            data-toggle="pill"
                            href="#pills-home"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            CPM
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="pills-profile-tab"
                            data-toggle="pill"
                            href="#pills-profile"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            CPL
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="pills-contact-tab"
                            data-toggle="pill"
                            href="#pills-contact"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            CPC
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <div className="campaign-form">
                            <form action="">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="firstName1">
                                      Campaign Name{" "}
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="firstName1"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Video Url
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="eventName1"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label>Upload Image (Limit Upto 10)</label>
                                    <div className="custom-file">
                                      <input
                                        type="file"
                                        className="custom-file-input"
                                        id="emailAttach"
                                      />
                                      <label
                                        className="custom-file-label"
                                        for="emailAttach"
                                      >
                                        Attach file
                                      </label>
                                    </div>
                                    <div className="drag-images-area">
                                      <div className="row">
                                        <div className="col-md-3">
                                          <div className="draged-image">
                                            <img
                                              src="app-assets/images/profile/user-uploads/user-01.jpg"
                                              alt=""
                                            />
                                            <span>
                                              <i
                                                className="fa fa-times"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="draged-image">
                                            <img
                                              src="app-assets/images/profile/user-uploads/user-01.jpg"
                                              alt=""
                                            />
                                            <span>
                                              <i
                                                className="fa fa-times"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="draged-image">
                                            <img
                                              src="app-assets/images/profile/user-uploads/user-01.jpg"
                                              alt=""
                                            />
                                            <span>
                                              <i
                                                className="fa fa-times"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="draged-image">
                                            <img
                                              src="app-assets/images/profile/user-uploads/user-01.jpg"
                                              alt=""
                                            />
                                            <span>
                                              <i
                                                className="fa fa-times"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="proposalTitle1">
                                      Campaign Title
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="proposalTitle1"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label for="jobtitle">
                                      Website url (If any)
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="jobtitle"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="shortDescription1">
                                      Campaign Description :
                                    </label>
                                    <textarea
                                      name="shortDescription"
                                      id="shortDescription1"
                                      rows="5"
                                      className="form-control"
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label for="jobtitle">Start Date</label>
                                    <input
                                      type="date"
                                      className="form-control pickadate"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      How many days you want to run your
                                      Campaign{" "}
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="eventName1"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="eventName1">Location</label>
                                    <select
                                      className="form-control js-example-basic-multiple"
                                      name="states[]"
                                      multiple="multiple"
                                    >
                                      <option value="" disabled>
                                        Choose Location
                                      </option>
                                      <option value="1">Delhi</option>
                                      <option value="2">Mumbai</option>
                                      <option value="3">Kolkata</option>
                                      <option value="4">Bhopal</option>
                                      <option value="5">Siliguri</option>
                                    </select>
                                  </div>
                                  {/* <!-- <div className="form-group">
                                                                    <label for="eventType1">Audience</label>
                                                                    <select className="custom-select form-control" id="eventType1" data-placeholder="Type to search cities" name="eventType1">
                                                                        <option value="">option-01</option>
                                                                        <option value="">option-01</option>
                                                                        <option value="">option-01</option>
                                                                    </select>
                                                                </div> --> */}
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Campaign Budget Per Day
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="eventName1"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Placement
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      disabled
                                      placeholder="Post"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Estimated reach (will show count on the
                                      basis of registered audience )
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="10,000"
                                      id="eventName1"
                                      disabled
                                    />
                                  </div>
                                </div>

                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Age Group (years)
                                    </label>
                                    <select className="form-control">
                                      <option>13 - 18</option>
                                      <option>18 - 23</option>
                                      <option>23- 28</option>
                                      <option>28- 33</option>
                                      <option>33- 38</option>
                                    </select>
                                  </div>

                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Gender Type
                                    </label>
                                    <ul className="list-unstyled mb-0">
                                      <li className="d-inline-block mr-2">
                                        <input type="radio" name="status" />{" "}
                                        Male
                                      </li>
                                      <li className="d-inline-block mr-2">
                                        <input type="radio" name="status" />{" "}
                                        Female
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <button
                                  type="button"
                                  className="btn mr-1 btn-info waves-effect waves-light"
                                  data-toggle="modal"
                                  data-target="#preview-form"
                                >
                                  Preview
                                </button>
                                <input
                                  type="submit"
                                  className="btn btn-primary waves-effect waves-light"
                                  value="Submit"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <div className="campaign-form">
                            <form action="">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="firstName1">
                                      Campaign Name{" "}
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="firstName1"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Video Url
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="eventName1"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label>
                                      Upload Image (Limit one image)
                                    </label>
                                    <div className="custom-file">
                                      <input
                                        type="file"
                                        className="custom-file-input"
                                        id="emailAttach"
                                      />
                                      <label
                                        className="custom-file-label"
                                        for="emailAttach"
                                      >
                                        Attach file
                                      </label>
                                    </div>
                                    <div className="drag-images-area">
                                      <div className="row">
                                        <div className="col-md-3">
                                          <div className="draged-image">
                                            <img
                                              src="app-assets/images/profile/user-uploads/user-01.jpg"
                                              alt=""
                                            />
                                            <span>
                                              <i
                                                className="fa fa-times"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="proposalTitle1">
                                      Campaign Title
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="proposalTitle1"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label for="jobtitle">Website url</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="jobtitle"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="shortDescription1">
                                      Campaign Description :
                                    </label>
                                    <textarea
                                      name="shortDescription"
                                      id="shortDescription1"
                                      rows="5"
                                      className="form-control"
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label for="jobtitle">Start Date</label>
                                    <input
                                      type="date"
                                      className="form-control pickadate"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      How many days you want to run your
                                      Campaign{" "}
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="eventName1"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="eventName1">Location</label>
                                    <select
                                      className="form-control js-example-basic-multiple"
                                      name="states[]"
                                      multiple="multiple"
                                    >
                                      <option value="" disabled>
                                        Choose Location
                                      </option>
                                      <option value="1">Delhi</option>
                                      <option value="2">Mumbai</option>
                                      <option value="3">Kolkata</option>
                                      <option value="4">Bhopal</option>
                                      <option value="5">Siliguri</option>
                                    </select>
                                  </div>
                                  {/* <!-- <div className="form-group">
                                                                    <label for="eventType1">Audience</label>
                                                                    <select className="custom-select form-control" id="eventType1" data-placeholder="Type to search cities" name="eventType1">
                                                                        <option value="">option-01</option>
                                                                        <option value="">option-01</option>
                                                                        <option value="">option-01</option>
                                                                    </select>
                                                                </div> --> */}
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Campaign Budget Per Day
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="eventName1"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Placement
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      disabled
                                      placeholder="Post"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Estimated reach (will show count on the
                                      basis of registered audience )
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="10,000"
                                      id="eventName1"
                                      disabled
                                    />
                                  </div>
                                </div>

                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Age Group (years)
                                    </label>
                                    <select className="form-control">
                                      <option>13 - 18</option>
                                      <option>18 - 23</option>
                                      <option>23- 28</option>
                                      <option>28- 33</option>
                                      <option>33- 38</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Gender Type
                                    </label>
                                    <ul className="list-unstyled mb-0">
                                      <li className="d-inline-block mr-2">
                                        <input type="radio" name="status" />{" "}
                                        Male
                                      </li>
                                      <li className="d-inline-block mr-2">
                                        <input type="radio" name="status" />{" "}
                                        Female
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      <input type="checkbox" /> Ask Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="eventName1"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      <input type="checkbox" /> Email
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="eventName1"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      <input type="checkbox" /> Location
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="eventName1"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      <input type="checkbox" /> Mobile
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="eventName1"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      <input type="checkbox" /> Comment Box
                                    </label>
                                    <textarea
                                      className="form-control"
                                      type="text"
                                      rows="5"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <button
                                  type="button"
                                  className="btn mr-1 btn-info waves-effect waves-light"
                                  data-toggle="modal"
                                  data-target="#preview-form"
                                >
                                  Preview
                                </button>
                                <input
                                  type="submit"
                                  className="btn btn-primary waves-effect waves-light"
                                  value="Submit"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-contact"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          <div className="campaign-form">
                            <form action="">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="firstName1">
                                      Campaign Name{" "}
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="firstName1"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Video Url
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="eventName1"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label>Upload Image (Limit Upto 10)</label>
                                    <div className="custom-file">
                                      <input
                                        type="file"
                                        className="custom-file-input"
                                        id="emailAttach"
                                      />
                                      <label
                                        className="custom-file-label"
                                        for="emailAttach"
                                      >
                                        Attach file
                                      </label>
                                    </div>
                                    <div className="drag-images-area">
                                      <div className="row">
                                        <div className="col-md-3">
                                          <div className="draged-image">
                                            <img
                                              src="app-assets/images/profile/user-uploads/user-01.jpg"
                                              alt=""
                                            />
                                            <span>
                                              <i
                                                className="fa fa-times"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="draged-image">
                                            <img
                                              src="app-assets/images/profile/user-uploads/user-01.jpg"
                                              alt=""
                                            />
                                            <span>
                                              <i
                                                className="fa fa-times"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="draged-image">
                                            <img
                                              src="app-assets/images/profile/user-uploads/user-01.jpg"
                                              alt=""
                                            />
                                            <span>
                                              <i
                                                className="fa fa-times"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="draged-image">
                                            <img
                                              src="app-assets/images/profile/user-uploads/user-01.jpg"
                                              alt=""
                                            />
                                            <span>
                                              <i
                                                className="fa fa-times"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="proposalTitle1">
                                      Campaign Title
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="proposalTitle1"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label for="jobtitle">
                                      Website url (If any)
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="jobtitle"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="shortDescription1">
                                      Campaign Description :
                                    </label>
                                    <textarea
                                      name="shortDescription"
                                      id="shortDescription1"
                                      rows="5"
                                      className="form-control"
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label for="jobtitle">Start Date</label>
                                    <input
                                      type="date"
                                      className="form-control pickadate"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      How many days you want to run your
                                      Campaign{" "}
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="eventName1"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="eventName1">Location</label>
                                    <select
                                      className="form-control js-example-basic-multiple"
                                      name="states[]"
                                      multiple="multiple"
                                    >
                                      <option value="" disabled>
                                        Choose Location
                                      </option>
                                      <option value="1">Delhi</option>
                                      <option value="2">Mumbai</option>
                                      <option value="3">Kolkata</option>
                                      <option value="4">Bhopal</option>
                                      <option value="5">Siliguri</option>
                                    </select>
                                  </div>
                                  {/* <!-- <div className="form-group">
                                                                    <label for="eventType1">Audience</label>
                                                                    <select className="custom-select form-control" id="eventType1" data-placeholder="Type to search cities" name="eventType1">
                                                                        <option value="">option-01</option>
                                                                        <option value="">option-01</option>
                                                                        <option value="">option-01</option>
                                                                    </select>
                                                                </div> --> */}
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Campaign Budget Per Day
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="eventName1"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Placement
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      disabled
                                      placeholder="Post"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Estimated reach (will show count on the
                                      basis of registered audience )
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="10,000"
                                      id="eventName1"
                                      disabled
                                    />
                                  </div>
                                </div>

                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Age Group (years)
                                    </label>
                                    <select className="form-control">
                                      <option>13 - 18</option>
                                      <option>18 - 23</option>
                                      <option>23- 28</option>
                                      <option>28- 33</option>
                                      <option>33- 38</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <label for="eventLocation1">
                                      Gender Type
                                    </label>
                                    <ul className="list-unstyled mb-0">
                                      <li className="d-inline-block mr-2">
                                        <input type="radio" name="status" />{" "}
                                        Male
                                      </li>
                                      <li className="d-inline-block mr-2">
                                        <input type="radio" name="status" />{" "}
                                        Female
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <button
                                  type="button"
                                  className="btn mr-1 btn-info waves-effect waves-light"
                                  data-toggle="modal"
                                  data-target="#preview-form"
                                >
                                  Preview
                                </button>
                                <input
                                  type="submit"
                                  className="btn btn-primary waves-effect waves-light"
                                  value="Submit"
                                />
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
          {/* <!-- Form wizard with number tabs section end --> */}
        </div>
      </div>
    </div>
  );
}

export default EditCampaign;
