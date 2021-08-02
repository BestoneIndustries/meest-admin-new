import React, { useEffect } from "react";

import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Groups() {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  }, []);

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
                      <Link to="/">Manage Features</Link>
                    </li>
                    <li className="breadcrumb-item active">Groups</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                {/* <!--<div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="card bg-analytics text-white">
                                <div className="card-content">
                                    <div className="card-body text-center">
                                        <img src="app-assets/images/elements/decore-left.png" className="img-left" alt="
            card-img-left">
                                        <img src="app-assets/images/elements/decore-right.png" className="img-right" alt="
            card-img-right">
                                        <div className="avatar avatar-xl bg-primary shadow mt-0">
                                            <div className="avatar-content">
                                                <i className="feather icon-award white font-large-1"></i>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h1 className="mb-2 text-white">Congratulations John,</h1>
                                            <p className="m-auto w-75">You have done <strong>57.6%</strong> more sales today. Check your new badge in your profile.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>--> */}

                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-users text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">21</h2>
                        <p className="mb-1">Total Groups</p>
                      </div>
                    </div>
                    {/* <!--  <div className="card-content">
                                    <div id="subscribe-gain-chart"></div>
                                </div>-->	 */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-warning p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-users text-warning font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">7</h2>
                        <p className="mb-1">Joined Groups</p>
                      </div>
                    </div>
                    {/* <!--<div className="card-content">
                                    <div id="subscribe-gain-chart"></div>
                                </div>--> */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-edit text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">9</h2>
                        <p className="mb-1">Total Posts</p>
                      </div>
                    </div>
                    {/* <!--<div className="card-content">
                                    <div id="subscribe-gain-chart"></div>
                                </div>--> */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-warning p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-plus-square text-warning font-medium-5"></i>
                          </div>
                        </div>{" "}
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">2</h2>
                        <p className="mb-1">Join Requests</p>
                      </div>{" "}
                    </div>
                    {/* <!--<div className="card-content">
                                    <div id="orders-received-chart"></div>
                                </div>--> */}
                  </div>
                </div>
              </div>

              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Manage & Edit Groups</h4>
                      </div>
                    </div>

                    <div className="card-content card-body">
                      <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper dt-bootstrap4"
                      >
                        <div
                          className="row mb-2"
                          style={{ alignItems: "center" }}
                        >
                          <div className="col-12 col-sm-4 col-md-3">
                            <div
                              className="dataTables_length float-left"
                              id="DataTables_Table_0_length"
                            >
                              <label>
                                Show
                                <select
                                  name="DataTables_Table_0_length"
                                  aria-controls="DataTables_Table_0"
                                  className="custom-select custom-select-sm form-control form-control-sm"
                                >
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                </select>
                                entries
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-sm-8 col-md-6 mtop-r1">
                            <div
                              id="DataTables_Table_0_filter"
                              className="dataTables_filter bulk-btn"
                            >
                              <div className="col-7 col-md-9 pr-0 pl-0">
                                <input
                                  type="text"
                                  placeholder="Search"
                                  name="query"
                                  id="query"
                                  className="form-control full-wdth float-left"
                                  value=""
                                />
                              </div>
                              <div className="col-5 col-md-3 pr-0">
                                <button className="btn btn-primary float-left waves-effect waves-light">
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-3 mtop-r1">
                            <div className="dropdown flot-rigt">
                              <button
                                onClick={myFunction}
                                className="btn btn-primary waves-effect waves-light dropbtn"
                              >
                                Bulk Option
                              </button>
                              <div id="myDropdown" className="dropdown-content">
                                <a href="#">Delete</a>
                                <a href="#">Download</a>
                                <a href="#">Export as CSV</a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="table-responsive">
                          <table
                            className="table table-hover table-bordered mb-0"
                            id="table"
                            role="grid"
                            data-toggle="table"
                            data-pagination="true"
                            data-resizable="true"
                            data-click-to-select="true"
                          >
                            <thead className="thead-light">
                              <tr>
                                <th
                                  data-field="state"
                                  data-checkbox="true"
                                ></th>
                                <th data-field="id">ID</th>
                                <th data-field="username" data-editable="true">
                                  Group Name
                                </th>
                                <th data-field="source" data-editable="true">
                                  Owner
                                </th>
                                <th data-field="email" data-editable="true">
                                  Category
                                </th>
                                <th data-field="members" data-editable="true">
                                  Members
                                </th>
                                <th data-field="date">Created Date</th>
                                <th data-field="post">Posts</th>
                                <th data-field="likes">Likes</th>
                                <th data-field="views">Views</th>
                                <th data-field="share">Share</th>
                                <th data-field="status">Status</th>
                                <th data-field="action">Action</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td></td>
                                <td>1</td>
                                <td>
                                  <a href="#">
                                    <img
                                      className="setting-avatar"
                                      src="app-assets/images/icons/d-avatar.jpg"
                                    />{" "}
                                    Airi
                                  </a>
                                </td>
                                <td>
                                  <a href="#">
                                    <img
                                      className="setting-avatar"
                                      src="app-assets/images/icons/d-avatar.jpg"
                                    />{" "}
                                    Airi
                                  </a>
                                </td>
                                <td>Cars and Vehicles</td>
                                <td>2</td>
                                <td>07/08/2020</td>
                                <td>
                                  <Link to="/Post-Details">23 posts</Link>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    26
                                  </a>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    11
                                  </a>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    15
                                  </a>
                                </td>
                                <td>
                                  <label className="switch offer">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex">
                                    <a href="#" className="btn btn-info">
                                      Edit
                                    </a>
                                    &nbsp;&nbsp;{" "}
                                    <a
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#default1"
                                      className="btn btn-danger"
                                    >
                                      Delete
                                    </a>
                                  </div>{" "}
                                </td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>2</td>
                                <td>
                                  <a href="#">
                                    <img
                                      className="setting-avatar"
                                      src="app-assets/images/icons/d-avatar.jpg"
                                    />{" "}
                                    Airi
                                  </a>
                                </td>
                                <td>
                                  <a href="#">
                                    <img
                                      className="setting-avatar"
                                      src="app-assets/images/icons/d-avatar.jpg"
                                    />{" "}
                                    Airi
                                  </a>
                                </td>
                                <td>Comedy</td>
                                <td>3</td>
                                <td>07/08/2020</td>
                                <td>
                                  <Link to="/Post-Details">23 posts</Link>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    26
                                  </a>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    11
                                  </a>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    15
                                  </a>
                                </td>
                                <td>
                                  <label className="switch offer">
                                    <input type="checkbox" checked />
                                    <span className="slider round"></span>
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex">
                                    <a href="#" className="btn btn-info">
                                      Edit
                                    </a>
                                    &nbsp;&nbsp;{" "}
                                    <a
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#default1"
                                      className="btn btn-danger"
                                    >
                                      Delete
                                    </a>
                                  </div>{" "}
                                </td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>2</td>
                                <td>
                                  <a href="#">
                                    <img
                                      className="setting-avatar"
                                      src="app-assets/images/icons/d-avatar.jpg"
                                    />{" "}
                                    Airi
                                  </a>
                                </td>
                                <td>
                                  <a href="#">
                                    <img
                                      className="setting-avatar"
                                      src="app-assets/images/icons/d-avatar.jpg"
                                    />{" "}
                                    Airi
                                  </a>
                                </td>
                                <td>History and Facts</td>
                                <td>3</td>
                                <td>07/08/2020</td>
                                <td>
                                  <Link to="/Post-Details">23 posts</Link>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    26
                                  </a>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    11
                                  </a>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    15
                                  </a>
                                </td>
                                <td>
                                  <label className="switch offer">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex">
                                    <a href="#" className="btn btn-info">
                                      Edit
                                    </a>
                                    &nbsp;&nbsp;{" "}
                                    <a
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#default1"
                                      className="btn btn-danger"
                                    >
                                      Delete
                                    </a>
                                  </div>{" "}
                                </td>
                              </tr>
                            </tbody>
                          </table>
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

      <div
        className="modal fade text-left show"
        id="default1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel18"
        style={{ paddingRight: "17px", display: "none" }}
        aria-modal="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              Are you sure you want to delete this user?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Ok
              </button>
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
