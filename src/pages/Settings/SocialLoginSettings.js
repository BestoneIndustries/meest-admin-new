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


export default function SocialLoginSettings() {
  const [twitter, setTwitter] = useState("Enable");
  const [facebook, setFacebook] = useState("Enable");
  const [vkontakte, setVkontakte] = useState("Enable");
  const [googlePlus, setGooglePlus] = useState("Enable");
  const [linkedin, setLinkedin] = useState("Enable");
  const [instagram, setInstagram] = useState("Enable");

  const [socialLoginSettings, setSocialLoginSettings] = useState("");

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
    getSocialLoginSetting();
  }, []);


  async function getSocialLoginSetting() {
    const { data, code, errorMessage } = await postData('/setting/social/login/getAll');
    console.log("fetchData -> resData", data)
    setSocialLoginSettings(data);
    if (code) {

      const { socialLoginSettings, id } = data;
      setTwitter(socialLoginSettings.twitter ? "Enable" : "Disable");
      setFacebook(socialLoginSettings.facebook ? "Enable" : "Disable");
      setVkontakte(socialLoginSettings.vkontakte ? "Enable" : "Disable");
      setGooglePlus(socialLoginSettings.googlePlus ? "Enable" : "Disable");
      setLinkedin(socialLoginSettings.linkedin ? "Enable" : "Disable");
      setInstagram(socialLoginSettings.instagram ? "Enable" : "Disable");


      setSettingId(id);


      setSocialLoginSettings(data);

    }
  }

  async function updateSetting(body) {
    const { code, errorMessage } = await postData('/setting/social/login/update', { ...body, settingId: settingId });
    if (code) {
      success("Setting updated successfully");
    } else {
      error(errorMessage);
    }
  }

  const onSocialLoginSettingSave = () => {
    //console.log();
    const body = {
      twitter: twitter === "Enable" ? true : false,
      facebook: facebook === "Enable" ? true : false,
      vkontakte: vkontakte === "Enable" ? true : false,
      googlePlus: googlePlus === "Enable" ? true : false,
      linkedin: linkedin === "Enable" ? true : false,
      instagram: instagram === "Enable" ? true : false,

      //settingId : settingId


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
                      Social Login Settings
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">Social Login Settings</h4>
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
                                        <input type="radio" 
                                        name="Twitter"
                                        checked={twitter}
                                        onChange={(e)=>setTwitter(e.target.value)}
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
                                         name="Twitter" 
                                         checked={
                                           twitter === "Enable"
                                           ? false
                                           : true
                                         }
                                         onChange={(e)=>setTwitter(e.target.value)}
                                         value="Disable"
                                         />
                                        Disabled
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                              </div> */}
                              <NotificationSystem ref={notificationSystem} />
                              <div className="col-sm-12 mt-2">
                                <ul className="list-unstyled mb-0">
                                  <h5>MEEST</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio"
                                          name="facebook"
                                          checked={facebook}
                                          onChange={(e) => setFacebook(e.target.value)}
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
                                          name="facebook"
                                          checked={
                                            facebook === "Enable"
                                              ? false
                                              : true
                                          }
                                          onChange={(e) => setFacebook(e.target.value)}
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
                                  <h5>Vkontakte</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" 
                                        name="vkontakte"
                                        checked={vkontakte}
                                        onChange={(e)=>setVkontakte(e.target.value)}
                                        value="Enable" />
                                        Enable
                                      </label>
                                    </fieldset>
                                  </li>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="vkontakte"
                                        checked={
                                          vkontakte === "Enable"
                                          ? false
                                          : true
                                        }
                                        onChange={(e)=>setVkontakte(e.target.value)}
                                        value="Disable" />
                                        Disabled
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-12 mt-2">
                                <ul className="list-unstyled mb-0">
                                  <h5>Google+</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="google+" 
                                        checked={googlePlus}
                                        onChange={(e)=>setGooglePlus(e.target.value)}
                                        value="Enable"
                                        />
                                        Enable
                                      </label>
                                    </fieldset>
                                  </li>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="google+" 
                                        checked={
                                          googlePlus === "Enable"
                                          ? false
                                          : true
                                          
                                        }
                                        onChange={(e) =>
                                          setGooglePlus(e.target.value)
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
                                        <input type="radio" name="linkdin"
                                        checked={linkedin}
                                        onChange={(e)=>setLinkedin(e.target.value)}
                                        value="Enable" />
                                        Enable
                                      </label>
                                    </fieldset>
                                  </li>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="linkdin" 
                                        checked={
                                          linkedin === "Enable"
                                            ? false
                                            : true
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
                                  <h5>Instagram</h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="Instagram" 
                                         checked={instagram}
                                         onChange={(e) =>
                                           setInstagram(e.target.value)
                                         }
                                         value="Enable"/>
                                        Enable
                                      </label>
                                    </fieldset>
                                  </li>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input type="radio" name="Instagram"
                                        checked={
                                          instagram === "Enable"
                                            ? false
                                            : true
                                        }
                                        onChange={(e) =>
                                          setInstagram(e.target.value)
                                        }
                                        value="Disable"
                                         />
                                        Disabled
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                              </div> */}

                              <div className="col-sm-12 mt-3">
                                <button onClick={onSocialLoginSettingSave} className="btn btn-primary shadow">
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-8">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom border-bottom">
                          <h4 className="card-title col-md-4">API Keys </h4>
                        </div>
                        <Formik
                          enableReinitialize
                          initialValues={{
                            facebookAppId: socialLoginSettings && socialLoginSettings.ApiKeys ? socialLoginSettings.ApiKeys.facebookAppId : "",
                            facebookAppKey: socialLoginSettings && socialLoginSettings.ApiKeys ? socialLoginSettings.ApiKeys.facebookAppKey : "",
                            googleClientId: socialLoginSettings && socialLoginSettings.ApiKeys ? socialLoginSettings.ApiKeys.googleClientId : "",
                            googleClientKey: socialLoginSettings && socialLoginSettings.ApiKeys ? socialLoginSettings.ApiKeys.googleClientKey : "",
                            consumerAppId: socialLoginSettings && socialLoginSettings.ApiKeys ? socialLoginSettings.ApiKeys.consumerAppId : "",
                            consumerAppKey: socialLoginSettings && socialLoginSettings.ApiKeys ? socialLoginSettings.ApiKeys.consumerAppKey : "",
                            linkedinAppId: socialLoginSettings && socialLoginSettings.ApiKeys ? socialLoginSettings.ApiKeys.linkedinAppId : "",
                            linkedinAppKey: socialLoginSettings && socialLoginSettings.ApiKeys ? socialLoginSettings.ApiKeys.linkedinAppKey : "",
                            vkAppId: socialLoginSettings && socialLoginSettings.ApiKeys ? socialLoginSettings.ApiKeys.vkAppId : "",
                            vkAppKey: socialLoginSettings && socialLoginSettings.ApiKeys ? socialLoginSettings.ApiKeys.vkAppKey : "",
                            instagramAppId: socialLoginSettings && socialLoginSettings.ApiKeys ? socialLoginSettings.ApiKeys.instagramAppId : "",
                            instagramAppKey: socialLoginSettings && socialLoginSettings.ApiKeys ? socialLoginSettings.ApiKeys.instagramAppKey : "",
                          }}
                          validationSchema={Yup.object().shape({

                          })}
                          onSubmit={async (values, { setSubmitting, resetForm }) => {
                            values.settingId = "a84ff5fc-8638-475b-95b4-6fc81c0e64d8";
                            updateSetting(values);
                            //const { data } = await postData('/setting/social/login/update', values);
                            console.log('hello bro');
                            console.log(values);

                            // if (data) {
                            //   setSocialLoginSettings(data);
                            // }
                          }}
                          render={({ values, errors, touched, isSubmitting }) => {
                            return <Form className="col-7 col-md-9 pr-0 pl-0">
                              <div className="card-content">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>MEEST APP ID</label>
                                          <Field
                                            type="text"
                                            id="facebookAppId"
                                            name="facebookAppId"
                                            className="form-control"
                                            placeholder="Enter Facebook APP ID"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>MEEST APP Key</label>
                                          <Field
                                            type="text"
                                            id="facebookAppKey"
                                            name="facebookAppKey"
                                            className="form-control"
                                            placeholder="Enter Facebook APP Key"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* <div className="col-sm-12 mt-3">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>Google Client ID</label>
                                          <Field
                                            type="text"
                                            id="googleClientId"
                                            name="googleClientId"
                                            className="form-control"
                                            placeholder="Enter Google Client ID"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>Google Client Secret Key</label>
                                          <Field
                                            type="text"
                                            id="googleClientKey"
                                            name="googleClientKey"
                                            className="form-control"
                                            placeholder="Enter Google Client Secret Key"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-12 mt-3">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>Consumer APP ID</label>
                                          <Field
                                            type="text"
                                            id="consumerAppId"
                                            name="consumerAppId"
                                            className="form-control"
                                            placeholder="Enter Consumer APP ID"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>Consumer APP Key</label>
                                          <Field
                                            type="text"
                                            id="consumerAppKey"
                                            name="consumerAppKey"
                                            className="form-control"
                                            placeholder="Enter Consumer APP Key"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-sm-12 mt-3">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>Linkedin APP ID</label>
                                          <Field
                                            type="text"
                                            id="linkedinAppId"
                                            name="linkedinAppId"
                                            className="form-control"
                                            placeholder="Enter Linkedin APP ID"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>Linkedin APP Key</label>
                                          <Field
                                            type="text"
                                            id="linkedinAppKey"
                                            name="linkedinAppKey"
                                            className="form-control"
                                            placeholder="Enter Linkedin APP Key"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-sm-12 mt-3">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>VK APP ID</label>
                                          <Field
                                            type="text"
                                            id="vkAppId"
                                            name="vkAppId"
                                            className="form-control"
                                            placeholder="Enter VK APP ID"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>VK APP Key</label>
                                          <Field
                                            type="text"
                                            id="vkAppKey"
                                            name="vkAppKey"
                                            className="form-control"
                                            placeholder="Enter VK APP Key"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-sm-12 mt-3">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>Instagram APP ID</label>
                                          <Field
                                            type="text"
                                            id="instagramAppId"
                                            name="instagramAppId"
                                            className="form-control"
                                            placeholder="Enter Instagram APP ID"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>Instagram APP Key</label>
                                          <Field
                                            type="text"
                                            id="instagramAppKey"
                                            name="instagramAppKey"
                                            className="form-control"
                                            placeholder="Enter Instagram APP Key"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div> */}

                                    <div className="col-sm-12 mt-3">
                                      <button type="submit" className="btn btn-primary shadow">
                                        Save
                                </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Form>
                          }}
                        />
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
