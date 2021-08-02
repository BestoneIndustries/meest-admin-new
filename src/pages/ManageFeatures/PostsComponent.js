import React from "react";
import { Link } from "react-router-dom";

const PostsComponent = (props) => {
  const { link, icon, count, title } = props;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        {/* <Link to={link}> */}
          <div className="card-header align-items-start pb-0">
            <div className="col-4 mr-0">
              <div className="avatar bg-rgba-warning p-50 m-0">
                <div className="avatar-content">
                  <i className={icon}></i>
                </div>
              </div>{" "}
            </div>
            <div className="col-8 ml-0">
              <h2 className="text-bold-700 mb-25">{count}</h2>
              <p className="mb-1">{title}</p>
            </div>{" "}
          </div>
          {/* <!--<div className="card-content">
                                    <div id="subscribe-gain-chart"></div>
                                </div>--> */}
        {/* </Link> */}
      </div>
    </div>
  );
};
export default PostsComponent;
