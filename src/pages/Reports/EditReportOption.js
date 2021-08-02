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

  async function fetchData(id){
    const body={ id:id,}
    const resData = await postData('/report/getReportOptionsById',body);
    if(resData && resData.code===1){
      setReportOption(resData.data);
      setReportType(resData.data.reportType.toLowerCase())
    console.log("Edit Option Data ", resData)
    }
  }
  useEffect(() => {
    if (history.location.state) {
      fetchData(history.location.state.id)
    }
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
                              {reportOption && reportType && <Formik
                                initialValues={{
                                  reportType: reportType,
                                  reportOption: reportOption && reportOption.reportOption,
                                  status: reportOption && reportOption.status
                                }}
                                validationSchema={Yup.object().shape({
                                  reportType: Yup.string()
                                    .required('Type is required'),
                                    reportOption: Yup.string()
                                    .required('Option is required'),
                                })}
                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                  values.id=history.location.state.id
                                  const { data } = await postData('/report/updateReportOption', values);
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
                                              <option value="post">Post</option>
                                              <option value="video">Video</option>
                                              <option value="comment">Comment</option>
                                              <option value="subComment">Sub-Comment</option>
                                              <option value="profile">Profile</option>
                                              <option value="group">Group</option>
                                              <option value="audio">Audio</option>
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
                                        Update
                                      </button>
                                    </div>
                                  </Form>
                                }}
                              />}
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
