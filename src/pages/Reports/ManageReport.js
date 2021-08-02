 import React, { useEffect ,useState } from "react";
import Footer from "../../components/Footer";
import { postData } from '../apicall/apiCall';

import { Link } from "react-router-dom";

export default function ManageReport() {

  const [postsReport, setPostsReport] = useState([]);
  const [videoReport, setVideoReport] = useState([]);
  const [profileReport, setProfileReport] = useState([]);
  const [commentReport, setCommentReport] = useState([]);
  const [subCommentReport, setSubCommentReport] = useState([]);

  
  async function openTab(reportType){
    const body={
      reportType:reportType,
      postId:"postId"
    }
    const resData = await postData('/report/getInfo',body);
    console.log("fetchData -> resData", resData)
    if (resData) {
      if(url==="post"){
        setPostsReport(resData.data.rows)
      }
      if(url==="video"){
        setVideoReport(resData.data.rows)
      }
      if(url==="profile"){
        setProfileReport(resData.data.rows)
      }
      if(url==="comment"){
        setCommentReport(resData.data)
      }
      if(url==="subcomment"){
        setSubCommentReport(resData.data)
      }
    }
  }

  useEffect(() => {
    openTab("Profile")


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
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Manage Abuse Reports
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
                        <h4 className="card-title">Manage Abuse Reports</h4>
                      </div>
                    </div>
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
                                  <th data-field="type" data-editable="true">
                                    Type
                                  </th>
                                  <th data-field="report" data-editable="true">
                                    Reporter
                                  </th>
                                  <th data-field="link" data-editable="true">
                                    Link
                                  </th>
                                  <th data-field="time" data-editable="true">
                                    Time
                                  </th>
                                  <th data-field="action">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td>1</td>
                                  <td>Post</td>
                                  <td>
                                    <img
                                      className="setting-avatar"
                                      src="app-assets/images/icons/d-avatar.jpg"
                                    />{" "}
                                    ZachD{" "}
                                  </td>
                                  <td>
                                    <a href="post-details.html">Open Post</a>
                                  </td>
                                  <td>11/05/2020 5:30 PM</td>
                                  <td>
                                    <button
                                      className="btn btn-primary"
                                    >
                                      Mark Safe
                                    </button>
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
                                  <td>Group</td>
                                  <td>
                                    <img
                                      className="setting-avatar"
                                      src="app-assets/images/icons/d-avatar.jpg"
                                    />{" "}
                                    MyRango Delivery
                                  </td>
                                  <td>
                                    <a href="post-details.html">Open Post</a>
                                  </td>
                                  <td>11/05/2020 5:30 PM</td>
                                  <td>
                                    <button
                                      className="btn btn-primary"
                                    >
                                      Mark Safe
                                    </button>
                                    &nbsp;&nbsp;
                                    <a
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#default2"
                                      className="btn btn-info"
                                    >
                                      View Report
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
                                  <td>Profile</td>
                                  <td>
                                    <img
                                      className="setting-avatar"
                                      src="app-assets/images/icons/d-avatar.jpg"
                                    />{" "}
                                    ZachD{" "}
                                  </td>
                                  <td>
                                    <a href="post-details.html">Open Post</a>
                                  </td>
                                  <td>11/05/2020 5:30 PM</td>
                                  <td>
                                    <button
                                      className="btn btn-primary"
                                    >
                                      Mark Safe
                                    </button>
                                    &nbsp;&nbsp;
                                    <a
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#default2"
                                      className="btn btn-info"
                                    >
                                      View Report
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
              With the confirmation, the content will be deleted?
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

      <div
        className="modal fade text-left show"
        id="default2"
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
              <i className="feather icon-info"></i> VIEW REPORT
              <p>this is a test</p>
            </div>
            <div className="modal-footer">
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
