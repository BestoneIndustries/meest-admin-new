import React, { useEffect, useContext, useState } from "react";
import { postData } from "../../apicall/apiCall";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NotificationSystem from "react-notification-system";
import * as moment from "moment";

export default function Groups({ userId }) {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [reponse, setResponse] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const resData = await postData("/chat/get/groups", {
      userId: history.location.state.id,
    });
    console.log(" _++_+_", resData.data);
    if (resData) {
      setResponse(resData.data);
    }
  }

  return (
    <>
      <div
        className="tab-pane"
        id="groups"
        aria-labelledby="groups-tab"
        role="tabpanel"
      >
        {reponse && reponse.length > 0 && (
          <div className="row groups-area">
            <div className="col-lg-6 col-12">
              <div className="group-header">
                <h3>Joined Group</h3>
              </div>
              <div className="row">
                {!reponse ||
                  reponse.map((ele, index) => {
                    return (
                      ele.groupData.chatHead.userId !==
                        history.location.state.id && (
                        <div className="col-md-6">
                          <div className="group-details">
                            <img
                              className="group-profile-pic"
                              src={
                                ele.groupIcon
                                  ? ele.groupIcon
                                  : "app-assets/images/profile/user-uploads/user-04.jpg"
                              }
                              alt=""
                            />
                            <div className="group-info">
                              <h4>{ele.groupData.groupName}</h4>
                              <p>{ele.groupMembers.length} members</p>
                              {/* <span>50 post a week</span> */}
                              <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                {ele.groupMembers &&
                                  ele.groupMembers.map((ele) => {
                                    return (
                                      <li
                                        data-toggle="tooltip"
                                        data-popup="tooltip-custom"
                                        data-placement="bottom"
                                        data-original-title={ele.firstName}
                                        className="avatar pull-up"
                                      >
                                        <img
                                          className="media-object rounded-circle"
                                          src={ele.displayPicture}
                                          alt="Avatar"
                                          width="30"
                                          height="30"
                                        />
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  })}
                {/* <div className="col-md-6">
                <div className="group-details">
                  <img
                    className="group-profile-pic"
                    src="app-assets/images/profile/user-uploads/user-04.jpg"
                    alt=""
                  />
                  <div className="group-info">
                    <h4>Test Group</h4>
                    <p>456 members</p>
                    <span>50 post a week</span>
                    <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="Trina Lynes"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-1.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="Lilian Nenez"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-2.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="Alberto Glotzbach"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-3.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="George Nordic"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-5.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="Vinnie Mostowy"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-4.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li className="many-more d-inline-block pl-50">
                        <span>+140 more</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="group-details">
                  <img
                    className="group-profile-pic"
                    src="app-assets/images/profile/user-uploads/user-04.jpg"
                    alt=""
                  />
                  <div className="group-info">
                    <h4>Test Group</h4>
                    <p>456 members</p>
                    <span>50 post a week</span>
                    <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="Trina Lynes"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-1.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="Lilian Nenez"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-2.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="Alberto Glotzbach"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-3.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="George Nordic"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-5.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="Vinnie Mostowy"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-4.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li className="many-more d-inline-block pl-50">
                        <span>+140 more</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="group-details">
                  <img
                    className="group-profile-pic"
                    src="app-assets/images/profile/user-uploads/user-04.jpg"
                    alt=""
                  />
                  <div className="group-info">
                    <h4>Test Group</h4>
                    <p>456 members</p>
                    <span>50 post a week</span>
                    <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="Trina Lynes"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-1.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="Lilian Nenez"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-2.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="Alberto Glotzbach"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-3.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="George Nordic"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-5.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li
                        data-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-placement="bottom"
                        data-original-title="Vinnie Mostowy"
                        className="avatar pull-up"
                      >
                        <img
                          className="media-object rounded-circle"
                          src="app-assets/images/portrait/small/avatar-s-4.jpg"
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </li>
                      <li className="many-more d-inline-block pl-50">
                        <span>+140 more</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
             */}
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="group-header">
                <h3>Created Group</h3>
              </div>
              {!reponse ||
                reponse.map((ele, index) => {
                  return (
                    ele.groupData.chatHead.userId ===
                      history.location.state.id && (
                      <div className="col-md-6">
                        <div className="group-details">
                          <img
                            className="group-profile-pic"
                            src={
                              ele.groupIcon
                                ? ele.groupIcon
                                : "app-assets/images/profile/user-uploads/user-04.jpg"
                            }
                            alt=""
                          />
                          <div className="group-info">
                            <h4>{ele.groupData.groupName}</h4>
                            <p>{ele.groupMembers.length} members</p>
                            {/* <span>50 post a week</span> */}
                            <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                              {ele.groupMembers &&
                                ele.groupMembers.map((ele) => {
                                  return (
                                    <li
                                      data-toggle="tooltip"
                                      data-popup="tooltip-custom"
                                      data-placement="bottom"
                                      data-original-title={ele.firstName}
                                      className="avatar pull-up"
                                    >
                                      <img
                                        className="media-object rounded-circle"
                                        src={ele.displayPicture}
                                        alt="Avatar"
                                        width="30"
                                        height="30"
                                      />
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
            </div>
          </div>
        )}
        {reponse && reponse.length == 0 && "No groups"}
      </div>
    </>
  );
}
