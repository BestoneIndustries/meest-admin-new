import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";

import { postData, postDataAll } from '../apicall/apiCall';

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';


export default function SiteSettings() {
  var notificationSystem = React.createRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [SiteSettingData, setSiteSettingData] = useState();
  const [deleteId, setDeleteData] = useState("");
  const [langugae, setLangugae] = useState([]);



  useEffect(() => {
    fetchData();
    getLang();
  }, []);

  async function fetchData() {
    const resData = await postData('/setting/site/getAll');
    console.log("fetchData -> resData", resData.data)
    if (resData) {
      console.log(resData.data);
      setSiteSettingData(resData.data);
    }
  }

  async function getLang() {
    const { code, data } = await postDataAll('/pub/admin/languages');
    if (code) {
      setLangugae(data.rows);
    }
  }


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
                    <li className="breadcrumb-item active"> Site Settings</li>
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
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">Website Settings</h4>
                          </div>
                        </div>
                        <Formik
                          enableReinitialize
                          initialValues={{
                            siteTitle: SiteSettingData && SiteSettingData.websiteSetting ? SiteSettingData.websiteSetting.siteTitle : "",
                            siteName: SiteSettingData && SiteSettingData.websiteSetting ? SiteSettingData.websiteSetting.siteName : "",
                            siteEmail: SiteSettingData && SiteSettingData.websiteSetting ? SiteSettingData.websiteSetting.siteEmail : "",
                            siteKeyword: SiteSettingData && SiteSettingData.websiteSetting ? SiteSettingData.websiteSetting.siteKeyword : "",
                            siteDescription: SiteSettingData && SiteSettingData.websiteSetting ? SiteSettingData.websiteSetting.siteDescription : ""
                          }}
                          validationSchema={Yup.object().shape({})}
                          onSubmit={async (values, { setSubmitting, resetForm }) => {
                            values.settingId = SiteSettingData.id;
                            const { data } = await postData('/setting/site/update', values);
                            if (data) {
                              fetchData();
                              success("Successfully updated");
                            }
                          }}
                          render={({ values, errors, touched, isSubmitting }) => {
                            return <Form className="col-7 col-md-9 pr-0 pl-0">
                              <div className="card-content">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>Site Title</label>
                                          <Field
                                            type="text"
                                            id="siteTitle"
                                            name="siteTitle"
                                            className="form-control"
                                            placeholder="Enter Site Title"
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
                                          <label>Site Name</label>
                                          <Field
                                            type="text"
                                            id="siteName"
                                            name="siteName"
                                            className="form-control"
                                            placeholder="Enter Site Name"
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
                                          <label>Site E-mail</label>
                                          <Field
                                            type="text"
                                            id="siteEmail"
                                            name="siteEmail"
                                            className="form-control"
                                            placeholder="Enter Site E-mail"
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

                                          <label>Site Keyword</label>
                                          <Field
                                            type="text"
                                            id="siteKeyword"
                                            name="siteKeyword"
                                            className="form-control"
                                            placeholder="Enter Keyword"
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

                                          <label>Site Description</label>
                                          <Field
                                            component="textarea"
                                            id="siteDescription"
                                            name="siteDescription"
                                            className="form-control"
                                            rows="3"
                                            placeholder="Site Description"
                                          ></Field>
                                          <div className="help-block"></div>
                                        </div>

                                      </div>
                                    </div>
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
                <div className="col-12 col-md-6">
                <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">API Keys & Settings</h4>
                          </div>
                        </div>
                        <Formik
                          enableReinitialize
                          initialValues={{
                            googleMapApi: SiteSettingData && SiteSettingData.ApiKeysSetting ? SiteSettingData.ApiKeysSetting.googleMapApi : "",
                            yandexTranslationApi: SiteSettingData && SiteSettingData.ApiKeysSetting ? SiteSettingData.ApiKeysSetting.yandexTranslationApi : "",
                            giphyApi: SiteSettingData && SiteSettingData.ApiKeysSetting ? SiteSettingData.ApiKeysSetting.giphyApi : "",
                            googleAnalyticsCode: SiteSettingData && SiteSettingData.ApiKeysSetting ? SiteSettingData.ApiKeysSetting.googleAnalyticsCode : "",
                          }}
                          validationSchema={Yup.object().shape({})}
                          onSubmit={async (values, { setSubmitting, resetForm }) => {
                            values.settingId = SiteSettingData.id;
                            const { data } = await postData('/setting/site/update', values);
                            if (data) {
                              success("Successfully updated");
                              fetchData();
                            }
                          }}
                          render={({ values, errors, touched, isSubmitting }) => {
                            return <Form className="col-7 col-md-9 pr-0 pl-0">
                              <div className="card-content">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>Google Map API</label>
                                          <Field
                                            type="text"
                                            id="googleMapApi"
                                            name="googleMapApi"
                                            className="form-control"
                                            placeholder="Enter Google API"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* <div className="col-sm-12">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>Yandex Translation API</label>
                                          <Field
                                            type="text"
                                            id="yandexTranslationApi"
                                            name="yandexTranslationApi"
                                            className="form-control"
                                            placeholder="Enter Yandex Translation API"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div> */}
                                    {/* <div className="col-sm-12">
                                      <div className="form-group">
                                        <div className="controls">
                                          <label>Giphy API</label>
                                          <Field
                                            type="text"
                                            id="giphyApi"
                                            name="giphyApi"
                                            className="form-control"
                                            placeholder="Enter Giphy API"
                                            required=""
                                            aria-invalid="false"
                                          />
                                          <div className="help-block"></div>
                                        </div>
                                      </div>
                                    </div> */}


                                    <div className="col-sm-12">
                                      <div className="form-group">
                                        <fieldset className="form-label-group">
                                          <Field
                                            component="textarea"
                                            className="form-control"
                                            id="googleAnalyticsCode"
                                            name="googleAnalyticsCode"
                                            rows="3"
                                            placeholder="Google Analytics Code"
                                          ></Field>
                                          <label htmlFor="label-textarea">
                                            Google Analytics Code
                                            </label>
                                        </fieldset>
                                      </div>
                                    </div>
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
                {/* <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Other Settings</h4>
                      </div>
                    </div>
                    <Formik
                      enableReinitialize
                      initialValues={{
                        censoredWords: SiteSettingData && SiteSettingData.otherSettings ? SiteSettingData.otherSettings.censoredWords : "",
                        defaultLanguage: SiteSettingData && SiteSettingData.otherSettings ? SiteSettingData.otherSettings.defaultLanguage : "",
                        connectivitySystem: SiteSettingData && SiteSettingData.otherSettings ? SiteSettingData.otherSettings.connectivitySystem : "",
                        connectivitySystemLimit: SiteSettingData && SiteSettingData.otherSettings ? SiteSettingData.otherSettings.connectivitySystemLimit : "",
                        updateUserProfileSidebarData: SiteSettingData && SiteSettingData.otherSettings ? SiteSettingData.otherSettings.updateUserProfileSidebarData : "",
                        cacheHomepageSidebar: SiteSettingData && SiteSettingData.otherSettings ? SiteSettingData.otherSettings.cacheHomepageSidebar : "",
                        secondPostReaction: SiteSettingData && SiteSettingData.otherSettings ? SiteSettingData.otherSettings.secondPostReaction : "",
                        dateStyle: SiteSettingData && SiteSettingData.otherSettings ? SiteSettingData.otherSettings.dateStyle : "",
                      }}
                      validationSchema={Yup.object().shape({})}
                      onSubmit={async (values, { setSubmitting, resetForm }) => {
                        values.settingId = SiteSettingData.id;
                        const { data } = await postData('/setting/site/update', values);
                        if (data) {
                          success("Successfully updated");
                          fetchData();
                        }
                      }}
                      render={({ values, errors, touched, isSubmitting }) => {
                        return <Form className="col-7 col-md-9 pr-0 pl-0">
                          <div className="card-content">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="form-group">
                                    <div className="controls">
                                      <label>
                                        Censored Words{" "}
                                        <small>
                                          (Words to be censored, separated by a comma)
                                      </small>
                                      </label>
                                      <Field
                                        type="text"
                                        name="censoredWords"
                                        id="censoredWords"
                                        className="form-control"
                                        placeholder="Enter Censored Words"
                                        required=""
                                        aria-invalid="false"
                                      />
                                      <div className="help-block"></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <h6>Default Language</h6>
                                  <div className="form-group">
                                    <Field
                                      component="select"
                                      id="defaultLanguage"
                                      name="defaultLanguage"
                                      className="select2 form-control select2-hidden-accessible"
                                      data-select2-id="1"
                                      tabindex="-1"
                                      aria-hidden="true"
                                    >
                                      {langugae && langugae.map(ele => {
                                        return <option value={ele.id} data-select2-id="3">
                                          {ele.languageNameEnglish}
                                        </option>
                                      })}
                                    </Field>
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <ul className="list-unstyled mb-0">
                                    <h5>Connectivity System</h5>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <Field
                                            type="radio"
                                            id="connectivitySystem1"
                                            name="connectivitySystem"
                                            value="Friend_System"
                                          />
                                    Friend System
                                  </label>
                                      </fieldset>
                                    </li>
                                    <li className="d-inline-block mr-2">
                                      <fieldset>
                                        <label>
                                          <Field
                                            type="radio"
                                            id="connectivitySystem1"
                                            name="connectivitySystem"
                                            value="Follow_System"
                                          />
                                    Follow System
                                  </label>
                                      </fieldset>
                                    </li>
                                  </ul>
                                  <br />
                                </div>
                                <div className="col-sm-12">
                                  <p>
                                    <span style={{ color: "red" }}>Note </span>: If
                              you change the system to another one, all existing
                              followings, followers, friends will be deleted
                            </p>
                                  <div className="form-group">
                                    <div className="controls">
                                      <label>Connectivity System Limit</label>
                                      <Field
                                        type="text"
                                        id="connectivitySystemLimit"
                                        name="connectivitySystemLimit"
                                        className="form-control"
                                        placeholder="Enter Connectivity"
                                        required=""
                                        aria-invalid="false"
                                      />
                                      <div className="help-block"></div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12">
                                  <h6>
                                    Update User Profile Sidebar Data (counts,
                                    followers, following..)
                                  </h6>
                                  <div className="form-group">
                                    <Field
                                      component="select"
                                      id="updateUserProfileSidebarData"
                                      name="updateUserProfileSidebarData"
                                      className="select2 form-control select2-hidden-accessible"
                                      data-select2-id="1"
                                      tabindex="-1"
                                      aria-hidden="true"
                                    >
                                      <option value="Every 2min" data-select2-id="3">
                                        Every 2min
                                       </option>
                                      <option value="30s">Every 30sec</option>
                                      <option value="3m">Every 30min</option>
                                      <option value="1h">Every 1hour</option>
                                      <option value="5h">Every 5hour</option>
                                    </Field>
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <h6>Cache home page sidebar</h6>
                                  <div className="form-group">
                                    <Field
                                      component="select"
                                      id="cacheHomepageSidebar"
                                      name="cacheHomepageSidebar"
                                      className="select2 form-control select2-hidden-accessible"
                                      data-select2-id="1"
                                      tabindex="-1"
                                      aria-hidden="true"
                                    >
                                      <option value="2m" data-select2-id="3">
                                        Update home page sidebar data every 2 minutes
                                        (faster load)
                                  </option>
                                      <option value="noCache">
                                        Never cache, always fetch new data
                                  </option>
                                    </Field>
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <h6>Second Post Reaction</h6>
                                  <div className="form-group">
                                    <Field
                                      component="select"
                                      id="cacheHomepageSidebar"
                                      name="cacheHomepageSidebar"
                                      className="select2 form-control select2-hidden-accessible"
                                      data-select2-id="1"
                                      tabindex="-1"
                                      aria-hidden="true"
                                    >
                                      <option value="PostReaction" data-select2-id="3">
                                        Post Reaction
                                      </option>
                                      <option value="Wonder">Wonder</option>
                                      <option value="Dislike">Dislike</option>
                                      <option value="ReactionSystem">
                                        Reaction System
                                      </option>
                                      <option value="justlike">
                                        Disable Button (just like)
                                      </option>
                                    </Field>
                                  </div>
                                </div>
                                <div className="col-sm-12">
                                  <h6>Date Style</h6>
                                  <div className="form-group">
                                    <Field
                                      component="select"
                                      id="dateStyle"
                                      name="dateStyle"
                                      className="select2 form-control select2-hidden-accessible"
                                      data-select2-id="1"
                                      tabindex="-1"
                                      aria-hidden="true"
                                    >
                                      <option value="mm-dd-yy" data-select2-id="3">
                                        mm-dd-yy
                                      </option>
                                      <option value="dd-mm-yy">dd-mm-yy</option>
                                      <option value="yy-mm-dd">yy-mm-dd</option>
                                      <option value="yy-dd-mm">yy-dd-mm</option>
                                      <option value="mmm-dd-yy">mmm-dd-yy</option>
                                    </Field>
                                  </div>
                                </div>
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





























