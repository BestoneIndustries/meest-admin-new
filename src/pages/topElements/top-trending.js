import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

import { postData } from "../apicall/apiCall";
// import { useHistory } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import NotificationSystem from "react-notification-system";
// import * as moment from "moment";

export default function TopTrending() {
  //var notificationSystem = React.createRef();
  const [postsData, setPostsData] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [peopleData, setPeopleData] = useState([]);
  const [hashtagData, setHeshtagData] = useState([]);
  const [videoURL, setVideoURL] = useState("");
  const [loading, setLoading] = useState();

  async function openTab(url) {
    const body = {
      lat: 28.545725,
      long: 77.3296905,
    };
    const resData = await postData("/trending/get/" + url, body);
    console.log("fetchData -> resData", resData);

    if (resData) {
      if (url === "trendingPosts") {
        setPostsData(resData.data);
      }

      if (url === "trendingVideos") {
        setVideoData(resData.data.rows);
      }
    }
  }
  async function openTrend(url) {
    const body = {
      key: "days",
      value: 7,
    };
    const resData = await postData("/trending/get/" + url, body);
    console.log("fetchData -> resDatatrend", resData);

    if (resData) {
      if (url === "trendingImages") {
        setImageData(resData.data.rows);
      }
      if (url === "trendingPeoples") {
        setPeopleData(resData.data);
      }
      if (url === "trendingHashtgs") {
        setHeshtagData(resData.data);
      }
    }
  }

  function canPlay(url) {
    setVideoURL(url);
  }
  useEffect(() => {
    openTab("trendingPosts");
    openTrend("trendingImages");
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
                      <Link to="/">Trending </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="content-body">
            <section id="dashboard-analytics">
              <div class="row" id="table-hover-row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            onClick={() => {
                              openTab("trendingPosts");
                            }}
                            id="posts-tab"
                            data-toggle="tab"
                            href="#posts"
                            aria-controls="posts"
                            role="tab"
                            aria-selected="false"
                          >
                            Posts
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            onClick={() => {
                              openTrend("trendingImages");
                            }}
                            id="images-tab"
                            data-toggle="tab"
                            href="#images"
                            aria-controls="images"
                            role="tab"
                            aria-selected="true"
                          >
                            Images
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            onClick={() => {
                              openTab("trendingVideos");
                            }}
                            id="videos-tab"
                            data-toggle="tab"
                            href="#videos"
                            aria-controls="videos"
                            role="tab"
                            aria-selected="true"
                          >
                            Videos
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            onClick={() => {
                              openTrend("trendingPeoples");
                            }}
                            id="peoples-tab"
                            data-toggle="tab"
                            href="#peoples"
                            aria-controls="peoples"
                            role="tab"
                            aria-selected="true"
                          >
                            People
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            onClick={() => {
                              openTrend("trendingHashtgs");
                            }}
                            id="hashtgs-tab"
                            data-toggle="tab"
                            href="#hashtgs"
                            aria-controls="hashtgs"
                            role="tab"
                            aria-selected="true"
                          >
                            Hashtags
                          </a>
                        </li>
                      </ul>
                      <div class="tab-content">
                        <div
                          class="tab-pane  active"
                          id="posts"
                          aria-labelledby="posts-tab"
                          role="tabpanel"
                        >
                          <div
                            id="DataTables_Table_0_wrapper"
                            class="dataTables_wrapper dt-bootstrap4"
                          >
                            <div class="table-responsive">
                              <table
                                class="table table-hover table-bordered mb-0"
                                id="table"
                                role="grid"
                                data-toggle="table"
                                data-pagination="true"
                                data-resizable="true"
                                data-click-to-select="true"
                              >
                                <thead class="thead-light">
                                  <tr>
                                    <th data-field="id">ID</th>
                                    <th
                                      data-field="username"
                                      data-editable="true"
                                    >
                                      Publisher
                                    </th>
                                    <th
                                      data-field="source"
                                      data-editable="true"
                                    >
                                      Post Link
                                    </th>
                                    <th data-field="email" data-editable="true">
                                      Posted
                                    </th>
                                    <th data-field="likes">Likes</th>
                                    <th data-field="views">Views</th>
                                    <th data-field="share">Share</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {loading === "Loading" && (
                                    <tr>
                                      <td>Loading...</td>
                                    </tr>
                                  )}
                                  {postsData &&
                                    postsData.map((ele, index) => {
                                      return (
                                        <tr>
                                          <td>{index + 1}</td>
                                          <td>
                                            <img
                                              class="setting-avatar"
                                              src={ele.thumbnail}
                                            />
                                            {ele.user.username}
                                          </td>
                                          <td>
                                            <Link
                                              to={{
                                                pathname: "/Post-Details",
                                                state: { id: ele.user.id },
                                              }}
                                            >
                                              {" "}
                                              Open Posts
                                            </Link>
                                          </td>
                                          <td>{ele.createdAt}</td>
                                          <td>{ele.likeCounts}</td>
                                          <td>{ele.views}</td>
                                          <td>{ele.shareCount}</td>
                                        </tr>
                                      );
                                    })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane "
                          id="images"
                          aria-labelledby="images-tab"
                          role="tabpanel"
                        >
                          <div
                            id="DataTables_Table_0_wrapper"
                            class="dataTables_wrapper dt-bootstrap4"
                          >
                            <div class="table-responsive">
                              <table
                                class="table table-hover table-bordered mb-0"
                                id="table"
                                role="grid"
                                data-toggle="table"
                                data-pagination="true"
                                data-resizable="true"
                                data-click-to-select="true"
                              >
                                <thead class="thead-light">
                                  <tr>
                                    <th data-field="id">ID</th>
                                    <th
                                      data-field="username"
                                      data-editable="true"
                                    >
                                      Publisher
                                    </th>
                                    <th
                                      data-field="source"
                                      data-editable="true"
                                    >
                                      Image Link
                                    </th>
                                    <th data-field="email" data-editable="true">
                                      Posted
                                    </th>
                                    <th data-field="likes">Likes</th>
                                    <th data-field="views">Views</th>
                                    <th data-field="share">Share</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {loading === "Loading" && (
                                    <tr>
                                      <td>Loading...</td>
                                    </tr>
                                  )}
                                  {imageData &&
                                    imageData.map((ele, index) => {
                                      return (
                                        <tr>
                                          <td>{index + 1}</td>
                                          <td>
                                            <img
                                              class="setting-avatar"
                                              src={ele.user.displayPicture}
                                            />
                                            {ele.user.username}
                                          </td>
                                          <td>
                                            <Link
                                              to={{
                                                pathname: "/Post-Details",
                                                state: { id: ele.user.id },
                                              }}
                                            >
                                              {" "}
                                              Open Posts
                                            </Link>
                                          </td>
                                          <td>{ele.createdAt}</td>
                                          <td>{ele.likeCounts}</td>
                                          <td>{ele.views}</td>
                                          <td>{ele.shareCount}</td>
                                        </tr>
                                      );
                                    })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane"
                          id="videos"
                          aria-labelledby="videos-tab"
                          role="tabpanel"
                        >
                          <div
                            id="DataTables_Table_0_wrapper"
                            class="dataTables_wrapper dt-bootstrap4"
                          >
                            <div class="table-responsive">
                              <table
                                class="table table-hover table-bordered mb-0"
                                id="table"
                                role="grid"
                                data-toggle="table"
                                data-pagination="true"
                                data-resizable="true"
                                data-click-to-select="true"
                              >
                                <thead class="thead-light">
                                  <tr>
                                    <th data-field="id">ID</th>
                                    <th
                                      data-field="username"
                                      data-editable="true"
                                    >
                                      Publishers
                                    </th>
                                    <th
                                      data-field="hastag"
                                      data-editable="true"
                                    >
                                      Hastags
                                    </th>
                                    <th
                                      data-field="description"
                                      data-editable="true"
                                    >
                                      Description
                                    </th>
                                    <th data-field="Video" data-editable="true">
                                      Videos
                                    </th>
                                    <th data-field="likes">Likes</th>
                                    <th data-field="views">Views</th>
                                    <th data-field="share">Share</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {loading === "Loading" && (
                                    <tr>
                                      <td>Loading...</td>
                                    </tr>
                                  )}
                                  {videoData &&
                                    videoData.map((ele, index) => {
                                      return (
                                        <tr>
                                          <td>{index + 1}</td>
                                          <td>
                                            <img
                                              class="setting-avatar"
                                              src={ele.user.displayPicture}
                                            />
                                            {ele.user.username}
                                          </td>
                                          <td>{ele.hashtags.join(", ")}</td>
                                          <td>{ele.description}</td>

                                          <td>
                                            <a
                                              href="#"
                                              data-toggle="modal"
                                              data-target="#videosmodal"
                                              onClick={() =>
                                                canPlay(ele.videoURL)
                                              }
                                            >
                                              <i
                                                className="fa fa-video-camera"
                                                aria-hidden="true"
                                              ></i>
                                            </a>
                                          </td>
                                          <td>{ele.likes}</td>
                                          <td>{ele.views}</td>
                                          <td></td>
                                        </tr>
                                      );
                                    })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane"
                          id="peoples"
                          aria-labelledby="peoples-tab"
                          role="tabpanel"
                        >
                          <div
                            id="DataTables_Table_0_wrapper"
                            class="dataTables_wrapper dt-bootstrap4"
                          >
                            <div class="table-responsive">
                              <table
                                class="table table-hover table-bordered mb-0"
                                id="table"
                                role="grid"
                                data-toggle="table"
                                data-pagination="true"
                                data-resizable="true"
                                data-click-to-select="true"
                              >
                                <thead class="thead-light">
                                  <tr>
                                    <th data-field="id">ID</th>
                                    <th
                                      data-field="username"
                                      data-editable="true"
                                    >
                                      Profile
                                    </th>
                                    <th
                                      data-field="source"
                                      data-editable="true"
                                    >
                                      Profile Link
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {loading === "Loading" && (
                                    <tr>
                                      <td>Loading...</td>
                                    </tr>
                                  )}
                                  {peopleData &&
                                    peopleData.map((ele, index) => {
                                      return (
                                        <tr>
                                          <td>{index + 1}</td>
                                          <td>
                                            <img
                                              class="setting-avatar"
                                              src={ele.displayPicture}
                                            />{" "}
                                            {ele.userName}
                                          </td>
                                          <td>
                                            <Link
                                              to={{
                                                pathname: "/Profile-Details",
                                                state: { id: ele.id },
                                              }}
                                            >
                                              {""}Open Profile
                                            </Link>
                                          </td>
                                        </tr>
                                      );
                                    })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane"
                          id="hashtgs"
                          aria-labelledby="hashtgs-tab"
                          role="tabpanel"
                        >
                          <div
                            id="DataTables_Table_0_wrapper"
                            class="dataTables_wrapper dt-bootstrap4"
                          >
                            <div class="table-responsive">
                              <div class="row">
                                <div class="col-sm-12">
                                  <table
                                    class="table table-hover table-bordered mb-0"
                                    id="table"
                                    role="grid"
                                    data-toggle="table"
                                    data-pagination="true"
                                    data-resizable="true"
                                    data-click-to-select="true"
                                  >
                                    <thead class="thead-light">
                                      <tr>
                                        <th data-field="id">ID</th>
                                        <th
                                          data-field="username"
                                          data-editable="true"
                                        >
                                          Publisher
                                        </th>
                                        <th
                                          data-field="hastag"
                                          data-editable="true"
                                        >
                                          Hashtag
                                        </th>
                                        <th
                                          data-field="posts"
                                          data-editable="true"
                                        >
                                          Posts
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {loading === "Loading" && (
                                        <tr>
                                          <td>Loading...</td>
                                        </tr>
                                      )}
                                      {hashtagData &&
                                        hashtagData.map((ele, index) => {
                                          return (
                                            <tr>
                                              <td>{index + 1}</td>
                                              <td>
                                                <img
                                                  class="setting-avatar"
                                                  src={ele.user.displayPicture}
                                                />
                                                {ele.user.username}
                                              </td>
                                              <td>
                                                <a href="#">{ele.hashtag}</a>
                                              </td>
                                              <td>{ele.count}</td>
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
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <div
        className="modal fade"
        id="videosmodal"
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
          </div>
        </div>
      </div>
    </>
  );
}
