import React, { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { postData } from "../apicall/apiCall";
export default function Pages() {
  const [posts, SetPosts] = useState([]); //posts state
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [query, setQuery] = useState(""); // searching query
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

    loadPosts();
  }, []);

  const loadPosts = async (pgNum, pgSize) => {
    if (pgSize) setPageSize(pgSize);
    if (pgNum) setPageNumber(pgNum);
    var body = {
      pageNumber: pgNum,
      pageSize: pgSize,
    };
    const data = await postData("/post/getAll", body);

    // console.log(data.data.rows); // the main data
  
    SetPosts(data.data.rows);
  };

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
                    <li className="breadcrumb-item active">Pages</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-trending-up text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">21</h2>
                        <p className="mb-1">Total Pages</p>
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
                            <i className="feather icon-thumbs-up text-warning font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">11</h2>
                        <p className="mb-1">Total Like</p>
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
                        <h2 className="text-bold-700 mb-25">539</h2>
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
                            <i className="feather icon-check text-warning font-medium-5"></i>
                          </div>
                        </div>{" "}
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">2</h2>
                        <p className="mb-1">Verified Pages</p>
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
                        <h4 className="card-title">Manage & Edit Pages</h4>
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
                                  onChange={(e) => {
                                    loadPosts(1, e.target.value);
                                  }}
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
                                  placeholder="Search for Pages"
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
              Are you sure you want to delete this user's payment request?
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
