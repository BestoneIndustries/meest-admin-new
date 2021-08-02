import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { postData, postDataAll } from "../apicall/apiCall";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';
import { ExportToExcel } from "../../components/ExportToExcel";

export default function OnlineUser() {
  var notificationSystem = React.createRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [tableData, setTableData] = useState([]);
  
  const [totalCount, setResponse] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function openModal() {
    document.getElementById("mydocument").style.display = "block";
  }

  function closeModal() {
    document.getElementById("mydocument").style.display = "none";
  }

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
    var captionText = document.getElementById("caption");
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

  async function fetchData(pgNum, pgSize) {
    setPageSize(pgSize);
    setPageNumber(pgNum);
    var body = {
      pageNumber: pgNum,
      pageSize: pgSize,
      isOnline: true,
    };
    const resData = await postData("/admin/getOnlineUsers", body);
    console.log("fetchData -> resData", resData);
    if (resData) {
      setTableData(resData.data.rows);
    }
  }

  // async function onchangeStatus(id, status) {
  //   const { code } = await postData("/admin/updateUser", {
  //     id: id,
  //     status: !status,
  //   });
  //   if (code == 1) {
  //     fetchData(pageNumber, pageSize);
  //     success("Status successfully changed");
  //   }
  // }
  async function BlockUser(id, block) {
    //debugger;
    const resData = await postData("/admin/updateUser", {
      id: id,
      blockedByAdmin: block,
    });
    if (resData && resData.code == 1) {
      fetchData(pageNumber, pageSize);
      if (resData.data.blockedByAdmin ==true) success("User Blocked");
      else success("User Un-Blocked");
    } else {
      console.log(resData);
      error("Server Error occurred");
    }
  }

  const success = (msg) => {
    console.log("success -> msg", msg)
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: 'success'
    });
  };

  const error = (msg) => {
    console.log("error -> msg", msg);
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: "error",
    });
  };

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
                    <li className="breadcrumb-item active">Online Users</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <NotificationSystem ref={notificationSystem} />
          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="card">
                <div className="card-header border-bottom">
                  <div className="col-12">
                    <h4 className="card-title">Filters</h4>
                  </div>
                  <a className="heading-elements-toggle">
                    <i className="fa fa-ellipsis-v font-medium-3"></i>
                  </a>
                  {/* <div className="heading-elements">
                    <ul className="list-inline mb-0">
                      <li>
                        <a data-action="collapse">
                          <i className="feather icon-chevron-down"></i>
                        </a>
                      </li>
                      <li>
                        <a data-action="">
                          <i className="feather icon-rotate-cw users-data-filter"></i>
                        </a>
                      </li>
                      <li>
                        <a data-action="close">
                          <i className="feather icon-x"></i>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
                <div className="card-content collapse show">
                  <div className="card-body">
                    <div className="users-list-filter">
                    <Formik
                        initialValues={{
                          // userName: "",
                          searchText: "",
                          blockedByAdmin: "",
                          state: "",
                          ios: "",
                        }}
                        validationSchema={Yup.object().shape({})}
                         const onSubmit={async (
                          values,
                          { setStatus, resetForm }
                        ) => {
                          try {
                            resetForm({})
                            setStatus({success: true})
                        
                          } catch (error) {
                            setStatus({success: false})
                           
                          }
                          console.log("ManageUser -> values", values);
                          delete values.state;
                          if (values["osType"] == "") {
                            console.log("on =");
                            delete values.osType;
                          } else {

                              values["osType"] = values.osType == "iOS" ? 1 : 0;
                          }
                          if (values["blockedByAdmin"] == "") {
                            delete values.blockedByAdmin;
                          } else {
                            values["blockedByAdmin"] =
                              values.blockedByAdmin == "true" ? true : false;
                          }

                          if (values.searchText == "") {
                            delete values.searchText;
                          } else {
                            values["searchText"] = values.searchText;
                            //delete values.userName;
                          }

                          const { data } = await postData(
                            "/admin/user/by/filters",
                            values
                          )
                          console.log("filter", data);
                          
                          if (data) {
                            values = null;
                            setTableData(data.rows);
                          }
                        }}
                        render={({ values, errors, touched, isSubmitting }) => {
                          return (
                            <Form>
                              <div
                                className="row justify-content-between align-items-center"
                                style={{ alignItems: "center" }}
                              >
                                <div className="col-12 col-sm-6 col-lg-2">
                                  <label for="users-list-verified">
                                    User Name
                                  </label>
                                  <fieldset className="form-group">
                                    <Field
                                      type="text"
                                      name="searchText"
                                      placeholder="Enter your name"
                                      className="form-control input-style"
                                    />
                                  </fieldset>
                                </div>
                                {/*<div className="col-12 col-sm-6 col-lg-2">
                                  <label for="users-list-role">State</label>
                                  <fieldset className="form-group">
                                    <Field
                                      component="select"
                                      className="form-control"
                                      name="state"
                                      id="users-list-role"
                                    >
                                      <option></option>
                                      <option value="Punjab">Punjab</option>
                                      <option value="Delhi">Delhi</option>
                                      <option value="Mumbai">Mumbai</option>
                                    </Field>
                                  </fieldset>
                                </div>*/}
                                <div className="col-12 col-sm-6 col-lg-2">
                                  <label for="users-list-status">Source</label>
                                  <fieldset className="form-group">
                                    <Field
                                      component="select"
                                      className="form-control"
                                      name="osType"
                                      id="users-list-status"
                                    >
                                      <option></option>
                                      <option value={"iOS"}>IOS</option>
                                      <option value={"Android"}>Android</option>
                                    </Field>
                                  </fieldset>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-2">
                                  <label for="users-list-status">Status</label>
                                  <fieldset className="form-group">
                                    <Field
                                      component="select"
                                      className="form-control"
                                      id="users-list-status"
                                      name="blockedByAdmin"
                                    >
                                      <option></option>
                                      <option value={true}>Blocked Users</option>
                                      <option value={false}>
                                        Un-blocked Users
                                      </option>
                                    </Field>
                                  </fieldset>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-2">
                                  <button
                                    className="float-right btn btn-primary shadow full-wdth"
                                    type="submit"
                                  >
                                    Filter{" "}
                                  </button>
                                </div>
                              </div>
                            </Form>
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Online Users</h4>
                      </div>
                    </div>
                    <div className="card-content card-body">
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
                         
                          <Formik
                            initialValues={{
                              searchText: "",
                            }}
                            validationSchema={Yup.object().shape({})}
                            onSubmit={async (
                              values,
                              { setStatus, resetForm }
                            ) => {
                              try {
                                resetForm({})
                                setStatus({success: true})
                            
                              } catch (error) {
                                setStatus({success: false})
                               
                              }
                              var body = {
                                searchText: values.searchText,
                              };
                              console.log("searchData -->", body);
                              const { data } = await postData(
                                "/admin/allUsers",
                                body
                              );
                              if (data) {
                                // return console.log('searchData -->',data);
                                // setFAQData(data);
                                setTableData(data.rows);
                              }
                            }}
                            render={({
                              values,
                              errors,
                              touched,
                              isSubmitting,
                            }) => {
                              return (
                                <Form className="col-12 col-sm-8 col-md-6 mtop-r1">
                                  <div
                                    id="DataTables_Table_0_filter"
                                    className="dataTables_filter bulk-btn"
                                  >
                                    <div className="col-7 col-md-9 pr-0 pl-0">
                                      <Field
                                        type="text"
                                        placeholder="Search....."
                                        name="searchText"
                                        id="searchText"
                                        className="form-control full-wdth float-left"
                                      />
                                    </div>
                                    <div className="col-5 col-md-3 pr-0">
                                      <button
                                        type="submit"
                                        className="btn btn-primary float-left waves-effect waves-light"
                                      >
                                        Search
                                      </button>
                                    </div>
                                  </div>
                                </Form>
                              );
                            }}
                          />
                          <div className="col-12 col-sm-6 col-md-3 mtop-r1">
                            <div className="dropdown flot-rigt">
                            <button className="btn btn-primary waves-effect waves-light dropbtn">
                                <ExportToExcel apiData={tableData} fileName={'online userdata'} />
                              </button>
                              {/* <div id="myDropdown" className="dropdown-content">
                                <a href="#">Delete</a>
                                <a href="#">Download</a>
                                <a href="#">Export as CSV</a>
                              </div> */}
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive">
                          {tableData && (
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
                                  <th
                                    data-field="username"
                                    data-editable="true"
                                  >
                                    User Name
                                  </th>
                                  {/* <!-- <th data-field="country" data-editable="true">State</th> --> */}
                                  <th data-field="source" data-editable="true">
                                    Source
                                  </th>
                                  <th data-field="email" data-editable="true">
                                    Date Of Birth
                                  </th>
                                  <th
                                    data-field="documents"
                                    data-editable="true"
                                  >
                                    User Documents
                                  </th>
                                  <th
                                    data-field="ipaddress"
                                    data-editable="true"
                                  >
                                    IP Address
                                  </th>
                                  <th
                                    data-field="totalpost"
                                    data-editable="true"
                                  >
                                    Total Post
                                  </th>
                                  <th data-field="status" data-editable="true">
                                    Status
                                  </th>
                                  {/* <th data-field="action">Action</th> */}
                                </tr>
                              </thead>
                              <tbody>
                                {tableData.map((item, index) => {
                                  return (
                                    <tr key={item.id}>
                                      <td></td>
                                      <td>
                                        {index +
                                          1 +
                                          pageSize * (pageNumber - 1)}
                                      </td>
                                      <td>
                                        <div className="user-image-name">
                                          <img
                                            className="setting-avatar"
                                            src={
                                              item.thumbnail
                                                ? item.thumbnail
                                                : item.displayPicture
                                            }
                                          />
                                          <Link
                                            to="/Profile-Details"
                                            className="user-name"
                                          >
                                            {" "}
                                            {item.username} <br /> {item.email}
                                          </Link>
                                        </div>
                                      </td>
                                      <td>
                                        {item.osType === "IOS" ? "IOS" : "Android"}
                                      </td>
                                      <td>
                                        {item.dob.split("-")[2]}
                                        <sup>th</sup>{" "}
                                        {`${
                                          months[item.dob.split("-")[1] - 1]
                                        } ${item.dob.split("-")[0]}`}
                                      </td>
                                      <td>
                                        <a
                                          href="app-assets/images/adhaar-card/pic-01.jpg"
                                          data-lightbox="post-article-gallery"
                                          data-title=""
                                          className="link-preview"
                                          title="Adhaar Card"
                                        >
                                          <img
                                            className="setting-avatar1"
                                            onClick={() => currentSlide(1)}
                                            src="app-assets/images/adhaar-card/pic-01.jpg"
                                          />
                                        </a>
                                        <a
                                          href="app-assets/images/adhaar-card/pic-02.png"
                                          data-lightbox="post-article-gallery"
                                          data-title=""
                                          className="link-preview"
                                          title="Adhaar Card"
                                        >
                                          <img
                                            className="setting-avatar1"
                                            onClick={() => currentSlide(3)}
                                            src="app-assets/images/adhaar-card/pic-02.png"
                                          />
                                        </a>
                                      </td>
                                      <td>{item.ip ? item.ip : "null"}</td>
                                      <td>
                                        <Link to="/Post-Details">0 Posts</Link>
                                      </td>
                                      {/* <td>
                                        <label className="switch offer">
                                          <input
                                            type="checkbox"
                                            checked={item.status}
                                            onClick={() =>
                                              onchangeStatus(
                                                item.id,
                                                item.status
                                              )
                                            }
                                          />
                                          <span className="slider round"></span>
                                        </label>
                                      </td> */}
                                      <td>
                                        {item.id &&
                                          item.blockedByAdmin && (
                                            <button
                                              className="btn btn-primary"
                                              onClick={(e) => {
                                                BlockUser(
                                                  item.id && item.id,
                                                  false
                                                );
                                              }}
                                            >
                                              Un-Block User
                                            </button>
                                          )}
                                        {item.id &&
                                          !item.blockedByAdmin && (
                                            <button
                                              className="btn btn-danger"
                                              onClick={(e) => {
                                                BlockUser(
                                                  item.id && item.id,
                                                  true
                                                );
                                              }}
                                            >
                                              Block User
                                            </button>
                                          )}
                                      </td>
                                      <td>
                                        {/* <div className="actions action-btns">
                                          <div className="btn-group dropdown actions-dropodown">
                                            <button
                                              type="button"
                                              className="btn btn-white px-1 py-1 dropdown-toggle waves-effect waves-light"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              <i className="feather icon-sliders"></i>
                                            </button>
                                            <div
                                              className="dropdown-menu dropdown-menu-right"
                                              x-placement="top-end"
                                              style={{
                                                position: "absolute",
                                                willChange: "transform",
                                                top: "0px",
                                                left: "0px",
                                                transform:
                                                  "translate3d(-9px, -16px, 0px)",
                                              }}
                                            >
                                              <a
                                                className="dropdown-item"
                                                data-toggle="modal"
                                                data-target="#default3"
                                              >
                                                <i className="feather icon-edit"></i>
                                                Add Followers
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                href="#"
                                              
                                              >
                                                <i className="feather icon-edit"></i>
                                                Edit
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                data-toggle="modal"
                                                data-target="#default1"
                                              >
                                                <i className="feather icon-trash"></i>
                                                Delete
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                data-toggle="modal"
                                                data-target="#default1"
                                              >
                                                <i className="feather icon-trash"></i>
                                                Delete Post
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                href="profile-details.html"
                                              
                                              >
                                                <i className="feather icon-save"></i>
                                                View Profile as Admin
                                              </a>
                                            </div>
                                          </div>
                                        </div> */}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          )}
                          <div style={{ width: "100%" }}>
                            {pageNumber > 1 ? (
                              <a
                                onClick={(e) => {
                                  fetchData(pageNumber - 1, pageSize);
                                }}
                                href={pageNumber > 1 && "#"}
                              >
                                {"  "}&lt;&lt;
                              </a>
                            ) : (
                              <a></a>
                            )}
                            <span> Showing Page {pageNumber} </span>
                            {tableData ? (
                              <a
                                onClick={(e) => {
                                  fetchData(pageNumber + 1, pageSize);
                                }}
                                href={pageNumber > 1 && "#"}
                              >
                                {"  "}&gt;&gt;
                              </a>
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
                  src="app-assets/images/icons/d-page.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="mySlides">
                {/* <!-- <div className="numbertext">3 / 4</div> --> */}
                <img
                  src="app-assets/images/icons/d-avatar.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="mySlides">
                {/* <!-- <div className="numbertext">4 / 4</div> --> */}
                <img
                  src="app-assets/images/icons/d-page.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <a className="prev" onClick={() => plusSlides(-1)}>
                &#10094;
              </a>
              <a className="next" onClick={() => plusSlides(1)}>
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
            {/* <!--<div className="modal-header">
                  <h4 className="modal-title" id="myModalLabel18">Default Modal</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                  </button>
                  </div>--> */}
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
    </>
  );
}
