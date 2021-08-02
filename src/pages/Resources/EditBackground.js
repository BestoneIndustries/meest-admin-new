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

export default function EditBackground() {
  const imageExts = ".jpg,.png,.gif"

  var notificationSystem = React.createRef();

  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [backgroundData, setBackgroundData] = useState("");
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
    console.log("Background -> resData", history.location.state)
    if (history.location.state) {
        getBackgroundId();
    }
  }, [])


  async function getBackgroundId() {
    console.log("Background -> id", history.location.state.id )
    if (history.location.state) {
      const resData = await postData('/follows/getBackgroundById', { id: history.location.state.id });
      if (resData && resData.code == 1) {
        console.log("Background -> resData", resData.data)
        setPreviewFile(resData.data.backgroundImage);
        setBackgroundData(resData.data);
      }
    } else {
      error("Session Loss");
    }
  }

  async function SaveBackground() {
    const Savedata={id:history.location.state.id}
    var SaveBackgroundData=false
    if(iconFile)
    {
      const formData = new FormData();
      formData.append("files", iconFile);
      var { data, code } = await postData('/media/insert', formData);
      if (code) {
        console.log(data)
        Savedata.backgroundImage = data.url
        SaveBackgroundData = true;
      } else {
        error("Server Error")
      }
    }
    if(SaveBackgroundData){
      console.log("SaveData: ", Savedata)
      const { code, data } = await postData('/follows/updateBackgroundImage', Savedata);
      if (code == 1) {
        success("Background successfully Updated");
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
                      <Link to="/Manage-Background">Background </Link>
                    </li>
                    <li className="breadcrumb-item active">Edit Background</li>
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
                            <h4 className="card-title">Edit Background</h4>
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
                                      <img  style={{"backgroundColor": "#cccccc", width:"100%"}} fluid src={PreviewFile}/>
                                      </a>
                                      <br /><br /><br />
                                      <div>Change Picture</div>
                                    </>
                                  ):(
                                    <div>Select Picture</div>
                                  )
                                }
                                <input accept={imageExts} style={{ display:"none"}}  type="file" onChange={event=>SetImage(event.target.files[0])} />
                            </label>
                            <div className="api-key-wrapper">
                              <div className="api-buttons mt-2">
                                <button 
                                    onClick={()=>SaveBackground()}
                                    type="submit" 
                                    className="btn btn-primary shadow waves-effect waves-light">
                                      SAVE
                                </button>
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
