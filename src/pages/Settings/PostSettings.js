import React, { useState, useContext, useEffect } from "react";

import Footer from "../../components/Footer";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { postData } from "../apicall/apiCall";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field, ErrorMessage, FormikProvider } from "formik";
import * as Yup from "yup";
import PushNotificationSettings from "../APISettings/PushNotificationSettings";

export default function PostSettings() {
  const [Twitter, setTwitter] = useState("Enable");
  const [Facebook, setFacebook] = useState("Enable");
  const [whatsApp, setWhats] = useState("Enable");
  const [Pinterest, setPinterest] = useState("Enable");
  const [Linkedin, setLinkedin] = useState("Enable");
  const [Telegram, setTelegram] = useState("Enable");

  // const [CommentReports, setCommentReports] = useState("Enable");
  // const [setWatermark, Watermark] = useState("Enable");
  // const [coloredPostsSystem, setcoloredPostsSystem] = useState("Enable");
  // const [postApprovalSystem, setPostApprovalSystem] = useState("Enable");

  const [state, setState] = useState({});
  const handleChnage = (e) => {
    const object = state;
    object[e.target.name] = e.target.value;
    setState(object);
  };
  const [settingId, setSettingId] = useState("");
  const [userReg, setuserReg] = useState();

  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [generalSetting, setGenralSetting] = useState("");

  useEffect(() => {
    getGenralSSetting();
  }, []);

  async function getGenralSSetting() {
    const { data, code, errorMessage } = await postData(
      "/setting/posts/getAll",
      {}
    );
    if (code) {
      const { twitter, facebook, whatsApp, pinterest, linkedin, telegram } =
        data.socialShareLinks;
      setTwitter(twitter ? "Enable" : "Disable");
      setFacebook(facebook ? "Enable" : "Disable");
      setWhats(whatsApp ? "Enable" : "Disable");
      setPinterest(pinterest ? "Enable" : "Disable");
      setLinkedin(linkedin ? "Enable" : "Disable");
      setTelegram(telegram ? "Enable" : "Disable");
      setSettingId(data.id);
      setState(data.postSetting);
    }
  }

  async function onPostSetting() {
    const { code } = await postData("/setting/posts/update", {
      ...state,
      settingId,
    });
    if (code) {
      success("Setting changed successfully");
    }
  }

  const success = (msg) => toast(msg);
  const error = (msg) => toast.error(msg);

  async function onSavePostSetting() {
    const data = {
      twitter: Twitter == "Enable" ? true : false,
      facebook: Facebook == "Enable" ? true : false,
      whatsApp: whatsApp == "Enable" ? true : false,
      pinterest: Pinterest == "Enable" ? true : false,
      linkedin: Linkedin == "Enable" ? true : false,
      telegram: Telegram == "Enable" ? true : false,
      settingId: settingId,
    };
    const { code } = await postData("/setting/posts/update", data);
    if (code) {
      success("Setting changed successfully");
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
                      <Link to="/">Settings</Link>
                    </li>
                    <li className="breadcrumb-item active"> Post Settings</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <ToastContainer />
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">Social share links</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <div className="row">
                              {/* <div className="col-sm-12">
                                <ul className="list-unstyled mb-0">
                                  <h5>Twitter</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="Twitter"

                                          checked={
                                            Twitter === "Enable" ? true : false
                                          }
                                          onChange={(e) =>
                                            setTwitter(e.target.value)
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
                                        <input type="radio" name="Twitter"
                                          checked={
                                            Twitter === "Disable" ? true : false
                                          }
                                          onChange={(e) =>
                                            setTwitter(e.target.value)
                                          }
                                          value="Disable" />
                                        Disabled
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                              </div>
                             */}
                              <div className="col-sm-12 mt-2">
                                <ul className="list-unstyled mb-0">
                                  <h5>MEEST</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input
                                          type="radio"
                                          name="Facebook"
                                          checked={
                                            Facebook === "Enable" ? true : false
                                          }
                                          onChange={(e) =>
                                            setFacebook(e.target.value)
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
                                        <input
                                          type="radio"
                                          name="Facebook"
                                          checked={
                                            Facebook === "Disable"
                                              ? true
                                              : false
                                          }
                                          onChange={(e) =>
                                            setFacebook(e.target.value)
                                          }
                                          value="Disable"
                                        />
                                        Disabled
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                              </div>
                              {/* <div className="col-sm-12 mt-2">
                                <ul className="list-unstyled mb-0">
                                  <h5>What's app</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="What"
                                          checked={
                                            whatsApp === "Enable" ? true : false
                                          }
                                          onChange={(e) =>
                                            setWhats(e.target.value)
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
                                        <input type="radio" name="What"
                                          checked={
                                            whatsApp === "Disable" ? true : false
                                          }
                                          onChange={(e) =>
                                            setWhats(e.target.value)
                                          }
                                          value="Disable"
                                        />
                                        Disabled
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-12 mt-2">
                                <ul className="list-unstyled mb-0">
                                  <h5>Pinterest</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="Pinterest"
                                          checked={
                                            Pinterest === "Enable" ? true : false
                                          }
                                          onChange={(e) =>
                                            setPinterest(e.target.value)
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
                                        <input type="radio" name="Pinterest"
                                          checked={
                                            Pinterest === "Disable" ? true : false
                                          }
                                          onChange={(e) =>
                                            setPinterest(e.target.value)
                                          }
                                          value="Disable"
                                        />
                                        Disabled
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-12 mt-2">
                                <ul className="list-unstyled mb-0">
                                  <h5>Linkedin</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="Linkedin"
                                          checked={
                                            Linkedin === "Enable" ? true : false
                                          }
                                          onChange={(e) =>
                                            setLinkedin(e.target.value)
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
                                        <input type="radio" name="Linkedin"
                                          checked={
                                            Linkedin === "Disable" ? true : false
                                          }
                                          onChange={(e) =>
                                            setLinkedin(e.target.value)
                                          }
                                          value="Disable"
                                        />
                                        Disabled
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-12 mt-2">
                                <ul className="list-unstyled mb-0">
                                  <h5>Telegram</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="Telegram"
                                          checked={
                                            Telegram === "Enable" ? true : false
                                          }
                                          onChange={(e) =>
                                            setTelegram(e.target.value)
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
                                        <input type="radio" name="Telegram"
                                          checked={
                                            Telegram === "Disable" ? true : false
                                          }
                                          onChange={(e) =>
                                            setTelegram(e.target.value)
                                          }
                                          value="Disable"
                                        />
                                        Disabled
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                              </div>
                            */}
                              <div className="col-sm-12 mt-3">
                                <a
                                  href="#"
                                  className="btn btn-primary shadow"
                                  onClick={() => onSavePostSetting()}
                                >
                                  Save
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <h4 className="card-title">Post Settings </h4>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-12">
                                <ul className="list-unstyled mb-0">
                                  <h5> Comment reports</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="commentReports" onClick={handleChnage} value="e" checked={state.commentReports == "e" ? true : false} />
                                        Enable
                                      </label>
                                    </fieldset>
                                  </li>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="radio" name="commentReports" onClick={handleChnage} value="d" checked={state.commentReports = "d" ? true : false} />
                                        Disabled
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-12 mt-2">
                                <ul className="list-unstyled mb-0">
                                  <h5>Watermark Overlay</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="watermarkOverlay" onClick={handleChnage} value="e" checked={state.watermarkOverlay == "e" ? true : false} />
                                        Enable
                                      </label>
                                    </fieldset>
                                  </li>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="watermarkOverlay" onClick={handleChnage} value="d" checked={!state.watermarkOverlay} />
                                        Disabled
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                                <p>Icon Path: ./themes/wowonder/img/icon.png</p>
                              </div>
                              <div className="col-sm-12 mt-2">
                                <ul className="list-unstyled mb-0">
                                  <h5>Colored Posts System</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="colouredPostsSystem" onClick={handleChnage} checked={state.colouredPostsSystem} defaultValue={state.colouredPostsSystem} />
                                        Enable
                                      </label>
                                    </fieldset>
                                  </li>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="colouredPostsSystem" onClick={handleChnage} checked={state.colouredPostsSystem ? false : true} defaultValue={state.colouredPostsSystem} />
                                        Disabled
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-12 mt-2">
                                <ul className="list-unstyled mb-0">
                                  <h5>Post Approval System</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="postApprovalSystem" onClick={handleChnage} defaultValue={state.postApprovalSystem} checked={state.postApprovalSystem} />
                                        Enable
                                      </label>
                                    </fieldset>
                                  </li>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="radio" name="postApprovalSystem" onClick={handleChnage} defaultValue={state.postApprovalSystem} checked={state.postApprovalSystem ? false : true} />
                                        Disabled
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-12 mt-2">
                                <h6>Max Allowed Characters Length</h6>
                                <div className="form-group">
                                  <select
                                    className="select2 form-control select2-hidden-accessible"
                                    data-select2-id="1"
                                    tabindex="-1"
                                    defaultValue={state.maxCharLength}
                                    name="maxCharLength"
                                    onClick={handleChnage}
                                    aria-hidden="true"
                                  >
                                    <option value="80" data-select2-id="3">
                                      80 Characters
                                    </option>
                                    <option value="160">
                                      160 Characters
                                    </option>
                                    <option value="320">
                                      320 Characters
                                    </option>
                                    <option value="640">
                                      640 Characters
                                    </option>
                                    <option value="1280">
                                      1280 Characters
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <h6>View Home Page Posts</h6>
                                <div className="form-group">
                                  <select
                                    className="select2 form-control select2-hidden-accessible"
                                    data-select2-id="1"
                                    tabindex="-1"
                                    defaultValue={state.viewHomepagePosts}
                                    name="viewHomepagePosts"
                                    onClick={handleChnage}
                                    aria-hidden="true"
                                  >
                                    <option value="Default" data-select2-id="3">
                                      Default(show what User is following)
                                    </option>
                                    <option value="all">All Post</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>
                                      Post Limit For Per User p/hour
                                    </label>
                                    <input
                                      type="text"
                                      name="postsLimit"
                                      defaultValue={state.postsLimit}
                                      onClick={handleChnage}
                                      className="form-control"
                                      placeholder="Enter Post Limit For Per User p/hour"
                                      required=""
                                      aria-invalid="false"
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12 mt-3">
                                <a href="#" className="btn btn-primary shadow" onClick={() => onPostSetting()}>
                                  Save
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              */}
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
