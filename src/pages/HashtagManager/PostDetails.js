import React, { useEffect, useContext, useState } from "react";
import { postData } from "../apicall/apiCall";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Footer from "../../components/Footer";

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import NotificationSystem from "react-notification-system";
// import * as moment from "moment";

import { Link } from "react-router-dom";

export default function PostDetails({ userId, userIdTwo }) {
  console.log("Timeline -> userId", userId);
  //const { dispatch } = useContext(UserContext);

  //let history = useHistory();
  let userIds = localStorage.getItem("newId")
  // let userIdss = localStorage.getItem("newIds")
  const [response, setResponse] = useState();
  const [postId, setPostId] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  // localStorage.setItem("newId",history.location.state.id )
  // const [useroneId, setUserId] = useState("");
  useEffect(() => {

    fetchData(pageNumber, pageSize);
  }, []);

  async function onDeletePost() {
    const { code } = await postData("/post/delete/user/admin/post", {
      // useroneId: useroneId,
      postId: postId
    });
    console.log("delete post", code)
    if (code === 1) {
      fetchData(pageNumber, pageSize)
    }
  }
  async function fetchData(pgNum, pgSize) {
    setPageSize(pgSize);
    setPageNumber(pgNum);
    var body = {
      pageNumber: pgNum,
      pageSize: pgSize,
      userId: userIds,
      //history.location.state.id,
    };

    const res = await postData("/post/by/userId", body)

    console.log("data:- ", res);
    if (res) {
      setResponse(res.data.rows);
    }
  }
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
                      <Link to="/Manage-Users">Manage Users</Link>
                    </li>
                    <li className="breadcrumb-item active">Post Details</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row" id="table-hover-row">
                {response &&
                  response.map((ele, index) => {
                    return (
                      <div className="col-lg-6 col-12">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-start align-items-center mb-1">
                              <div className="avatar mr-1">
                                <img
                                  src={ele.user.displayPicture}
                                  alt="avtar img holder"
                                  width="45"
                                  height="45"
                                />
                              </div>
                              <div>
                                {index + 1 + pageSize * (pageNumber - 1)}
                              </div>
                              <div className="user-page-info">
                                <p className="mb-0">
                                  {ele.user.firstName} {ele.user.lastName}
                                </p>
                                <span className="font-small-2">
                                  {ele.createdAt}
                                </span>
                              </div>
                              <div className="ml-auto user-like text-danger">
                                <i className="fa fa-heart"></i>
                              </div>
                              <div className="ml-auto user-like text-danger">
                                <a href = "" className="dropdown-item"
                                  data-toggle="modal"
                                  data-target="#default1"
                                  onClick={() => (

                                    setPostId(ele.id)
                                  )}><button className="btn btn-danger"  ><i className="feather icon-trash"></i></button></a>
                              </div>
                            </div>
                            <p>{ele.caption}</p>
                            {ele.posts &&
                              ele.posts.map((element, ind) => {
                                return (
                                  ind === 0 && (
                                    <img
                                      className="img-fluid card-img-top rounded-sm mb-2"
                                      src={element.post}
                                      alt="avtar img holder"
                                    />
                                  )
                                );
                              })}
                            <div className="d-flex justify-content-start align-items-center mb-1">
                              <div className="d-flex align-items-center">
                                <i className="feather icon-heart font-medium-2 mr-50"></i>
                                <span>{ele.likeCounts}</span>
                              </div>
                              <div className="ml-2">
                                <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                  {ele.postLikes &&
                                    ele.postLikes
                                      .slice(0, 5)
                                      .map((postLike) => {
                                        return (
                                          <li
                                            data-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-placement="bottom"
                                            data-original-title={
                                              postLike.user.username
                                            }
                                            className="avatar pull-up"
                                          >
                                            <img
                                              className="media-object rounded-circle"
                                              src={postLike.user.displayPicture}
                                              alt="Avatar"
                                              width="30"
                                              height="30"
                                            />
                                          </li>
                                        );
                                      })}
                                  <li className="d-inline-block pl-50">
                                    {ele.postLikes.length - 5 > 0 && (
                                      <span>
                                        +{ele.postLikes.length - 5} more
                                      </span>
                                    )}
                                  </li>
                                </ul>
                              </div>
                              <p className="ml-auto d-flex align-items-center">
                                <i className="feather icon-message-square font-medium-2 mr-50"></i>
                                {ele.commentCounts}
                              </p>
                            </div>
                            {ele.postComments &&
                              ele.postComments.slice(0, 2).map((postcommet) => {
                                return (
                                  <div className="d-flex justify-content-start align-items-center mb-1">
                                    <div className="avatar mr-50">
                                      <img
                                        src={postcommet.user.displayPicture}
                                        alt="Avatar"
                                        width="30"
                                        height="30"
                                      />
                                    </div>
                                    <div className="user-page-info">
                                      <h6 className="mb-0">
                                        {postcommet.user.firstName}{" "}
                                        {postcommet.user.lastName}
                                      </h6>
                                      <span className="font-small-2">
                                        {postcommet.comment}
                                      </span>
                                    </div>
                                    <div className="ml-auto cursor-pointer">
                                      <i className="feather icon-heart mr-50"></i>
                                      <i className="feather icon-message-square"></i>

                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>
            <div style={{ width: "100%" }}>
              {pageNumber > 1 ? (
                <a
                  onClick={(e) => {
                    fetchData(pageNumber - 1, pageSize)
                  }}
                  href={pageNumber > 1 && "#"}
                >
                  {"  "}&lt;&lt;
                </a>
              ) : (
                <a href = ""></a>
              )}
              <span> Showing Page {pageNumber} </span>
              {response ? (
                <a
                  onClick={(e) => {
                    fetchData(pageNumber + 1, pageSize);
                  }}
                  href={pageNumber > 1 && "#"}
                >
                  {"  "}&gt;&gt;
                </a>
              ) : (
                <a href = "" ></a>
              )}
            </div>
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
              Are you sure you want to delete the user's post?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
                onClick={() => onDeletePost()}
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
