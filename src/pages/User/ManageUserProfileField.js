import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

export default function ManageUserProfileField() {
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
                      <Link to="/">User</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Manage &amp; Edit Custom Profile Fields
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="basic-datatable">
              <div className="row">
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
                                    placeholder=""
                                    className="form-control input-style"
                                  />
                                </fieldset>
                              </div>
                              <div className="col-12 col-sm-6 col-lg-3">
                                <label for="users-list-role">State</label>
                                <fieldset className="form-group">
                                  <select
                                    className="form-control"
                                    id="users-list-role"
                                  >
                                    <option></option>
                                    <option value="">Punjab</option>
                                    <option value="user">Delhi</option>
                                    <option value="staff">Mumbai</option>
                                  </select>
                                </fieldset>
                              </div>
                              <div className="col-12 col-sm-6 col-lg-3">
                                <label for="users-list-status">Source</label>
                                <fieldset className="form-group">
                                  <select
                                    className="form-control"
                                    id="users-list-status"
                                  >
                                    <option></option>
                                    <option value="">IOS</option>
                                    <option value="Active">Android</option>
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
                        <h4 className="card-title">
                          Manage & Edit Custom Profile Fields
                        </h4>
                        <br />
                        <Link
                          to="/Create-New-Custom-Field"
                          className="btn btn-primary shadow waves-effect waves-light"
                        >
                          Create New Custom Field
                        </Link>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
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
                                        data-field="fieldname"
                                        data-editable="true"
                                      >
                                        Field Name
                                      </th>
                                      <th
                                        data-field="type"
                                        data-editable="true"
                                      >
                                        Type
                                      </th>
                                      <th
                                        data-field="length"
                                        data-editable="true"
                                      >
                                        Length
                                      </th>
                                      <th
                                        data-field="placement"
                                        data-editable="true"
                                      >
                                        Placement
                                      </th>
                                      <th
                                        data-field="field-description"
                                        data-editable="true"
                                      >
                                        Field Description
                                      </th>
                                      <th data-field="action">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                      <td>1</td>
                                      <td>Custom field</td>
                                      <td>Text Box</td>
                                      <td>9</td>
                                      <td>General</td>
                                      <td>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </td>
                                      <td>
                                        <Link
                                          to="/Edit-Custom-Field"
                                          className="btn btn-info"
                                        >
                                          Edit
                                        </Link>
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
                                      <td>Custom field</td>
                                      <td>Text Box</td>
                                      <td>19</td>
                                      <td>General</td>
                                      <td>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </td>

                                      <td>
                                        <Link
                                          to="/Edit-Custom-Field"
                                          className="btn btn-info"
                                        >
                                          Edit
                                        </Link>
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
                                      <td>Custom field</td>
                                      <td>Text Box</td>
                                      <td>9</td>
                                      <td>General</td>
                                      <td>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </td>
                                      <td>
                                        <Link
                                          to="/Edit-Custom-Field"
                                          className="btn btn-info"
                                        >
                                          Edit
                                        </Link>
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
                                      <td>4</td>
                                      <td>Graham</td>
                                      <td>Text</td>
                                      <td>9</td>
                                      <td>General</td>
                                      <td>
                                        Lorem ipsum dolor sit amet, consectetur
                                      </td>
                                      <td>
                                        <Link
                                          to="/Edit-Custom-Field"
                                          className="btn btn-info"
                                        >
                                          Edit
                                        </Link>
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
              Are you sure you want to delete this User Profile Field?
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