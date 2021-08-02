import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";
import { postData } from '../apicall/apiCall';

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function AddReportOption() {
  var notificationSystem = React.createRef();

  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [reportOption, setReportOption] = useState();
  const [reportType, setReportType] = useState();




  const success = (msg) => {
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: 'success'
    });
  };

  const error = (msg) => {
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: 'error'
    });
  };

  useEffect(() => {
  }, [])

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
                      <Link to="/Manage-ReportOptions">Report Options </Link>
                    </li>
                    <li className="breadcrumb-item active">Add Report Option</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <NotificationSystem ref={notificationSystem} />
          <div className="content-body">
            <section id="basic-datatable">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">Report Option Form</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <Formik
                                initialValues={{
                                  reportType: "",
                                  reportOption: "",
                                  status: true
                                }}
                                validationSchema={Yup.object().shape({
                                  reportType: Yup.string()
                                    .required('Type is required'),
                                    reportOption: Yup.string()
                                    .required('Option is required'),
                                })}
                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                  const { data } = await postData('/report/addReportOption', values);
                                  console.log("Report Option -> data", data)
                                  if (data) {
                                    success("Report Option successfully added");
                                    history.goBack();
                                  } else {
                                    error("Server Error occurred");
                                  }
                                }}
                                render={({ values, errors, touched, isSubmitting }) => {
                                  return <Form>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="col-md-12">
                                          <div className="form-group">
                                            <label className="mb-1">Report Type</label>
                                            <Field
                                              component="select"
                                              className="select2-size-lg form-control"
                                              id="reportType"
                                              name="reportType"
                                            >
                                              <option value="">Select Report Type</option>
                                              <option value="Post">Post</option>
                                              <option value="Video">Video</option>
                                              <option value="Comment">Comment</option>
                                              <option value="SubComment">Sub-Comment</option>
                                              <option value="Profile">Profile</option>
                                              <option value="Group">Group</option>
                                              <option value="Audio">Audio</option>
                                            </Field>
                                            <ErrorMessage name="reportType" component="div" className="errorM" />
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div id="" className="form-group">
                                            <label className="mb-1">Option</label>
                                            <Field
                                              type="text"
                                              className="form-control input-style"
                                              id="reportOption"
                                              name="reportOption"
                                              placeholder=""
                                            />
                                            <ErrorMessage name="reportOption" component="div" className="errorM" />
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div className="form-group">
                                            <label className="mb-1">Status</label>
                                            <Field
                                              component="select"
                                              className="form-control"
                                              id="status"
                                              name="status"
                                              placeholder=""
                                            >
                                              <option value={true}>Active</option>
                                              <option value={false}>Inactive</option>
                                            </Field>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="api-buttons mt-2">
                                      <button type="submit" className="btn btn-primary shadow waves-effect waves-light">
                                        Add
                                  </button>
                                    </div>
                                  </Form>
                                }}
                              />
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

      {/* <div
        className="modal fade"
        id="add-category"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Add Category
              </h5>
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
                catagoryName: "",
                status: true,
              }}
              validationSchema={Yup.object().shape({
                catagoryName: Yup.string()
                  .required('Catagory Name is required'),
                status: Yup.string()
                  .required('Status is required'),
              })}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log("Login -> values", values);
                const { data } = await postData('/report/addReportOption', values);
                console.log("report option", data)
                if (data) {
                  success("Report Option successfully added");
                  resetForm();
                  fetchData();
                } else {
                  error("Server Error occurred");
                }
              }}
              render={({ values, errors, touched, isSubmitting }) => {
                return <Form>
                  <div className="modal-body">
                    <div className="form-group">
                      <label>Category Name</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="catagoryName"
                        name="catagoryName"
                        placeholder=""
                      />
                      <ErrorMessage name="catagoryName" component="div" className="errorM" />
                    </div>
                    
                        <div className="form-group">
                          <label>Status</label>
                          <Field
                            component="select"
                            className="form-control"
                            id="status"
                            name="status"
                            placeholder=""
                          >
                            <option value={true}>Active</option>
                            <option value={false}>Inactive</option>
                          </Field>
                          <ErrorMessage name="status" component="div" className="errorM" />
                        </div>

                  </div>
                      <div className="modal-footer">
                  <a href="/Manage-ReportOptions">All Report Options</a>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                    </button>
                        <button type="sub" className="btn btn-primary">
                          Add
                    </button>
                      </div>
                </Form>
              }}
            />
          </div>
        </div>
      </div> */}
      <div className="sidenav-overlay"></div>
            <div className="drag-target"></div>
            <Footer />
    </>
  );
}
