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

export default function EditFAQCategory() {

  var notificationSystem = React.createRef();

  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [faqCategoryResponse, setFAQCategory] = useState("");

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
    if (history.location.state) {
      getFaqCategoryById();
    }
  }, [])


  async function getFaqCategoryById() {
    if (history.location.state) {
      const resData = await postData('/faq/catagory/getAllCategory');
      if (resData && resData.code == 1) {
        console.log("getFAQBYCatagory -> resData", resData.data.rows.find(e=>e.id===history.location.state.id))
        setFAQCategory(resData.data.rows.find(e=>e.id===history.location.state.id));
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
                      <Link to="/faqCategory">FAQ Category </Link>
                    </li>
                    <li className="breadcrumb-item active">Edit FAQ Category</li>
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
                            <h4 className="card-title">Edit FAQ Category</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <Formik
                                enableReinitialize
                                initialValues={{
                                  catagoryName: faqCategoryResponse ? faqCategoryResponse.catagoryName : "",
                                  status: faqCategoryResponse ? faqCategoryResponse.status : "",
                                }}
                                validationSchema={Yup.object().shape({
                                  catagoryName: Yup.string()
                                    .required('Category Name is required'),
                                })}
                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                  values['catagoryId'] = history.location.state.id;
                                  values['catagoryName'] = values.catagoryName;
                                  values['status'] = values.status == "false" ? false : true;
                                  const { code, data } = await postData('/faq/catagory/update', values);
                                  console.log("Edit FAQ Category -> data", data)
                                  if (code == 1) {
                                    success("FAQ Category successfully Updated");
                                    resetForm();
                                    history.goBack();
                                  } else {
                                    error("Server Error occurred");
                                  }
                                }}
                                render={({ values, errors, touched, isSubmitting }) => {
                                  return <Form>
                                    <div id="" className="form-group">
                                      <label className="mb-1">Category Name</label>
                                      <Field
                                        type="text"
                                        className="form-control input-style"
                                        id="catagoryName"
                                        name="catagoryName"
                                        placeholder=""
                                      />
                                      <ErrorMessage name="catagoryName" component="div" className="errorM" />
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
