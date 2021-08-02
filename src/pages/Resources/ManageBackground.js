import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { postData, postDataAll, deleteData } from "../apicall/apiCall";

//import { useHistory } from "react-router-dom";
//import { UserContext } from "../../context/UserContext";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as $ from "jquery";
// import * as Yup from "yup";
import NotificationSystem from "react-notification-system";

export default function ManageBackground() {
  var notificationSystem = React.createRef();
  // const { dispatch } = useContext(UserContext);
  // const history = useHistory();
  const [backgroundData, setBackgroundData] = useState();

  const success = (msg) => {
    console.log("success -> msg", msg);
    const notification = notificationSystem.current;
    if (notification) return;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: "success",
    });
  };

  // const error = (msg) => {
  //   console.log("error -> msg", msg);
  //   const notification = notificationSystem.current;
  //   if (!notification) return;
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
    fetchData();
    // showSlides(slideIndex);
    // getAllUsers(pageNumber, pageSize);
  }, []);

  async function fetchData() {
    const resData = await postDataAll("/follows/admin/getBackground");
    console.log("fetchData -> resData", resData);
    if (resData) {
      setBackgroundData(resData.data);
    }
  }

  async function deleteBackgroundById(id) {
    const resData = await deleteData("/follows/deleteBackgroundImage/" + id, {
      id: id,
    });
    if (resData && resData.code == 1) {
      fetchData();
    }
  }

  async function onchangeStatus(id, status) {
    var body = {
      id: id,
      status: !status,
    };
    console.log("update: ", body);
    const { code } = await postData("/follows/updateBackgroundImage", body);
    if (code == 1) {
      success("Status successfully changed");
      fetchData();
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
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Background </li>
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
                      <div className="col-6">
                        <h4 className="card-title">Background</h4>
                      </div>
                      
                      <div className="col-6">
                        <Link
                          to="/Add-Background"
                          className="float-right btn btn-primary waves-effect waves-light"
                        >
                          Add Background
                        </Link>
                      </div>
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
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div
                          id="DataTables_Table_0_wrapper"
                          className="dataTables_wrapper dt-bootstrap4"
                        >
                          <div className="row">
                            <div className="col-sm-12">
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
                                      <th>ID</th>
                                      <th>Image</th>
                                      <th>Status</th>
                                      <th>Edit</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {backgroundData &&
                                      backgroundData.length > 0 &&
                                      backgroundData.map((ele, i) => {
                                        return (
                                          <tr key={i}>
                                            <td
                                              style={{ verticalAlign: "top" }}
                                            >
                                              {i + 1}
                                            </td>
                                            <td>
                                              <img
                                                className="setting-avatar"
                                                src={ele.backgroundImage}
                                              />
                                            </td>
                                            <td>
                                              <label className="switch offer">
                                                <input
                                                  type="checkbox"
                                                  checked={ele.status}
                                                  onChange={() =>
                                                    onchangeStatus(
                                                      ele.id,
                                                      ele.status
                                                    )
                                                  }
                                                />
                                                <span className="slider round"></span>
                                              </label>
                                            </td>
                                            <td>
                                              <Link
                                                to={{
                                                  pathname: "/Edit-Background",
                                                  state: { id: ele.id },
                                                }}
                                                className="btn btn-icon"
                                              >
                                                <i className="feather icon-edit"></i>
                                              </Link>
                                              <Link
                                                onClick={() =>
                                                  deleteBackgroundById(ele.id)
                                                }
                                              >
                                                <i className="feather icon-trash"></i>
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
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>

      <Footer />
    </>
  );
}
