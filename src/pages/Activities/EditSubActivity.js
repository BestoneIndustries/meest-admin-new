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

export default function EditSubActivity() {
  const imageExts = ".jpg,.png,.gif"

  var notificationSystem = React.createRef();

  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [subActivityData, setSubActivityData] = useState("");
  const [activityData, setAactivityData] = useState();
  const [PreviewFile, setPreviewFile] = useState("");
  const [iconFile, setIconFile] = useState();

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

  const SetImage = (file) => {
    if(file){
      setIconFile(file);
      setPreviewFile(URL.createObjectURL(file))
    }
  };
  useEffect(() => {
    console.log("fetchData -> sub activity ID", history.location.state.id)
    
    if (history.location.state) {
        getSubActivityId();
    }
  }, [])


  async function getSubActivityId() {
    await getActivities();
    if (history.location.state) {
      const resData = await postData('/post/activity/sub/get', { id: history.location.state.id });
      if (resData && resData.code == 1) {
        console.log("Sub Activity -> resData", resData.data)
        setPreviewFile(resData.data.icon);
        setSubActivityData(resData.data);
      }
    } else {
      error("Session Loss");
    }
  }
  async function getActivities() {
    const resData = await postData('/post/activity/getAll');
    console.log("fetchData -> resData", resData.data.rows)
    if (resData) {
        setAactivityData(resData.data.rows);
    }
  }

  async function SaveSubActivity(Savedata) {
    
    var SaveActivityData=true
    if(iconFile){
      const formData = new FormData();
      formData.append("files", iconFile);
      var { data, code } = await postData('/media/insert', formData);
      console.log("image Data",data )
      if (code == 1) {
        Savedata.icon = data.url
      } else {
        error("Server Error occurred");
        SaveActivityData = false;
      }
    }
    if(SaveActivityData){
      console.log("SaveData: ", Savedata)
      const { code, data } = await postData('/post/activity/sub/update', Savedata);
      console.log("Saving Data",data )
      if (code == 1) {
        success("Sub Activity successfully Updated");
        history.goBack();
      } else {
        error("Server Error occurred");
      }
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
                      <Link to="/Manage-Activities">Sub Activity </Link>
                    </li>
                    <li className="breadcrumb-item active">Edit Sub Activity</li>
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
                            <h4 className="card-title">Edit Sub Activity</h4>
                          </div>
                        </div>
                        
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                              
                            <label style={{ width: "100%" }}   className="btn btn-lg btn-primary">
                                { PreviewFile? (
                                    <>
                                      <a
                                        href={PreviewFile}
                                        data-lightbox="post-article-gallery"
                                        data-title=""
                                        className="link-preview"
                                      >
                                      <img style={{"backgroundColor": "#cccccc", width:"100%"}} fluid src={PreviewFile}/>
                                      </a>
                                      <br /><br /><br />
                                      <div>Change Picture</div>
                                    </>
                                  ):(
                                    <div>Select Picture</div>
                                  )
                                }
                                <input accept={imageExts}  style={{ display:"none"}}  type="file" onChange={event=>SetImage(event.target.files[0])} />
                            </label>
                            <div className="api-key-wrapper">
                              { 
                                <Formik
                                enableReinitialize
                                initialValues={{
                                    activityId: subActivityData &&  subActivityData.activityId,
                                    title: subActivityData &&  subActivityData.title,
                                    description: subActivityData &&  subActivityData.description ,
                                }}
                                validationSchema={Yup.object().shape({
                                    activityId: Yup.string()
                                    .required('Please Select Activity'),
                                    title: Yup.string()
                                    .required('Title is required'),
                                    description: Yup.string()
                                    .required('Description is required')
                                })}
                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                  values['id'] = history.location.state.id;
                                  values['activityId'] =values.activityId;
                                  values['title'] =values.title;
                                  values['description'] = values.description;
                                  SaveSubActivity(values)
                                }}
                                render={({ values, errors, touched, isSubmitting }) => {
                                    
                                  return <Form>
                                    
                                    <div className="form-group">
                                      <label className="mb-1">Activity</label>
                                      <Field
                                        component="select"
                                        className="select2-size-lg form-control"
                                        id="activityId"
                                        name="activityId"
                                      >
                                        <option value="">Select a category</option>
                                        {activityData && activityData.map((ele, i) => {
                                          return <option value={ele.id}>{ele.title}</option>
                                        })
                                        }
                                      </Field>
                                      <ErrorMessage name="activityId" component="div" className="errorM" />
                                    </div>
                                    <div id="" className="form-group">
                                      <label className="mb-1">Title</label>
                                      <Field
                                        type="text"
                                        className="form-control input-style"
                                        id="title"
                                        name="title"
                                        placeholder=""
                                      />
                                      <ErrorMessage name="title" component="div" className="errorM" />
                                    </div>
                                    <div id="" className="form-group">
                                      <label className="mb-1">Description</label>
                                      <Field
                                        type="textarea"
                                        className="form-control input-style"
                                        id="description"
                                        name="description"
                                        placeholder=""
                                      />
                                      <ErrorMessage name="description" component="div" className="errorM" />
                                      
                                    </div>
                                    <div className="api-buttons mt-2">
                                        <button type="submit" className="btn btn-primary shadow waves-effect waves-light">
                                            SAVE
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
