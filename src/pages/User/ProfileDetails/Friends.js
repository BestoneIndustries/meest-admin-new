import React, { useEffect, useContext, useState } from "react";
import { postData } from '../../apicall/apiCall';
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';
import * as moment from 'moment';

export default function   Friends({ userId }) {

  console.log("Timeline -> userId", userId);
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [reponse, setResponse] = useState();


  useEffect(() => {
    fetchData();
  }, []);


  async function fetchData() {
    const resData = await postData('/follows/followsData', { userId });
    console.log(" +++++++++++++++++++++++++", resData.data)
    if (resData) {
      setResponse(resData.data);
    }
  }


  return (
    <>
      <div
        className="tab-pane"
        id="friends"
        aria-labelledby="friends-tab"
        role="tabpanel"
      >
        <div className="friend-list">
          <h3>Friend List</h3>
          <div className="row">
            {reponse && reponse.follower.map((ele) => {
              return <div className="col-md-6">
                <div className="friend-list-area">
                  <div className="friend-details">
                    <div>
                      {/* <Link to="/Profile-Details"> */}
                        <img
                          className="friend-profile-img"
                          src={ele.displayPicture}
                        />
                      {/* </Link> */}
                    </div>
                    <div className="friend-name">
                      {/* <Link to="/Profile-Details"> */}
                        <h2>{ele.firstName} {ele.lastName}</h2>
                      {/* </Link> */}
                      <a href="#">
                        <p>{ele.isFollower}</p>
                      </a>
                    </div>
                  </div>
                  <div className="friend-btn">
                    <div className="actions action-btns text-right">
                      <div className="btn-group dropdown actions-dropodown">
                        <button
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Friends
                      </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          x-placement="top-end"
                          style={{
                            position: "absolute",
                            willChange: "transform",
                            top: "0px",
                            left: "0px",
                            transform: "translate3d(-9px, -16px, 0px)",
                          }}
                        >
                          <a
                            className="dropdown-item"
                            href="profile-details.html"
                          >
                            <i className="fa fa-eye"></i>View Friend
                        </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-ban"></i>Block
                        </a>
                          <a className="dropdown-item" href="#">
                            <i className="feather icon-save"></i>
                          Report
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })}
            {reponse && reponse.following.map((ele) => {
              return <div className="col-md-6">
                <div className="friend-list-area">
                  <div className="friend-details">
                    <div>
                      {/* <Link to={{ pathname: "/Profile-Details", id: ele.id }}> */}
                        <img
                          className="friend-profile-img"
                          src={ele.displayPicture}
                        />
                      {/* </Link> */}
                    </div>
                    <div className="friend-name">
                      {/* <Link to={{ pathname: "/Profile-Details", id: ele.id }}> */}
                        <h2>{ele.firstName} {ele.lastName}</h2>
                      {/* </Link> */}
                      {/* <a href="#"> */}
                        <p>{ele.isFollower}</p>
                      {/* </a> */}
                    </div>
                  </div>
                  <div className="friend-btn">
                    <div className="actions action-btns text-right">
                      <div className="btn-group dropdown actions-dropodown">
                        <button
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Friends
                      </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          x-placement="top-end"
                          style={{
                            position: "absolute",
                            willChange: "transform",
                            top: "0px",
                            left: "0px",
                            transform: "translate3d(-9px, -16px, 0px)",
                          }}
                        >
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => history.push({ pathname: "/Profile-Details", id: ele.id })}
                          >
                            <i className="fa fa-eye"></i>View Friend
                        </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-ban"></i>Block
                        </a>
                          <a className="dropdown-item" href="#">
                            <i className="feather icon-save"></i>
                          Report
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
}
