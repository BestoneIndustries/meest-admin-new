import React, { useEffect, useContext, useState } from "react";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";
import { postData, postDataAll } from "../../apicall/apiCall";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NotificationSystem from "react-notification-system";
import * as moment from "moment";

export default function CallLog({ id }) {
  console.log("CallLog -> id", id);

  var notificationSystem = React.createRef();

  const { dispatch } = useContext(UserContext);

  const history = useHistory();
  const [response, setResponse] = useState("");
  const [responseCount, setResponseCount] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const resData = await postData("/chat/get/callLogs", {
      userId: history.location.state.id,
    });
    if (resData) {
      setResponse(resData.data.callLogRes.rows);
      setResponseCount(resData.data.counts);
    }
  }

  return (
    <>
      {response && (
        <div
          className="tab-pane"
          id="call-log"
          aria-labelledby="call-log-tab"
          role="tabpanel"
        >
          <div className="friend-list">
            <h3>Call Log</h3>
            <div className="row mb-2">
              <div className="col-lg-4">
                <div className="card call-log-section">
                  <div className="card-header align-items-start pb-0">
                    <div className="col-4 mr-0">
                      <div className="avatar bg-rgba-primary p-50 m-0">
                        <div className="avatar-content">
                          <i className="feather icon-phone-incoming text-primary font-medium-5"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-8 ml-0">
                      <h2 className="text-bold-700 mb-25">
                        {responseCount ? responseCount.inComming : 0}
                      </h2>
                      <p className="mb-1">Total Incoming Call</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card call-log-section">
                  <div className="card-header align-items-start pb-0">
                    <div className="col-4 mr-0">
                      <div className="avatar bg-rgba-primary p-50 m-0">
                        <div className="avatar-content">
                          <i className="feather icon-phone-outgoing text-primary font-medium-5"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-8 ml-0">
                      <h2 className="text-bold-700 mb-25">
                        {responseCount ? responseCount.outGoing : 0}
                      </h2>
                      <p className="mb-1">Total Outgoing Call</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card call-log-section">
                  <div className="card-header align-items-start pb-0">
                    <div className="col-4 mr-0">
                      <div className="avatar bg-rgba-warning p-50 m-0">
                        <div className="avatar-content">
                          <i className="feather icon-phone-missed text-warning font-medium-5"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-8 ml-0">
                      <h2 className="text-bold-700 mb-25">
                        {responseCount ? responseCount.missed : 0}
                      </h2>
                      <p className="mb-1">Total Missed Call</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {response.map((ele, index) => {
                return (
                  <div className="col-md-6">
                    <div className="friend-list-area">
                      <div className="friend-details">
                        <div>
                          <Link to="/Profile-Details">
                            <img
                              className="friend-call-profile"
                              src={ele.recipient.displayPicture}
                            />
                          </Link>
                        </div>
                        <div className="friend-name">
                          <Link to="/Profile-Details">
                            <h2>
                              {ele.recipient.firstName} {ele.recipient.lastName}
                            </h2>
                          </Link>
                          <a href="#">
                            {/* {moment.duration(ele.endTime.diff(ele.createdAt))} */}
                            <p>
                              {ele.recipient.mobile}{" "}
                              {moment(ele.createdAt).format("HH:ss")}{" "}
                            </p>
                            {/* Outgoing: */}
                          </a>
                        </div>
                      </div>
                      <div className="call-btn">
                        <button type="button">
                          <i className="feather icon-phone-outgoing font-medium-5"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <div className="col-md-6">
              <div className="friend-list-area">
                <div className="friend-details">
                  <div>
                    <Link to="/Profile-Details">
                      <img
                        className="friend-call-profile"
                        src="app-assets/images/profile/user-uploads/user-04.jpg"
                      />
                    </Link>
                  </div>
                  <div className="friend-name">
                    <Link to="/Profile-Details">
                      <h2>Praveen Kumar</h2>
                    </Link>
                    <a href="#">
                      <p>98756456545 11:48 Outgoing: 19 mins</p>
                    </a>
                  </div>
                </div>
                <div className="call-btn">
                  <button type="button">
                    <i className="feather icon-phone-outgoing font-medium-5"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="friend-list-area">
                <div className="friend-details">
                  <div>
                    <Link to="/Profile-Details">
                      <img
                        className="friend-call-profile"
                        src="app-assets/images/profile/user-uploads/user-04.jpg"
                      />
                    </Link>
                  </div>
                  <div className="friend-name">
                    <Link to="/Profile-Details">
                      <h2>Praveen Kumar</h2>
                    </Link>
                    <a href="#">
                      <p>98756456545 11:48 Incoming: 19 mins</p>
                    </a>
                  </div>
                </div>
                <div className="call-btn">
                  <button type="button">
                    <i className="feather icon-phone-incoming font-medium-5"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="friend-list-area">
                <div className="friend-details">
                  <div>
                    <Link to="/Profile-Details">
                      <img
                        className="friend-call-profile"
                        src="app-assets/images/profile/user-uploads/user-04.jpg"
                      />
                    </Link>
                  </div>
                  <div className="friend-name">
                    <Link to="/Profile-Details">
                      <h2>Praveen Kumar</h2>
                    </Link>
                    <a href="#">
                      <p>98756456545 11:48 Outgoing: 19 mins</p>
                    </a>
                  </div>
                </div>
                <div className="call-btn">
                  <button type="button">
                    <i className="feather icon-phone-outgoing font-medium-5"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="friend-list-area">
                <div className="friend-details">
                  <div>
                    <Link to="/Profile-Details">
                      <img
                        className="friend-call-profile"
                        src="app-assets/images/profile/user-uploads/user-04.jpg"
                      />
                    </Link>
                  </div>
                  <div className="friend-name">
                    <Link to="/Profile-Details">
                      <h2>Praveen Kumar</h2>
                    </Link>
                    <a href="#">
                      <p>98756456545 12/04/2020 Incoming: 19 mins</p>
                    </a>
                  </div>
                </div>
                <div className="call-btn">
                  <button type="button">
                    <i className="feather icon-phone-incoming font-medium-5"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="friend-list-area">
                <div className="friend-details">
                  <div>
                    <Link to="/Profile-Details">
                      <img
                        className="friend-call-profile"
                        src="app-assets/images/profile/user-uploads/user-04.jpg"
                      />
                    </Link>
                  </div>
                  <div className="friend-name">
                    <Link to="/Profile-Details">
                      <h2>Praveen Kumar</h2>
                    </Link>
                    <a href="#">
                      <p>98756456545 11/08/2020 Missedcall</p>
                    </a>
                  </div>
                </div>
                <div className="call-btn">
                  <button type="button">
                    <i className="feather icon-phone-missed font-medium-5"></i>
                  </button>
                </div>
              </div>
            </div>
         */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
