import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";

import Timeline from "./ProfileDetails/Timeline";
import Analytics from "./ProfileDetails/Analytics";
import Groups from "./ProfileDetails/Groups";
import ShortVideos from "./ProfileDetails/ShortVideos";
import Friends from "./ProfileDetails/Friends";
import Advertise from "./ProfileDetails/Advertise";
import PersonalInfo from "./ProfileDetails/PersonalInfo";
import ChatLog from "./ProfileDetails/ChatLog";
import CallLog from "./ProfileDetails/CallLog";
import TransactionHistory from "./ProfileDetails/TransactionHistory";

import { postData } from "../apicall/apiCall";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import NotificationSystem from "react-notification-system";

export default function ProfileDetails() {
  //var notificationSystem = React.createRef();
  //const { dispatch } = useContext(UserContext);
  const history = useHistory();
  
  const [mainProfile, setProfile] = useState();
  
  


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const payload = { userId: history.location.state.id };
    const resData = await postData("/admin/userProfile", payload);
    console.log("fetchData -> resData", resData.data);
    if (resData) {
      setProfile(resData.data.user);
    }
  }

  return (
    <>
      {/* <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-header row">
            <p style={{ marginLeft: "20px" }}>
              Sorry! Page Under Developement....
            </p>
          </div>
        </div>
      </div> */}
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body">
            <section className="page-users-view">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="col-md-12">
                        <h4>View as a Admin {`>`} Profile Details</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="profile-image-section">
                          {/* <div className="users-view-image" > */}
                            <div style={{display:"flex",justifyContent:"center"}}>
                            <img style={{height:"100px",width:"100px"}}
                              // src="app-assets/images/portrait/small/avatar-s-12.jpg"
                              src={ mainProfile && mainProfile.displayPicture ? mainProfile.displayPicture
                                : "https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-518740753.jpg" }
                              className="influ-profile-pic"
                              alt="avatar"
                            />
                            {/* <i className="correct-img fa fa-check"></i> */}
                          </div>
                        </div>
                        <div className="influ-details">
                          <div className="influ-details-header">
                            <h2>
                              {mainProfile && mainProfile.username}{" "}
                              <span style={{ color: "#ffbb01" }}>
                                <i
                                  className="fa fa-star"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <div className="header-btn-area">
                                <div className="head-butn">
                                  {/* <p>{mainProfile && mainProfile.userInterest.rows.map(item => item.topic.topic)}</p> */}

                                  {mainProfile && mainProfile.userInterest.rows.map(item => <div style={{display:"inline-block"}}><p style={{padding:'5px' }}>{item.topic.topic}</p></div>)}

                                  {/* <a href="#">Music</a> */}
                                </div>
                                {/* <div className="head-butn">
                                  <div className=" float-right">
                                    <button
                                      type="button"
                                      className="btn btn-icon btn-icon rounded-circle btn-primary mr-1 waves-effect waves-light"
                                    >
                                      <i className="feather icon-check"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-icon btn-icon rounded-circle btn-primary waves-effect waves-light"
                                    >
                                      <i className="feather icon-user"></i>
                                    </button>
                                    &nbsp;&nbsp;
                                    <button
                                      type="button"
                                      className="btn btn-icon btn-icon rounded-circle btn-primary waves-effect waves-light"
                                    >
                                      <i className="feather icon-plus"></i>
                                    </button>
                                    <br />
                                    <br />
                                    <button
                                      type="button"
                                      className="btn btn-icon btn-icon rounded-circle btn-primary waves-effect waves-light"
                                    >
                                      <i className="fa fa-envelope-o"></i>
                                    </button>
                                    &nbsp;&nbsp;
                                    <button
                                      type="button"
                                      className="btn btn-icon btn-icon rounded-circle btn-primary waves-effect waves-light"
                                    >
                                      <i className="fa fa-ellipsis-h"></i>
                                    </button>
                                  </div>
                                </div> */}
                              </div>
                            </h2>
                            <p>
                              {" "}
                              {mainProfile && mainProfile.firstName}{" "}
                              {mainProfile && mainProfile.lastName}
                            </p>
                          </div>
                          <div className="influ-middle-content">
                            <ul>
                              <li>
                                <a href="#">
                                  <span>
                                    {mainProfile && mainProfile.totalPosts}
                                  </span>{" "}
                                  posts
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span>
                                    {mainProfile && mainProfile.totalFollowers}
                                  </span>{" "}
                                  Following
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span>
                                    {mainProfile && mainProfile.totalFollowings}
                                  </span>{" "}
                                  Followers
                                </a>
                              </li>
                            </ul>
                            <p>
                              {mainProfile && mainProfile.email !== "" && (
                                <p>Email:{mainProfile.email}</p>
                              )}
                              {mainProfile && mainProfile.mobile > 0 && (
                                <p>Mobile:{mainProfile.mobile}</p>
                              )}
                              <p>
                                Bio:{" "}
                                {mainProfile &&
                                  decodeURIComponent(
                                    mainProfile.about.replaceAll("+", " ")
                                  )}
                              </p>
                              {/* <p>Bio: {mainProfile && mainProfile.bio}</p> */}
                            </p>
                          </div>
                          <div className="details-about">
                            <ul>
                              <li>
                                {/* <div className="text-center">
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title=""
                                    data-original-title="With 22.8% growth,Tooltip on bottom"
                                  >
                                    <i className="feather icon-aperture"></i>
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div className="text-center">
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title=""
                                    data-original-title="With 22.8% growth,Tooltip on bottom"
                                  >
                                    <i className="feather icon-award"></i>
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div className="text-center">
                                  <span
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title=""
                                    data-original-title="With 22.8% growth,Tooltip on bottom"
                                  >
                                    <i className="feather icon-settings"></i>
                                  </span>
                                </div> */}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="basic-tabs-components">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card overflow-hidden">
                    <div className="card-content">
                      <div
                        className="card-body"
                        style={{ background: "#f4f7fd" }}
                      >
                        <ul
                          className="nav nav-tabs profile-tab"
                          role="tablist"
                          style={{ background: "#fff" }}
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="media-tab"
                              data-toggle="tab"
                              href="#media"
                              aria-controls="media"
                              role="tab"
                              aria-selected="false"
                            >
                              Timeline
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="analytics-tab"
                              data-toggle="tab"
                              href="#analytics"
                              aria-controls="analytics"
                              role="tab"
                              aria-selected="true"
                            >
                              Analytics
                            </a>
                          </li>
                          {/* <li className="nav-item">
                            <a
                              className="nav-link"
                              id="groups-tab"
                              data-toggle="tab"
                              href="#groups"
                              aria-controls="groups"
                              role="tab"
                              aria-selected="true"
                            >
                              Groups
                            </a>
                          </li> */}
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="sort-videos-tab"
                              data-toggle="tab"
                              href="#sort-videos"
                              aria-controls="sort-videos"
                              role="tab"
                              aria-selected="true"
                            >
                              Short Videos
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="friends-tab"
                              data-toggle="tab"
                              href="#friends"
                              aria-controls="analytics"
                              role="tab"
                              aria-selected="true"
                            >
                              Friends
                            </a>
                          </li>
                          {/* <li className="nav-item">
                            <a
                              className="nav-link"
                              id="advertise-tab"
                              data-toggle="tab"
                              href="#advertise"
                              aria-controls="advertise"
                              role="tab"
                              aria-selected="true"
                            >
                              Advertise
                            </a>
                          </li> */}
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="personal-info-tab"
                              data-toggle="tab"
                              href="#personal-info"
                              aria-controls="personal-info"
                              role="tab"
                              aria-selected="true"
                            >
                              Personal Information
                            </a>
                          </li>
                          {/* <li className="nav-item">
                            <a
                              className="nav-link"
                              id="chatlog-tab"
                              data-toggle="tab"
                              href="#chatlog"
                              aria-controls="chatlog"
                              role="tab"
                              aria-selected="true"
                            >
                              Chat Log
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="call-log-tab"
                              data-toggle="tab"
                              href="#call-log"
                              aria-controls="call-log"
                              role="tab"
                              aria-selected="true"
                            >
                              Call Log
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="transaction-history-tab"
                              data-toggle="tab"
                              href="#transaction-history"
                              aria-controls="transaction-history"
                              role="tab"
                              aria-selected="true"
                            >
                              Transaction History{" "}
                            </a>
                          </li> */}
                        </ul>

                        <div className="tab-content">
                          <Timeline
                            userId={
                              history.location.state &&
                              history.location.state.id
                            }
                          />
                          <Analytics />
                          <Groups />
                          <ShortVideos />
                          <Friends
                            userId={
                              history.location.state &&
                              history.location.state.id
                            }
                          />
                          <Advertise />
                          <PersonalInfo userInfo={mainProfile} />
                          <ChatLog />
                          <CallLog />
                          <TransactionHistory />
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

      <div
        className="modal fade"
        id="creategroup"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Create Group
              </h4>
              <button
                type="button"
                className="close-btn"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Group Name</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                  <label>Choose Image</label>
                  <input type="file" className="" />
                </div>
                <div className="form-group">
                  <label>Choose Privacy</label>
                  <select className="form-control">
                    <option></option>
                    <option>Private</option>
                    <option>Public</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Invite Friends</label>
                  <select
                    className="form-control js-example-basic-multiple"
                    name="states[]"
                    multiple="multiple"
                  >
                    <option></option>
                    <option>Rakesh Paul</option>
                    <option>Akash Goyel</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>

      <Footer />
    </>
  );
}
