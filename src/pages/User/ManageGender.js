import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { postData } from '../apicall/apiCall';
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';

export default function ManageGender() {
  var notificationSystem = React.createRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [icon, setIcon] = useState("");
  const [gender, setSGeneder] = useState("");
  const [TempGender, setTempGeneder] = useState("");
  const [searckText, setsearckText] = useState("");

  const [genderData, setEditGeneder] = useState("");
  const [deleteId, setDeleteData] = useState("");


  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  async function onChangeImage(event) {
    console.log("onChangeImage -> event", event.target.files[0]);
    const formData = new FormData();
    formData.append("files", event.target.files[0]);
    var { data, code } = await postData('/media/insert', formData);
    if (code) {
      setIcon(data.url);
    } else {
      error("Server Error")
    }
  }


  function closeEditModel() {
    document.getElementById("closeEdit").click();
  }

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
    getData();
  }, []);

  async function getData(event) {
    var { data, code } = await postData('/admin/getALl/gender');
    console.log("getData -> data", data)
    if (code) {
      setSGeneder(data.rows);
      setTempGeneder(data.rows);
    } else {
      error("Server Error")
    }
  }

  async function onEditGender(id) {
    var { data, code } = await postData('/admin/get/gender/by', { id });
    console.log("getData -> data", data)
    if (code) {
      setEditGeneder(data);
      setIcon(data.icon);
    } else {
      error("Server Error")
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
    console.log("error -> msg", msg)
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: 'error'
    });
  };

  async function onDeleteGender() {
    if (deleteId) {
      const resData = await postData('/admin/bulk/delete/gender', { ids: [deleteId] });
      if (resData && resData.code) {
        success("Successfully deleted");
        getData();
      } else {
        error(resData.errorMessage);
      }
    } else {
      error("ID not set");
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
                      <Link to="/">User</Link>
                    </li>
                    <li className="breadcrumb-item active">Manage Genders</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <NotificationSystem ref={notificationSystem} />
          <div className="content-body">
            <section id="dashboard-analytics">
              {/* <div className="card">
                <div className="card-header border-bottom">
                  <div className="col-12">
                    <h4 className="card-title">Filters</h4>
                  </div>
                  <a className="heading-elements-toggle">
                    <i className="fa fa-ellipsis-v font-medium-3"></i>
                  </a>
                  <div className="heading-elements">
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
                  </div>
                </div>
                <div className="card-content collapse show">
                  <div className="card-body">
                    <div className="users-list-filter">
                      <form>
                        <div className="row" style={{ alignItems: "center" }}>
                          <div className="col-12 col-sm-6 col-lg-3">
                            <label for="users-list-verified">User Name</label>
                            <fieldset className="form-group">
                              <input
                                type="text"
                                placeholder=""
                                className="form-control input-style"
                              />
                            </fieldset>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-3">
                            <label for="users-list-role">State</label>
                            <fieldset className="form-group">
                              <select className="form-control" id="users-list-role">
                                <option></option>
                                <option value="">Punjab</option>
                                <option value="user">Delhi</option>
                                <option value="staff">Mumbai</option>
                              </select>
                            </fieldset>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-3">
                            <label for="users-list-status">Source</label>
                            <fieldset className="form-group">
                              <select
                                className="form-control"
                                id="users-list-status"
                              >
                                <option></option>
                                <option value="">IOS</option>
                                <option value="Active">Android</option>
                              </select>
                            </fieldset>
                          </div>

                          <div className="col-12 col-sm-6 col-lg-3">
                            <a
                              href="#"
                              className="float-right btn btn-primary shadow full-wdth"
                            >
                              Filter{" "}
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              */}
             
              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <a
                          href="#"
                          className="btn btn-primary shadow waves-effect waves-light"
                          data-toggle="modal"
                          data-target="#new-gender"
                        >
                          Add New Gender
                        </a>
                      </div>
                    </div>

                    <div className="card-content mt-2">
                      <div className="col-12">
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
                                    placeholder="Search"
                                    name="query"
                                    id="query"
                                    onChange={(e) => setsearckText(e.target.value)}
                                    className="form-control full-wdth float-left"
                                  />
                                </div>
                                <div className="col-5 col-md-3 pr-0">
                                  <button className="btn btn-primary float-left waves-effect waves-light"
                                    onClick={() => {
                                      var dataSearch = TempGender.filter(ele => ele.english.includes(searckText));
                                      setSGeneder(dataSearch.length > 0 ? dataSearch : TempGender)
                                    }}
                                  >
                                    Search
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3 mtop-r1">
                              <div className="dropdown flot-rigt">
                                <button
                                  onClick={myFunction}
                                  className="btn btn-primary waves-effect waves-light dropbtn"
                                >
                                  Bulk Option
                                </button>
                                <div id="myDropdown" className="dropdown-content">
                                  <a href="#">Delete</a>
                                  <a href="#">Download</a>
                                  <a href="#">Export as CSV</a>
                                </div>
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
                                  <th
                                    data-field="state"
                                    data-checkbox="true"
                                  ></th>
                                  <th data-field="id">ID</th>
                                  <th data-field="keyname" data-editable="true">
                                    Key Name
                                  </th>
                                  <th data-field="value" data-editable="true">
                                    Value
                                  </th>
                                  <th data-field="action">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {gender && gender.map((ele, index) => {
                                  return <tr key={index}>
                                    <td></td>
                                    <td>{index}</td>
                                    <td>{ele.english}</td>
                                    <td>{ele.english}</td>
                                    <td>
                                      <a
                                        href="#"
                                        className="btn btn-info"
                                        data-toggle="modal"
                                        data-target="#edit-gender"
                                        onClick={() => onEditGender(ele.id)}
                                      >
                                        Edit
                                    </a>
                                    &nbsp;&nbsp;
                                    <a
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#default1"
                                        className="btn btn-danger"
                                        onClick={() => setDeleteData(ele.id)}
                                      >
                                        Delete
                                    </a>
                                    </td>
                                  </tr>
                                })}
                              </tbody>
                            </table>
                            <br />
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
      <div
        className="modal fade"
        id="new-gender"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
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
            <Formik
              initialValues={{
                english: "",
                arabic: "",
                dutch: "",
                french: "",
                german: "",
                italian: "",
                russian: "",
                spanish: "",
                turkish: "",
                icon: ""
              }}
              validationSchema={Yup.object().shape({
              })}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log("ManageGender -> values", values);
                values['icon'] = icon;
                const { data, code, errorMessage } = await postData('/admin/add/gender', values);
                if (code) {
                  success("Gender added successfully");
                  resetForm();
                  getData();
                  closeEditModel();
                }
                else
                  error(errorMessage);
              }}
              render={({ values, errors, touched, isSubmitting }) => {
                return <Form>
                  <div className="modal-body">
                    <div className="form-group">
                      <label for="users-list-verified">English</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="english"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="english" component="div" className="errorM" />

                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Arabic</label>
                      <Field
                        type="text"
                        name="arabic"
                        placeholder=""
                        className="form-control input-style"
                      />
                      <ErrorMessage name="arabic" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Dutch</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="dutch"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="dutch" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">French</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="french"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="french" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">German</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="german"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="german" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Italian</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="italian"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="italian" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Russian</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="russian"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="russian" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Spanish</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="spanish"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="spanish" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Turkish</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="turkish"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="turkish" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Icon</label>
                      <input
                        type="file"
                        onChange={(e) => onChangeImage(e)}
                        placeholder=""
                        className="form-control input-style"
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save changes
                   </button>
                  </div>
                </Form>
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="edit-gender"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Edit Key: {genderData.english}
              </h5>
              <button
                type="button"
                id="closeEdit"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <Formik
              enableReinitialize
              initialValues={{
                english: genderData ? genderData.english : "",
                arabic: genderData ? genderData.arabic : "",
                dutch: genderData ? genderData.dutch : "",
                french: genderData ? genderData.french : "",
                german: genderData ? genderData.german : "",
                italian: genderData ? genderData.italian : "",
                russian: genderData ? genderData.russian : "",
                spanish: genderData ? genderData.spanish : "",
                turkish: genderData ? genderData.turkish : "",
                icon: genderData ? genderData.icon : "",
              }}
              validationSchema={Yup.object().shape({
              })}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log("ManageGender -> values", values);
                values['icon'] = icon;
                values['id'] = genderData.id;
                const { data, code, errorMessage } = await postData('/admin/edit/gender', values);
                if (code) {
                  success("Gender updated successfully");
                  getData();
                  closeEditModel();
                }
                else
                  error(errorMessage);
              }}
              render={({ values, errors, touched, isSubmitting }) => {
                return <Form>
                  <div className="modal-body">
                    <div className="form-group">
                      <label for="users-list-verified">English</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="english"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="english" component="div" className="errorM" />

                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Arabic</label>
                      <Field
                        type="text"
                        name="arabic"
                        placeholder=""
                        className="form-control input-style"
                      />
                      <ErrorMessage name="arabic" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Dutch</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="dutch"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="dutch" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">French</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="french"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="french" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">German</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="german"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="german" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Italian</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="italian"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="italian" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Russian</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="russian"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="russian" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Spanish</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="spanish"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="spanish" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Turkish</label>
                      <Field
                        type="text"
                        placeholder=""
                        name="turkish"
                        className="form-control input-style"
                      />
                      <ErrorMessage name="turkish" component="div" className="errorM" />
                    </div>
                    <div className="form-group">
                      <label for="users-list-verified">Icon</label>
                      <input
                        type="file"
                        onChange={(e) => onChangeImage(e)}
                        placeholder=""
                        className="form-control input-style"
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save changes
                   </button>
                  </div>
                </Form>
              }}
            />
          </div>
        </div>
      </div>

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
              Are you sure you want to delete this Gender?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
                onClick={() => onDeleteGender()}
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
