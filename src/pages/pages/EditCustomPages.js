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
import SunEditor ,{buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

export default function EditCustomPages() {
  var notificationSystem = React.createRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [text, setText] = useState();

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
      getAboutPrivacyByType();
    }
  }, [])

  async function getAboutPrivacyByType() {
    if (history.location.state) {
      const resData = await postData('/aboutPrivacy/get', { type: history.location.state.type });
      if (resData && resData.code == 1) {
        console.log("getAboutPrivacy -> resData", resData)
        // setText(RichTextEditor.createValueFromString(resData.data[0].text, 'html'));
        setText(resData.data[0].text);
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
                      <Link to="/Manage-Custom-Pages">Pages </Link>
                    </li>
                    <li className="breadcrumb-item active">Edit Custom Page</li>
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
                            <h4 className="card-title">Edit Custom Page: {history.location.state && history.location.state.type}</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                            <Formik
                                enableReinitialize
                                initialValues={{
                                  text: text ? text.toString('html') : "",
                                }}
                                validationSchema={Yup.object().shape({
                                  text: Yup.string()
                                    .required('Content is required'),
                                })}
                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                  values['type'] = history.location.state.type;
                                  values['text'] = text;
                                  console.log("Update About Privacy -> data", values['text'])
                                  const { code, data } = await postData('/aboutPrivacy/update', values);
                                  console.log("Update About Privacy -> data", data)
                                  if (code == 1) {
                                    success("Custom Page Content successfully Updated");
                                    resetForm();
                                    history.goBack();
                                  } else {
                                    error("Server Error occurred");
                                  }
                                }}
                                render={({ values, errors, touched, isSubmitting }) => {
                                  return <Form>
                                    <div id="" className="form-group">
                                      <SunEditor
                                        setContents={text}
                                        onChange={(e) => setText(e)}
                                        setOptions={{
                                          height: "auto",
                                          buttonList: 
                                          buttonList.complex 
                                          // [
                                          //   ['font', 'align','format'],
                                          //   ['image'],
                                          //   ['video'],
                                          //   ['undo'],
                                          //   ['redo'],
                                          // ] 
                                        }}
                                      />
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
