import React, { useEffect, useContext, useState } from "react";
import { postData } from '../../apicall/apiCall';
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';
import * as moment from 'moment';
import ReactPlayer from 'react-player'
export default function ShortVideos() {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [reponse, setResponse] = useState();
  // const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const resData = await postData('/post/get/user/admin/media', { userId: history.location.state.id });
    console.log('shortvideo', resData)
    if (resData) {
      setResponse(resData.data)
      // setData(resData.data);
    }
  }
  return (
    <>
      <div
        className="tab-pane"
        id="sort-videos"
        aria-labelledby="sort-videos-tab"
        role="tabpanel"
      >
        <div className="row">
          {/* <p>{data.rows}</p> */}
          {reponse && reponse.rows.map(ele => {
            return <div className="col-lg-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-start align-items-center mb-1">
                    <div className="avatar mr-1">
                      <img
                        src={ele.user.displayPicture}
                        alt="avtar img holder"
                        width="45"
                        height="45"
                      />
                    </div>
                    <div className="user-page-info">
                      <p className="mb-0">{ele.user.firstName} {ele.user.lastName}</p>
                      <span className="font-small-2">{ele.createdAt}</span>
                    </div>
                    <div className="ml-auto user-like text-danger">
                      <i className="fa fa-heart"></i>
                    </div>
                  </div>
                  <p>
                    {ele.caption}
                  </p>
                  {ele.posts.map((element, ind) =>{
                  return <ReactPlayer   width="100%"   height="260px"  url={element.post}    controls={true}   />
                  })}
                    {/* //  <img
                    //    className="img-fluid card-img-top rounded-sm mb-2"
                    //    src={element.post}
                    //    alt="avtar img holder"
                    //  /> */}
                  < div className="d-flex justify-content-start align-items-center mb-1">
                    <div className="d-flex align-items-center">
                      <i className="feather icon-heart font-medium-2 mr-50"></i>
                      <span>{ele.likeCounts}</span>
                    </div>
                    <div className="ml-2">
                      <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                        {ele.postLikes && ele.postLikes.slice(0, 5).map((postLike) => {
                          return <li
                            data-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-placement="bottom"
                            data-original-title={postLike.user.username}
                            className="avatar pull-up"
                          >
                            <img
                              className="media-object rounded-circle"
                              src={postLike.user.displayPicture}
                              alt="Avatar"
                              width="30"
                              height="30"
                            />
                          </li>
                        })}
                        <li className="d-inline-block pl-50">
                          {ele.postLikes.length - 5 > 0 && <span>+{ele.postLikes.length - 5} more</span>}
                        </li>
                      </ul>
                    </div>
                    <p className="ml-auto d-flex align-items-center">
                      <i className="feather icon-message-square font-medium-2 mr-50"></i>
                      {ele.commentCounts}
                    </p>
                  </div>
                  {ele.postComments && ele.postComments.slice(0, 2).map(postcommet => {
                    return <div className="d-flex justify-content-start align-items-center mb-1">
                      <div className="avatar mr-50">
                        <img
                          src={postcommet.user.displayPicture}
                          alt="Avatar"
                          width="30"
                          height="30"
                        />
                      </div>
                      <div className="user-page-info">
                        <h6 className="mb-0">{postcommet.user.firstName} {postcommet.user.lastName}</h6>
                        <span className="font-small-2">
                          {postcommet.comment}
                        </span>
                      </div>
                      <div className="ml-auto cursor-pointer">
                        <i className="feather icon-heart mr-50"></i>
                        <i className="feather icon-message-square"></i>
                      </div>
                    </div>
                  })}
                </div>
              </div>
            </div>
          })}
          {reponse && reponse.length == 0 && "No Videos"}
        </div>
      </div>
    </>
  );
}