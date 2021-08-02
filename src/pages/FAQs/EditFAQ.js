import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";
import { postData } from '../apicall/apiCall';

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';
import RichTextEditor from 'react-rte';

export default function EditFAQ() {

  var notificationSystem = React.createRef();

  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [category, setCategory] = useState("");
  const [faqResponse, setFAQ] = useState("");
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
    if (history.location.state) {
      getFaqById();
    }
  }, [])

  async function fetchData() {
    const resData = await postData('/faq/catagory/getAll');
    console.log("fetchData -> resData", resData.data)
    if (resData && resData.code == 1) {
      setCategory(resData.data);
    }
  }

  async function getFaqById() {
    if (history.location.state) {
      const resData = await postData('/faq/getOne', { faqId: history.location.state.id });
      if (resData && resData.code == 1) {
        console.log("getFAQBYCatagory -> resData", resData)
        setFAQ(resData.data);
        setDiscriptions(RichTextEditor.createValueFromString(resData.data.description, 'html'));
      }
    } else {
      error("Session Loss");
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
                    <li className="breadcrumb-item active">Edit FAQs</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <NotificationSystem ref={notificationSystem} />
          <div className="content-body">
            <section id="basic-datatable">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">Edit FAQs</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <Formik
                                enableReinitialize
                                initialValues={{
                                  question: faqResponse ? faqResponse.question : "",
                                  description: faqResponse ? faqResponse.description : "",
                                  catagoryId: faqResponse ? faqResponse.faqCatagory.id : "",
                                  status: faqResponse ? faqResponse.status : ""
                                }}
                                validationSchema={Yup.object().shape({
                                  question: Yup.string()
                                    .required('Question is required'),
                                  // description: Yup.string()
                                  //   .required('Description is required'),
                                  catagoryId: Yup.string()
                                    .required('Catagory is required'),
                                  status: Yup.bool()
                                    .required('Status is required')
                                })}
                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                  values['faqId'] = history.location.state.id;
                                  values['status'] = values.status == "false" ? false : true;
                                  values['description'] = description.toString('html');


                                  // console.log("Update About Privacy -> data", values)
                                  const { code, data } = await postData('/faq/update', values);
                                  console.log("AddFAQ -> data", data)
                                  if (code == 1) {
                                    success("FAQ successfully Updated");
                                    resetForm();
                                    history.goBack();
                                  } else {
                                    error("Server Error occurred");
                                  }
                                }}
                                render={({ values, errors, touched, isSubmitting }) => {
                                  return <Form>
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
                                    <div id="" className="form-group">
                                      <label className="mb-1">Answer</label>
                                      <RichTextEditor
                                        value={description}
                                        onChange={(e) => setDiscriptions(e)}
                                      />
                                      {/* <Field
                                        component="textarea"
                                        className="form-control"
                                        id="description"
                                        rows="3"
                                        name="description"
                                        placeholder=""
                                      /> */}
                                      {/* <ErrorMessage name="description" component="div" className="errorM" /> */}
                                    </div>
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
                                    <div className="api-buttons mt-2">
                                      <button type="submit" className="btn btn-primary shadow waves-effect waves-light">
                                        SAVE
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

      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>

      <Footer />
    </>
  );
}
