import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { postData } from "../apicall/apiCall";
import ReactPlayer from "react-player";

export default function TopVideos() {
  const [loading, setLoading] = useState();
  const [videoData, setVideoData] = useState([]);
  const [videoURL, setVideoURL] = useState("");

  async function openTab(url) {
    const body = {
      key: "days",
      value: 7,
    };
    const resData = await postData("/trending/get/" + url, body);
    console.log("fetchData -> " + url, resData);
    if (resData) {
      if (url === "topVideos") {
        setVideoData(resData.data.rows);
      }
    }
  }

  function canPlay(url) {
    setVideoURL(url);
  }

  useEffect(() => {
    openTab("topVideos");
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
                      <Link to="/Videos">Videos</Link>
                    </li>
                    <li className="breadcrumb-item active">Top Videos</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="tab-content"> */}
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
                      <th data-field="username" data-editable="true">
                        Publisher
                      </th>
                      <th data-field="hastag" data-editable="true">
                        Hastag
                      </th>
                      <th data-field="description" data-editable="true">
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
                            <td>{ele.hashTags.join(", ")}</td>
                            <td>{ele.description}</td>

                            <td>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#videosmodal"
                                onClick={() => canPlay(ele.posts[0].post)}
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
          {/* </div> */}
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
