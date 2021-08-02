import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function PushNotificationSettings() {
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
                      <Link to="/">API Settings </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Push Notifications Settings
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="basic-datatable">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">
                          Push Notifications Settings
                        </h4>
                      </div>
                    </div>
                    <p className="px-2 mt-2">
                      This system allows your script to send push notifications
                      to any application who uses our API.
                      <br />
                      To get started, <a href="">Register Here.</a>
                    </p>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div className="notifiaction-box">
                          <form>
                            <h5>Push Notifications System</h5>
                            <div className="form-group">
                              <input
                                type="radio"
                                name="push"
                                id="push-enabled"
                                value="1"
                                checked
                              />{" "}
                              <label for="push-enabled">Enabled</label>{" "}
                              <input
                                type="radio"
                                name="push"
                                id="push-disabled"
                                value="0"
                              />{" "}
                              <label for="push-disabled" className="m-l-20">
                                Disabled
                              </label>{" "}
                            </div>
                            <br />
                            <h5>Android Push Messages (Push User Messages)</h5>
                            <div className="form-group">
                              <input
                                type="radio"
                                name="android_push_messages"
                                id="android_push_messages-enabled"
                                value="1"
                                checked
                              />{" "}
                              <label for="android_push_messages-enabled">
                                Enabled
                              </label>{" "}
                              <input
                                type="radio"
                                name="android_push_messages"
                                id="android_push_messages-disabled"
                                value="0"
                              />{" "}
                              <label
                                for="android_push_messages-disabled"
                                className="m-l-20"
                              >
                                Disabled
                              </label>{" "}
                            </div>
                            <br />
                            <h5>IOS Push Messages (Push User Messages)</h5>
                            <div className="form-group">
                              <input
                                type="radio"
                                name="ios_push_messages"
                                id="ios_push_messages-enabled"
                                value="1"
                                checked
                              />{" "}
                              <label for="ios_push_messages-enabled">
                                Enabled
                              </label>{" "}
                              <input
                                type="radio"
                                name="ios_push_messages"
                                id="ios_push_messages-disabled"
                                value="0"
                              />{" "}
                              <label
                                for="ios_push_messages-disabled"
                                className="m-l-20"
                              >
                                Disabled
                              </label>{" "}
                            </div>
                            <br />
                            <h5>
                              Android Push Native Site Notifications (Likes,
                              Followed, Wonder, Comment etc)
                            </h5>
                            <div className="form-group">
                              <input
                                type="radio"
                                name="android_push_native"
                                id="android_push_native-enabled"
                                value="1"
                                checked
                              />{" "}
                              <label for="android_push_native-enabled">
                                Enabled
                              </label>{" "}
                              <input
                                type="radio"
                                name="android_push_native"
                                id="android_push_native-disabled"
                                value="0"
                              />{" "}
                              <label
                                for="android_push_native-disabled"
                                className="m-l-20"
                              >
                                Disabled
                              </label>{" "}
                            </div>
                            <br />
                            <h5>
                              IOS Push Native Site Notifications (Likes,
                              Followed, Wonder, Comment etc)
                            </h5>
                            <div className="form-group">
                              <input
                                type="radio"
                                name="ios_push_native"
                                id="ios_push_native-enabled"
                                value="1"
                                checked
                              />{" "}
                              <label for="ios_push_native-enabled">
                                Enabled
                              </label>{" "}
                              <input
                                type="radio"
                                name="ios_push_native"
                                id="ios_push_native-disabled"
                                value="0"
                              />{" "}
                              <label
                                for="ios_push_native-disabled"
                                className="m-l-20"
                              >
                                Disabled
                              </label>{" "}
                            </div>
                            <br />
                            <h5>
                              Web Push Notifications (Chrome, Firefox etc..) SSL
                              required
                            </h5>
                            <div className="form-group">
                              <input
                                type="radio"
                                name="web_push"
                                id="web_push-enabled"
                                value="1"
                                checked
                              />{" "}
                              <label for="web_push-enabled">Enabled</label>{" "}
                              <input
                                type="radio"
                                name="web_push"
                                id="web_push-disabled"
                                value="0"
                              />{" "}
                              <label for="web_push-disabled" className="m-l-20">
                                Disabled
                              </label>{" "}
                            </div>
                            <br />
                            <span className="help-block">
                              Need Help?{" "}
                              <a href="" target="_blank">
                                Read The Documentation
                              </a>
                            </span>
                            <br />
                            <br />
                            <button className="btn btn-primary shadow waves-effect waves-light">
                              SAVE
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">
                              Android Messenger & Chat Push Notifications
                              Settings
                            </h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <form>
                                <div id="" className="form-group">
                                  <input
                                    type="text"
                                    placeholder="OneSignal APP ID"
                                    className="form-control input-style"
                                  />
                                </div>
                                <div id="" className="form-group">
                                  <input
                                    type="text"
                                    placeholder="REST API Key"
                                    className="form-control input-style"
                                  />
                                </div>
                                <div className="api-buttons mt-2">
                                  <button className="btn btn-primary shadow waves-effect waves-light">
                                    SAVE
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">
                              IOS Messenger & Chat Push Notifications Settings
                            </h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <form>
                                <div id="" className="form-group">
                                  <input
                                    type="text"
                                    placeholder="OneSignal APP ID"
                                    className="form-control input-style"
                                  />
                                </div>
                                <div id="" className="form-group">
                                  <input
                                    type="text"
                                    placeholder="REST API Key"
                                    className="form-control input-style"
                                  />
                                </div>
                                <div className="api-buttons mt-2">
                                  <button className="btn btn-primary shadow waves-effect waves-light">
                                    SAVE
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">
                              Android Global Notifications Settings (Likes,
                              Dislikes, Comments, Follow etc.)
                            </h4>
                          </div>
                        </div>

                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <form>
                                <div id="" className="form-group">
                                  <input
                                    type="text"
                                    placeholder="OneSignal APP ID"
                                    className="form-control input-style"
                                  />
                                </div>
                                <div id="" className="form-group">
                                  <input
                                    type="text"
                                    placeholder="REST API Key"
                                    className="form-control input-style"
                                  />
                                </div>
                                <div className="api-buttons mt-2">
                                  <button className="btn btn-primary shadow waves-effect waves-light">
                                    SAVE
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">
                          Web Global Notifications Settings (Likes, Dislikes,
                          Comments, Follow etc.)
                        </h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div className="api-key-wrapper">
                          <form>
                            <div id="" className="form-group">
                              <input
                                type="text"
                                placeholder="OneSignal APP ID"
                                className="form-control input-style"
                              />
                            </div>
                            <div id="" className="form-group">
                              <input
                                type="text"
                                placeholder="REST API Key"
                                className="form-control input-style"
                              />
                            </div>
                            <div className="api-buttons mt-2">
                              <button className="btn btn-primary shadow waves-effect waves-light">
                                SAVE
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">
                          IOS Global Notifications Settings (Likes, Dislikes,
                          Comments, Follow etc.)
                        </h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div className="api-key-wrapper">
                          <form>
                            <div id="" className="form-group">
                              <input
                                type="text"
                                placeholder="OneSignal APP ID"
                                className="form-control input-style"
                              />
                            </div>
                            <div id="" className="form-group">
                              <input
                                type="text"
                                placeholder="REST API Key"
                                className="form-control input-style"
                              />
                            </div>
                            <div className="api-buttons mt-2">
                              <button className="btn btn-primary shadow waves-effect waves-light">
                                SAVE
                              </button>
                            </div>
                          </form>
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
