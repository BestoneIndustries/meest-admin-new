import React, { useState, useContext, useEffect } from "react";

import Footer from "../../components/Footer";

import { Link } from "react-router-dom";


import { postData } from '../apicall/apiCall';

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';
import PushNotificationSettings from "../APISettings/PushNotificationSettings";



export default function VideoAudioSettings() {

  const [videoCallLimit, setVideoCallLimit] = useState("Enable");
  const [audioCallLimit, setAudioCallLimit] = useState("Enable");

  const [liveAccountSid, setLiveAccountSid] = useState("");
  const [apiKeySid, setApiKeySid] = useState("");
  const [apiKeySecret, setApiKeySecret] = useState("");



  const [settingId, setSettingId] = useState("");



  var notificationSystem = React.createRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [manageSiteFeatures, setManageSiteFeatures] = useState("");

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


  useEffect(() => {
    getVideoAudioSetting();
  }, []);


  async function getVideoAudioSetting() {
    const { data, code, errorMessage } = await postData('/setting/video/audio/chat/getAll');
    console.log("fetchData -> resData", data)
    if (code) {

      const { videoAudioCall, id } = data;

      setVideoCallLimit(videoAudioCall.videoCallLimit === "Enable" ? "Enable" : "Disable");
      setAudioCallLimit(videoAudioCall.adioCallLimit === "Enable" ? "Enable" : "Disable");

      setLiveAccountSid(videoAudioCall.liveAccountSid);
      setApiKeySid(videoAudioCall.apiKeySid);
      setApiKeySecret(videoAudioCall.apiKeySecret);
      setSettingId(id);

    }
  }

  async function updateSetting(body) {
    const { code, errorMessage } = await postData('/setting/video/audio/chat/update', { ...body, settingId: settingId });
    if (code) {
      success("Setting updated successfully");
    } else {
      error(errorMessage);
    }
  }

  const onVideoAudioSettingSave = () => {
    //console.log(videoCallLimit, audioCallLimit);
    const body = {

      videoCallLimit: videoCallLimit === "Enable" ? "Enable" : "Disable",
      adioCallLimit: audioCallLimit === "Enable" ? "Enable" : "Disable",

      liveAccountSid: liveAccountSid,
      apiKeySid: apiKeySid,
      apiKeySecret: apiKeySecret


    }
    updateSetting(body);
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
                      <Link to="/">Settings</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      {" "}
                      Video &amp; Audio Chat Settings
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-12 col-md-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">
                          Video &amp; Audio Chat Settings
                        </h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-12">
                            <ul className="list-unstyled mb-0">
                              <h5>Video Call Limits And Controls</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio"
                                      name="video_call_limit"
                                      checked={videoCallLimit}
                                      onChange={(e) =>
                                        setVideoCallLimit(e.target.value)
                                      }
                                      value="Enable"
                                    />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio"
                                      name="video_call_limit"
                                      checked={
                                        videoCallLimit === "Enable"
                                          ? false
                                          : true
                                      }
                                      onChange={(e) =>
                                        setVideoCallLimit(e.target.value)
                                      }
                                      value="Disable"
                                    />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <div className="dropdown">
                                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {apiKeySecret}
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#" onClick={() => setApiKeySecret(2)}>2</a>
                                    <a className="dropdown-item" href="#" onClick={() => setApiKeySecret(3)}>3</a>
                                    <a className="dropdown-item" href="#" onClick={() => setApiKeySecret(4)}>4</a>
                                    <a className="dropdown-item" href="#" onClick={() => setApiKeySecret(5)}>5</a>
                                    <a className="dropdown-item" href="#" onClick={() => setApiKeySecret(6)}>6</a>
                                    <a className="dropdown-item" href="#" onClick={() => setApiKeySecret(7)}>7</a>
                                    <a className="dropdown-item" href="#" onClick={() => setApiKeySecret(8)}>8</a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <NotificationSystem ref={notificationSystem} />
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Audio Call Limits And Controls</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio"
                                      name="audio_call_limit"
                                      checked={audioCallLimit}
                                      onChange={(e) =>
                                        setAudioCallLimit(e.target.value)
                                      }
                                      value="Enable"
                                    />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio"
                                      name="audio_call_limit"
                                      checked={
                                        audioCallLimit === "Enable"
                                          ? false
                                          : true
                                      }
                                      onChange={(e) =>
                                        setAudioCallLimit(e.target.value)
                                      }
                                      value="Disable"
                                    />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <div className="dropdown">
                                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {liveAccountSid}
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#" onClick={() => setLiveAccountSid(2)}>2</a>
                                    <a className="dropdown-item" href="#" onClick={() => setLiveAccountSid(3)}>3</a>
                                    <a className="dropdown-item" href="#" onClick={() => setLiveAccountSid(4)}>4</a>
                                    <a className="dropdown-item" href="#" onClick={() => setLiveAccountSid(5)}>5</a>
                                    <a className="dropdown-item" href="#" onClick={() => setLiveAccountSid(6)}>6</a>
                                    <a className="dropdown-item" href="#" onClick={() => setLiveAccountSid(7)}>7</a>
                                    <a className="dropdown-item" href="#" onClick={() => setLiveAccountSid(8)}>8</a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="col-sm-12 mt-2">
                            <p>
                              To start using this feature, you'll need to create
                              an account in Twilio and buy "Programmable Video"
                              product.
                            </p>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Live account Sid</label>
                                <input
                                  type="text"
                                  name="live_account_sid"
                                  className="form-control"
                                  placeholder="Enter Live account"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={liveAccountSid}
                                  onChange={(e) => setLiveAccountSid(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 ">
                            <div className="form-group">
                              <div className="controls">
                                <label>apiKeySid</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter apiKey"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={apiKeySid}
                                  onChange={(e) => setApiKeySid(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>apiKeySecret</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter apiKeySecret"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={apiKeySecret}
                                  onChange={(e) => setApiKeySecret(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div> */}

                          <div className="col-sm-12 mt-3">
                            <button onClick={onVideoAudioSettingSave} className="btn btn-primary shadow">
                              Save
                            </button>
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
