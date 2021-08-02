import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { postData } from "../apicall/apiCall";
import moment from "moment";
import NotificationSystem from "react-notification-system";

import { Link } from "react-router-dom";

export default function ManageReportSubComment() {
  var notificationSystem = React.createRef();
  const [subComment, setSubComment] = useState([]);
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
      reportType: "comment",
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

      setSubComment(resData.data.rows);
    }
    console.log("Sub-comment report ->", resData);
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
      console.log(resData.ele);
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
                      <Link to="/">Reports</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Manage Report Sub-comments
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
                        <h4 className="card-title">
                          Manage Report Sub-comments
                        </h4>
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
                            {/* <div className="col-12 col-sm-8 col-md-6 mtop-r1">
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
                            </div> */}
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
                                  <th data-field="type" data-editable="true">
                                    Type
                                  </th>
                                  <th data-field="comment" data-editable="true">
                                    Comment
                                  </th>
                                  <th
                                    data-field="sub-comment"
                                    data-editable="true"
                                  >
                                    Sub-comment
                                  </th>
                                  <th data-field="text" data-editable="true">
                                    Reported text
                                  </th>
                                  <th data-field="time" data-editable="true">
                                    Time
                                  </th>
                                  <th data-field="action">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {subComment.map((ele, index) => {
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
                                        {ele.user.username}
                                      </td>
                                      <td>{ele.reportType}</td>
                                      <td>{ele.postComment.comment}</td>
                                      <td>{ele.postComment.subCommentId}</td>

                                      <td>{ele.reportText}</td>
                                      <td>
                                        {moment(ele.createdAt).format(
                                          "DD-MM-YY hh:mmA"
                                        )}
                                      </td>
                                      <td>
                                        {ele.user && ele.user.blockedByAdmin && (
                                          <button
                                            className="btn btn-primary"
                                            onClick={(e) => {
                                              BlockUser(
                                                ele.user && ele.user.id,
                                                false
                                              );
                                            }}
                                          >
                                            Un-Block User
                                          </button>
                                        )}
                                        {ele.user && !ele.user.blockedByAdmin && (
                                          <button
                                            className="btn btn-danger"
                                            onClick={(e) => {
                                              BlockUser(
                                                ele.user && ele.user.id,
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
