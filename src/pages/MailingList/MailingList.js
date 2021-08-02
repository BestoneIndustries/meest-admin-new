import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
//import { Formik, Form, Field, ErrorMessage } from "formik";
//import * as Yup from "yup";
import NotificationSystem from "react-notification-system";
import { postData } from "../apicall/apiCall";

export default function MailingList() {
  var notificationSystem = React.createRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [countInfo, setCountInfo] = useState({
    totalFemale: 0,
    totalMale: 0,
    totalOflineUsers: 0,
    totalOnlineUsers: 0,
  });
  const [blockedCount, setBlockedCount] = useState(0);
  const [blockedmailList, setBlockedmailList] = useState([]);
  const [addBlacklist, setAddBlacklist] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  useEffect(() => {
    getCountData();

    // getAddBlacklist();
    fetchData(pageNumber, pageSize);
  }, []);

  async function getCountData() {
    // debugger;
    const resData = await postData("/dashboard/getAll/male/female/count");
    console.log("fetchData -> countData", resData);
    if (resData && resData.success) {
      setCountInfo(resData.data);
    }
  }
  async function getAddBlacklist() {
    
    const resData = await postData("/admin/add/into/blacklist");
    console.log("fetchData -> resData", resData);
    if (resData && resData.success) {
      setAddBlacklist(resData.data.add);
    }
  }
  async function fetchData(pgNum, pgSize) {
    setPageSize(pgSize);
    setPageNumber(pgNum);
    var body = {
      pageNumber: pgNum,
      pageSize: pgSize,
    };
    const resData = await postData("/admin/getAll/from/blacklist", body);
    console.log("fetchData -> blackresData", resData);
    if (resData && resData.success) {
      setBlockedCount(resData.data.count);
      setBlockedmailList(resData.data.rows);
    }
  }

  return (
    <>
      <div className="app-content content">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-left mb-0">
                    Mailing List
                  </h2>
                  <div className="breadcrumb-wrapper col-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        {" "}
                        <Link to="/">Home</Link>{" "}
                      </li>

                      <li className="breadcrumb-item active"> Mailing List</li>
                    </ol>
                  </div>
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
                            <i className="feather icon-user text-primary font-medium-5" />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">
                          {countInfo.totalFemale.count}
                        </h2>
                        <p className="mb-1">Female</p>
                      </div>
                    </div>
                    {/*  <div className="card-content">
                      <div id="subscribe-gain-chart"></div>
                      </div>*/}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-warning p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-user text-warning font-medium-5" />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">
                          {countInfo.totalMale.count}
                        </h2>
                        <p className="mb-1">Male</p>
                      </div>
                    </div>
                    {/*<div className="card-content">
                      <div id="subscribe-gain-chart"></div>
                      </div>*/}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-users text-primary font-medium-5" />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">
                          {countInfo.totalOnlineUsers}
                        </h2>
                        <p className="mb-1">Active Users</p>
                      </div>
                    </div>
                    {/*<div className="card-content">
                      <div id="subscribe-gain-chart"></div>
                      </div>*/}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-warning p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-mail text-warning font-medium-5" />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">
                          {countInfo.totalOflineUsers}
                        </h2>
                        <p className="mb-1">Inactive Users</p>
                      </div>
                    </div>
                    {/*<div className="card-content">
                      <div id="orders-received-chart"></div>
                      </div>*/}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-danger p-50 m-0">
                          <div className="avatar-content">
                            <i className="fa fa-user-times text-danger font-medium-5" />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">{blockedCount}</h2>
                        <p className="mb-1">Blocked Users</p>
                      </div>
                    </div>
                    {/*<div className="card-content">
                                    </div>
                                </div>
                                {/* <div className="col-lg-3 col-md-6 col-12">
                                    <div className="card">
                                        <div className="card-header align-items-start pb-0">
                                            <div className="col-4 mr-0">
                                                <div className="avatar bg-rgba-danger p-50 m-0">
                                                    <div className="avatar-content">
                                                        <i className="fa fa-user-times text-danger font-medium-5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-8 ml-0">
                                                <h2 className="text-bold-700 mb-25">{blockedCount}</h2>
                                                <p className="mb-1">Blocked Users</p>
                                            </div>
                                        </div> */}
                    {/*<div className="card-content">
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-warning p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-mail text-warning font-medium-5" />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">
                          {countInfo.totalOflineUsers}
                        </h2>
                        <p className="mb-1">Inactive Users</p>
                      </div>
                    </div>
                    {/*<div className="card-content">
                      <div id="orders-received-chart"></div>
                      </div>*/}
                    {/* </div>
                </div>  */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-danger p-50 m-0">
                          <div className="avatar-content">
                            <i className="fa fa-user-times text-danger font-medium-5" />
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">{blockedCount}</h2>
                        <p className="mb-1">Blocked Users</p>
                      </div>
                    </div>
                    {/*<div className="card-content">
                      <div id="orders-received-chart"></div>
                      </div>*/}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header border-bottom">
                  <div className="col-12">
                    <h4 className="card-title">Filters</h4>
                  </div>
                  <a className="heading-elements-toggle">
                    <i className="fa fa-ellipsis-v font-medium-3" />
                  </a>
                  <div className="heading-elements">
                    <ul className="list-inline mb-0">
                      <li>
                        <a data-action="collapse">
                          <i className="feather icon-chevron-down" />
                        </a>
                      </li>
                      <li>
                        <a data-action>
                          <i className="feather icon-rotate-cw users-data-filter" />
                        </a>
                      </li>
                      <li>
                        <a data-action="close">
                          <i className="feather icon-x" />
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
                          className="row justify-content-between align-items-center"
                          style={{ alignItems: "center" }}
                        >
                          <div className="col-12 col-sm-6 col-lg-3">
                            <label htmlFor="users-list-verified">
                              User Name / Email ID
                            </label>
                            <fieldset className="form-group">
                              <input
                                type="text"
                                placeholder
                                className="form-control input-style"
                              />
                            </fieldset>
                          </div>
                          {/* <div className="col-12 col-sm-6 col-lg-2">
                            <label htmlFor="users-list-role">State</label>
                            <fieldset className="form-group">
                              <select
                                className="form-control"
                                id="users-list-role"
                              >
                                <option />
                                <option value>Punjab</option>
                                <option value="user">Delhi</option>
                                <option value="staff">Mumbai</option>
                              </select>
                            </fieldset>
                          </div> */}
                          {/* <div className="col-12 col-sm-6 col-lg-3">
                            <label htmlFor="users-list-status">Source</label>
                            <fieldset className="form-group">
                              <select
                                className="form-control"
                                id="users-list-status"
                              >
                                <option />
                                <option value>IOS</option>
                                <option value="Active">Android</option>
                              </select>
                            </fieldset>
                          </div> */}
                          <div className="col-12 col-sm-6 col-lg-3">
                            <label htmlFor="users-list-status">Status</label>
                            <fieldset className="form-group">
                              <select
                                className="form-control"
                                id="users-list-status"
                              >
                                <option />
                                <option value>Active Users</option>
                                <option value="Active">Inactive Users</option>
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
              <NotificationSystem ref={notificationSystem} />
              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Manage &amp; Edit Users</h4>
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
                          <div className="col-12 col-sm-4 col-md-2">
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
                                  <option value={10}>10</option>
                                  <option value={25}>25</option>
                                  <option value={50}>50</option>
                                  <option value={100}>100</option>
                                </select>
                                entries
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-sm-8 col-md-5 mtop-r1">
                            <div
                              id="DataTables_Table_0_filter"
                              className="dataTables_filter bulk-btn"
                            >
                              <div className="col-7 col-md-9 pr-0 pl-0">
                                <input
                                  type="text"
                                  placeholder="Search for User's ID, Name."
                                  name="query"
                                  id="query"
                                  className="form-control full-wdth float-left"
                                  defaultValue
                                />
                              </div>
                              <div className="col-5 col-md-3 pr-0">
                                <button className="btn btn-primary float-left waves-effect waves-light">
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-12 col-sm-6 col-md-3 mtop-r1">
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
                                <a href="#">Select User</a>
                              </div>
                            </div>

                          </div> */}
                          {/* <div className="col-12 col-sm-3 col-md-3 mtop-r1">
                            <Link to="/mailing-list">
                              <i className="flot-rigt btn btn-primary waves-effect waves-light">
                                Send Email to Users
                              </i>
                            </Link>
                          </div> */}
                          <div className="col-12 col-sm-3 col-md-2 mtop-r1">
                            <Link to="/mailing-list">
                              <button className="btn btn-primary waves-effect waves-light dropbtn">
                                <i>Send Email</i>
                              </button>
                              {/* <i  className="flot-rigt btn btn-primary waves-effect waves-light">Send Email</i> */}

                              {/* <i className="menu-title" data-i18n="User"
                              data-toggle="pill"
                              data-target="#mailing-form"
                              className="flot-rigt btn btn-primary waves-effect waves-light"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                              >
                              Create mailing list
                              </i> */}
                            </Link>
                            {/* <a
                              href="#pills-home"
                              data-toggle="pill"

                              data-target="#mailing-form"
                              className="flot-rigt btn btn-primary waves-effect waves-light"


                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                            >
                              Create Mailing List
                            </a> */}
                          </div>
                        </div>
                        <div className="col-sm-12">
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
                                  <th data-field="state" data-checkbox="true" />
                                  <th data-field="id">ID</th>
                                  <th
                                    data-field="username"
                                    data-editable="true"
                                  >
                                    User Name
                                  </th>
                                  <th data-field="country" data-editable="true">
                                    Email ID
                                  </th>
                                  {/* <th data-field="source" data-editable="true">
                                    Source
                                  </th> */}
                                  <th data-field="email" data-editable="true">
                                    Created At
                                  </th>
                                  <th
                                    data-field="documents"
                                    data-editable="true"
                                  >
                                    User Documents
                                  </th>
                                  <th
                                    data-field="ipaddress"
                                    data-editable="true"
                                  >
                                    IP Address
                                  </th>
                                  <th
                                    data-field="totalpost"
                                    data-editable="true"
                                  >
                                    Total Post
                                  </th>
                                  <th data-field="status" data-editable="true">
                                    Status
                                  </th>
                                  {/* <th data-field="action">Action</th> */}
                                </tr>
                              </thead>
                              <tbody>
                                {blockedmailList.map((ele, i) => {
                                  return (
                                    <tr key={i}>
                                      <td />
                                      <td>
                                        {i + 1 + pageSize * (pageNumber - 1)}
                                      </td>
                                      <td>
                                        {/* <div className="user-image-name">
                                            <img
                                              className="setting-avatar"
                                              src="app-assets/images/icons/d-avatar.jpg"
                                            />
                                            <a
                                              href="profile-details.html"
                                              className="user-name"
                                            >
                                              {" "}
                                              Shamm <br /> awe@etr.lc
                                            </a>
                                          </div> */}
                                        {ele.username === "ID"
                                          ? "ID"
                                          : "User name"}
                                      </td>
                                      <td>
                                        {ele.emailAddress === "EMAIL"
                                          ? "EMAIL"
                                          : "email id"}
                                      </td>
                                      {/* <td>IOS</td> */}
                                      <td>{ele.createdAt}</td>
                                      <td>
                                        <a
                                          href="app-assets/images/adhaar-card/pic-01.jpg"
                                          data-lightbox="post-article-gallery"
                                          data-title
                                          className="link-preview"
                                          title="Adhaar Card"
                                        >
                                          <img
                                            className="setting-avatar1"
                                            onclick="currentSlide(1)"
                                            src="app-assets/images/adhaar-card/pic-01.jpg"
                                          />
                                        </a>
                                        <a
                                          href="app-assets/images/adhaar-card/pic-02.png"
                                          data-lightbox="post-article-gallery"
                                          data-title
                                          className="link-preview"
                                          title="Adhaar Card"
                                        >
                                          <img
                                            className="setting-avatar1"
                                            onclick="currentSlide(3)"
                                            src="app-assets/images/adhaar-card/pic-02.png"
                                          />
                                        </a>
                                      </td>
                                      <td>
                                        {ele.ipAddress === "IP"
                                          ? "IP"
                                          : "ipaddress"}
                                      </td>
                                      <td>
                                        <a href="post-details.html">34</a>
                                      </td>
                                      <td>
                                        <label
                                          className="switch offer"
                                          onclick="alert('Are you sure you want to change the status?')"
                                        >
                                          <input
                                            type="checkbox"
                                            id="check1"
                                            name="check1"
                                            defaultChecked="checked"
                                          />
                                          <span className="slider round" />
                                        </label>
                                      </td>
                                      {/*<td>
                                        <div className="actions action-btns">
                                          <div className="btn-group dropdown actions-dropodown">
                                            <button
                                              type="button"
                                              className="btn btn-white px-1 py-1 dropdown-toggle waves-effect waves-light"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              <i className="feather icon-sliders" />
                                            </button>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              x-placement="top-end"
                                              style={{
                                                position: "absolute",
                                                willChange: "transform",
                                                top: "0px",
                                                left: "0px",
                                                transform:
                                                  "translate3d(-9px, -16px, 0px)",
                                              }}
                                            >
                                               <a
                                                className="dropdown-item"
                                                data-toggle="modal"
                                                data-target="#default3"
                                              >
                                                <i className="feather icon-edit" />
                                                Add Followers
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                href="#"
                                              >
                                                <i className="feather icon-edit" />
                                                Edit
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                data-toggle="modal"
                                                data-target="#default1"
                                              >
                                                <i className="feather icon-trash" />
                                                Delete
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                data-toggle="modal"
                                                data-target="#default1"
                                              >
                                                <i className="feather icon-trash" />
                                                Delete Post
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                href="profile-details.html"
                                              >
                                                <i className="feather icon-save" />
                                                View Profile as Admin
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </td> */}
                                    </tr>
                                  );
                                })}
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
      <Footer />
    </>
  );
}
