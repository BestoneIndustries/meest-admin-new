import React, { useState, useContext, useEffect } from "react";

import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

import { postData } from "../apicall/apiCall";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NotificationSystem from "react-notification-system";
import PushNotificationSettings from "../APISettings/PushNotificationSettings";

export default function StorageSettings() {
  const [settingId, setSettingId] = useState("");

  const [state, setState] = useState({ select1: "", select2: "" });

  const [ammazonStorage, setAmmazonStorage] = useState("Enable");

  const [amazonBucketName, setAmazonBucketName] = useState("");
  const [amazonKey, setAmazonKey] = useState("");
  const [amazonSecretKey, setAmazonSecretKey] = useState("");

  const [amazonBucketRegion, setAmazonBucketRegion] = useState("");

  const [ftpStorage, setFtpStorage] = useState("Enable");

  const [ftpHostName, setFtpHostName] = useState("");
  const [ftpUsername, setFtpUsername] = useState("");
  const [ftpPassword, setFtpPassword] = useState("");
  const [ftpPort, setFtpPort] = useState("");
  const [ftpPath, setFtpPath] = useState("");

  const [digitaloceanStorage, setDigitaloceanStorage] = useState("Enable");

  const [digitaloceanSpaceName, setDigitaloceanSpaceName] = useState("");
  const [digitaloceanKey, setDigitaloceanKey] = useState("");
  const [digitaloceanSecretKey, setDigitaloceanSecretKey] = useState("");
  const [digitaloceanBucketRegion, setDigitaloceanBucketRegion] = useState("");

  var notificationSystem = React.createRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  // const [manageSiteFeatures, setManageSiteFeatures] = useState("");

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

  const handleChnage = (e) => {
    var object = state;
    // var object2 = state2;
    //var object3 = state3;

    object[e.target.name] = e.target.value;
    //object2[e.target.name] = e.target.value;
    // object3[e.target.name] = e.target.value;
    //console.log("===========================================================",e.target.value);
    setState(object);

    //setState2(object2);
    // setState3(object3);
  };

  useEffect(() => {
    getStorageSetting();
  }, []);

  async function getStorageSetting() {
    const { data, code, errorMessage } = await postData(
      "/setting/storage/getAll"
    );
    console.log("fetchData -> resData", data);
    if (code) {
      const { amazonSetting, ftpSetting, digitalOceanSpaceSetting, id } = data;

      setAmmazonStorage(amazonSetting.ammazonStorage ? "Enable" : "Disable");

      setAmazonBucketName(amazonSetting.amazonBucketName);
      setAmazonKey(amazonSetting.amazonKey);
      setAmazonSecretKey(amazonSetting.amazonSecretKey);
      setAmazonBucketRegion(amazonSetting.amazonBucketRegion);
      setSettingId(id);

      setFtpStorage(ftpSetting.ftpStorage ? "Enable" : "Disable");
      setFtpHostName(ftpSetting.ftpHostName);
      setFtpUsername(ftpSetting.ftpUsername);
      setFtpPassword(ftpSetting.ftpPassword);
      setFtpPort(ftpSetting.ftpPort);
      setFtpPath(ftpSetting.ftpPath);

      setDigitaloceanStorage(
        digitalOceanSpaceSetting.digitaloceanStorage ? "Enable" : "Disable"
      );
      setDigitaloceanSpaceName(digitalOceanSpaceSetting.digitaloceanSpaceName);
      setDigitaloceanKey(digitalOceanSpaceSetting.digitaloceanKey);
      setDigitaloceanSecretKey(digitalOceanSpaceSetting.DigitaloceanSecretKey);
      setDigitaloceanBucketRegion(
        digitalOceanSpaceSetting.digitaloceanBucketRegion
      );
    }
  }

  async function updateSetting(body) {
    const { code, errorMessage } = await postData("/setting/storage/update", {
      ...body,
      settingId: settingId,
    });
    if (code) {
      success("Setting updated successfully");
    } else {
      error(errorMessage);
    }
  }

  const onStorageSetting = () => {
    //console.log(videoCallLimit, audioCallLimit);
    const body = {
      ammazonStorage: ammazonStorage === "Enable" ? true : false,
      amazonBucketName: amazonBucketName,
      amazonKey: amazonKey,
      amazonSecretKey: amazonSecretKey,
      amazonBucketRegion: state.select1,

      ftpStorage: ftpStorage === "Enable" ? true : false,
      ftpHostName: ftpHostName,
      ftpUsername: ftpUsername,
      ftpPassword: ftpPassword,
      ftpPort: ftpPort,
      ftpPath: ftpPath,

      digitaloceanStorage: digitaloceanStorage === "Enable" ? true : false,
      digitaloceanSpaceName: digitaloceanSpaceName,
      digitaloceanKey: digitaloceanKey,
      DigitaloceanSecretKey: digitaloceanSecretKey,
      digitaloceanBucketRegion: state.select2,
    };
    updateSetting(body);
  };

  return (
    <>
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
          <div className="alert alert-warning">
            <i className="fa fa-fw fa-exclamation-triangle"></i>{" "}
            <strong>Important:</strong> You can't enable two or three storages
            at the same time, if you enable FTP, amazon s3 will be automatically
            disabled, same for amazon s3 and Digitalocean.
          </div>

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
                      Configure Storage Settings
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">Amazon S3 Settings</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <div className="">
                              <ul className="list-unstyled mb-0">
                                <h5>Amazon S3 Storage</h5>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="Amazon_S3_Storage"
                                        checked={ammazonStorage}
                                        onChange={(e) =>
                                          setAmmazonStorage(e.target.value)
                                        }
                                        value="0"
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
                                        name="Amazon_S3_Storage"
                                        checked={
                                          ammazonStorage === "0" ? false : true
                                        }
                                        onChange={(e) =>
                                          setAmmazonStorage(e.target.value)
                                        }
                                        value="Disable"
                                      />
                                      Disabled
                                    </label>
                                  </fieldset>
                                </li>
                              </ul>
                            </div>
                            <NotificationSystem ref={notificationSystem} />
                            <div className="row">
                              <div className="col-sm-12 mt-2">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>Amazon Bucket Name</label>
                                    <input
                                      type="text"
                                      name="amazon_bucket_name"
                                      className="form-control"
                                      placeholder="Enter Amazon Bucket Name"
                                      required=""
                                      aria-invalid="false"
                                      value={amazonBucketName}
                                      onChange={(e) =>
                                        setAmazonBucketName(e.target.value)
                                      }
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>Amazon S3 Key</label>
                                    <input
                                      type="text"
                                      name="Amazon_S3_Key"
                                      className="form-control"
                                      placeholder="Enter Amazon S3 Key"
                                      required=""
                                      aria-invalid="false"
                                      value={amazonKey}
                                      onChange={(e) =>
                                        setAmazonKey(e.target.value)
                                      }
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>Amazon S3 Secret Key</label>
                                    <input
                                      type="text"
                                      name="amazon_secret_key"
                                      className="form-control"
                                      placeholder="Enter Amazon S3 Secret Key"
                                      required=""
                                      aria-invalid="false"
                                      value={amazonSecretKey}
                                      onChange={(e) =>
                                        setAmazonSecretKey(e.target.value)
                                      }
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12 mt-2">
                                <h6>Amazon S3 bucket Region</h6>
                                <div className="form-group">
                                  <select
                                    className="select2 form-control select2-hidden-accessible"
                                    data-select2-id="1"
                                    tabindex="-1"
                                    aria-hidden="true"
                                    name="select1"
                                    onChange={handleChnage}
                                  >
                                    <option>{amazonBucketRegion} </option>

                                    <option name="USD" value="US East">
                                      US East
                                    </option>

                                    <option name="EUR" value="Asia Pacific">
                                      Asia Pacific
                                    </option>

                                    <option name="AUD" value="US West">
                                      US West
                                    </option>

                                    <option name="BRL" value="Canada">
                                      Canada
                                    </option>
                                  </select>
                                </div>

                                <br />
                                <p>
                                  1. Before enabling Amazon S3, make sure you
                                  upload the whole "upload/" folder to your
                                  bucket.{" "}
                                </p>
                                <p>
                                  2. Before disabling Amazon S3, make sure you
                                  download the whole "upload/" folder to your
                                  server.
                                </p>
                                <p>
                                  3. We recommend to upload the folder and files
                                  via S3cmd.{" "}
                                </p>
                                <p>
                                  4. If your site is still brand new, you can
                                  escape the upload step, but make sure to click
                                  on "Test Connection".
                                </p>
                              </div>
                              <div className="col-sm-12 mt-3">
                                <button
                                  onClick={onStorageSetting}
                                  className="btn btn-primary shadow"
                                >
                                  Save
                                </button>
                                <a href="#" className="btn btn-warning shadow">
                                  Test Connection
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-12 col-md-6">
                <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">FTP Settings</h4>
                            <p>
                              You can upload files directly from your server to
                              another FTP server and load them from there.
                            </p>
                            <p>
                              Impotant: This may slow down your site's
                              upload/delete speed, make sure to use fast FTP
                              server.
                            </p>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <div className="form-group">
                              <ul className="list-unstyled mb-0">
                                <h5>FTP Storage</h5>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="FTP_Storage"
                                        checked={ftpStorage}
                                        onChange={(e) =>
                                          setFtpStorage(e.target.value)
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
                                        name="FTP_Storage"
                                        checked={
                                          ftpStorage === "Enable" ? false : true
                                        }
                                        onChange={(e) =>
                                          setFtpStorage(e.target.value)
                                        }
                                        value="Disable"
                                      />
                                      Disabled
                                    </label>
                                  </fieldset>
                                </li>
                              </ul>
                            </div>

                            <div className="col-sm-12">
                              <div className="form-group">
                                <div className="controls">
                                  <label>FTP Host Name</label>
                                  <input
                                    type="text"
                                    name="FTP_Hostname"
                                    className="form-control"
                                    placeholder="FTP Hostname"
                                    required=""
                                    aria-invalid="false"
                                    value={ftpHostName}
                                    onChange={(e) =>
                                      setFtpHostName(e.target.value)
                                    }
                                  />
                                  <div className="help-block"></div>
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-12">
                              <div className="form-group">
                                <div className="controls">
                                  <label>FTP Username</label>
                                  <input
                                    type="text"
                                    name="FTP_username"
                                    className="form-control"
                                    placeholder="FTP Username"
                                    required=""
                                    aria-invalid="false"
                                    value={ftpUsername}
                                    onChange={(e) =>
                                      setFtpUsername(e.target.value)
                                    }
                                  />
                                  <div className="help-block"></div>
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-12">
                              <div className="form-group">
                                <div className="controls">
                                  <label>FTP Password</label>
                                  <input
                                    type="text"
                                    name="ftp_password"
                                    className="form-control"
                                    placeholder="FTP Password"
                                    required=""
                                    aria-invalid="false"
                                    value={ftpPassword}
                                    onChange={(e) =>
                                      setFtpPassword(e.target.value)
                                    }
                                  />
                                  <div className="help-block"></div>
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-12">
                              <div className="form-group">
                                <div className="controls">
                                  <label>FTP Port</label>
                                  <input
                                    type="text"
                                    name="FTP_Port"
                                    className="form-control"
                                    placeholder="FTP Port"
                                    required=""
                                    aria-invalid="false"
                                    value={ftpPort}
                                    onChange={(e) => setFtpPort(e.target.value)}
                                  />
                                  <div className="help-block"></div>
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-12">
                              <div className="form-group">
                                <div className="controls">
                                  <label>FTP Path</label>
                                  <input
                                    type="text"
                                    name="FTP_Path"
                                    className="form-control"
                                    placeholder="FTP Path"
                                    required=""
                                    aria-invalid="false"
                                    value={ftpPath}
                                    onChange={(e) => setFtpPath(e.target.value)}
                                  />
                                  <div className="help-block"></div>
                                </div>
                              </div>

                              <p>
                                1. Before enabling FTP, make sure you upload the
                                whole "upload/" folder to your FTP server.{" "}
                              </p>
                              <p>
                                2. Before disabling FTP, make sure you download
                                the whole "upload/" folder to your server.
                              </p>
                              <p>
                                3. If your site is still brand new, you can
                                escape the upload step, but make sure to click
                                on "Test Connection".
                              </p>
                            </div>
                            <div className="col-sm-12 mt-3">
                              <button
                                onClick={onStorageSetting}
                                className="btn btn-primary shadow"
                              >
                                Save
                              </button>
                              <a href="#" className="btn btn-warning shadow">
                                Test FTP Connection
                              </a>
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
                          <div className="col-12">
                            <h4 className="card-title">
                              Digitalocean Spaces Settings
                            </h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <div className="">
                              <ul className="list-unstyled mb-0">
                                <h5>Digitalocean Spaces Storage</h5>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="Digitalocean_Spaces_Storage"
                                        checked={digitaloceanStorage}
                                        onChange={(e) =>
                                          setDigitaloceanStorage(e.target.value)
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
                                        name="Digitalocean_Spaces_Storage"
                                        checked={
                                          digitaloceanStorage === "Enable"
                                            ? false
                                            : true
                                        }
                                        onChange={(e) =>
                                          setDigitaloceanStorage(e.target.value)
                                        }
                                        value="Disable"
                                      />
                                      Disabled
                                    </label>
                                  </fieldset>
                                </li>
                              </ul>
                            </div>

                            <div className="row">
                              <div className="col-sm-12 mt-2">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>Digitalocean Space Name</label>
                                    <input
                                      type="text"
                                      name="Digitalocean Space Name"
                                      className="form-control"
                                      placeholder="Enter Digitalocean Space Name"
                                      required=""
                                      aria-invalid="false"
                                      value={digitaloceanSpaceName}
                                      onChange={(e) =>
                                        setDigitaloceanSpaceName(e.target.value)
                                      }
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>Digitalocean Key</label>
                                    <input
                                      type="text"
                                      name="Digitalocean Key"
                                      className="form-control"
                                      placeholder="Enter Digitalocean Key"
                                      required=""
                                      aria-invalid="false"
                                      value={digitaloceanKey}
                                      onChange={(e) =>
                                        setDigitaloceanKey(e.target.value)
                                      }
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>Digitalocean Secret Key</label>
                                    <input
                                      type="text"
                                      name="Digitalocean_Secret_Key"
                                      className="form-control"
                                      placeholder="Enter Digitalocean Secret Key"
                                      required=""
                                      aria-invalid="false"
                                      value={digitaloceanSecretKey}
                                      onChange={(e) =>
                                        setDigitaloceanSecretKey(e.target.value)
                                      }
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12 mt-2">
                                <h6>Digitalocean bucket region</h6>
                                <div className="form-group">
                                  <select
                                    className="select2 form-control select2-hidden-accessible"
                                    data-select2-id="1"
                                    tabindex="-1"
                                    aria-hidden="true"
                                    name="select2"
                                    onChange={handleChnage}
                                  >
                                    <option>{digitaloceanBucketRegion}</option>

                                    <option name="US East" value="US East">
                                      US East
                                    </option>

                                    <option
                                      name="Asia Pacific"
                                      value="Asia Pacific"
                                    >
                                      Asia Pacific
                                    </option>

                                    <option name="US West" value="US West">
                                      US West
                                    </option>

                                    <option name="Canada" value="Canada">
                                      Canada
                                    </option>
                                  </select>
                                </div>

                                <br />
                                <p>
                                  1. Before enabling Digitalocean, make sure you
                                  upload the whole "upload/" folder to your
                                  bucket.{" "}
                                </p>
                                <p>
                                  2. Before disabling Digitalocean, make sure
                                  you download the whole "upload/" folder to
                                  your server.
                                </p>
                                <p>
                                  3. We recommend to upload the folder and files
                                  via S3cmd.{" "}
                                </p>
                                <p>
                                  4. If your site is still brand new, you can
                                  escape the upload step, but make sure to click
                                  on "Test Connection".
                                </p>
                              </div>
                              <div className="col-sm-12 mt-3">
                                <button
                                  onClick={onStorageSetting}
                                  className="btn btn-primary shadow"
                                >
                                  Save
                                </button>
                                <a href="#" className="btn btn-warning shadow">
                                  Test Connection
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
