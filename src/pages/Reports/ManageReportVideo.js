import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { postData } from "../apicall/apiCall";
import moment from "moment";
import NotificationSystem from "react-notification-system";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";
//import { url } from "../apiUrl";

export default function ManageReport() {
  var notificationSystem = React.createRef();
  const [videosReport, setVideosReport] = useState([]);
  const [videoURL, setVideoURL] = useState("");
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
      reportType: "video",
      status: true
    };
    const resData = await postData("/report/getReportsByType", body);

    if (resData) {
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
      setVideosReport(resData.data.rows);
    }
    console.log("Video Report ->", resData);
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

  function canPlay(url) {
    setVideoURL(url);
  }

  // function canPlay(url) {
   
  //    url.posts.map((item, index) => {
    
  //    // 
  //   // var data = item[1];
  //     if(item.video){
  //      setVideoURL(item.post);
  //       console.log('checkPostUrl', item)
  //     }else{
  //      alert('video not found');
  //      setVideoURL("")
        
  //     }
    

  //    })
   
  //  // 
  // }
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
                                  <th data-field="link" data-editable="true">
                                    Link
                                  </th>
                                  <th data-field="report" data-editable="true">
                                    User
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
                                {videosReport.map((ele, index) => {
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
                                      <td>
                                        <a
                                          href="#"
                                          data-toggle="modal"
                                          data-target="#videos"
                                          onClick={() =>
                                            canPlay(ele.video.videoURL)
                                          }
                                        >
                                          <i
                                            className="fa fa-video-camera"
                                            aria-hidden="true"
                                          ></i>
                                        </a>
                                         {/* <a
                                      href={post.posts[0].post}
                                      data-lightbox="post-article-gallery"
                                      data-title=""
                                      className="link-preview"
                                      title="VIDEO"
                                    >
                                      <video
                                        width="160"
                                        height="120"
                                        controls
                                        autoplay
                                      >
                                        <source
                                          src={post.posts[0].post}
                                          type="video/mp4"
                                        />
                                      </video>{" "}
                                    </a> */}
                                      </td>
                                      <td>
                                        <img
                                          className="setting-avatar"
                                          src={
                                            ele &&
                                            ele.user.displayPicture
                                          }
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
                                      <td>{ele.reportText}</td>
                                      <td>
                                        {moment(ele.createdAt).format(
                                          "DD-MM-YY hh:mmA"
                                        )}
                                      </td>
                                      <td>
                                        {ele &&
                                          ele.user.blockedByAdmin && (
                                            <button
                                              className="btn btn-primary"
                                              onClick={(e) => {
                                                BlockUser(
                                                  ele &&
                                                    ele.user.id,
                                                  false
                                                );
                                              }}
                                            >
                                              Un-Block User
                                            </button>
                                          )}
                                        {ele &&
                                          !ele.user.blockedByAdmin && (
                                            <button
                                              className="btn btn-danger"
                                              onClick={(e) => {
                                                BlockUser(
                                                  ele &&
                                                    ele.user.id,
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
                                {/* Showing Page
                                 {pageNumber}  */}
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
        className="modal fade"
        id="videos"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle"></h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="video-player" id="plyr-video-player">
                {/* <iframe
                  width="100%"
                  height="300"
                  src={videoURL}
                  allowfullscreen
                  allow="autoplay"
                ></iframe> */}
                <ReactPlayer
                  width="100%"
                  height="237px"
                  wrapper="div"
                  url={videoURL}
                  playing={true}
                  stopOnUnmount={true}
                  controls={true}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Reject
              </button>
              <button type="button" className="btn btn-primary">
                Approve
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
