import React, { useEffect, useContext, useState } from "react";

import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { postData } from "../apicall/apiCall";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import NotificationSystem from "react-notification-system";
// import ReactPlayer from "react-player";

export default function AudioManagement() {
  const [audioResponse, setVideoData] = useState([]);
  const [videoCount, setVideoCount] = useState("");
  const [videoURL, setVideoURL] = useState("");
  var notificationSystem = React.createRef();
  //const { dispatch } = useContext(UserContext);
  //const history = useHistory();

  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  // function myFunction2() {
  //   document.getElementById("myDropdown2").classList.toggle("show");
  // }
  // function myFunction3() {
  //   document.getElementById("myDropdown3").classList.toggle("show");
  // }

  // function openModal() {
  //   document.getElementById("mydocument").style.display = "block";
  // }

  // function closeModal() {
  //   document.getElementById("mydocument").style.display = "none";
  // }

  var slideIndex = 1;

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    //var captionText = document.getElementById("caption");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
  }

  // async function fetchData() {
  //   const { code, data } = await postData("/audio/getAll/pending");
  //   console.log("fetchData -> resData", data);
  //   if (code) {
  //     const { rows, count } = data;
  //     setVideoData(rows);
  //     setVideoCount(count);
  //   }
  // }

  async function fetchApprovedData() {
    const { data, code } = await postData("/audio/getAll/approved");
    console.log("fetchData -> resData", data);
    if (code) {
      const { rows, count } = data;
      setVideoData(rows);
      setVideoCount(count);
    }
  }

  async function fetchRejectedData() {
    const { code, data } = await postData("/audio/getAll/rejected");
    console.log("fetchData -> resData", data);
    if (code) {
      const { rows, count } = data;
      setVideoData(rows);
      setVideoCount(count);
    }
  }

  // const success = (msg) => {
  //   console.log("success -> msg", msg);
  //   const notification = notificationSystem.current;
  //   notification.addNotification({
  //     message: msg,
  //     title: "Success",
  //     level: "success",
  //   });
  // };

  // const error = (msg) => {
  //   console.log("error -> msg", msg);
  //   const notification = notificationSystem.current;
  //   notification.addNotification({
  //     message: msg,
  //     title: "Success",
  //     level: "error",
  //   });
  // };

  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
    // fetchData();
    fetchApprovedData();
    showSlides(slideIndex);
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
                      <Link to="/">Audio Management</Link>
                    </li>
                    <li className="breadcrumb-item active">Audio</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div
                      className="card-content card-body"
                      id="basic-tabs-components"
                    >
                      <ul
                        className="nav nav-tabs"
                        role="tablist"
                        style={{ background: "#fff" }}
                      >
                        {/* <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="pending-audios-tab"
                            data-toggle="tab"
                            href="#pending-audios"
                            aria-controls="media"
                            role="tab"
                            aria-selected="false"
                            onClick={() => fetchData()}
                          >
                            Pending Audios
                          </a>
                        </li> */}
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="approved-audios-tab"
                            data-toggle="tab"
                            href="#approved-audios"
                            aria-controls="analytics"
                            role="tab"
                            aria-selected="true"
                            onClick={() => fetchApprovedData()}
                          >
                            Approved Audios
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="rejected-audios-tab"
                            data-toggle="tab"
                            href="#rejected-audios"
                            aria-controls="groups"
                            role="tab"
                            aria-selected="true"
                            onClick={() => fetchRejectedData()}
                          >
                            Rejected Audios
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane  active"
                          id="pending-audios"
                          aria-labelledby="pending-audios-tab"
                          role="tabpanel"
                        >
                          <div className="card-header ">
                            <h3 className="card-title">Pending Audios</h3>
                          </div>
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
                              <div className="col-12 col-sm-8 col-md-6 mtop-r1">
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
                                      value=""
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
                                    onClick={myFunction1}
                                    className="btn btn-primary waves-effect waves-light dropbtn"
                                  >
                                    Bulk Option
                                  </button>
                                  <div
                                    id="myDropdown1"
                                    className="dropdown-content"
                                  >
                                    <a href="#">Delete</a>
                                    <a href="#">Download</a>
                                    <a href="#">Export as CSV</a>
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
                                    <th
                                      data-field="state"
                                      data-checkbox="true"
                                    ></th>
                                    <th data-field="id">ID</th>
                                    <th data-field="userimage">User Image</th>
                                    <th
                                      data-field="username"
                                      data-editable="true"
                                    >
                                      User Name
                                    </th>
                                    <th data-field="email" data-editable="true">
                                      E-mail
                                    </th>
                                    <th data-field="phone" data-editable="true">
                                      Phone
                                    </th>
                                    <th
                                      data-field="hastag"
                                      data-editable="true"
                                    >
                                      Hashtag
                                    </th>
                                    <th
                                      data-field="description"
                                      data-editable="true"
                                    >
                                      Description
                                    </th>
                                    <th data-field="audio" data-editable="true">
                                      Audios
                                    </th>
                                    <th data-field="action">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {audioResponse &&
                                    audioResponse.map((ele, index) => {
                                      return (
                                        <tr>
                                          <td></td>
                                          <td>{index + 1}</td>
                                          <td>
                                            <img
                                              className="user-avatar"
                                              src={ele.user.displayPicture} alt = ""
                                            />
                                          </td>
                                          <td>{ele.user.username}</td>
                                          <td>{ele.user.email}</td>
                                          <td>{ele.user.mobile}</td>
                                          <td>
                                            {ele.hashtags > 0 &&
                                              ele.hashtags.map(
                                                (hashTag, inde) =>
                                                  "#" + hashTag + ", "
                                              )}
                                          </td>
                                          <td>{ele.description}</td>
                                          <td>
                                            <a
                                              href="#"
                                              data-toggle="modal"
                                              data-target="#audios"
                                            >
                                              <i
                                                className="fa fa-volume-up"
                                                aria-hidden="true"
                                              ></i>
                                            </a>
                                          </td>
                                          <td>
                                            <Link
                                              to={{
                                                pathname: "/Pending-Audios",
                                                state: ele.user.id,
                                              }}
                                              className="btn btn-icon"
                                            >
                                              <i className="feather icon-eye"></i>
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
        id="mydocument"
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
              <div className="mySlides">
                {/* <!-- <div className="numbertext">1 / 4</div> --> */}
                <img
                  src="app-assets/images/icons/d-avatar.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="mySlides">
                {/* <!-- <div className="numbertext">2 / 4</div> --> */}
                <img
                  src="app-assets/images/icons/d-page.jpg" alt = ""
                  style={{ width: "100%" }}
                />
              </div>
              <div className="mySlides">
                {/* <!-- <div className="numbertext">3 / 4</div> --> */}
                <img
                  src="app-assets/images/icons/d-avatar.jpg" alt = ""
                  style={{ width: "100%" }}
                />
              </div>
              <div className="mySlides">
                {/* <!-- <div className="numbertext">4 / 4</div> --> */}
                <img
                  src="app-assets/images/icons/d-page.jpg" alt = ""
                  style={{ width: "100%" }}
                />
              </div>
              <a  href = "" className="prev" onClick={() => plusSlides(-1)}>
                &#10094;
              </a>
              <a href = "" className="next" onClick={() => plusSlides(1)}>
                &#10095; 
              </a>
            </div>
            <div className="modal-footer">
              {/* <!-- <button type="button" className="btn btn-primary waves-effect waves-light" data-dismiss="modal">Ok</button> --> */}
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade text-left show"
        id="mydocument1"
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
              <img
                src="app-assets/images/icons/d-avatar.jpg"
                style={{ width: "100%" }}
              />
            </div>
            <div className="modal-footer">
              {/* <!-- <button type="button" className="btn btn-primary waves-effect waves-light" data-dismiss="modal">Ok</button> --> */}
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
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
              Are you sure you want to delete this user?
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
              Are you sure you want to delete this Post?
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
        id="default3"
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
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel18">
                Add Followers
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="controls">
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      placeholder="How many followers you want to add? You can add between 1 and 515."
                      required=""
                      aria-invalid="false"
                    />
                    <div className="help-block"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Start
              </button>
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="audios"
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
              <audio className="audio-control" controls>
                <source src="horse.ogg" type="audio/ogg" />
                <source src="horse.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
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
    </>
  );
}
