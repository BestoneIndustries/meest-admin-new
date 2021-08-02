import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { postData } from "../apicall/apiCall";
import moment from "moment";
import NotificationSystem from "react-notification-system";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";

export default function ManageReport() {
  var notificationSystem = React.createRef();
  const [profilesReport, setProfilesReport] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [lastPage, setLastPage] = useState(1);
  const [pageAnchor, setPageAnchor] = useState([]);

  const success = (msg) => {
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: "success",
    });
  };

  const error = (msg) => {
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: "error",
    });
  };

  async function fetchData(pgN, pgS) {
    setPageNumber(pgN);
    setPageSize(pgS);
    const body = {
      pageSize: pgS,
      pageNumber: pgN,
      reportType: "profile",
    };
    const resData = await postData("/report/getReportsByType", body);

    if (resData && resData.code == 1) {
      var maxpage = parseInt((resData.data.count - 1) / pgS) + 1;
      console.log("max page:", maxpage);
      const pgC = [];
      for (var i = -5; i < 5; i++) {
        if (pgN + i > 0 && pgN + i <= maxpage) {
          pgC.push(pgN + i);
        }
      }
      setLastPage(maxpage);
      console.log("all page:", pgC);
      if (pgC.length > 1) setPageAnchor(pgC);
      else setPageAnchor([]);
      setProfilesReport(resData.data.rows);
    }
    console.log("Profile Report ->", resData);
  }
  async function BlockUser(id, block) {
    const resData = await postData("/admin/updateUser", {
      id: id,
      blockedByAdmin: block,
    });
    if (resData && resData.code == 1) {
      fetchData(pageNumber, pageSize);
      if (block) success("User Blocked");
      else success("User Un-Blocked");
    } else {
      console.log(resData);
      error("Server Error occurred");
    }
  }

  useEffect(() => {
    fetchData(pageNumber, pageSize);
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
          <NotificationSystem ref={notificationSystem} />
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
                                    onChange={(e) => {
                                      fetchData(1, parseInt(e.target.value));
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
                                  <th data-field="id">ID</th>
                                  <th data-field="report" data-editable="true">
                                    Reported By
                                  </th>
                                  <th data-field="report" data-editable="true">
                                    Profile
                                  </th>
                                  <th data-field="time" data-editable="true">
                                    Reason
                                  </th>
                                  <th data-field="time" data-editable="true">
                                    Time
                                  </th>
                                  <th data-field="action">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {profilesReport.map((ele, index) => {
                                  return (
                                    <tr>
                                      <td>
                                        {index +
                                          1 +
                                          pageSize * (pageNumber - 1)}
                                      </td>
                                      <td>
                                        <img
                                          className="setting-avatar"
                                          src={ele.user.displayPicture}
                                        />{" "}
                                        <Link
                                          to={{
                                            pathname: "/Profile-Details",
                                            state: { id: ele.user.id },
                                          }}
                                          className="user-name"
                                        >
                                          {" "}
                                          {ele.user.username}
                                        </Link>
                                      </td>
                                      <td>
                                        <img
                                          className="setting-avatar"
                                          src={
                                            ele.profile &&
                                            ele.profile.displayPicture
                                          }
                                        />{" "}
                                        {ele.profile && ele.profile.username}
                                      </td>
                                      <td>{ele.reportText}</td>
                                      <td>
                                        {moment(ele.createdAt).format(
                                          "DD-MM-YY hh:mmA"
                                        )}
                                      </td>
                                      <td>
                                        {ele.profile &&
                                          ele.profile.blockedByAdmin && (
                                            <button
                                              className="btn btn-primary"
                                              onClick={(e) => {
                                                BlockUser(
                                                  ele.profile && ele.profile.id,
                                                  false
                                                );
                                              }}
                                            >
                                              Un-Block User
                                            </button>
                                          )}
                                        {ele.profile &&
                                          !ele.profile.blockedByAdmin && (
                                            <button
                                              className="btn btn-danger"
                                              onClick={(e) => {
                                                BlockUser(
                                                  ele.profile && ele.profile.id,
                                                  true
                                                );
                                              }}
                                            >
                                              Block User
                                            </button>
                                          )}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                            <div style={{ width: "100%" }}>
                              {pageNumber > 1 ? (
                                <>
                                  <a
                                    onClick={(e) => {
                                      fetchData(1, pageSize);
                                    }}
                                    href={pageNumber > 1 && "#"}
                                  >
                                    {"  "}First
                                  </a>
                                  <a
                                    onClick={(e) => {
                                      fetchData(pageNumber - 1, pageSize);
                                    }}
                                    href={pageNumber > 1 && "#"}
                                  >
                                    {"  "}&lt;&lt;{"  "}
                                  </a>
                                </>
                              ) : (
                                <a></a>
                              )}
                              <span>
                                {pageAnchor.map((ele, index) => {
                                  if (ele === pageNumber) {
                                    return (
                                      <>
                                        <span
                                          style={{
                                            fontWeight: "bold",
                                            textDecoration: "underline",
                                          }}
                                        >
                                          {ele}
                                        </span>
                                        {"    "}
                                      </>
                                    );
                                  } else {
                                    return (
                                      <a
                                        onClick={(e) => {
                                          fetchData(ele, pageSize);
                                        }}
                                        href="#"
                                      >
                                        {ele + "    "}
                                      </a>
                                    );
                                  }
                                })}
                              </span>
                              {pageNumber < lastPage ? (
                                <>
                                  <a
                                    onClick={(e) => {
                                      fetchData(pageNumber + 1, pageSize);
                                    }}
                                    href={pageNumber > 1 && "#"}
                                  >
                                    {"  "}&gt;&gt;
                                  </a>
                                  <a
                                    onClick={(e) => {
                                      fetchData(lastPage, pageSize);
                                    }}
                                    href={pageNumber > 1 && "#"}
                                  >
                                    {"  "}Last
                                  </a>
                                </>
                              ) : (
                                <a></a>
                              )}
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
