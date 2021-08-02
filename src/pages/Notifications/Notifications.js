import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";
//import { url } from "../apiUrl";
import { Link } from "react-router-dom";
import { postData, postDataAll } from "../apicall/apiCall";

//import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
//import { Title } from "chart.js";

export default function Notifications() {
  const [message, setMessage] = useState("");
  const [pushNotification, setPushNotification] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState({});
  const [attachments, setImage] = useState([]);
  const [postsData, setPostsData] = useState("");
  const [imageData, setImageData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [peopleData, setPeopleData] = useState([]);
  const [hashtagData, setHeshtagData] = useState([]);
  const [videoURL, setVideoURL] = useState("");
  const [loading, setLoading] = useState();
  const [post, setPosts] = useState([]);
  const [setdisplay, setimagages] = useState();

  useEffect(() => {
    openTrend("trendingImages");
  }, []);

  function onHandleChange(e, value) {
    if (value === "message") {
      setMessage(e.target.value);
    }
    if (value === "pushNotification") {
      setPushNotification(e.target.value);
    }
    if (value === "emailTo") {
      setSearchUser(e.target.value);
      GetpostBypostId(e.target.value);
    }
    if (value === "checkbox") {
      setCheck(e.target.checked);
    }
  }
  // async function openTab(url) {
  //   const body = {
  //     lat: 28.545725,
  //     long: 77.3296905,
  //   };
  //   const resData = await postData("/trending/get/" + url, body);
  //   console.log("fetchData -> resData", resData);

  //   if (resData) {
  //     if (url === "trendingPosts") {
  //       setPostsData(resData.data.rows);
  //     }

  //     if (url === "trendingVideos") {
  //       setVideoData(resData.data.rows);
  //     }
  //   }
  // }
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
    }
  }
  function canPlay(url) {
    setVideoURL(url);
  }
  // const onCHangeFile = async (files, info, uploadHandler) => {
  //   let fileName = files[0].name;
  //   let atachment = [];
  //   console.log(fileName);
  //   let type = fileName.split(".");

  //   const formData = new FormData();
  //   console.log("addlangauteedk", files[0]);
  //   formData.append("files", files[0]);
  //   const { code, data } = await postData("/media/insert", formData);
  //   console.log("onCHangeFile -> data", data);
  //   if (code) {
  //     atachment.push({ url: data.url, fileName, fileType: data.mimeType });
  //     //success("File uploaded successfully");
  //     setImage(atachment);
  //     console.log("media ", data);
  //   }
  // };

  // async function uploadImageCallBack(file) {
  //   return new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
  //     xhr.open("POST", url + "/media/insert");
  //     xhr.setRequestHeader("x-token", localStorage.getItem("meestToken"));
  //     const data = new FormData(); // eslint-disable-line no-undef
  //     data.append("files", file);
  //     xhr.send(data);
  //     xhr.addEventListener("load", () => {
  //       const response = JSON.parse(xhr.responseText);
  //       const obj = {
  //         data: { link: response.data.url },
  //       };
  //       resolve(obj);
  //     });
  //     xhr.addEventListener("error", () => {
  //       const error = JSON.parse(xhr.responseText);
  //       reject(error);
  //     });
  //   });
  // }
  async function onSendNotification(e) {
    e.preventDefault();
    let error = {
      message: false,
      pushNotification: false,
    };

    if (message.length < 1) {
      error.message = true;
    }
    if (pushNotification.length < 1) {
      error.pushNotification = true;
    }
    setError(error);
    if (!error.subject && !error.message && !error.pushNotification) {
      const obj = {
        sendTo: pushNotification,
        title: message,

        postId: post[0].postId,
        notificationType: post[0].notificationType,
        userId: post[0].userId,
        displayPicture: post[0].displayPicture,
        firstName: post[0].firstName,
        lastName: post[0].lastName,
        username: post[0].username,
        type: post[0].type,
        image: post[0].type,
        thumbnail: post[0].thumbnail,
        caption: post[0].caption,
      };
      const response = await postData("/pub/sendNotificationAll", obj);
      console.log(response);
      if (response && response.code === 1 && response.success) {
        setMessage("");
        setPushNotification("selectuser");
        setCheck(false);
        //setSearchUser("");
        setSearchUser("select");
      }
    }
  }
  async function GetpostBypostId(value) {
    const resData = await postDataAll("/post/GetPostByPostId/" + value);
    console.log("fetchData -> resData", resData);
    if (resData) {
      setPosts(resData.data);
      if (resData.data.length > 0) {
        setimagages(resData.data[0].thumbnail);
      } else {
        setimagages("");
      }
      console.log("data", post);
    }
  }

  return (
    <div>
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-left mb-0">
                    Notifications
                  </h2>
                  <div className="breadcrumb-wrapper col-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        {" "}
                        <Link to="/">Home</Link>{" "}
                      </li>
                      <li className="breadcrumb-item active">Notification </li>
                    </ol>
                  </div>
                </div>
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
                      <li class="nav-item" active>
                        <a
                          class="nav-link active"
                          // onClick={() => {
                          //   openTrend("trendingImages");
                          // }}
                          id="images-tab"
                          data-toggle="tab"
                          href="#images"
                          aria-controls="images"
                          role="tab"
                          aria-selected="true"
                        >
                          Trending Posts
                        </a>
                      </li>
                      {/* <li class="nav-item">
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
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="content-body">
          <div className="card">
            <div
              className="card-body notification-details"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {/* <div className="content-area-wrapper">
                <div className="content-right email-template">
                  <div className="content-wrapper">
                    <div className="content-header row"></div>
                    <div className="content-body">
                      <div className="app-content-overlay" />
                      <div className="email-app-area">
                        <div className="email-app-list-wrapper">
                          <div className="email-app-list"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="card-content">
                <div className="card-body card-dashboard">
                  <div className="api-key-wrapper">
                    <form>
                      {/* <div id="" className="form-group">
                        <input
                          type="text"
                          placeholder="Subject"
                          className="form-control input-style"
                          onChange={(e) => onHandleChange(e, "subject")}
                          //value={Title}
                        />
                        {error.Title && (
                          <div className="text-danger">
                            This field can not be empty
                          </div>
                        )}
                      </div> */}

                      <div id="" className="form-group">
                        <label>POST ID</label>

                        <select
                          style={{ width: "1000px" }}
                          className=" form-control"
                          id="small-select"
                          value={searchUser}
                          onChange={(e) => onHandleChange(e, "emailTo")}
                        >
                          <option value="select">Select post ID </option>
                          {imageData.map((item) => {
                            return (
                              <>
                                <option> {item.id} </option>
                              </>
                            );
                          })}
                        </select>
                        {error.emailTo && (
                          <div className="text-danger">
                            Please select one option
                          </div>
                        )}
                      </div>

                      <fieldset className="form-group">
                        <textarea
                          className="form-control"
                          id="basicTextarea"
                          rows="3"
                          placeholder="Message (HTML Allowed)"
                          onChange={(e) => onHandleChange(e, "message")}
                          value={message}
                        ></textarea>
                        {/* <SunEditor
                          setContents={message}
                          onChange={(e) => setMessage(e)}
                          setOptions={{
                            height: "300px",
                            buttonList: buttonList.complex,
                            // [
                            //   ['font', 'align','format'],
                            //   ['image'],
                            //   ['video'],
                            //   ['undo'],
                            //   ['redo'],
                            // ]
                          }}
                          //onImageUploadBefore={onCHangeFile}
                        /> */}

                        {error.message && (
                          <div className="text-danger">
                            This field can not be empty
                          </div>
                        )}
                      </fieldset>
                      <label className="mb-1">
                        <strong>Send Notification To</strong>
                      </label>
                      <div className="form-group">
                        <select
                          className="select2-size-sm form-control"
                          id="small-select"
                          onChange={(e) =>
                            onHandleChange(e, "pushNotification")
                          }
                          value={pushNotification}
                        >
                          <option value="selectuser"> Select user</option>
                          <option value="All">All Users</option>
                          <option value="Active">Active Users</option>
                          <option value="Inactive">Inactive Users</option>
                        </select>
                        {error.pushNotification && (
                          <div className="text-danger">
                            Please select one option
                          </div>
                        )}
                      </div>
                      {/* <div id="" className="form-group">
                        <input
                          type="text"
                          placeholder="Search Users (Optional)"
                          className="form-control input-style"
                          onChange={(e) => onHandleChange(e, "searchUser")}
                          value={searchUser}
                        />
                      </div> */}
                      <div id="" className="form-group">
                        <input
                          type="checkbox"
                          onChange={(e) => onHandleChange(e, "checkbox")}
                          value={check}
                        />
                        <label>
                          Test Message{" "}
                          <small>(Send to me notification first)</small>
                        </label>
                      </div>
                      <div className="api-buttons mt-2">
                        <button
                          onClick={(e) => onSendNotification(e)}
                          className="btn btn-primary shadow waves-effect waves-light"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  {" "}
                  <p1 style={{ fontSize: "20px" }}>
                    {" "}
                    This is a trending Posts in our Apps
                  </p1>
                </div>
                {
                  <img
                    src={
                      setdisplay
                        ? setdisplay
                        : "https://www.tibs.org.tw/images/default.jpg"
                    }
                    width="500px"
                    height="300px"
                    style={{ marginTop: "25px", marginRight: "20px" }}
                  />
                }
                <div
                  style={{
                    //fontWeight: "bold",
                    fontSize: "20px",
                    marginTop: "15px",
                  }}
                >
                  {post.map((ele) => {
                    return (
                      <>
                        <p>
                          {" "}
                          likes = {ele.postLikes} , Comments ={" "}
                          {ele.postComments} , Share = {ele.sharedPosts}
                        </p>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
