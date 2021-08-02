import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";
import { postData } from '../apicall/apiCall';

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import RichTextEditor from 'react-rte';

export default function AddFAQ() {
  var notificationSystem = React.createRef();

  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [category, setCategory] = useState("");
  const [editorState, setDitorStateChange] = useState(EditorState.createEmpty());
  const [htmlDataresponse, htmlData] = useState(EditorState.createEmpty());
  const [description, setDiscriptions] = useState(RichTextEditor.createEmptyValue());




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
    fetchData();
  }, [])

  async function fetchData() {
    const resData = await postData('/faq/catagory/getAll');
    console.log("fetchData -> resData", resData.data)
    if (resData) {
      setCategory(resData.data);
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
                      <Link to="/">FAQs </Link>
                    </li>
                    <li className="breadcrumb-item active">Add FAQs</li>
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
                            <h4 className="card-title">FAQs Form</h4>
                            <button
                              data-toggle="modal"
                              data-target="#add-category"
                              className="float-right btn btn-primary shadow waves-effect waves-light"
                            >
                              Add New Category
                            </button>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <Formik
                                initialValues={{
                                  question: "",
                                  description: "",
                                  catagoryId: "",
                                  status: true
                                }}
                                validationSchema={Yup.object().shape({
                                  question: Yup.string()
                                    .required('Question is required'),
                                  // description: Yup.string()
                                  //   .required('Description is required'),
                                  catagoryId: Yup.string()
                                    .required('Catagory is required'),
                                })}
                                onSubmit={async (values, { setSubmitting, resetForm }) => {

                                  console.log("Login -> values", values, description.toString('html'));
                                  values.description = description.toString('html');

                                  const { data } = await postData('/faq/add', values);
                                  console.log("AddFAQ -> data", data)
                                  if (data) {
                                    success("FAQ successfully added");
                                    resetForm();
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
                                            <label className="mb-1">Category</label>
                                            <Field
                                              component="select"
                                              className="select2-size-lg form-control"
                                              id="catagoryId"
                                              name="catagoryId"
                                            >
                                              <option value="">Select a category</option>
                                              {category && category.rows.map((ele, i) => {
                                                return <option value={ele.id}>{ele.catagoryName}</option>
                                              })
                                              }
                                            </Field>
                                            <ErrorMessage name="catagoryId" component="div" className="errorM" />
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div id="" className="form-group">
                                            <label className="mb-1">Question</label>
                                            <Field
                                              type="text"
                                              className="form-control input-style"
                                              id="question"
                                              name="question"
                                              placeholder=""
                                            />
                                            <ErrorMessage name="question" component="div" className="errorM" />
                                          </div>
                                        </div>
                                        <div className="col-md-12">
                                          <div id="" className="form-group">
                                            <label className="mb-1">Answer</label>
                                            {/* <Field
                                            component="textarea"
                                            className="form-control"
                                            id="description"
                                            rows="3"
                                            name="description"
                                            placeholder=""
                                          /> */}

                                            <RichTextEditor
                                              value={description}
                                              onChange={(e) => setDiscriptions(e)}
                                            />
                                            {/* <ErrorMessage name="description" component="div" className="errorM" /> */}
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

      <div
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
                const { data } = await postData('/faq/catagory/add', values);
                console.log("AddFAQ -> data", data)
                if (data) {
                  success("Catagory successfully added");
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
                  <a href="/faqCategory">All FAQ Categories</a>
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
      </div>
      <div className="sidenav-overlay"></div>
            <div className="drag-target"></div>
            <Footer />
    </>
  );
}
