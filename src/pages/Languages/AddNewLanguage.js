import $ from "jquery";
import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { postData, postDataAll } from '../apicall/apiCall';

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddNewLanguage() {

  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [state, setState] = useState({ languageNameEnglish: "", languageNameNative: "" });
  const [image, setImage] = useState();
  const [response, setStateLanguage] = useState([]);
  const [pages, addPage] = useState({});

  useEffect(() => {
    getAllData();
  }, []);

  const handlePages = (e) => {
    var object = state;
    object[e.target.name] = e.target.value;
    addPage(object);
  }

  const success = (msg) => toast(msg);
  const error = (msg) => toast.error(msg);


  const handleChnage = (e) => {
    var object = state;
    object[e.target.name] = e.target.value;
    setState(object);
  }

  const onCHangeFile = async (e) => {
    const formData = new FormData();
    console.log('addlangauteedk',e.target.files[0])
    formData.append("files", e.target.files[0])
    const { code, data } = await postData('/media/insert', formData);
    console.log("onCHangeFile -> data", data);
    if (code) {
      success("File uploaded successfully");
      setImage(data.url);
    }
  }

  const onAddLanguage = async (e) => {
    console.log("onAddLanguage -> state", state)
    if (!image || !image) {
      error("Please add a Image");
    }
    else if (!state || !state.languageNameEnglish) {
      error("Please add a language Name In English"); 
    }
    else if (!state || !state.languageNameNative) {
      error("Please add a language Name In Native");
    } else {
      const { code, data } = await postData('/language/insert', { ...state, image: image });
      console.log("fileUploading", data);
      if (code) {
        setState({});
        success("Language added successfully");
        getAllData();
      }
    }
  }




  const addPageKey = async (e) => {
    if (!pages || !pages.languageId) {
      error("Please Please select a language");
    }
    else if (!pages || !pages.pageType) {
      error("Please add a page name");
    }
    else if (!pages || !pages.key) {
      error("Please add a key");
    }
    else {
      const { code, data } = await postData('/languagePack/add', pages);
      if (code) {
        success("Key added successfully");
      }
    }
  }


  async function getAllData() {
    const { code, data } = await postDataAll('/pub/languages');
    if (code) {
      setStateLanguage(data.rows);
    }
  }




  return (
    <>
      <ToastContainer />

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
              <div
                className="row justify-content-between align-items-center"
                style={{ alignItems: "center" }}
              >
                <div className="col-12 col-sm-6 col-lg-2">
                  <label className="form-label">
                    Language Icon{" "}
                    <small>
                      It will show to the user when user resister first time with the app.
                              </small>
                  </label>
                  <div className="form-group">
                    <input
                      type="file"
                      name="file"
                      onChange={onCHangeFile}
                      className="form-control"
                      placeholder="Enter New Language"
                      required=""
                      data-validation-required-message=""
                      aria-invalid="false"
                    />
                  </div>

                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                  <label for="users-list-role">State</label>
                  <fieldset className="form-group">
                    <select
                      className="form-control"
                      name="state"
                      id="users-list-role"
                    >
                      <option></option>
                      <option value="Punjab">Punjab</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                  <label for="users-list-status">Source</label>
                  <fieldset className="form-group">
                    <select
                      className="form-control"
                      name="ios"
                      id="users-list-status"
                    >
                      <option></option>
                      <option value={true}>IOS</option>
                      <option value={false}>Android</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-12 col-sm-6 col-lg-2">
                  <label for="users-list-status">Status</label>
                  <fieldset className="form-group">
                    <select
                      className="form-control"
                      id="users-list-status"
                      name="isOnline"
                    >
                      <option></option>
                      <option value={true}>Active Users</option>
                      <option value={false}>Inactive Users</option>
                    </select>
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
            </div>
          </div>
        </div>
      </div> */}

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
                      <Link to="/">Languages</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      {" "}
                      Add New Language &amp; Key
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Add New Language</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <label className="form-label">
                              Language Icon{" "}
                              <small>
                                It will show to the user when user resister first time with the app.
                              </small>
                            </label>
                            <div className="form-group">
                              <input
                                type="file"
                                name="file"
                                onChange={onCHangeFile}
                                className="form-control"
                                placeholder="Enter New Language"
                                required=""
                                data-validation-required-message=""
                                aria-invalid="false"
                              />
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <label className="form-label">
                              Language Name{" "}
                              <small>
                                Use only english letters, no spaces allowed.
                                E.g: russian
                              </small>
                            </label>
                            <div className="form-group">
                              <input
                                type="text"
                                name="languageNameEnglish"
                                onChange={handleChnage}
                                className="form-control"
                                placeholder="Enter New Language"
                                required=""
                                data-validation-required-message=""
                                aria-invalid="false"
                              />
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <label className="form-label">
                              Language Name{" "}
                              <small>
                                Use only native language letters, no spaces allowed.
                                E.g: russian
                              </small>
                            </label>
                            <div className="form-group">
                              <input
                                type="text"
                                name="languageNameNative"
                                onChange={handleChnage}
                                className="form-control"
                                placeholder="Enter New Language"
                                required=""
                                data-validation-required-message=""
                                aria-invalid="false"
                              />
                            </div>
                          </div>
                          <div>
                            <a href="#" className="btn btn-primary shadow " onClick={onAddLanguage} style={{ margin: "40px" }}>
                              Add Language
                      </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Add New Key</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-12">
                            <label className="form-label">
                              Select a Language{" "}
                              <small>
                              </small>
                            </label>
                            <div className="form-group">
                              <select
                                name="languageId"
                                aria-controls="DataTables_Table_0"
                                className="form-control"
                                onChange={handlePages}
                              >
                                <option value="">Select a language</option>
                                {response && response.map(ele => {
                                  return <option value={ele.id}>{ele.languageNameEnglish}</option>
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <label className="form-label">
                              Page Name{" "}
                              <small>
                                Use only english letters, no spaces allowed,
                                example: this_is_a_page
                              </small>
                            </label>
                            <div className="form-group">
                              <input
                                type="text"
                                name="pageType"
                                onChange={handlePages}
                                className="form-control"
                                placeholder="Enter Key Name"
                                required=""
                                data-validation-required-message=""
                                aria-invalid="false"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <label className="form-label">
                              Key Name{" "}
                              <small>
                                Use only english letters, no spaces allowed,
                                example: this_is_a_key
                              </small>
                            </label>
                            <div className="form-group">
                              <input
                                type="text"
                                name="key"
                                className="form-control"
                                onChange={handlePages}
                                placeholder="Enter Key Name"
                                required=""
                                data-validation-required-message=""
                                aria-invalid="false"
                              />
                            </div>
                          </div>
                          <p>&nbsp;</p>
                          <a href="#" className="btn btn-primary shadow" onClick={addPageKey} style={{ margin: "10px" }}>
                            Add Key
                            </a>
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
