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

export default function GeneralSettings() {
  const [maintainanceMode, setMaintainanceMode] = useState("Enable");
  const [seo, setSeo] = useState("Enable");
  const [welcomePage, setWelcomePage] = useState("Enable");

  const [emailNotify, setEmailNotify] = useState("Enable");
  const [profileVisitNotify, setProfileVisitNotify] = useState("Enable");

  const [adultImg, setAdultImg] = useState("Enable");
  const [adultImgAction, setAdultImgAction] = useState("Blur");
  const [visionAPIKey, setVisionAPIKey] = useState("");

  const [raiseMoney, setRaiseMoney] = useState("Enable");
  const [createFundingReq, setCreateFundingReq] = useState("All Users");
  const [commission, setCommission] = useState(0);

  const [chatSystem, setChatSystem] = useState("Enable");
  const [msgSeetAlert, setMsgSeetAlert] = useState("Enable");
  const [typingSystem, setTypingSystem] = useState("Enable");

  const [fileSharing, setFileSharing] = useState("Enable");
  const [videoUpload, setVideoUpload] = useState("Enable");
  const [audioSharing, setAudioSharing] = useState("Enable");
  const [allowedExtension, setAllowedExtension] = useState("");
  const [allowedMIME, setAllowedMIME] = useState("");

  const [userReg, setUserReg] = useState("Enable");
  const [regLimit, setRegLimit] = useState("");
  const [unusualLogin, setUnusualLogin] = useState("Enable");
  const [twoFactAuth, setTwoFactAuth] = useState("Enable");
  const [twoFactCode, setTwoFactCode] = useState("Both");
  const [accValidation, setAccValidation] = useState("Enable");
  const [accValidationSystem, setAccValidationSystem] = useState("SMS");
  const [reCaptcha, setReCaptcha] = useState("Enable");
  const [reCaptchaKey, setReCaptchaKey] = useState("");
  const [reCaptchaSecretKey, setReCaptchaSecretKey] = useState("");
  const [onlineUser, setOnlineUser] = useState("Enable");
  const [userLastSeenStatus, setUserLastSeenStatus] = useState("Enable");
  const [userAccDeletion, setUserAccDeletion] = useState("Enable");
  const [profileBgChange, setProfileBgChange] = useState("Enable");
  const [settingId, setSettingId] = useState("");
  const [loading, setLoading] = useState(false);

  var notificationSystem = React.createRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [generalSetting, setGenralSetting] = useState("");

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
    getGenralSSetting();
  }, []);

  async function getGenralSSetting() {
    const { data, code, errorMessage } = await postData(
      "/setting/general/getAll"
    );
    console.log("fetchData -> resData", data);
    if (code) {
      const {
        generalSetting,
        chatSetting,
        notificationSetting,
        uploadSetting,
        adultImagesSystem,
        fundingSystem,
        userSettings,
        id,
      } = data;
      const {
        profileVisitNotification,
        emailNotification,
      } = notificationSetting;
      const {
        adultImages,
        actionForAdultImages,
        visionApiKey,
      } = adultImagesSystem;
      const {
        fileSharing,
        videoUpload,
        audioSharing,
        allowExtenstions,
        allowMimeType,
      } = uploadSetting;
      const { chatSystem, messageSeenAlert, typingSystem } = chatSetting;
      const {
        raiseMoney,
        whoCanCreateFundingReqst,
        commission,
      } = fundingSystem;
      const {
        userRegistration,
        unusualLogin,
        registrationLimit,
        twoFactorAuthentication,
        sendTwoFactorCodeTo,
        accountValidation,
        accountValidationSystem,
        reCaptcha,
        reCaptchaKey,
        reCaptchaSecretKey,
        onlineUsers,
        lastSeen,
        accountDetection,
        profileBackgroundChange,
      } = userSettings;

      setSettingId(id);

      setMaintainanceMode(
        generalSetting.maintenanceMode ? "Enable" : "Disable"
      );
      setSeo(generalSetting.SeoFriendlyUrl ? "Enable" : "Disable");
      setWelcomePage(generalSetting.welcomePageUsers ? "Enable" : "Disable");

      setEmailNotify(emailNotification ? "Enable" : "Disable");
      setProfileVisitNotify(profileVisitNotification ? "Enable" : "Disable");

      setAdultImg(adultImages ? "Enable" : "Disable");
      setAdultImgAction(actionForAdultImages ? "Blur" : "Delete");
      setVisionAPIKey(visionApiKey);

      setRaiseMoney(raiseMoney ? "Enable" : "Disable");
      setCreateFundingReq(
        whoCanCreateFundingReqst == true ? "All Users" : "Verified Users"
      );
      setCommission(commission);

      setChatSystem(chatSystem ? "Enable" : "Disable");
      setMsgSeetAlert(messageSeenAlert ? "Enable" : "Disable");
      setTypingSystem(typingSystem ? "Enable" : "Disable");

      setFileSharing(fileSharing ? "Enable" : "Disable");
      setVideoUpload(videoUpload ? "Enable" : "Disable");
      setAudioSharing(audioSharing ? "Enable" : "Disable");
      console.log("getGenralSSetting -> allowExtenstions", allowExtenstions);
      // if (Array.isArray(allowExtenstions)) {
      //   setAllowedExtension(allowExtenstions);
      // } else {
      //   setAllowedExtension(JSON.parse(allowExtenstions).toString());
      // }
      // if (Array.isArray(allowMimeType)) {
      //   setAllowedMIME(allowMimeType);
      // } else {
      //   setAllowedMIME(JSON.parse(allowMimeType).toString());
      // }

      setUserReg(userRegistration ? "Enable" : "Disable");
      setRegLimit(registrationLimit);
      setUnusualLogin(unusualLogin ? "Enable" : "Disable");
      setTwoFactAuth(twoFactorAuthentication ? "Enable" : "Disable");
      setTwoFactCode(sendTwoFactorCodeTo);
      setAccValidation(accountValidation ? "Enable" : "Disable");
      setAccValidationSystem(accountValidationSystem);
      setReCaptcha(reCaptcha ? "Enable" : "Disable");
      setReCaptchaKey(reCaptchaKey);
      setReCaptchaSecretKey(reCaptchaSecretKey);
      setOnlineUser(onlineUsers ? "Enable" : "Disable");
      setUserLastSeenStatus(lastSeen ? "Enable" : "Disable");
      setUserAccDeletion(accountDetection ? "Enable" : "Disable");
      setProfileBgChange(profileBackgroundChange ? "Enable" : "Disable");
      setLoading(true);
    }
  }

  async function updateSetting(body) {
    const { code, errorMessage } = await postData("/setting/general/update", {
      ...body,
      settingId: settingId,
    });
    if (code) {
      success("Setting updated successfully");
    } else {
      error(errorMessage);
    }
  }

  const onGeneralSettingsSave = () => {
    console.log(maintainanceMode, seo, welcomePage);
    const body = {
      maintenanceMode: maintainanceMode === "Enable" ? true : false,
      SeoFriendlyUrl: seo == "Enable" ? true : false,
      welcomePageUsers: welcomePage === "Enable" ? true : false,
    };
    updateSetting(body);
  };

  const onNotificationSettingsSave = () => {
    console.log(profileVisitNotify, emailNotify);
    const body = {
      profileVisitNotification: profileVisitNotify === "Enable" ? true : false,
      emailNotification: emailNotify == "Enable" ? true : false,
    };
    updateSetting(body);
  };

  const onAdultImagesSystemSave = () => {
    // TODO: Make Request
    console.log(adultImg, adultImgAction, visionAPIKey);
    const body = {
      adultImages: adultImg === "Enable" ? true : false,
      actionForAdultImages: adultImgAction == "Blur" ? true : false,
      visionApiKey: visionAPIKey,
    };
    updateSetting(body);
  };

  const onFundingSystemSave = () => {
    console.log(raiseMoney, createFundingReq, commission);

    const body = {
      raiseMoney: raiseMoney === "Enable" ? true : false,
      whoCanCreateFundingReqst: createFundingReq == "All Users" ? true : false,
      commission: commission,
    };
    updateSetting(body);
  };

  const onChatSettingsSave = () => {
    // TODO: Make Request
    console.log(chatSystem, msgSeetAlert, typingSystem);
    const body = {
      chatSystem: chatSystem === "Enable" ? true : false,
      messageSeenAlert: msgSeetAlert == "Enable" ? true : false,
      typingSystem: typingSystem == "Enable" ? true : false,
    };
    updateSetting(body);
  };

  const onUploadSettingsSave = () => {
    // TODO: Make Request
    console.log(
      fileSharing,
      videoUpload,
      audioSharing,
      allowedExtension,
      allowedMIME
    );
    const allowedExtentios = allowedExtension.split(",");
    const allowedMIMEs = allowedMIME.split(",");

    const body = {
      fileSharing: fileSharing === "Enable" ? true : false,
      videoUpload: videoUpload === "Enable" ? true : false,
      audioSharing: audioSharing === "Enable" ? true : false,
      allowExtenstions: allowedExtentios,
      allowMimeType: allowedMIMEs,
    };
    updateSetting(body);
  };

  const onUserSettingsSave = async () => {
    const data = {
      userRegistration: userReg === "Enable" ? true : false,
      unusualLogin: unusualLogin === "Enable" ? true : false,
      registrationLimit: regLimit,
      twoFactorAuthentication: twoFactAuth === "Enable" ? true : false,
      sendTwoFactorCodeTo: twoFactCode,
      accountValidation: accValidation === "Enable" ? true : false,
      accountValidationSystem: accValidationSystem,
      reCaptcha: reCaptcha === "Enable" ? true : false,
      reCaptchaSecretKey: reCaptchaSecretKey,
      onlineUsers: onlineUser === "Enable" ? true : false,
      lastSeen: userLastSeenStatus === "Enable" ? true : false,
      accountDetection: userAccDeletion === "Enable" ? true : false,
      profileBackgroundChange: profileBgChange === "Enable" ? true : false,
      reCaptchaKey: reCaptchaKey,
    };
    const { code, errorMessage } = await postData("/setting/general/update", {
      ...data,
      settingId: settingId,
    });
    if (code) {
      success("Setting updated successfully");
    } else {
      error(errorMessage);
    }
  };

  return (
    <>
      {loading && (
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
                        General Settings
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
                          <div className="card-header border-bottom">
                            <div className="col-12">
                              <h4 className="card-title">General Settings</h4>
                            </div>
                          </div>
                          <div className="card-content">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-sm-12">
                                  <ul className="list-unstyled mb-0">
                                    <h5>
                                      Maintenance Mode{" "}
                                      <i
                                        className="feather icon-help-circle"
                                        data-toggle="tooltip"
                                        title="Turn the whole site under Maintenance. You can get the site back by visiting /admincp or /admin-cp!"
                                      ></i>
                                    </h5>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="Maintenance_Mode"
                                            checked={
                                              maintainanceMode === "Enable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setMaintainanceMode(
                                                e.target.value
                                              )
                                            }
                                            value="Enable"
                                          />{" "}
                                          Enable
                                        </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="Maintenance_Mode"
                                            checked={
                                              maintainanceMode === "Enable"
                                                ? false
                                                : true
                                            }
                                            onChange={(e) =>
                                              setMaintainanceMode(
                                                e.target.value
                                              )
                                            }
                                            value="Disable"
                                          />{" "}
                                          Disable
                                        </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                </div>
                                <NotificationSystem ref={notificationSystem} />
                                <div className="col-sm-12 mt-3">
                                  <button
                                    className="btn btn-primary shadow"
                                    onClick={onGeneralSettingsSave}
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-header border-bottom">
                            <div className="col-12">
                              <h4 className="card-title">
                                Notifications Settings
                              </h4>
                            </div>
                          </div>
                          <div className="card-content">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-sm-12">
                                  <ul className="list-unstyled mb-0">
                                    <h5>
                                      Email Notifications{" "}
                                      <i
                                        className="feather icon-help-circle"
                                        data-toggle="tooltip"
                                        title="Send user notifications via email."
                                      ></i>
                                    </h5>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="emailNotify"
                                            checked={
                                              emailNotify === "Enable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setEmailNotify(e.target.value)
                                            }
                                            value="Enable"
                                          />{" "}
                                          Enable
                                        </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="emailNotify"
                                            checked={
                                              emailNotify === "Disable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setEmailNotify(e.target.value)
                                            }
                                            value="Disable"
                                          />{" "}
                                          Disable
                                        </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                </div>

                                {/* <div className="col-sm-12 mt-2">
                                <ul className="list-unstyled mb-0">
                                  <h5>
                                    Profile Visit Notifications{" "}
                                    <i
                                      className="feather icon-help-circle"
                                      data-toggle="tooltip"
                                      title="Send users notifications if anyone visits thier profile."
                                    ></i>
                                  </h5>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input
                                          type="radio"
                                          name="profileVisitNotify"
                                          checked={
                                            profileVisitNotify === "Enable"
                                              ? true
                                              : false
                                          }
                                          onChange={(e) =>
                                            setProfileVisitNotify(
                                              e.target.value
                                            )
                                          }
                                          value="Enable"
                                        />{" "}
                                        Enable
                                      </label>
                                    </fieldset>
                                  </li>
                                  <li className="d-inline-block mr-2">
                                    <fieldset>
                                      <label>
                                        <input
                                          type="radio"
                                          name="profileVisitNotify"
                                          checked={
                                            profileVisitNotify === "Disable"
                                              ? true
                                              : false
                                          }
                                          onChange={(e) =>
                                            setProfileVisitNotify(
                                              e.target.value
                                            )
                                          }
                                          value="Disable"
                                        />{" "}
                                        Disable
                                      </label>
                                    </fieldset>
                                  </li>
                                </ul>
                              </div> */}

                                <div className="col-sm-12 mt-3">
                                  <button
                                    className="btn btn-primary shadow"
                                    onClick={onNotificationSettingsSave}
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-header border-bottom">
                            <div className="col-12">
                              <h4 className="card-title">
                                Adult Images System
                              </h4>
                            </div>
                          </div>
                          <div className="card-content">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-sm-12">
                                  <p>
                                    Please Follow the steps to active the system
                                  </p>
                                  <p>
                                    1- Select or create a GCP project from{" "}
                                    <a href="#">Here</a>
                                  </p>
                                  <p>
                                    2- Make sure that billing is enable for your
                                    project<a href="#"> From Here </a> Or{" "}
                                    <a href="#">Create a new billing account</a>
                                  </p>
                                  <p>
                                    3- Enable the Cloud Vision API.{" "}
                                    <a href="#"> From Here </a>
                                  </p>
                                  <p>4- Create an API key:</p>
                                  <p>
                                    - Navigate to the
                                    <a href="#">
                                      {" "}
                                      APIs & Services→Credentials{" "}
                                    </a>{" "}
                                    panel in GCP Console.
                                  </p>
                                  <p>
                                    - Select Create credentials, then select API
                                    key from the dropdown menu .
                                  </p>
                                  <p>
                                    - Click the Create button. The API key
                                    created dialog box displays your newly
                                    created key.
                                  </p>

                                  <ul className="list-unstyled mt-3 mb-0">
                                    <h5>Adult Images </h5>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="adultImg"
                                            checked={
                                              adultImg === "Enable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setAdultImg(e.target.value)
                                            }
                                            value="Enable"
                                          />{" "}
                                          Enable
                                        </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="adultImg"
                                            checked={
                                              adultImg === "Disable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setAdultImg(e.target.value)
                                            }
                                            value="Disable"
                                          />{" "}
                                          Disable
                                        </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-sm-12 mt-2">
                                  <ul className="list-unstyled mb-0">
                                    <h5>Action For Adult Images</h5>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="adultImgAction"
                                            value="Blur"
                                            checked={
                                              adultImgAction === "Blur"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setAdultImgAction(e.target.value)
                                            }
                                          />{" "}
                                          Blur
                                        </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="adultImgAction"
                                            value="Delete"
                                            checked={
                                              adultImgAction === "Delete"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setAdultImgAction(e.target.value)
                                            }
                                          />{" "}
                                          Delete Image
                                        </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm-12 mt-2">
                                  <div className="form-group">
                                    <div className="controls">
                                      <label className="form-label">
                                        Vision API Key
                                      </label>
                                      <input
                                        type="text"
                                        name="text"
                                        className="form-control"
                                        placeholder="Enter Vision API Key "
                                        required=""
                                        aria-invalid="false"
                                        value={visionAPIKey}
                                        onChange={(e) =>
                                          setVisionAPIKey(e.target.value)
                                        }
                                      />
                                      <div className="help-block"></div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 mt-3">
                                  <button
                                    className="btn btn-primary shadow"
                                    onClick={onAdultImagesSystemSave}
                                  >
                                    Save
                                  </button>
                                  {/* <button className="btn btn-primary shadow" style={{ marginLeft: "10px" }}>
                                  Test API
                                </button> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-header border-bottom">
                            <div className="col-12">
                              <h4 className="card-title">Funding System</h4>
                            </div>
                          </div>
                          <div className="card-content">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-sm-12">
                                  <ul className="list-unstyled mb-0">
                                    <h5>Raise Money System </h5>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="raiseMoney"
                                            checked={
                                              raiseMoney === "Enable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setRaiseMoney(e.target.value)
                                            }
                                            value="Enable"
                                          />{" "}
                                          Enable
                                        </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="raiseMoney"
                                            checked={
                                              raiseMoney === "Disable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setRaiseMoney(e.target.value)
                                            }
                                            value="Disable"
                                          />{" "}
                                          Disable
                                        </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-sm-12 mt-2">
                                  <ul className="list-unstyled mb-0">
                                    <h5>Who can create funding requests ?</h5>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="createFundingReq"
                                            checked={
                                              createFundingReq === "All Users"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setCreateFundingReq(
                                                e.target.value
                                              )
                                            }
                                            value="All Users"
                                          />{" "}
                                          All Users
                                        </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="createFundingReq"
                                            checked={
                                              createFundingReq ===
                                              "Verified Users"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setCreateFundingReq(
                                                e.target.value
                                              )
                                            }
                                            value="Verified Users"
                                          />{" "}
                                          Verified Users
                                        </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-sm-12 mt-2">
                                  <div className="form-group">
                                    <div className="controls">
                                      <label className="form-label">
                                        Commission (Leave it 0 if you don't want
                                        to get any commissions.)
                                      </label>
                                      <input
                                        type="text"
                                        name="text"
                                        className="form-control"
                                        placeholder="Enter Commission "
                                        required=""
                                        aria-invalid="false"
                                        value={commission}
                                        onChange={(e) =>
                                          setCommission(e.target.value)
                                        }
                                      />
                                      <div className="help-block"></div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12 mt-3">
                                  <button
                                    className="btn btn-primary shadow"
                                    onClick={onFundingSystemSave}
                                  >
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
                  <div className="col-12 col-md-4">
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-header border-bottom">
                            <div className="col-12">
                              <h4 className="card-title">Chat Settings</h4>
                            </div>
                          </div>
                          <div className="card-content">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-sm-12">
                                  <ul className="list-unstyled mb-0">
                                    <h5>
                                      Chat System{" "}
                                      <i
                                        className="feather icon-help-circle"
                                        data-toggle="tooltip"
                                        title="Enable chat system to chat with friends on the buttom of the page."
                                      ></i>
                                    </h5>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="chatSystem"
                                            checked={
                                              chatSystem === "Enable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setChatSystem(e.target.value)
                                            }
                                            value="Enable"
                                          />{" "}
                                          Enable
                                        </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="chatSystem"
                                            checked={
                                              chatSystem === "Disable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setChatSystem(e.target.value)
                                            }
                                            value="Disable"
                                          />{" "}
                                          Disable
                                        </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-sm-12 mt-2">
                                  <ul className="list-unstyled mb-0">
                                    <h5>
                                      Message Seen Alert{" "}
                                      <i
                                        className="feather icon-help-circle"
                                        data-toggle="tooltip"
                                        title="Checks if the message was seen in chat system, Recommended for powerful servers"
                                      ></i>
                                    </h5>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="msgSeenAlert"
                                            checked={
                                              msgSeetAlert === "Enable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setMsgSeetAlert(e.target.value)
                                            }
                                            value="Enable"
                                          />{" "}
                                          Enable
                                        </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="msgSeenAlert"
                                            checked={
                                              msgSeetAlert === "Disable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setMsgSeetAlert(e.target.value)
                                            }
                                            value="Disable"
                                          />{" "}
                                          Disable
                                        </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm-12 mt-2">
                                  <ul className="list-unstyled mb-0">
                                    <h5>
                                      Typing System{" "}
                                      <i
                                        className="feather icon-help-circle"
                                        data-toggle="tooltip"
                                        title="Checks if the user is typing in chat system, Recommended for powerful servers"
                                      ></i>
                                    </h5>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="typingSystem"
                                            checked={
                                              typingSystem === "Enable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setTypingSystem(e.target.value)
                                            }
                                            value="Enable"
                                          />{" "}
                                          Enable
                                        </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="typingSystem"
                                            checked={
                                              typingSystem === "Disable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setTypingSystem(e.target.value)
                                            }
                                            value="Disable"
                                          />{" "}
                                          Disable
                                        </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-sm-12 mt-3">
                                  <button
                                    className="btn btn-primary shadow"
                                    onClick={onChatSettingsSave}
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-header border-bottom">
                            <div className="col-12">
                              <h4 className="card-title">Upload Settings</h4>
                            </div>
                          </div>
                          <div className="card-content">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-sm-12">
                                  <ul className="list-unstyled mb-0">
                                    <h5>
                                      File Sharing{" "}
                                      <i
                                        className="feather icon-help-circle"
                                        data-toggle="tooltip"
                                        title="Share & upload videos,images,files,sounds, etc.."
                                      ></i>
                                    </h5>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="fileSharing"
                                            checked={
                                              fileSharing === "Enable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setFileSharing(e.target.value)
                                            }
                                            value="Enable"
                                          />{" "}
                                          Enable
                                        </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="fileSharing"
                                            checked={
                                              fileSharing === "Disable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setFileSharing(e.target.value)
                                            }
                                            value="Disable"
                                          />{" "}
                                          Disable
                                        </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-sm-12 mt-2">
                                  <ul className="list-unstyled mb-0">
                                    <h5>
                                      Video Upload{" "}
                                      <i
                                        className="feather icon-help-circle"
                                        data-toggle="tooltip"
                                        title="Enable video upload to share & upload videos to the site."
                                      ></i>
                                    </h5>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="videoUpload"
                                            checked={
                                              videoUpload === "Enable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setVideoUpload(e.target.value)
                                            }
                                            value="Enable"
                                          />{" "}
                                          Enable
                                        </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="videoUpload"
                                            checked={
                                              videoUpload === "Disable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setVideoUpload(e.target.value)
                                            }
                                            value="Disable"
                                          />{" "}
                                          Disable
                                        </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-sm-12 mt-2">
                                  <ul className="list-unstyled mb-0">
                                    <h5>
                                      Audio Sharing{" "}
                                      <i
                                        className="feather icon-help-circle"
                                        data-toggle="tooltip"
                                        title="Enable audio upload to share & upload music to the site."
                                      ></i>
                                    </h5>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            name="audioSharing"
                                            checked={
                                              audioSharing === "Enable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setAudioSharing(e.target.value)
                                            }
                                            value="Enable"
                                          />{" "}
                                          Enable
                                        </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <input
                                            type="radio"
                                            checked={
                                              audioSharing === "Disable"
                                                ? true
                                                : false
                                            }
                                            onChange={(e) =>
                                              setAudioSharing(e.target.value)
                                            }
                                            value="Disable"
                                          />{" "}
                                          Disable
                                        </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm-12 mt-2">
                                  <div className="form-group">
                                    <div className="controls">
                                      <label className="form-label">
                                        Allowed extenstions (separated with
                                        comma,)
                                      </label>
                                      <input
                                        type="text"
                                        name="text"
                                        className="form-control"
                                        placeholder="Enter extenstions"
                                        required=""
                                        data-validation-required-message="This First Name field is required"
                                        aria-invalid="false"
                                        value={allowedExtension}
                                        onChange={(e) =>
                                          setAllowedExtension(e.target.value)
                                        }
                                      />
                                      <div className="help-block"></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 ">
                                  <div className="form-group">
                                    <div className="controls">
                                      <label className="form-label">
                                        Allowed MIME Types (separated with
                                        comma,)
                                      </label>
                                      <input
                                        type="text"
                                        name="text"
                                        className="form-control"
                                        placeholder="Enter MIME Types"
                                        required=""
                                        data-validation-required-message="This First Name field is required"
                                        aria-invalid="false"
                                        value={allowedMIME}
                                        onChange={(e) =>
                                          setAllowedMIME(e.target.value)
                                        }
                                      />
                                      <div className="help-block"></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12 mt-3">
                                  <button
                                    className="btn btn-primary shadow"
                                    onClick={onUploadSettingsSave}
                                  >
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

                  <div className="col-12 col-md-4">
                    <div className="card">
                      <div className="card-header border-bottom">
                        <div className="col-12">
                          <h4 className="card-title">User Settings</h4>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-12">
                              <ul className="list-unstyled mb-0">
                                <h5>User Registration</h5>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="userReg"
                                        checked={
                                          userReg === "Enable" ? true : false
                                        }
                                        onChange={(e) =>
                                          setUserReg(e.target.value)
                                        }
                                        value="Enable"
                                      />{" "}
                                      Enable
                                    </label>
                                  </fieldset>
                                </li>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="userReg"
                                        checked={
                                          userReg === "Disable" ? true : false
                                        }
                                        onChange={(e) =>
                                          setUserReg(e.target.value)
                                        }
                                        value="Disable"
                                      />{" "}
                                      Disable
                                    </label>
                                  </fieldset>
                                </li>
                              </ul>
                            </div>

                            <div className="col-sm-12 mt-2">
                              <div className="form-group">
                                <div className="controls">
                                  <label>
                                    Registration Limit For Per IP p/hour
                                  </label>
                                  <input
                                    type="text"
                                    name="text"
                                    className="form-control"
                                    placeholder="Enter Registration Limit"
                                    required=""
                                    data-validation-required-message="This First Name field is required"
                                    aria-invalid="false"
                                    value={regLimit}
                                    onChange={(e) =>
                                      setRegLimit(e.target.value)
                                    }
                                  />
                                  <div className="help-block"></div>
                                </div>
                              </div>
                            </div>

                            {/* <div className="col-sm-12 mt-1">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Unusual Login{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Send confirmation link when user logins from new location"
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="unusualLogin"
                                      checked={
                                        unusualLogin === "Enable" ? true : false
                                      }
                                      onChange={(e) =>
                                        setUnusualLogin(e.target.value)
                                      }
                                      value="Enable"
                                    />{" "}
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="unusualLogin"
                                      checked={
                                        unusualLogin === "Disable"
                                          ? true
                                          : false
                                      }
                                      onChange={(e) =>
                                        setUnusualLogin(e.target.value)
                                      }
                                      value="Disable"
                                    />{" "}
                                    Disable
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div> */}
                            {/* <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Two-factor authentication{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Send confirmation code to email or to SMS when user logins"
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="twoFactAuth"
                                      checked={
                                        twoFactAuth === "Enable" ? true : false
                                      }
                                      onChange={(e) =>
                                        setTwoFactAuth(e.target.value)
                                      }
                                      value="Enable"
                                    />{" "}
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="twoFactAuth"
                                      checked={
                                        twoFactAuth === "Disable" ? true : false
                                      }
                                      onChange={(e) =>
                                        setTwoFactAuth(e.target.value)
                                      }
                                      value="Disable"
                                    />{" "}
                                    Disable
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Send Two-factor authentication code to</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="twoFactCode"
                                      checked={
                                        twoFactCode === "Email" ? true : false
                                      }
                                      onChange={(e) =>
                                        setTwoFactCode(e.target.value)
                                      }
                                      value="Email"
                                    />{" "}
                                    Email
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="twoFactCode"
                                      checked={
                                        twoFactCode === "Phone" ? true : false
                                      }
                                      onChange={(e) =>
                                        setTwoFactCode(e.target.value)
                                      }
                                      value="Phone"
                                    />{" "}
                                    Phone
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="twoFactCode"
                                      checked={
                                        twoFactCode === "Both" ? true : false
                                      }
                                      onChange={(e) =>
                                        setTwoFactCode(e.target.value)
                                      }
                                      value="Both"
                                    />{" "}
                                    Both
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                        */}
                          </div>

                          <div
                            className="row mt-2"
                            style={{
                              borderTop: "1px solid rgba(34, 41, 47, 0.1)",
                            }}
                          >
                            <div className="col-sm-12 mt-1">
                              <ul className="list-unstyled mb-0">
                                <h5>
                                  Account Verification{""}
                                  <i
                                    className="feather icon-help-circle"
                                    data-toggle="tooltip"
                                    title="Upload your adhar for verification"
                                  ></i>
                                </h5>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="accValidation"
                                        checked={
                                          accValidation === "Enable"
                                            ? true
                                            : false
                                        }
                                        onChange={(e) =>
                                          setAccValidation(e.target.value)
                                        }
                                        value="Enable"
                                      />{" "}
                                      Enable
                                    </label>
                                  </fieldset>
                                </li>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="accValidation"
                                        checked={
                                          accValidation === "Disable"
                                            ? true
                                            : false
                                        }
                                        onChange={(e) =>
                                          setAccValidation(e.target.value)
                                        }
                                        value="Disable"
                                      />{" "}
                                      Disable
                                    </label>
                                  </fieldset>
                                </li>
                              </ul>
                            </div>
                            {/* <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Account Validation System{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Choose the validation type, by SMS or E-mail, if you choose SMS, make sure you have configured the SMS configration."
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="accValidationSystem"
                                      checked={
                                        accValidationSystem === "SMS"
                                          ? true
                                          : false
                                      }
                                      onChange={(e) =>
                                        setAccValidationSystem(e.target.value)
                                      }
                                      value="SMS"
                                    />{" "}
                                    SMS
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="accValidationSystem"
                                      checked={
                                        accValidationSystem === "Email"
                                          ? true
                                          : false
                                      }
                                      onChange={(e) =>
                                        setAccValidationSystem(e.target.value)
                                      }
                                      value="Email"
                                    />{" "}
                                    Email
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                        */}
                          </div>
                          {/* <div
                          className="row mt-2"
                          style={{
                            borderTop: "1px solid rgba(34, 41, 47, 0.1)",
                          }}
                        >
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>reCaptcha </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="reCaptcha"
                                      checked={
                                        reCaptcha === "Enable" ? true : false
                                      }
                                      onChange={(e) =>
                                        setReCaptcha(e.target.value)
                                      }
                                      value="Enable"
                                    />{" "}
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="reCaptcha"
                                      checked={
                                        reCaptcha === "Disable" ? true : false
                                      }
                                      onChange={(e) =>
                                        setReCaptcha(e.target.value)
                                      }
                                      value="Disable"
                                    />{" "}
                                    Disable
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                        </div> */}

                          <div className="row mt-2">
                            {/* <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Recaptcha Key</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Recaptcha Key"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={reCaptchaKey}
                                  onChange={(e) =>
                                    setReCaptchaKey(e.target.value)
                                  }
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Recaptcha Secret Key</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Recaptcha Secret Key"
                                  required=""
                                  aria-invalid="false"
                                  value={reCaptchaSecretKey}
                                  onChange={(e) =>
                                    setReCaptchaSecretKey(e.target.value)
                                  }
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 mt-1">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Online Users{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Show active users in home sidebar."
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="onlineUser"
                                      checked={
                                        onlineUser === "Enable" ? true : false
                                      }
                                      onChange={(e) =>
                                        setOnlineUser(e.target.value)
                                      }
                                      value="Enable"
                                    />{" "}
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="onlineUser"
                                      checked={
                                        onlineUser === "Disable" ? true : false
                                      }
                                      onChange={(e) =>
                                        setOnlineUser(e.target.value)
                                      }
                                      value="Disable"
                                    />{" "}
                                    Disable
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                User Last Seen Status{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Show (Online / Lastseen) status"
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="userLastSeenSatus"
                                      checked={
                                        userLastSeenStatus === "Enable"
                                          ? true
                                          : false
                                      }
                                      onChange={(e) =>
                                        setUserLastSeenStatus(e.target.value)
                                      }
                                      value="Enable"
                                    />{" "}
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="userLastSeenSatus"
                                      checked={
                                        userLastSeenStatus === "Disable"
                                          ? true
                                          : false
                                      }
                                      onChange={(e) =>
                                        setUserLastSeenStatus(e.target.value)
                                      }
                                      value="Disable"
                                    />{" "}
                                    Disable
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>

                          <div className="col-sm-12 mt-1">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                User Account Deletion{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Allow users to delete their account"
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="userAccDeletion"
                                      checked={
                                        userAccDeletion === "Enable"
                                          ? true
                                          : false
                                      }
                                      onChange={(e) =>
                                        setUserAccDeletion(e.target.value)
                                      }
                                      value="Enable"
                                    />{" "}
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="userAccDeletion"
                                      checked={
                                        userAccDeletion === "Disable"
                                          ? true
                                          : false
                                      }
                                      onChange={(e) =>
                                        setUserAccDeletion(e.target.value)
                                      }
                                      value="Disable"
                                    />{" "}
                                    Disable
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Profile Background Change{" "}
                                <i className="feather icon-help-circle"></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="profileBgChange"
                                      checked={
                                        profileBgChange === "Enable"
                                          ? true
                                          : false
                                      }
                                      onChange={(e) =>
                                        setProfileBgChange(e.target.value)
                                      }
                                      value="Enable"
                                    />{" "}
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                      type="radio"
                                      name="profileBgChange"
                                      checked={
                                        profileBgChange === "Disable"
                                          ? true
                                          : false
                                      }
                                      onChange={(e) =>
                                        setProfileBgChange(e.target.value)
                                      }
                                      value="Disable"
                                    />{" "}
                                    Disable
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div> */}

                            <div className="col-sm-12 mt-3">
                              <button
                                className="btn btn-primary shadow"
                                onClick={onUserSettingsSave}
                              >
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
      )}
      <Footer />
    </>
  );
}
