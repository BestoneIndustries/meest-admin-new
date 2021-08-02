import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

export default function InvitationCodes() {
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
                      <Link to="/">Tools</Link>
                    </li>
                    <li className="breadcrumb-item active">Invitation Codes</li>
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
                        <h4 className="card-title">Manage Invitation Codes</h4>
                        <a
                          type="button"
                          className="btn mt-2 btn-primary shadow waves-effect waves-light"
                          href=""
                        >
                          Generate Code
                        </a>
                      </div>
                    </div>
                    <p className="mb-0 pl-2 pt-2">
                      This system is used to invite users to your site if the
                      registration system is turned off.
                    </p>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
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

                                  <th data-field="created" data-editable="true">
                                    Created
                                  </th>
                                  <th data-field="code" data-editable="true">
                                    Invitation Code
                                  </th>
                                  <th data-field="status" data-editable="true">
                                    Invited User
                                  </th>
                                  <th data-field="action">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td>15 hours ago</td>
                                  <td>3664182415f22ade8a03410.38153266</td>
                                  <td>1</td>
                                  <td>
                                    <a href="#" className="btn btn-info">
                                      Copy Link
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
                                  <td>22 hours ago</td>
                                  <td>3664182415f22ade8a03410.38153266</td>
                                  <td></td>
                                  <td>
                                    <a href="#" className="btn btn-info">
                                      Copy Link
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
                                  <td>3 days ago</td>
                                  <td>3664182415f22ade8a03410.38153266</td>
                                  <td>2</td>
                                  <td>
                                    <a href="#" className="btn btn-info">
                                      Copy Link
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
