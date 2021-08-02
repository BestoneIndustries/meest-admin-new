import React, { useEffect, useContext, useState } from "react";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";
import { postData, postDataAll } from '../../apicall/apiCall';
import ReactPlayer from 'react-player'

import { useHistory } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';



export default function Analytics() {

  var notificationSystem = React.createRef();
  const [tableData, setTableData] = useState([]);

  const { dispatch } = useContext(UserContext);

  const history = useHistory();
  const [countLastFollowing, setLastDaysFollowing] = useState("");
  const [countLastFollower, setLastDaysFollower] = useState("");
  const [totalLikes, setLTotalLikes] = useState("");
  const [postCount, setTotalPstCount] = useState("");
  const [commentCount, setComments] = useState("");
  const [profileCount, setProfileView] = useState("");
  const [likes, setLikes] = useState("")
  const [commentsone, setCommentsOne] = useState("")
  const [trending, setTrending] = useState("")
  // const [postCount, setTotalPstCount] = useState("");
  // const [postCount, setTotalPstCount] = useState("");
  // const [postCount, setTotalPstCount] = useState("");
  // const [postCount, setTotalPstCount] = useState("");
  // const [postCount, setTotalPstCount] = useState("");
  // const [postCount, setTotalPstCount] = useState("");



  useEffect(() => {
    fetchData();
    fetchFollowersData();
    getLikes();
    geetPostCount();
    getComments();
    getProfileView();
    getLikesOne();
    getCommentOne();
    getTrending();
  }, [])

  async function fetchData() {
    if (history.location.state) {
      const { data } = await postData('/post/lastDays/followings', { "userId": history.location.state.id });
      console.log("Dataa---- ", data);
      if (data) {
        setLastDaysFollowing(data.count);
      }
    }
  }

  async function fetchFollowersData() {

    if (history.location.state) {
      const { data } = await postData('/post/lastDays/followers', { "userId": history.location.state.id });
      console.log("Data+++ ", data);
      if (data) {
        setLastDaysFollower(data.count);
      }
    }
  }

  async function getLikes() {
    if (history.location.state) {
      const { data } = await postData('/post/lastDays/totalLikes', { "userId": history.location.state.id });
      console.log("Data/// ", data);
      if (data) {
        setLTotalLikes(data.count);
      }
    }
  }

  async function geetPostCount() {
    if (history.location.state) {
      const { data } = await postData('/post/lastDays/count', { "userId": history.location.state.id });
      console.log("Data???? ", data);
      if (data) {
        setTotalPstCount(data.count);
      }
    }
  }

  async function getComments() {
    if (history.location.state) {
      const { data } = await postData('/post/lastDays/totalComments', { "userId": history.location.state.id });
      console.log("Data111 ", data);
      if (data) {
        setComments(data.count);
      }
    }
  }
  async function getProfileView() {
    if (history.location.state) {
      const { data } = await postData('/post/lastDays/totalProfileViews', { "userId": history.location.state.id });
      console.log("Dataa222 ", data);
      if (data) {
        setProfileView(data.count);
      }
    }
  }
  debugger;
  async function getLikesOne() {
    if (history.location.state) {
      const { data } = await postData('/admin/user/four/topPost', { "userId": history.location.state.id });
      console.log("Data333 ", data);
      if (data) {
        setLikes(data);
      }
    }
  }
  async function getCommentOne() {
    if (history.location.state) {
      const { data } = await postData('/admin/user/four/topPostComments', { "userId": history.location.state.id });
      console.log("Data444 ", data);
      if (data) {
        setCommentsOne(data);
      }
    }
  }
  async function getTrending() {
    if (history.location.state) {
      const { data } = await postData('/admin/user/four/topPostEngaging', { "userId": history.location.state.id });
      console.log("Data555 ", data);
      if (data) {
        setTrending(data);
      }
    }
  }
  return (
    <>
      <div
        className="tab-pane "
        id="analytics"
        aria-labelledby="analytics-tab"
        role="tabpanel"
      >
        <div className="row">
          <div className="col-md-6 col-12">
            <h4>Meest Stats Overview</h4>
          </div>
          {/* <div className="col-md-6 col-12" style={{ textAlign: "right" }}>
            <a href="#">Export Data</a>
          </div> */}
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <div className="card-header" style={{ padding: "1rem" }}>
                <div className="col-9 ml-0">
                  <p className="mb-1">Media Post (Last 30 days)</p>
                </div>
                <div className="col-3 mr-0">
                  <div className="avatar bg-rgba-danger p-50 m-0">
                    <div className="avatar-content">
                      <i className="feather icon-camera text-danger font-medium-5"></i>
                    </div>
                  </div>
                </div>
                <h2 className="text-bold-700 mb-25">{postCount}</h2>
                <br />
                <p className="mb-1 mt-1" style={{ width: "100%" }}>
                  <span style={{ color: "red" }}>{postCount}% </span>
                  less post than usual
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <div className="card-header" style={{ padding: "1rem" }}>
                <div className="col-9 ml-0">
                  <p className="mb-1">Followers (Last 30 days)</p>
                </div>
                <div className="col-3 mr-0">
                  <div className="avatar bg-rgba-warning p-50 m-0">
                    <div className="avatar-content">
                      <i className="feather icon-users text-warning font-medium-5"></i>
                    </div>
                  </div>
                </div>
                <h2 className="text-bold-700 mb-25">{countLastFollower}</h2>
                <p className="mb-1 mt-1" style={{ width: "100%" }}>
                  <span style={{ color: "#290856" }}>+{countLastFollower}% </span>
                  Followers Growth
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <div className="card-header" style={{ padding: "1rem" }}>
                <div className="col-9 ml-0">
                  <p className="mb-1">Following (Last 30 days)</p>
                </div>
                <div className="col-3 mr-0">
                  <div className="avatar bg-rgba-primary p-50 m-0">
                    <div className="avatar-content">
                      <i className="feather icon-user-plus text-primary font-medium-5"></i>
                    </div>
                  </div>
                </div>
                <h2 className="text-bold-700 mb-25">{countLastFollowing}</h2>
                <p className="mb-1 mt-1" style={{ width: "100%" }}>
                  <span style={{ color: "#290856" }}>+{countLastFollowing}% </span>
                  following growth
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <div className="card-header" style={{ padding: "1rem" }}>
                <div className="col-9 ml-0">
                  <p className="mb-1">Total Likes (30 days)</p>
                </div>
                <div className="col-3 mr-0">
                  <div className="avatar bg-rgba-danger p-50 m-0">
                    <div className="avatar-content">
                      <i className="feather icon-heart text-danger font-medium-5"></i>
                    </div>
                  </div>
                </div>
                <h2 className="text-bold-700 mb-25">{totalLikes || 0}</h2>
                <br />
                <p className="mb-1 mt-1" style={{ width: "100%" }}>
                  <span style={{ color: "red" }}>{totalLikes || 0}% </span>
                  less post than usual
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <div className="card-header" style={{ padding: "1rem" }}>
                <div className="col-9 ml-0">
                  <p className="mb-1">Total Comments (30 days)</p>
                </div>
                <div className="col-3 mr-0">
                  <div className="avatar bg-rgba-warning p-50 m-0">
                    <div className="avatar-content">
                      <i className="feather icon-message-circle text-warning font-medium-5"></i>
                    </div>
                  </div>
                </div>
                <h2 className="text-bold-700 mb-25">{commentCount || 0}</h2>
                <p className="mb-1 mt-1" style={{ width: "80%" }}>
                  <span style={{ color: "#290856" }}>{commentCount || 0}% </span>
                  more comments
                </p>
                <div
                  id="tooltip-positions"
                  className="text-center"
                  style={{ width: "20%" }}
                >
                  <span
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Tooltip on bottom"
                  >
                    <i className="feather icon-slack"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <div className="card-header" style={{ padding: "1rem" }}>
                <div className="col-9 ml-0">
                  <p className="mb-1">Profile View (30 days)</p>
                </div>
                <div className="col-3 mr-0">
                  <div className="avatar bg-rgba-primary p-50 m-0">
                    <div className="avatar-content">
                      <i className="feather icon-user-plus text-primary font-medium-5"></i>
                    </div>
                  </div>
                </div>
                <h2 className="text-bold-700 mb-25">{profileCount || 0}</h2>
                <p className="mb-1 mt-1" style={{ width: "100%" }}>
                  <span style={{ color: "#290856" }}>{profileCount || 0}% </span>
                  more profile view
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          {/* <div className="col-md-6 col-12">
            <div className="card" style={{ padding: "1.05rem" }}>
              <div className="card-header">
                <h4 className="card-title">
                  Post Density<small>Last 30 days</small>
                </h4>
              </div>
              <div className="card-content">
                <div className="card-body" style={{ overflow: "scroll" }}>
                  <div
                    id="bar-chart"
                    className="height-400"
                    style={{
                      userSelect: "none",
                      position: "relative",
                    }}
                    _echarts_instance_="ec_1596211518396"
                  >
                    <div
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "985px",
                        height: "400px",
                        padding: "0px",
                        margin: "0px",
                        borderWidth: "0px",
                        cursor: "pointer",
                      }}
                    >
                      <canvas
                        style={{
                          position: "absolute",
                          left: "0px",
                          top: "0px",
                          width: "985px",
                          height: "400px",
                          userSelect: "none",
                          padding: "0px",
                          margin: "0px",
                          borderWidth: "0px",
                        }}
                        data-zr-dom-id="zr_0"
                        width="985"
                        height="400"
                      ></canvas>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-6 col-12">
            <div className="card">
              <div className="card-header">
                <h4>Latest Photos</h4>
              </div>
              <div className="card-body">
                 <div className="row">
                  <div className="col-md-4 col-6 user-latest-img">
                    <img
                      src="/app-assets/images/profile/user-uploads/user-01.jpg"
                      className="img-fluid mb-1 rounded-sm"
                      alt="avtar img holder"
                    />
                  </div>
                  <div className="col-md-4 col-6 user-latest-img">
                    <img
                      src="/app-assets/images/profile/user-uploads/user-02.jpg"
                      className="img-fluid mb-1 rounded-sm"
                      alt="avtar img holder"
                    />
                  </div>
                  <div className="col-md-4 col-6 user-latest-img">
                    <img
                      src="/app-assets/images/profile/user-uploads/user-03.jpg"
                      className="img-fluid mb-1 rounded-sm"
                      alt="avtar img holder"
                    />
                  </div>
                  <div className="col-md-4 col-6 user-latest-img">
                    <img
                      src="/app-assets/images/profile/user-uploads/user-04.jpg"
                      className="img-fluid mb-1 rounded-sm"
                      alt="avtar img holder"
                    />
                  </div>
                  <div className="col-md-4 col-6 user-latest-img">
                    <img
                      src="/app-assets/images/profile/user-uploads/user-05.jpg"
                      className="img-fluid mb-1 rounded-sm"
                      alt="avtar img holder"
                    />
                  </div>
                  <div className="col-md-4 col-6 user-latest-img">
                    <img
                      src="/app-assets/images/profile/user-uploads/user-06.jpg"
                      className="img-fluid mb-1 rounded-sm"
                      alt="avtar img holder"
                    />
                  </div>
                  <div className="col-md-4 col-6 user-latest-img">
                    <img
                      src="/app-assets/images/profile/user-uploads/user-07.jpg"
                      className="img-fluid mb-1 rounded-sm"
                      alt="avtar img holder"
                    />
                  </div>
                  <div className="col-md-4 col-6 user-latest-img">
                    <img
                      src="/app-assets/images/profile/user-uploads/user-08.jpg"
                      className="img-fluid mb-1 rounded-sm"
                      alt="avtar img holder"
                    />
                  </div>
                  <div className="col-md-4 col-6 user-latest-img">
                    <img
                      src="/app-assets/images/profile/user-uploads/user-09.jpg"
                      className="img-fluid mb-1 rounded-sm"
                      alt="avtar img holder"
                    />
                  </div>
                </div>
              
              </div>
            </div>
          </div> */}
        </div>
        {/* <section id="dashboard-analytics">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="card">
                <div className="card-header align-items-start pb-0">
                  <div className="col-12">
                    <h4>Avg. Post Per Day</h4>
                    <br />
                    <h2 className="text-bold-700 mb-25">0</h2>
                    <p className="mb-1">- no. movement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 ml-0">
              <div className="card">
                <div className="card-header align-items-start pb-0">
                  <div className="col-12">
                    <h4>Avg. Comments Per Day</h4>
                    <h2 className="text-bold-700 mb-25">0</h2>
                    <p className="mb-1">0% comment growth</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 ml-0">
              <div className="card">
                <div className="card-header align-items-start pb-0">
                  <div className="col-12">
                    <h4>Avg. Engagment Day</h4>
                    <br />
                    <h2 className="text-bold-700 mb-25">0%</h2>
                    <p className="mb-1">0% engagment loss</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 ml-0">
              <div className="card">
                <div className="card-header align-items-start pb-0">
                  <div className="col-12">
                    <h4>Avg. Likes Per Day</h4>
                    <br />
                    <h2 className="text-bold-700 mb-25">0</h2>
                    <p className="mb-1">0% like growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section id="chartjs-charts" className="mt-2">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">
                    Posting habits <small>Last 30Days</small>
                  </h4>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div className="height-300">
                      <div className="chartjs-size-monitor">
                        <div className="chartjs-size-monitor-expand">
                          <div className=""></div>
                        </div>
                        <div className="chartjs-size-monitor-shrink">
                          <div className=""></div>
                        </div>
                      </div>
                      <canvas
                        id="scatter-chart"
                        style={{
                          display: "block",
                          width: "985px",
                          height: "300px",
                        }}
                        width="985"
                        height="300"
                        className="chartjs-render-monitor"
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section id="dashboard-analytics">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <div className="col-12 mr-0">
                    <div className="avatar bg-rgba-primary p-50 m-0 mt-2">
                      <div className="avatar-content">
                        <i className="feather icon-calendar text-primary font-medium-5"></i>
                      </div>
                    </div>
                    <br />
                    <h2 className="text-bold-700 mt-2 mb-25">Monday</h2>
                    <p className="mb-1">Best day to post</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <div className="col-12 mr-0">
                    <div className="avatar bg-rgba-warning p-50 m-0 mt-2">
                      <div className="avatar-content">
                        <i className="feather icon-hash text-warning font-medium-5"></i>
                      </div>
                    </div>
                    <br />
                    <h2 className="text-bold-700 mt-2 mb-25">#music</h2>
                    <p className="mb-1">Most Used Hashtag</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card">
                <div style={{ textAlign: "center" }}>
                  <div className="col-12 mr-0">
                    <div className="avatar bg-rgba-primary p-50 m-0 mt-2">
                      <div className="avatar-content">
                        <i className="feather icon-aperture text-primary font-medium-5"></i>
                      </div>
                    </div>
                    <br />
                    <h2 className="text-bold-700 mt-2 mb-25">Normal</h2>
                    <p className="mb-1">Filter used to most</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <div className="row">
          <div className="col-md-6 col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  Filter Uses<small>Last 30 days</small>
                </h4>
              </div>
              <div className="card-content">
                <div className="card-body">
                  <div
                    id="bar-chart"
                    className="height-400"
                    style={{
                      userSelect: "none",
                      position: "relative",
                    }}
                    _echarts_instance_="ec_1596214462273"
                  >
                    <div
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "437px",
                        height: "400px",
                        padding: "0px",
                        margin: "0px",
                        borderWidth: "0px",
                        cursor: "pointer",
                      }}
                    >
                      <canvas
                        style={{
                          position: "absolute",
                          left: "0px",
                          top: "0px",
                          width: "437px",
                          height: "400px",
                          userSelect: "none",
                          padding: "0px",
                          margin: "0px",
                          borderWidth: "0px",
                        }}
                        data-zr-dom-id="zr_0"
                        width="437"
                        height="400"
                      ></canvas>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col-12">
            <h3>Best posts</h3>
            <p>So what are the most liked and talkedabout posts</p>
          </div>
          <div className="col-lg-4 col-12">
            <div className="card">
              <div className="card-body">
                {
                  likes.length ? <div>
                    <div className="d-flex justify-content-start align-items-center mb-1">
                      <div className="user-page-info">
                        <h4 className="mb-0">Most Liked Posts</h4>
                        <br />
                        <h2>
                          <i className="fa fa-heart text-danger"></i> 17.2K
                        </h2>
                      </div>
                    </div>
                    {
                      likes.length ? likes && likes[0]?.posts[0].image == 1 ? <img
                        src={likes && likes[0]?.posts[0].post}
                        className="img-fluid card-img-top rounded-sm mb-2"
                        alt="avtar img holder"
                      /> : <ReactPlayer width="100%" height="200px" url={likes && likes[0]?.posts[0].post} controls={true} />
                        : 'Data not found this user'}
                    <div className="d-flex justify-content-start align-items-center mb-1">
                      <div className="col-md-4 col-4 user-latest-img">
                        {likes && likes[1]?.posts[0].image == 1 ? <img
                          src={likes && likes[1]?.posts[0].post}
                          className="img-fluid mb-1 rounded-sm"
                          alt="avtar img holder"
                        /> : <ReactPlayer width="100%" height="200px" url={likes && likes[1]?.posts[0].post} controls={true} />
                        }

                      </div>
                      <div className="col-md-4 col-4 user-latest-img">
                        {likes && likes[2]?.posts[0].image == 1 ? <img
                          src={likes && likes[2]?.posts[0].post}
                          className="img-fluid mb-1 rounded-sm"
                          alt="avtar img holder"
                        /> : <ReactPlayer width="100%" height="200px" url={likes && likes[2]?.posts[0].post} controls={true} />
                        }

                      </div>
                      <div className="col-md-4 col-4 user-latest-img">
                        {likes && likes[3]?.posts[0].image == 1 ? <img
                          src={likes && likes[3]?.posts[0].post}
                          className="img-fluid mb-1 rounded-sm"
                          alt="avtar img holder"
                        /> : <ReactPlayer width="100%" height="200px" url={likes && likes[3]?.posts[0].post} controls={true} />
                        }

                      </div>
                    </div>
                  </div> : "Data not found for this user"
                }
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="card">
              <div className="card-body">
                {
                  commentsone.length ? <div>
                    <div className="d-flex justify-content-start align-items-center mb-1">
                      <div className="user-page-info">
                        <h4 className="mb-0">Most Commented Posts</h4>
                        <br />
                        <h2>
                          <i className="fa fa-heart text-danger"></i> 1.2K
                        </h2>
                      </div>
                    </div>
                    {commentsone && commentsone[0]?.posts[0].image == 1 ? <img
                      src={commentsone && commentsone[0]?.posts[0].post}
                      className="img-fluid card-img-top rounded-sm mb-2"
                      alt="avtar img holder"
                    /> : <ReactPlayer width="100%" height="200px" url={commentsone && commentsone[0]?.posts[0].post} controls={true} />
                    }
                    <div className="d-flex justify-content-start align-items-center mb-1">
                      <div className="col-md-4 col-4 user-latest-img">
                        {commentsone && commentsone[1]?.posts[0].image == 1 ? <img
                          src={commentsone && commentsone[1]?.posts[0].post}
                          className="img-fluid mb-1 rounded-sm"
                          alt="avtar img holder"
                        /> : <ReactPlayer width="100%" height="200px" url={commentsone && commentsone[1]?.posts[0].post} controls={true} />
                        }

                      </div>
                      <div className="col-md-4 col-4 user-latest-img">
                        {commentsone && commentsone[2]?.posts[0].image == 1 ? <img
                          src={commentsone && commentsone[2]?.posts[0].post}
                          className="img-fluid mb-1 rounded-sm"
                          alt="avtar img holder"
                        /> : <ReactPlayer width="100%" height="200px" url={commentsone && commentsone[2]?.posts[0].post} controls={true} />
                        }
                      </div>
                      <div className="col-md-4 col-4 user-latest-img">
                        {commentsone && commentsone[3]?.posts[0].image == 1 ? <img
                          src={commentsone && commentsone[3]?.posts[0].post}
                          className="img-fluid mb-1 rounded-sm"
                          alt="avtar img holder"
                        /> : <ReactPlayer width="100%" height="200px" url={commentsone && commentsone[3]?.posts[0].post} controls={true} />
                        }
                      </div>
                    </div>
                  </div> : "Data not found for this user"
                }
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="card">
              <div className="card-body">
                {
                  trending.length ? <div>
                    <div className="d-flex justify-content-start align-items-center mb-1">
                      <div className="user-page-info">
                        <h4 className="mb-0">Most Engaging Posts</h4>
                        <br />
                        <h2>
                          <i className="fa fa-heart text-danger"></i> 41.8%
                        </h2>
                      </div>
                    </div>
                    {trending && trending[0]?.posts[0].image == 1 ? <img
                      src={trending && trending[0]?.posts[0].post}
                      className="img-fluid card-img-top rounded-sm mb-2"
                      alt="avtar img holder"
                    /> : <ReactPlayer width="100%" height="200px" url={trending && trending[0]?.posts[0].post} controls={true} />
                    }
                    <div className="d-flex justify-content-start align-items-center mb-1">
                      <div className="col-md-4 col-4 user-latest-img">
                        {trending && trending[1]?.posts[0].image == 1 ? <img
                          src={trending && trending[1]?.posts[0].post}
                          className="img-fluid mb-1 rounded-sm"
                          alt="avtar img holder"
                        /> : <ReactPlayer width="100%" height="200px" url={trending && trending[1]?.posts[0].post} controls={true} />
                        }
                      </div>
                      <div className="col-md-4 col-4 user-latest-img">
                        {trending && trending[2]?.posts[0].image == 1 ? <img
                          src={trending && trending[2]?.posts[0].post}
                          className="img-fluid mb-1 rounded-sm"
                          alt="avtar img holder"
                        /> : <ReactPlayer width="100%" height="200px" url={trending && trending[2]?.posts[0].post} controls={true} />
                        }
                      </div>
                      <div className="col-md-4 col-4 user-latest-img">
                        {trending && trending[3]?.posts[0].image == 1 ? <img
                          src={trending && trending[3]?.posts[0].post}
                          className="img-fluid mb-1 rounded-sm"
                          alt="avtar img holder"
                        /> : <ReactPlayer width="100%" height="200px" url={trending && trending[3]?.posts[0].post} controls={true} />
                        }
                      </div>
                    </div>
                  </div> : "Data not found for this user"
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
