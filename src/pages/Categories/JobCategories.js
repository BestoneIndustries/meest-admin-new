import React, { useEffect } from "react";

import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function JobCategories() {
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
                      <Link to="/">Categories</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Manage Job Categories
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-12 col-md-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Add Category</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-2 col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>English</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter English"
                                  required=""
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2 col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Hindi</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter Hindi"
                                  required=""
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2 col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Punjabi</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter Punjabi"
                                  required=""
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2 col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Bangali</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter Bangali"
                                  required=""
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2 col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Assamese</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter Assamese"
                                  required=""
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2 col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Oriya</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter Oriya"
                                  required=""
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2 col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Marathi</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter Marathi"
                                  required=""
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2 col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Dogri</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter Dogri"
                                  required=""
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2 col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Gujarati</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter Gujarati"
                                  required=""
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2 col-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Sanskrit</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter Sanskrit"
                                  required=""
                                  aria-invalid="false"
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button className="btn btn-primary">Add</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Manage Categories</h4>
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
                                <th data-field="code" data-editable="true">
                                  Category Name
                                </th>
                                <th data-field="action">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td>1</td>
                                <td>Community & Social</td>
                                <td>
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
                                <td>Cars and Vehicles</td>
                                <td>
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
                                <td>Economics and Trade</td>
                                <td>
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
