import React, { useState, useContext, useEffect } from "react";

import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

import { postData } from "../apicall/apiCall";

//import { useHistory } from "react-router-dom";
//import { UserContext } from "../../context/UserContext";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import NotificationSystem from "react-notification-system";
//import PushNotificationSettings from "../APISettings/PushNotificationSettings";

export default function EmailSmsSettings() {
  const [settingId, setSettingId] = useState("");

  const [serverType, setServerType] = useState("SMTP Server");

  const [smtpHost, setSmtpHost] = useState("");
  const [smtpUsername, setSmtpUsername] = useState("");
  const [smtpPassword, setSmtpPassword] = useState("");
  const [smtpPort, setSmtpPort] = useState("");
  const [serverTypeTSLSSL, setServerTypeTSLSSL] = useState("TLS");

  const [defaultSmsProvider, setDefaultSmsProvider] = useState("Twilio");
  const [bulkSmsApiProvider, setBulkSmsApiProvider] = useState("");
  const [bulkSmsUsername, setBulkSmsUsername] = useState("");
  const [bulkSmsPassword, setBulkSmsPassword] = useState("");
  const [twilioAccountSid, setTwilioAccountSid] = useState("");
  const [twilioAuthToken, setTwilioAuthToken] = useState("");
  const [twiliophoneNumber, setTwiliophoneNumber] = useState("");
  const [infobipUsername, setInfobipUsername] = useState("");
  const [infobipPassword, setInfobipPassword] = useState("");
  const [yourPhoneNumber, setYourPhoneNumber] = useState("");

  var notificationSystem = React.createRef();
  //onst { dispatch } = useContext(UserContext);
  //const history = useHistory();
  //const [manageSiteFeatures, setManageSiteFeatures] = useState("");

  const success = (msg) => {
    console.log("success -> msg", msg);
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: "success",
    });
  };

  const error = (msg) => {
    console.log("error -> msg", msg);
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: "error",
    });
  };

  useEffect(() => {
    getEmailSmsSetting();
  }, []);

  async function getEmailSmsSetting() {
    const { data, code, errorMessage } = await postData(
      "/setting/email/and/sms/getAll"
    );
    console.log("fetchData -> resData", data);

    if (code) {
      const { emailSettings, smsSettings, id } = data;
      setSettingId(id);
      setServerType(
        emailSettings.serverType === "SMTP Server"
          ? "SMTP Server"
          : "Server Mail"
      );
      setSmtpHost(emailSettings.smtpHost);
      setSmtpUsername(emailSettings.smtpUsername);
      setSmtpPassword(emailSettings.smtpPassword);
      setSmtpPort(emailSettings.smtpPort);
      setServerTypeTSLSSL(
        emailSettings.serverTypeTSLSSL === "TLS" ? "TLS" : "SSL"
      );

      setDefaultSmsProvider(
        smsSettings.defaultSmsProvider ===
        (
          (
            (("Twilio" || "BulkSMS") && ("Twilio" || "Infobip") && ("Twilio" || "Msg91"))
          )
            ? "Twilio"
            : (
              (
                ("BulkSMS" || "Infobip") && ("BulkSMS" || "Msg91")
              )
                ? "BulkSMS"

                : ("Infobip" ? "Infobip" : "Msg91")
            )
        )
      );
      setBulkSmsApiProvider(smsSettings.bulkSmsApiProvider);
      setBulkSmsUsername(smsSettings.bulkSmsUsername);
      setBulkSmsPassword(smsSettings.bulkSmsPassword);
      setTwilioAccountSid(smsSettings.twilioAccountSid);
      setTwilioAuthToken(smsSettings.twilioAuthToken);
      setTwiliophoneNumber(smsSettings.twiliophoneNumber);
      setInfobipUsername(smsSettings.infobipUsername);
      setInfobipPassword(smsSettings.infobipPassword);
      setYourPhoneNumber(smsSettings.yourPhoneNumber);
    }
  }

  async function updateSetting(body) {
    const { code, errorMessage } = await postData(
      "/setting/email/and/sms/update",
      {
        ...body,
        settingId: settingId,
      }
    );
    if (code) {
      success("Setting updated successfully");
    } else {
      error(errorMessage);
    }
  }

  const onEmailSmsSetting = () => {
    console.log("[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[", defaultSmsProvider);
    const body = {
      serverType: serverType === "SMTP Server" ? "SMTP Server" : "Server Mail",
      smtpHost: smtpHost,
      smtpUsername: smtpUsername,
      smtpPassword: smtpPassword,
      smtpPort: smtpPort,
      serverTypeTSLSSL: serverTypeTSLSSL === "TLS" ? "TLS" : "SSL",

      defaultSmsProvider: defaultSmsProvider ===
        (
          (
            (("Twilio" || "BulkSMS") && ("Twilio" || "Infobip") && ("Twilio" || "Msg91"))
          )
            ? "Twilio"
            : (
              (
                ("BulkSMS" || "Infobip") && ("BulkSMS" || "Msg91")
              )
                ? "BulkSMS"

                : ("Infobip" ? "Infobip" : "Msg91")
            )
        ),

      defaultSmsProvider: defaultSmsProvider,
      bulkSmsApiProvider: bulkSmsApiProvider,
      bulkSmsUsername: bulkSmsUsername,
      bulkSmsPassword: bulkSmsPassword,
      twilioAccountSid: twilioAccountSid,
      twilioAuthToken: twilioAuthToken,
      twiliophoneNumber: twiliophoneNumber,
      infobipUsername: infobipUsername,
      infobipPassword: infobipPassword,
      yourPhoneNumber: yourPhoneNumber,
    };
    updateSetting(body);
  };

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
                      E-mail &amp; SMS Settings
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <NotificationSystem ref={notificationSystem} />
          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">E-mail Settings</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <ul className="list-unstyled mb-0">
                          <h5>Server Type</h5>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input
                                  type="radio"
                                  name="server_type"
                                  checked={serverType}
                                  onChange={(e) =>
                                    setServerType(e.target.value)
                                  }
                                  value="SMTP Server"
                                />
                                SMTP Server
                              </label>
                            </fieldset>
                          </li>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input
                                  type="radio"
                                  name="server_type"
                                  checked={
                                    serverType === "SMTP Server" ? false : true
                                  }
                                  onChange={(e) =>
                                    setServerType(e.target.value)
                                  }
                                  value="Server Mail"
                                />
                                Server Mail (Default)
                              </label>
                            </fieldset>
                          </li>
                        </ul>
                        <br />
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>SMTP Host</label>
                                <input
                                  type="text"
                                  name="SMTP Host"
                                  className="form-control"
                                  placeholder="Enter SMTP Host"
                                  required=""
                                  aria-invalid="false"
                                  value={smtpHost}
                                  onChange={(e) => setSmtpHost(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>SMTP Username</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter SMTP Username"
                                  required=""
                                  aria-invalid="false"
                                  value={smtpUsername}
                                  onChange={(e) =>
                                    setSmtpUsername(e.target.value)
                                  }
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>SMTP Password</label>
                                <input
                                  type="password"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter SMTP Password"
                                  required=""
                                  aria-invalid="false"
                                  value={smtpPassword}
                                  onChange={(e) =>
                                    setSmtpPassword(e.target.value)
                                  }
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>SMTP Port</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter SMTP Port"
                                  required=""
                                  aria-invalid="false"
                                  value={smtpPort}
                                  onChange={(e) => setSmtpPort(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <ul className="list-unstyled mb-0">
                              <h5>Server Type</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="Server_TypeTLS"
                                      checked={serverTypeTSLSSL}
                                      onChange={(e) =>
                                        setServerTypeTSLSSL(e.target.value)
                                      }
                                      value="TLS"
                                    />
                                    TLS
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="Server_TypeTLS"
                                      checked={
                                        serverTypeTSLSSL === "TLS"
                                          ? false
                                          : true
                                      }
                                      onChange={(e) =>
                                        setServerTypeTSLSSL(e.target.value)
                                      }
                                      value="SSL"
                                    />
                                    SSL
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>

                          <div className="col-sm-12 mt-1">
                            <p>
                              After clicking "Test message", a test message will
                              be sent to your account email address.
                            </p>
                            <p style={{ color: "red" }}>
                              Please save the form before testing the server.
                            </p>

                            <button
                              onClick={onEmailSmsSetting}
                              className="btn btn-primary shadow"
                            >
                              Save
                            </button>
                            <a href="#" className="btn btn-warning shadow">
                              Test E-mail Server
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">SMS Settings</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <p>
                          To start sending SMS, you have to create an account
                          and buy credits in <a href="#"> Twilio </a> OR{" "}
                          <a href="#">BulkSMS </a> OR <a href="#">Infobip. </a>
                        </p>
                        <ul className="list-unstyled mb-0">
                          <h5>Default SMS provider</h5>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="Default_SMS_provider"
                                  checked={defaultSmsProvider}
                                  onChange={(e) =>
                                    setDefaultSmsProvider(e.target.value)}
                                  value={true} />
                                Twilio
                              </label>
                            </fieldset>
                          </li>
                          {/* name="server_type"
                                  checked={
                                    serverType === "SMTP Server" ? false : true
                                  }
                                  onChange={(e) =>
                                    setServerType(e.target.value)
                                  }
                                  value="Server Mail" */}
                          {/* <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="Default_SMS_provider"
                                  checked={
                                    defaultSmsProvider === "Twilio" ? false : true
                                  }
                                  onChange={(e) =>
                                    setDefaultSmsProvider(e.target.value)
                                  }
                                  value="BulkSMS" />
                                BulkSMS
                              </label>
                            </fieldset>
                          </li>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="Default_SMS_provider"
                                  checked={
                                    defaultSmsProvider === "Twilio" ? false : true
                                  }
                                  onChange={(e) =>
                                    setDefaultSmsProvider(e.target.value)
                                  }
                                  value="Infobip" />
                                Infobip
                              </label>
                            </fieldset>
                          </li>
                          <li className="d-inline-block mr-2">
                            <fieldset>
                              <label>
                                <input type="radio" name="Default_SMS_provider"
                                  checked={
                                    defaultSmsProvider === "Twilio" ? false : true
                                  }
                                  onChange={(e) =>
                                    setDefaultSmsProvider(e.target.value)
                                  }
                                  value="Msg91"
                                />
                                Msg91
                              </label>
                            </fieldset>
                          </li>
                       */}
                        </ul>
                        <br />
                        <div className="row">
                          {/* <div className="col-sm-12 mt-2">
                            <div className="form-group">
                              <div className="controls">
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="BulkSMS Eapi_URL"
                                  required=""
                                  aria-invalid="false"
                                  value={bulkSmsApiProvider}
                                  onChange={(e) => setBulkSmsApiProvider(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="controls">
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="BulkSMS Username"
                                  required=""
                                  aria-invalid="false"
                                  value={bulkSmsUsername}
                                  onChange={(e) => setBulkSmsUsername(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="controls">
                                <input
                                  type="password"
                                  name="text"
                                  className="form-control"
                                  placeholder="BulkSMS Password"
                                  required=""
                                  aria-invalid="false"
                                  value={bulkSmsPassword}
                                  onChange={(e) => setBulkSmsPassword(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div> */}

                          <div className="col-sm-12 mt-3">
                            <div className="form-group">
                              <div className="controls">
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Twilio account_sid"
                                  required=""
                                  aria-invalid="false"
                                  value={twilioAccountSid}
                                  onChange={(e) => setTwilioAccountSid(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="controls">
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Twilio auth_token"
                                  required=""
                                  aria-invalid="false"
                                  value={twilioAuthToken}
                                  onChange={(e) => setTwilioAuthToken(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="controls">
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Twilio Phone Number"
                                  required=""
                                  aria-invalid="false"
                                  value={twiliophoneNumber}
                                  onChange={(e) => setTwiliophoneNumber(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* <div className="col-sm-12 mt-3">
                            <div className="form-group">
                              <div className="controls">
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Infobip Username"
                                  required=""
                                  aria-invalid="false"
                                  value={infobipUsername}
                                  onChange={(e) => setInfobipUsername(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="controls">
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Infobip Password"
                                  required=""
                                  aria-invalid="false"
                                  value={infobipPassword}
                                  onChange={(e) => setInfobipPassword(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div> */}

                          <div className="col-sm-12 mt-3">
                            <div className="form-group">
                              <div className="controls">
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Your Phone number e.g (+9053..)"
                                  required=""
                                  aria-invalid="false"
                                  value={yourPhoneNumber}
                                  onChange={(e) => setYourPhoneNumber(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 mt-1">
                            <p>
                              After clicking "Test Server", a test message will
                              be sent to your phone.
                            </p>
                            <p style={{ color: "red" }}>
                              Please save the form before testing the server.
                            </p>

                            <button
                              onClick={onEmailSmsSetting} className="btn btn-primary shadow">
                              Save
                            </button>
                            <a href="#" className="btn btn-warning shadow">
                              Test SMS Server
                            </a>
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
