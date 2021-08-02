import React, { useEffect } from "react";

import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

export default function ManageProRefund() {
  // function myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }
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
                      <Link to="/">Pro System</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Manage Pro Refunds
                    </li>
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
                        <h4 className="card-title">
                          Manage Pro Refund Requests
                        </h4>
                      </div>
                    </div>
                    <div className="card-content card-body">
                      <div className="col-12">
                        <div
                          id="DataTables_Table_0_wrapper"
                          className="dataTables_wrapper dt-bootstrap4"
                        >
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
                                    User Name
                                  </th>
                                  <th data-field="status" data-editable="true">
                                    Status
                                  </th>
                                  <th data-field="action">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td>1</td>
                                  <td>Praveen</td>
                                  <td>
                                    <p className="pending-bg">Pending</p>
                                  </td>
                                  {/* <td>
                                    <a href="#" className="btn btn-info">
                                      Approve
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
                                  </td> */}
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>2</td>
                                  <td>Praveen</td>
                                  <td>
                                    <p className="pending-bg">Pending</p>
                                  </td>
                                  {/* <td>
                                    <a href="#" className="btn btn-info">
                                      Approve
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
                                  </td> */}
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
    </>
  );
}
