import React, { useEffect } from "react";

import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

export default function Apps() {
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
                    <li className="breadcrumb-item active">Apps</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Filters</h4>
                      </div>
                      <a className="heading-elements-toggle">
                        <i className="fa fa-ellipsis-v font-medium-3"></i>
                      </a>
                      <div className="heading-elements">
                        <ul className="list-inline mb-0">
                          <li>
                            <a data-action="collapse">
                              <i className="feather icon-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a data-action="">
                              <i className="feather icon-rotate-cw users-data-filter"></i>
                            </a>
                          </li>
                          <li>
                            <a data-action="close">
                              <i className="feather icon-x"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="users-list-filter">
                          <form>
                            <div
                              className="row"
                              style={{ alignItems: "center" }}
                            >
                              <div className="col-12 col-sm-6 col-lg-3">
                                <label for="users-list-verified">
                                  User Name
                                </label>
                                <fieldset className="form-group">
                                  <input
                                    type="text"
                                    placeholder="User name"
                                    className="form-control"
                                  />
                                </fieldset>
                              </div>
                              <div className="col-12 col-sm-6 col-lg-3">
                                <label for="users-list-role">APP ID</label>
                                <fieldset className="form-group">
                                  <select
                                    className="form-control"
                                    id="users-list-role"
                                  >
                                    <option value="">AUD</option>
                                    <option value="user">EUR</option>
                                    <option value="staff">INR</option>
                                  </select>
                                </fieldset>
                              </div>
                              <div className="col-12 col-sm-6 col-lg-3">
                                <label for="users-list-status">Website</label>
                                <fieldset className="form-group">
                                  <select
                                    className="form-control"
                                    id="users-list-status"
                                  >
                                    <option value="">Internet</option>
                                    <option value="Active">
                                      Entertainment
                                    </option>
                                    <option value="Blocked">Internet</option>
                                    <option value="deactivated">
                                      Entertainment
                                    </option>
                                  </select>
                                </fieldset>
                              </div>

                              <div className="col-12 col-sm-6 col-lg-3">
                                <a
                                  href="#"
                                  className="float-right btn btn-primary shadow full-wdth"
                                >
                                  Filter{" "}
                                </a>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Manage Apps</h4>
                      </div>
                    </div>

                    <div className="card-content mt-2">
                      <div className="col-12">
                        <div className="table-responsive">
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
                                      placeholder="Search....."
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
                                  <div
                                    id="myDropdown"
                                    className="dropdown-content"
                                  >
                                    <a href="#">Delete</a>
                                    <a href="#">Download</a>
                                    <a href="#">Export as CSV</a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-sm-12">
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
                                      <th
                                        data-field="code"
                                        data-editable="true"
                                      >
                                        Avatar
                                      </th>
                                      <th
                                        data-field="symbol"
                                        data-editable="true"
                                      >
                                        Name
                                      </th>
                                      <th
                                        data-field="status"
                                        data-editable="true"
                                      >
                                        Website
                                      </th>
                                      <th
                                        data-field="status"
                                        data-editable="true"
                                      >
                                        Callback url
                                      </th>
                                      <th
                                        data-field="status"
                                        data-editable="true"
                                      >
                                        Description
                                      </th>
                                      <th
                                        data-field="status"
                                        data-editable="true"
                                      >
                                        APP ID{" "}
                                      </th>
                                      <th
                                        data-field="status"
                                        data-editable="true"
                                      >
                                        APP Secret
                                      </th>
                                      <th data-field="action">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                      <td>1</td>
                                      <td>Graham</td>
                                      <td>Leanne</td>
                                      <td>Entertainment.com</td>
                                      <td>954445646</td>
                                      <td>jgajhasbsj.bjdabdsakj</td>
                                      <td>1324653hush456464d</td>
                                      <td>1324653hush5456464d</td>
                                      <td className="d-flex">
                                        <a href="#" className="btn btn-info">
                                          Edit
                                        </a>
                                        &nbsp;&nbsp;
                                        <a
                                          href="#"
                                          data-toggle="modal"
                                          data-target="#default1"
                                          className="btn btn-danger"
                                        >
                                          Delete
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td></td>
                                      <td>2</td>
                                      <td>Graham</td>
                                      <td>Leanne</td>
                                      <td>Entertainment.com</td>
                                      <td>954445646</td>
                                      <td>jgajhasbsj.bjdabdsakj</td>
                                      <td>1324653hush456464d</td>
                                      <td>1324653hush5456464d</td>
                                      <td className="d-flex">
                                        <a href="#" className="btn btn-info">
                                          Edit
                                        </a>
                                        &nbsp;&nbsp;
                                        <a
                                          href="#"
                                          data-toggle="modal"
                                          data-target="#default1"
                                          className="btn btn-danger"
                                        >
                                          Delete
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td></td>
                                      <td>3</td>
                                      <td>Graham</td>
                                      <td>Leanne</td>
                                      <td>Entertainment.com</td>
                                      <td>954445646</td>
                                      <td>jgajhasbsj.bjdabdsakj</td>
                                      <td>1324653hush456464d</td>
                                      <td>1324653hush5456464d</td>
                                      <td className="d-flex">
                                        <a href="#" className="btn btn-info">
                                          Edit
                                        </a>
                                        &nbsp;&nbsp;
                                        <a
                                          href="#"
                                          data-toggle="modal"
                                          data-target="#default1"
                                          className="btn btn-danger"
                                        >
                                          Delete
                                        </a>
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
